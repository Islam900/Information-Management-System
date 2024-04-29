<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Warehouses extends Model
{
    use HasFactory;
    protected $table = 'warehouses';
    protected $fillable = ['name', 'address', 'status'];

    public function stocks()
    {
        return $this->hasMany(Stocks::class, 'product_unical_code', 'code');
    }


}
