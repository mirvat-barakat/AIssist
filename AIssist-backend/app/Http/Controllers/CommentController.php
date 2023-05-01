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

    public function getComments(Request $request, $post_id){
        $comments = Comment::where('post_id', 'like', "%$post_id%")
                               ->get();

        if ($comments->isEmpty()){
            return response()->json([
                'status' => 'error',
                'message' => 'No comments found for this post',
                'data' => []
            ]);
         }

        return response()->json([
        'status' => 'success',
        'comments' => $comments,
    ]);
    }

    public function update(Request $request, $id){

        $comment = Comment::find($id);

        if (!$comment) {
            return response()->json([
                'status' => 'error',
                'message' => 'Comment not found',
            ], 404);
        }

        if ($comment->user_id != auth()->user()->id ) {
            return response()->json([
                'status' => 'error',
                'message' => 'Unauthorized',
            ], 401);
        }

        $comment->content = $request->input('content');
        $comment->save();

        return response()->json([
            'status' => 'success',
            'message' => 'Comment updated successfully',
            'comment' => $comment,
        ], 200);
        
    }

    public function deleteComment(Request $request, $id){

        $comment = Comment::find($id);

        if (!$comment) {
            return response()->json([
                'status' => 'error',
                'message' => 'Comment not found'
            ], 404);
        }

        $user = $request->user();
        if (!$user->is_admin && $user->id !== $comment->user_id) {
            return response()->json([
                'status' => 'error',
                'message' => 'Unauthorized'
            ], 401);
        }

        $comment->delete();
        return response()->json([
            'status' => 'success',
            'message' => 'Comment deleted successfully'
        ], 200);
    }
}
