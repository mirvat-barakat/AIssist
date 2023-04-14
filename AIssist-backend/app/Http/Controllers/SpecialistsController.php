<?php
namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class SpecialistsController extends Controller
{
    public function getSpecialsts()
    {
        $specialists = DB::table('specialists')->get();
        return response()->json([
            'status' => 'success',
            'users' => $specialists
        ]);
    }

}