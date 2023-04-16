<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Like;

class LikeController extends Controller
{
    public function likePost(Request $request, $post_id) {

        $post = Post::find($post_id);

        if (!$post) {
            return response()->json([
                'status' => 'error',
                'message' => 'Post not found',
            ], 404);
        }
        

        $like = new Like();
        $like->user_id = Auth::id();
        $like->post_id = $post_id;
        $like->save();

        return response()->json([
            'status' => 'success',
            'message' => 'like created successfully',
            'like' => $like,
        ], 201);
    }
}
