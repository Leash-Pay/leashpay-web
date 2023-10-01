<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\DTOs\ApiResponse;
use Illuminate\Http\JsonResponse;

class StatusController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request): JsonResponse
    {
        $status = ApiResponse::success('Running', 200, [
            'service' => 'WaitList API',
        ]);

        return response()->json($status->toArray(), $status->error_code);
    }
}
