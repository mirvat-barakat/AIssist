<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Post;

class CommunityPostController extends Controller{

    public function createPost(Request $request){
        $post = new Post;
        $post->user_id = Auth::id();
        $post->content = $request->input('content');
        $post->save();

        return response()->json([
            'status' => 'success',
            'message' => 'Post created successfully'
        ]);
    }

    public function getPosts(){
        $posts = Post::join('users', 'posts.user_id', '=', 'users.id')
                ->get(['posts.*', 'users.name', 'users.profile_picture']);

        return response()->json([
            'status' => 'success',
            'posts' => $posts
        ]);
    }

    public function deletePost(Request $request, $id){
        $post = Post::find($id);

        if (!$post) {
            return response()->json([
                'status' => 'error',
                'message' => 'Post not found'
            ], 404);
        }

        $user = $request->user();
        if (!$user->is_admin && $user->id !== $post->user_id) {
            return response()->json([
                'status' => 'error',
                'message' => 'Unauthorized'
            ], 401);
        }

        $post->delete();
        return response()->json([
            'status' => 'success',
            'message' => 'Post deleted successfully'
        ]);
    }
}
