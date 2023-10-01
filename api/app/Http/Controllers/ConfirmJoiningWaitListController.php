<?php

namespace App\Http\Controllers;

use App\DTOs\ApiResponse;
use App\Services\WaitListService;
use Illuminate\Http\JsonResponse;

class ConfirmJoiningWaitListController extends Controller
{
    public function __construct(private WaitListService $waitListService)
    {
        //
    }

    /**
     * Handle the incoming request.
     */
    public function __invoke(string $token): JsonResponse
    {
        if (!preg_match('#^[A-Za-z0-9+/]{20}$#', $token)) {
            $fail = ApiResponse::error('Invalid token', 400);

            return response()->json($fail->toArray(), $fail->error_code);
        }

        $response = $this->waitListService->confirm($token);

        return response()->json($response->toArray(), $response->error_code);
    }
}
