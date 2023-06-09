<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\SpecialistsController;
use App\Http\Controllers\CommunityPostController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\OpenAIController;


Route::group(["prefix" => "v0.0.1"], function()
{

    Route::post('/login',[AuthController:: class, "login"]);
    Route::post('/register',[AuthController:: class, "register"]);
    Route::post('/logout',[AuthController:: class, "logout"]);
    Route::post('/refresh',[AuthController:: class, "refresh"]);

    Route::group(["middleware" => ["auth:api"]], function()
    {
        
        
        Route::get('/specialists', [SpecialistsController::class, 'getSpecialists']);
        Route::get('/specialists/search', [SpecialistsController::class, 'searchSpecialists']);
        Route::get('/specialists/search-by-category', [SpecialistsController::class, 'searchSpecialistsByCategory']);

        Route::post('/community/posts', [CommunityPostController::class, 'createPost']);
        Route::get('/community/posts', [CommunityPostController::class, 'getPosts']);
        Route::post('/community/{id}', [CommunityPostController::class, 'deletePost']);

        Route::post('/posts/{post_id}/comments', [CommentController::class, 'createComment']);
        Route::get('/posts/{post_id}/comments', [CommentController::class, 'getComments']);
        Route::post('/comment/{id}', [CommentController::class, 'update']);
        Route::post('/delete/comment/{id}', [CommentController::class, 'deleteComment']);
       
        Route::post('/posts/{post_id}/likes', [LikeController::class, 'likePost']);
        Route::post('/comments/{comment_id}/likes', [LikeController::class, 'likeComment']);
        Route::get('/post/{id}/likes', [LikeController::class, 'getPostLikes']);
        Route::get('/comment/{id}/likes', [LikeController::class, 'getCommentLikes']);
        Route::post('/like/{id}', [LikeController::class, 'deleteLike']);

        Route::post('/answers',[OpenAIController::class, 'generateAnswers']);
        Route::post('/activities',[OpenAIController::class, 'generateActivities']);
        Route::post('/regenerate/activities/{id}',[OpenAIController::class, 'regenerateActivities']);
        
        Route::group(['middleware' => 'admin'], function () {
            Route::post('/specialist/{id}', [SpecialistsController::class, 'deleteSpecialist']);
            Route::post('/specialist', [SpecialistsController::class, 'addSpecialist']);
            Route::get('/users', [UserController::class, 'getUsers']);
           

        });

    });
});