<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AssetsRequests extends Model
{
    use HasFactory;

    protected $table = 'assets_requests';
    protected $fillable = ['users_id' , 'content' , 'status' , 'reject_reason'];

    public function users(){
        return $this->belongsTo(User::class);
    }

}

