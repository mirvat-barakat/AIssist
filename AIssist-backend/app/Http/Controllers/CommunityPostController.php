<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Post;

class CommunityPostController extends Controller
{
    public function createPost(Request $request)
    {
        $post = new Post;
        $post->user_id = $request->user()->id;
        $post->title = $request->input('title');
        $post->content = $request->input('content');
        $post->save();

        return response()->json([
            'status' => 'success',
            'message' => 'Post created successfully'
        ]);
    }

    public function getPosts()
    {
        $posts = DB::table('posts')->get();
        return response()->json([
            'status' => 'success',
            'users' => $posts
        ]);
    }
}
