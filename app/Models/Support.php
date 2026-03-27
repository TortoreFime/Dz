<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\Support as Authenticatable;
use Illuminate\Notifications\Notifiable;

class Support extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'dish_id',
        'order_id'
    ];
}
