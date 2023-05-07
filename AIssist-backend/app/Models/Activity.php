<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
    use HasFactory;

    protected $table = 'activity_requests';
    protected $fillable = [
        'age',
        'gender',
        'diagnosis',
        'medications',
        'interests',
        'notes',
        'things_have_tried',
        'user_id',
    ];
}
