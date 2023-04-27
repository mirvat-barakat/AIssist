<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AdminMiddleware
{
    // public function handle(Request $request, Closure $next){

    // if ($request->user() && $request->user()->is_admin !== 1) {
    //     return response()->json(['message' => 'Unauthorized'], 403);
    // }
    // else{
    //     return $next($request);
    // }
    // }
    public function handle($request, Closure $next)
    {
        $user = auth()->user();

        if(!$user) return response()->json(['error' => 'Unauthorized'], 401); //redirect

        else if ($user->is_admin !== 1)
        {
            return response()->json('no access');
        }
        
        return $next($request);
    }
}
