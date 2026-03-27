<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\Dish as Authenticatable;
use Illuminate\Notifications\Notifiable;

class Dish extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'name',
        'price'
    ];
}
