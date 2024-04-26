<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rooms extends Model
{
    use HasFactory;

    protected $table = 'rooms';
    protected $fillable = ['name', 'status'];

    public function local_numbers()
    {
        return $this->hasMany(LocalNumbers::class);
    }

    public function users()
    {
        return $this->hasMany(User::class);
    }

}
