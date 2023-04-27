<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AdminMiddleware
{
    public function handle($request, Closure $next)
    {
        if (Auth::user()->is_admin== '1') {
            return $next($request);
        }

        return redirect()->route('some.route'); // If user is not an admin.
    }
}
