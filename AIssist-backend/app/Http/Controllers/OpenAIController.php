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

    public function generateActivities(Request $request)
    {
        $diagnosis = $request->input('Diagnosis');
        $gender = $request->input('gender');
        $age = $request->input('age');
        $medications = $request->input('medications');
        $interest = $request->input('interest');
        $notes = $request->input('notes');
        $tried = $request->input('things_have_tried');
    
        $apiKey = env('OPENAI_API_KEY');
        $client = OpenAI::client($apiKey);
    
        $prompt = "provide a list of activities with a description for each activity for a person with the following details:\n
         Diagnosis: {$diagnosis}\nGender: {$gender}\nAge: {$age} years old\nMedications: {$medications}\n
         Interest: {$interest}\nNotes: {$notes}\nThings tried: {$tried}\n\n.";
    
        $result = $client->completions()->create([
            'model' => 'text-davinci-003',
            'prompt' => $prompt,
            'max_tokens' => 1000,
            'temperature' => 0.5
        ]);
    
        $response = $result['choices'][0]['text'];
        $activities = [];
    
        $activityMatches = [];
        preg_match_all('/(?<=[0-9]\.\s)(.*?)(?=\n\n|$)/s', $response, $activityMatches);
    
        foreach ($activityMatches[1] as $activityMatch) {
            $activity = [
                'name' => '',
                'description' => ''
            ];
    
            preg_match('/^(.*?):\s/', $activityMatch, $nameMatch);
            $activity['name'] = $nameMatch[1];
    
            $activity['description'] = preg_replace('/^.*?:\s/', '', $activityMatch);
    
            $activities[] = $activity;
        }
    
        return ['activities' => $activities];
    }
}
