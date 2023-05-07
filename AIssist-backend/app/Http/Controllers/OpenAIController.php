<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use OpenAI;
use OpenAI\Client;
use App\Models\Activity;

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
        $diagnosis = $request->input('diagnosis');
        $gender = $request->input('gender');
        $age = $request->input('age');
        $medications = $request->input('medications');
        $interest = $request->input('interest');
        $notes = $request->input('notes');
        $tried = $request->input('things_have_tried');

        $activity_request= new Activity();
        $activity_request->age= $age;
        $activity_request->gender= $gender; 
        $activity_request->diagnosis= $diagnosis;
        $activity_request->medications= $medications; 
        $activity_request->interests= $interest;
        $activity_request->things_have_tried= $tried;
        $activity_request->notes= $notes; 
        $activity_request->user_id= Auth::id();
    
        $apiKey = env('OPENAI_API_KEY');
        $client = OpenAI::client($apiKey);
    
        $prompt = "provide a list of activities with a description for each activity for a person with the following details:\n
         Diagnosis: {$diagnosis}\nGender: {$gender}\nAge: {$age} years old\nMedications: {$medications}\n
         Interest: {$interest}\nNotes: {$notes}\nThings tried: {$tried}\n\n.";
    
        try{
            $result = $client->completions()->create([
            'model' => 'text-davinci-003',
            'prompt' => $prompt,
            'max_tokens' => 50,
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
        $activity_request->generated_activities = json_encode($activities);
        $activity_request->save();
    
        if (empty($activities)) {
            return response()->json(['error' => 'No activities found.'], 404);
        }

        return response()->json(['activities' => $activities]);

    } catch (\Exception $e) {

        logger($e->getMessage());
        logger($e->getTraceAsString());
        return response()->json(['error' => 'Unable to generate activities.'], 500);
    }
}
}