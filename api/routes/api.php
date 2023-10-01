<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StatusController;
use App\Http\Controllers\JoinWaitListController;
use App\Http\Controllers\ConfirmJoiningWaitListController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::group(['prefix' => 'v1', 'middleware' => ['api']], function () {
    Route::match(['GET', 'HEAD', 'POST'], '/', StatusController::class);

    Route::post('/join', JoinWaitListController::class)->name('join');
    Route::post('/confirm/{token}', ConfirmJoiningWaitListController::class)->name('join.confirmation');
});
