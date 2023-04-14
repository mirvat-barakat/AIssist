<?php
namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Specialist;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class SpecialistsController extends Controller
{
    public function getSpecialists()
    {
        $specialists = DB::table('specialists')->get();
        return response()->json([
            'status' => 'success',
            'users' => $specialists
        ]);
    }

    public function searchSpecialists(Request $request)
    {
        $query = $request->input('search_input');
        $specialists = Specialist::where('name', 'like', "%$query%")
                       ->get();

        if ($specialists->isEmpty())
         {
            return response()->json([
                'status' => 'error',
                'message' => 'No specialists found for the given search criteria'
            ], 204);
         }
         return response()->json([
            'status' => 'success',
            'specialists' => $specialists
        ]);
    }

    public function searchSpecialistsByCategory(Request $request)
{
    $category = $request->input('category');
    $specialists = Specialist::whereHas('categories', function($query) use ($category) {
        $query->where('name', 'like', "%$category%");
   })
   ->get();

   if ($specialists->isEmpty())
         {
            return response()->json([
                'status' => 'error',
                'message' => 'No specialists found for the given category'
            ], 204);
         }
         return response()->json([
            'status' => 'success',
            'specialists' => $specialists
        ]);
}

}