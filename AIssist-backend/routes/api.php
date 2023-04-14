<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;


Route::group(["prefix" => "v0.0.1"], function()
{

    Route::post('/login',[AuthController:: class, "login"]);
    Route::post('/register',[AuthController:: class, "register"]);

    Route::group(["middleware" => ["auth:api"]], function()
    {
        Route::get('/users', [UserController::class, 'getUsers']);

       
    });
});