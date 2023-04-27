<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AdminMiddleware
{
    public function handle(Request $request, Closure $next){

    if ($request->user() && $request->user()->isAdmin()) {
        return $next($request);
    }

    return redirect('/');
    }
}
