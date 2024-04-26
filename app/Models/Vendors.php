<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vendors extends Model
{
    use HasFactory;

    protected $table = 'vendors';
    protected $fillable = ['name', 'email', 'relevant_person', 'phone_number' ,'status'];

    public function invoices()
    {
        return $this->hasMany(Invoices::class);
    }

    public function hand_registers()
    {
        return $this->hasMany(HandRegisters::class);
    }

}
