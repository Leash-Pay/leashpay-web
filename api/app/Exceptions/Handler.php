<?php

namespace App\Exceptions;

use App\DTOs\ApiResponse;
use Exception;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Component\HttpKernel\Exception\MethodNotAllowedHttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\HttpKernel\Exception\TooManyRequestsHttpException;
use Symfony\Component\Routing\Exception\MethodNotAllowedException;
use Symfony\Component\Routing\Exception\RouteNotFoundException;
use GuzzleHttp\Exception\ConnectException;
use Illuminate\Database\QueryException;
use Symfony\Component\Mailer\Exception\TransportException;
use BadMethodCallException;
use TypeError;
use Error;
use PDOException;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * The list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     */
    public function register(): void
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param Request $request
     * @param Throwable $e
     *
     * @return Response|JsonResponse|\Symfony\Component\HttpFoundation\Response
     * @throws Throwable
     */
    public function render($request, Throwable $e): Response|JsonResponse|\Symfony\Component\HttpFoundation\Response
    {
        $response = $this->handleException($request, $e);

        if (config('app.debug') && app()->environment(['testing', 'local'])) {
            Log::error('RENDER_EXCEPTION', [
                'message' => $e->getMessage(),
                'response' => $response->getContent(),
                'headers' => $request->header(),
                'path' => $request->path(),
            ]);
        }

        return $response;
    }

    /**
     * Convert an authentication exception into a response.
     *
     * @param Request $request
     */
    protected function unauthenticated($request, AuthenticationException $exception): \Symfony\Component\HttpFoundation\Response
    {
        $error = [];
        if (config('app.debug')) {
            $error = getServiceExceptionMessage($exception);
            Log::debug('UNAUTHENTICATED_REQUEST', ['request' => $request->all(), 'auth' => $request->header('authorization'), 'all' => $request->header()]);
        }

        if ($this->shouldReturnJsonResponse($request)) {
            $service = ApiResponse::fail('Unauthenticated.', 401, $error);

            return response()->json($service->toArray(), $service->error_code);
        }
        $login = null;

        try {
            $login = route('login');
        } catch (\Exception|\Throwable $e) {
            // do nothing
        }

        if (!$login) {
            $service = ApiResponse::fail('Unauthenticated.', 401, $error);

            return response()->json($service->toArray(), $service->error_code);
        }

        return redirect()->guest($exception->redirectTo() ?? $login);
    }

    /**
     * @throws Throwable
     */
    private function handleException(Request $request, Throwable|Exception $exception): JsonResponse|\Symfony\Component\HttpFoundation\Response
    {
        $error = [];

        if (config('app.debug')) {
            $error = getServiceExceptionMessage($exception);
        }

        $message = '' == trim($exception->getMessage()) ? 'Cannot process request at this time. Try again.' : $exception->getMessage();
        $service = ApiResponse::error($message, data: $error);

        if ('Unauthenticated.' === $exception->getMessage()) {
            $service->message = 'Unauthenticated.';
            $service->error_code = 401;
            $service->status = 'Declined';

            return response()->json($service->toArray(), $service->error_code);
        }

        if ($exception instanceof MethodNotAllowedException || $exception instanceof MethodNotAllowedHttpException) {
            $service->message = '' == trim($exception->getMessage()) ? 'The specified method for this request is not allowed.' : $exception->getMessage();
            $service->error_code = 405;

            return response()->json($service->toArray(), $service->error_code);
        }

        if ($exception instanceof NotFoundHttpException || $exception instanceof ModelNotFoundException || $exception instanceof RouteNotFoundException) {
            $service->error_code = 404;
            $service->message = '' == trim($exception->getMessage()) ? 'The requested resource was not found.' : $exception->getMessage();

            return response()->json($service->toArray(), $service->error_code);
        }

        if ($exception instanceof TooManyRequestsHttpException) {
            $service->error_code = 429;
            $service->message = '' == trim($exception->getMessage()) ? 'Too many requests.' : $exception->getMessage();

            return response()->json($service->toArray(), $service->error_code);
        }

        if ($exception instanceof ConnectException || $exception instanceof PDOException || $exception instanceof QueryException || $exception instanceof TransportException || $exception instanceof TypeError || $exception instanceof Error) {
            $service->message = 'Something went wrong on our end. We are working to fix this.';
            $service->error_code = 500;

            $service = $this->addDebugLogsIfDebugIsAllowed($service, $exception);

            return response()->json($service->toArray(), $service->error_code);
        }

        if ($exception instanceof HttpException || $exception instanceof BadMethodCallException) {
            $service->message = '' == trim($exception->getMessage()) ? '' : $exception->getMessage();

            if ($service->error_code == 500) {
                $service->message = 'Something went wrong on our end. We are working to fix this.';

                $service = $this->addDebugLogsIfDebugIsAllowed($service, $exception);
            }

            return response()->json($service->toArray(), $service->error_code);
        }

        if ($exception instanceof ValidationException) {
            if (!($this->shouldReturnJsonResponse($request))) {
                return $this->convertValidationExceptionToResponse($exception, $request);
            }

            $service = ApiResponse::fail('The given data was invalid.', 422, ['errors' => $exception->validator->errors()]);
        }

        if ($exception instanceof AuthenticationException) {
            return $this->unauthenticated($request, $exception);
        }

        if (config('app.debug')) {
            if ($this->shouldReturnJsonResponse($request) && app()->environment(['testing', 'local'])) {
                $service->data = array_merge($service->data ?? [], [
                    'file' => $exception->getFile(),
                    'line' => $exception->getLine(),
                ]);

                return response()->json($service->toArray(), $service->error_code);
            }

            return parent::render($request, $exception);
        }

        return response()->json($service->toArray(), $service->error_code);
    }

    private function shouldReturnJsonResponse($request): bool
    {
        return $request->wantsJson() || $request->isJson() || $request->ajax();
    }

    private function addDebugLogsIfDebugIsAllowed(ApiResponse $service, Exception|Throwable $exception): ApiResponse
    {
        if (config('app.debug') && app()->environment(['testing', 'local'])) {
            $error = getServiceExceptionMessage($exception);

            $service->data = array_merge($service->data ?? [], $error);
        }

        return $service;
    }
}
