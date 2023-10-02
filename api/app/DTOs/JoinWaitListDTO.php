<?php

namespace App\DTOs;

use Illuminate\Http\Request;

class JoinWaitListDTO
{
    public string $email;
    public string $name;

    public function __construct(array $data) {
        $this->email = $data['email'];
        $this->name = $data['name'];
    }

    public function toArray(): array
    {
        return [
            'email' => $this->email,
            'name' => $this->name,
        ];
    }

    public function toJson(): string
    {
        return json_encode($this->toArray());
    }

    public static function fromRequest(Request $request): JoinWaitListDTO
    {
        return new self([
            'email' => $request->input('email'),
            'name' => $request->input('name'),
        ]);
    }
}
