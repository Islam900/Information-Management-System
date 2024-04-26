<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HandRegisters extends Model
{
    use HasFactory;
    protected $table = 'hand_registers';
    protected $fillable = ['invoices_id','vendors_id' , 'categories_id' ,'register_number', 'total_amount', 'edv_total_amount' ,'note', 'register_date'];

    public function vendors()
    {
        return $this->belongsTo(Vendors::class);
    }

    public function products()
    {
        return $this->hasMany(Products::class);
    }

    public function categories()
    {
        return $this->belongsTo(Categories::class);
    }

    public function invoices()
    {
        return $this->belongsTo(Invoices::class);
    }
}
