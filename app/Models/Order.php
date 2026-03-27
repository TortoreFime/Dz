<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\Order as Authenticatable;
use Illuminate\Notifications\Notifiable;

class Order extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'cookState',
        'payState'
    ];
}
