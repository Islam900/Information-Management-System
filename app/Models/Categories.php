<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categories extends Model
{
    use HasFactory;
    protected $table = 'categories';
    protected $fillable = ['parent_id' ,'name', 'status'];

    public function products()
    {
        return $this->hasMany(Products::class);
    }

    public function parent()
    {
        return $this->belongsTo(Categories::class, 'parent_id');
    }

    public function children()
    {
        return $this->hasMany(Categories::class, 'parent_id');
    }

    public function invoices()
    {
        return $this->hasMany(Invoices::class);
    }

    public function hand_registers()
    {
        return $this->hasMany(HandRegisters::class);
    }
}
