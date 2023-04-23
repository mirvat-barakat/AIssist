<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Like;
use App\Models\Comment;

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

        $like = Like::where('user_id', auth()->user()->id)->where('post_id', $post->id)->first();
        if ($like) {
            return response()->json([
                'status' => 'error',
                'message' => 'Post already liked by the user'
            ], 400);
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
    
    public function likeComment(Request $request, $comment_id) {

        $comment = Comment::find($comment_id);

        if (!$comment) {
            return response()->json([
                'status' => 'error',
                'message' => 'comment not found',
            ], 404);
        }

        $like = Like::where('user_id', auth()->user()->id)->where('comment_id', $comment->id)->first();
        if ($like) {
            return response()->json([
                'status' => 'error',
                'message' => 'Comment already liked by the user'
            ], 400);
        }

        

        $like = new Like();
        $like->user_id = Auth::id();
        $like->comment_id = $comment_id;
        $like->post_id= $comment->post_id;
        $like->save();

        return response()->json([
            'status' => 'success',
            'message' => 'like created successfully',
            'like' => $like,
        ], 201);
    }

    public function getPostLikes(Request $request, $id) {

        $post = Post::find($id);

        if (!$post) {
            return response()->json([
                'status' => 'error',
                'message' => 'Post not found'
            ], 404);
        }
        $likes = Like::where('post_id', $post->id)->whereNull('comment_id')->get();
        $like_count = $likes->count();

        return response()->json([
            'status' => 'success',
            'data' => [
                'likes' => $likes,
                'like_count' => $like_count
            ]
        ], 200);

    }

    public function getCommentLikes(Request $request, $id) {

        $comment = Comment::find($id);

        if (!$comment) {
            return response()->json([
                'status' => 'error',
                'message' => 'Comment not found'
            ], 404);
        }
        $likes = Like::where('comment_id', $comment->id)->get();
        $like_count = $likes->count();

        return response()->json([
            'status' => 'success',
            'data' => [
                'likes' => $likes,
                'like_count' => $like_count
            ]
        ], 200);

    }
    public function deleteLike(Request $request, $id){

        $like = Like::find($id);

        if (!$like ) {
            return response()->json([
                'status' => 'error',
                'message' => 'like  not found'
            ], 404);
        }

        $like ->delete();
        return response()->json([
            'status' => 'success',
            'message' => 'Like  deleted successfully'
        ], 200);
    }

}
