<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Feedback extends Model
{
    use HasFactory;
    protected $table = 'feedbacks';
    protected $fillable = [
        'age_gender',
        'satisfaction',
        'diagnosis',
        'interest',
        'tried_activities',
        'unable_activities',
        'improvment_suggestions',
        'other_feedbacks',
        'form_id',
    ];
}
