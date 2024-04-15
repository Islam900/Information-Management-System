<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invoices extends Model
{
    use HasFactory;
    protected $table = 'invoices';
    protected $fillable = ['vendors_id' , 'e_invoice_number', 'total_amount', 'note'];

    public function vendors()
    {
        return $this->belongsTo(Vendors::class);
    }

    public function products()
    {
        return $this->hasMany(Products::class);
    }
}
