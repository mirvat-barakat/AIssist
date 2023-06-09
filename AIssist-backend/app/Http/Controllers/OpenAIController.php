<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use OpenAI;
use OpenAI\Client;
use App\Models\Activity;
use App\Models\Feedback;

class OpenAIController extends Controller
{
    public function generateAnswers(Request $request){

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

    public function generateActivities(Request $request){

        $activity_request= new Activity();
        $activity_request->age= $age = $request->input('age');
        $activity_request->gender= $gender = $request->input('gender'); 
        $activity_request->diagnosis= $diagnosis = $request->input('diagnosis');
        $activity_request->medications= $medications = $request->input('medications'); 
        $activity_request->interests= $interest = $request->input('interest');
        $activity_request->things_have_tried= $tried = $request->input('things_have_tried');
        $activity_request->notes= $notes = $request->input('notes'); 
        $activity_request->user_id= Auth::id();
    
        $apiKey = env('OPENAI_API_KEY');
        $client = OpenAI::client($apiKey);
    
        $prompt = "provide a list of activities with a description for each activity for a person of special need with the following details:
         Diagnosis: {$diagnosis} 
         Gender: {$gender} 
         Age: {$age} years old 
         Medications: {$medications}
         Interest: {$interest} 
         Notes: {$notes} 
         Things tried: {$tried}.";
        
        try{
            $result = $client->completions()->create([
            'model' => 'text-davinci-003',
            'prompt' => $prompt,
            'max_tokens' => 500,
            'temperature' => 0.4
        ]);
    
        $response = $result['choices'][0]['text'];

        $activities = [];
        $activityMatches = [];
        preg_match_all('/(?<=[0-9]\.\s)(.*?)(?=(?<=\n)\d+\.\s|$)/s', $response, $activityMatches);
         
        $keys = array_keys($activityMatches[1]);
        foreach ($keys as $index) {
            $activityMatch = $activityMatches[1][$index];
            $activity = [
                'id' => $index + 1,
                'name' => '',
                'description' => ''
            ];
    
            preg_match('/^(.*?):\s/', $activityMatch, $nameMatch);
            $activity['name'] = $nameMatch[1];
    
            $activity['description'] = rtrim(preg_replace('/^(.*?):\s/', '', $activityMatch));
    
            $activities[] = $activity;
        }
        $activity_request->generated_activities = json_encode($activities);
        $activity_request->save();
        $activity_request_id = $activity_request->id;
    
        if (empty($activities)) {
            return response()->json([
                'error' => 'No activities found.'], 404);
        }

        return response()->json([ 
            'activity_request_id' => $activity_request_id,
            'activities' => $activities]);

    } catch (\Exception $e) {
        return response()->json([
            'error' => 'Unable to generate activities.'], 500);
    }
}

    public function regenerateActivities(Request $request, $form_id){

        $feedback= new Feedback();
        $satisfaction= $feedback->satisfaction=  $request->input('satisfaction');
        $age_gender= $feedback->age_gender=  $request->input('age_gender'); 
        $diagnosis= $feedback->diagnosis=  $request->input('diagnosis');
        $interest= $feedback->interest=  $request->input('interest'); 
        $tried_activities= $feedback->tried_activities=  $request->input('tried_activities');
        $unable_activities=$feedback->unable_activities=  $request->input('unable_activities');
        $improvement_suggestions= $feedback->improvement_suggestions=  $request->input('improvement_suggestions');
        $other_feedback= $feedback->other_feedback=  $request->input('other_feedback');  
        $feedback->form_id= $form_id; 
        $feedback->save();

        $formRequest = Activity::select('age', 'gender', 'diagnosis', 'medications', 'interests', 'notes', 'things_have_tried','generated_activities')
                                ->find($form_id);
        $formRequestJson = response()->json($formRequest);

        $apiKey = env('OPENAI_API_KEY');
        $client = OpenAI::client($apiKey);
    
        $prompt = "Generate a list of activities with a description for each activity for a child with a special need with the following details that includes
                    the details of the child's case and the generated activities that you generated earlier.

                    Please take into consideration the following feedback to improve the generated activities:
                    How satisfied were you with the activities generated for you?: $satisfaction
                    Were the activities appropriate for your age and gender?: $age_gender
                    Were the activities appropriate for your diagnosis?: $diagnosis
                    Did you find the activities interesting?: $diagnosis$interest
                    Did you try any of the activities suggested to you?: $tried_activities
                    Were there any activities that you were unable to do? $unable_activities
                    What suggestions do you have to improve the activities generated for you?: $improvement_suggestions
                    Any other comments or feedback you would like to share: $other_feedback";
    
        try{
            $result = $client->completions()->create([
            'model' => 'text-davinci-003',
            'prompt' => $prompt,
            'max_tokens' => 500,
            'temperature' => 0.4
        ]);
    
        $response = $result['choices'][0]['text'];
        

        $activities = [];
        $activityMatches = [];
        preg_match_all('/(?<=[0-9]\.\s)(.*?)(?=(?<=\n)\d+\.\s|$)/s', $response, $activityMatches);
        
        $keys = array_keys($activityMatches[1]);
        foreach ($keys as $index) {
            $activityMatch = $activityMatches[1][$index];
            $activity = [
                'id' => $index + 1,
                'name' => '',
                'description' => ''
            ];
    
            preg_match('/^(.*?):\s/', $activityMatch, $nameMatch);
            $activity['name'] = $nameMatch[1];
    
            $activity['description'] = rtrim(preg_replace('/^(.*?):\s/', '', $activityMatch));
    
            $activities[] = $activity;
        }
    
        if (empty($activities)) {
            return response()->json(['error' => 'No activities found.'], 404);
        }

        return response()->json(['activities' => $activities]);

    } catch (\Exception $e) {
        return response()->json(['error' => 'Unable to generate activities.'], 500);
    }
}
}