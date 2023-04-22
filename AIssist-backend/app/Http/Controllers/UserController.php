<?php
namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function getUsers(){

        $users = DB::table('users')->where('is_admin', '=', 0)->get();
        return response()->json([
            'status' => 'success',
            'users' => $users
        ]);
    }
}