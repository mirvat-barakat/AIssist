<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Like;

class LikeController extends Controller
{
    public function likePost(Request $request, $postId) {

        $post = Post::find($postId);
        if (!$post) {
            return response()->json([
                'status' => 'error',
                'message' => 'Post not found'
            ], 404);
        }

        $like = Like::where('user_id', $request->user_id)
                ->where('post_id', $postId)
                ->first();

        if ($like) {
            return response()->json([
                    'status' => 'error',
                    'message' => 'User has already liked the post'
            ], 400);
        }

        $like = new Like;
        $like->user_id = $request->user_id;
        $like->post_id = $postId;
        $like->save();

        return response()->json([
            'status' => 'success',
            'message' => 'Post liked successfully'
        ], 200);
    }
}
