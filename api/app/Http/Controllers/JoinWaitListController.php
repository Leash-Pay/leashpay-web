<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use App\Http\Requests\JoinFormRequest;
use App\Services\WaitListService;
use App\DTOs\JoinWaitListDTO;

class JoinWaitListController extends Controller
{
    public function __construct(private WaitListService $waitListService)
    {
        //
    }

    /**
     * Handle request to join the wait list.
     * @param JoinFormRequest $request
     * @return JsonResponse
     */
    public function __invoke(JoinFormRequest $request): JsonResponse
    {
        $response = $this->waitListService->join(JoinWaitListDTO::fromRequest($request));

        return response()->json($response->toArray(), $response->error_code);
    }
}
