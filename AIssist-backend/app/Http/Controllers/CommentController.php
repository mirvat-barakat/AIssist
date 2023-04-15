<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Comment;

class CommentController extends Controller{
    
    public function createComment(Request $request, $postId){

        $post = Post::find($postId);
        if (!$post) {
            return response()->json([
                'status' => 'error',
                'message' => 'Post not found',
            ], 404);
        }

        $comment = new Comment();
        $comment->content = $request->input('content');
        $comment->user_id = Auth::id();
        $comment->post_id = $post->id;
        $comment->save();

        return response()->json([
            'status' => 'success',
            'message' => 'Comment created successfully',
            'comment' => $comment,
        ], 201);
    
    }
}
