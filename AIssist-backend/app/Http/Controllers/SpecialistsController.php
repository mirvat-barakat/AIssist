<?php
namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Specialist;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class SpecialistsController extends Controller
{


    public function addSpecialist(Request $request){
        

        $specialist = new Specialist();
        $specialist->name = $request->input('name');
        $specialist->email = $request->input('email');
        $specialist->category = $request->input('category');
        $specialist->speciality = $request->input('speciality');
        $specialist->phone_number= $request->input('phone_number');
        $specialist->whatsapp_number= $request->input('whatsapp_number');
        $specialist->location= $request->input('location');
        $specialist->profile_picture= $request->input('profile_picture');
        $specialist->save();

        return response()->json([
            'status' => 'success',
            'message' => 'Specialist added successfully',
            'specialist' => $specialist,
        ], 201);
    
    }


    public function getSpecialists()
    {
        $specialists = Specialist::get();
        return response()->json([
            'status' => 'success',
            'specialists' => $specialists
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
    $specialists = Specialist::where('category', 'like', "%$category%")
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