<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\SpecialistsController;
use App\Http\Controllers\CommunityPostController;


Route::group(["prefix" => "v0.0.1"], function()
{

    Route::post('/login',[AuthController:: class, "login"]);
    Route::post('/register',[AuthController:: class, "register"]);

    Route::group(["middleware" => ["auth:api"]], function()
    {
        Route::get('/users', [UserController::class, 'getUsers']);

        Route::get('/specialists', [SpecialistsController::class, 'getSpecialists']);
        Route::get('/specialists/search', [SpecialistsController::class, 'searchSpecialists']);
        Route::get('/specialists/search-by-category', [SpecialistsController::class, 'searchSpecialistsByCategory']);

        Route::post('/community/posts', [CommunityPostController::class, 'createPost']);
       
    });
});