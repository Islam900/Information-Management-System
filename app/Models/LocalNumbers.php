<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class LocalNumbers extends Model
{
    use HasFactory,SoftDeletes;
    protected $table = 'local_numbers';
    protected $fillable = ['department_id', 'branch_id', 'room_id' , 'user_id' , 'number'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function department()
    {
        return $this->belongsTo(Departments::class);
    }

    public function branch()
    {
        return $this->belongsTo(Branches::class);
    }

    public function room()
    {
        return $this->belongsTo(Rooms::class);
    }
}
