<?php

namespace App\DTOs;

use JetBrains\PhpStorm\ArrayShape;
use JetBrains\PhpStorm\Pure;

final class ApiResponse
{
    public function __construct(public string $status, public int $error_code, public string $message, public array $data = [])
    {
    }

    #[Pure]
    public static function success(string $message, int $error_code = 200, array $data = []) : self
    {
        return new ApiResponse('success', $error_code, $message, $data);
    }

    #[Pure]
    public static function fail(string $message, int $error_code = 400, array $data = []) : self
    {
        return new ApiResponse('declined', $error_code, $message, $data);
    }

    #[Pure]
    public static function error(string $message, int $error_code = 500, array $data = []) : self
    {
        return new ApiResponse('error', $error_code, $message, $data);
    }

    #[ArrayShape(['status' => "string", 'error_code' => "int", 'message' => "string", 'data' => "array"])]
    public function toArray(): array
    {
        $response = [
            'status' => $this->status,
            'error_code' => $this->error_code,
            'message' => $this->message,
        ];

        if (count($this->data) > 0) {
            $response['data'] = $this->data;
        }

        return $response;
    }
}
