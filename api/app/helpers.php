<?php

if (!function_exists('arrays_are_same')) {
    /**
     * Determine if two associative arrays are similar.
     *
     * Both arrays must have the same indexes with identical values
     * without respect to key ordering
     *
     * @param array $a
     * @param array $b
     */
    function arrays_are_same($a, $b): bool
    {
        // if the indexes don't match, return immediately
        if (count(array_diff_assoc($a, $b))) {
            return false;
        }
        // we know that the indexes, but maybe not values, match.
        // compare the values between the two arrays
        foreach ($a as $k => $v) {
            if ($v !== $b[$k]) {
                return false;
            }
        }
        // we have identical indexes, and no unequal values
        return true;
    }
}

if (!function_exists('getServiceExceptionMessage')) {
    /**
     * @param \Exception|\Throwable $e
     */
    function getServiceExceptionMessage(Exception|Throwable $e): array
    {
        $error = [];

        if (!app()->environment('production') && config('app.debug')) {
            $error = [
                'code' => $e->getCode(),
                'message' => $e->getMessage(),
            ];

            if (app()->environment(['local', 'testing'])) {
                $error = array_merge($error, [
                    'file' => $e->getFile(),
                    'line' => $e->getLine(),
                ]);
            }
        }

        return $error;
    }
}

if (!function_exists('isXML')) {
    function isXML(string $string): bool
    {
        libxml_use_internal_errors(true);
        $doc = simplexml_load_string($string);
        $errors = libxml_get_errors();
        libxml_clear_errors();

        return empty($errors);
    }
}

if (!function_exists('failedFormRequestValidation')) {
    function failedFormRequestValidation(Illuminate\Contracts\Validation\Validator $validator)
    {
        $final = \App\DTOs\ApiResponse::fail('The given data was invalid.', 422, ['errors' => $validator->errors()]);

        throw new \Illuminate\Http\Exceptions\HttpResponseException(response()->json($final, 422));
    }
}


if (!function_exists('isValidJson')) {
    function isValidJson($string): bool
    {
        // decode the JSON data
        try {
            $result = json_decode($string);
        } catch (\Exception|\Throwable $e) {
            return false;
        }

        // switch and check possible JSON errors
        $error = match (json_last_error()) {
            JSON_ERROR_NONE => '',
            JSON_ERROR_DEPTH => 'The maximum stack depth has been exceeded.',
            JSON_ERROR_STATE_MISMATCH => 'Invalid or malformed JSON.',
            JSON_ERROR_CTRL_CHAR => 'Control character error, possibly incorrectly encoded.',
            JSON_ERROR_SYNTAX => 'Syntax error, malformed JSON.',
            JSON_ERROR_UTF8 => 'Malformed UTF-8 characters, possibly incorrectly encoded.',
            JSON_ERROR_RECURSION => 'One or more recursive references in the value to be encoded.',
            JSON_ERROR_INF_OR_NAN => 'One or more NAN or INF values in the value to be encoded.',
            JSON_ERROR_UNSUPPORTED_TYPE => 'A value of a type that cannot be encoded was given.',
            default => 'Unknown JSON error occurred.',
        };

        if ('' !== $error) {
            // throw the Exception or exit // or whatever :)
            return false;
        }

        // everything is OK
        return true;
    }
}

