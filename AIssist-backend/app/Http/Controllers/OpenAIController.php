<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use OpenAI;
use OpenAI\Client;

class OpenAIController extends Controller
{
    public function generateAnswers(Request $request)
    {
        $request->validate(['Question']);
        $apiKey = env('OPENAI_API_KEY');
        $client = OpenAI::client($apiKey);

        $question = $request->input('Question');

        $prompt ="Answer this question: {$question}";


        $result = $client->completions()->create([
            'model' => 'text-davinci-003',
            'prompt' => $prompt,
            'max_tokens' => 100,
            'temperature' => 0.5
        ]);
        return response()->json([
            'status' => 'success',
            'data' => trim($result['choices'][0]['text'])
        ], 200);
    }
}
