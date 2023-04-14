<?php
namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function getUsers()
    {
        $logged_in_user = Auth::id();
        $users = DB::table('users')->where('is_admin', '=', 0)->whereNot("id",$logged_in_user)->get();
        return response()->json([
            'status' => 'success',
            'users' => $users
        ]);
    }
}