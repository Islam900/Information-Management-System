<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Branches extends Model
{
    use HasFactory;

    protected $table = 'branches';
    protected $fillable = ['departments_id', 'name', 'status'];

    public function users()
    {
        return $this->hasMany(User::class);
    }

    public function departments()
    {
        return $this->belongsTo(Departments::class);
    }

    public function positions()
    {
        return $this->hasMany(Positions::class);
    }

    public function reports()
    {
        return $this->hasMany(Reports::class);
    }

    public function local_numbers()
    {
        return $this->hasMany(LocalNumbers::class);
    }




}
