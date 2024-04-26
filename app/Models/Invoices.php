<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invoices extends Model
{
    use HasFactory;
    protected $table = 'invoices';
    protected $fillable = ['vendors_id' , 'categories_id' ,'e_invoice_number', 'e_invoice_serial_number', 'total_amount', 'edv_total_amount' ,'note', 'e_invoice_date'];

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

    public function hand_registers()
    {
        return $this->hasMany(HandRegisters::class);
    }
}
