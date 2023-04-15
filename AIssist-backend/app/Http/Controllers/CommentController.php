<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Comment;

class CommentController extends Controller{

    public function createComment(Request $request, $post_id){

        $post = Post::find($post_id);

        if (!$post) {
            return response()->json([
                'status' => 'error',
                'message' => 'Post not found',
            ], 404);
        }
        

        $comment = new Comment();
        $comment->content = $request->input('content');
        $comment->user_id = Auth::id();
        $comment->post_id = $post_id;
        $comment->save();

        return response()->json([
            'status' => 'success',
            'message' => 'Comment created successfully',
            'comment' => $comment,
        ], 201);
    
    }
}
