<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\Job as Authenticatable;
use Illuminate\Notifications\Notifiable;

class Job extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'name'
    ];
}