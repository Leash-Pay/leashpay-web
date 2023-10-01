<?php

namespace App\Services;

use App\DTOs\JoinWaitListDTO;
use App\Jobs\SendConfirmationEmail;
use App\Models\WaitingUser;
use App\DTOs\ApiResponse;
use App\Jobs\SendWelcomeEmail;

class WaitListService
{
    public function join(JoinWaitListDTO $data): ApiResponse
    {
        $existingUser  = WaitingUser::where('email', $data->email)->first();

        if ($existingUser) {
            return $this->handleExistingUser($existingUser);
        }

        $user = new WaitingUser([
            'email' => $data->email,
            'name' => $data->name,
            'confirmed' => false,
            'confirmation_token' => $this->generateToken($data->email),
        ]);

        $user->save();

        dispatch(new SendConfirmationEmail($user))->afterResponse();

        return ApiResponse::success('Thank you for joining! Please check your email to confirm your registration.');
    }

    public function confirm(string $token): ApiResponse
    {
        $user = WaitingUser::where('confirmation_token', $token)->first();

        if (!$user) {
            return ApiResponse::fail('Invalid confirmation token.', 400);
        }

        if ($user->confirmed) {
            return ApiResponse::success('Your email is already confirmed. Thank you.');
        }

        $user->confirmed = true;
        $user->confirmation_token = null;
        $user->save();

        dispatch(new SendWelcomeEmail($user))->afterResponse();

        return ApiResponse::success('Thank you for confirming your email. We will notify you when we launch.');
    }

    /**
     * Handle users who have already registered.
     * 
     * @param WaitingUser $user
     * @return ApiResponse
     */
    protected function handleExistingUser(WaitingUser $user): ApiResponse
    {
        if ($user->confirmed) {
            return ApiResponse::error('You have already registered.', 400);
        }

        $user->confirmation_token = $this->generateToken($user->email);
        $user->save();

        dispatch(new SendConfirmationEmail($user))->afterResponse();

        return ApiResponse::success('You have already registered. We have resent the confirmation email. Please check your inbox.');
    }

    private function generateToken(string $email): string
    {
        $data = $email . now('UTC')->timestamp;

        $hash = hash_hmac('sha256', $data, config('app.key'));

        $token = substr(base64_encode($hash), 0, 20);

        return $token;
    }
}