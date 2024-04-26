<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stocks extends Model
{
    use HasFactory;
    protected $table = 'stocks';
    protected $fillable = ['warehouses_id','products_unical_id', 'purchase_count', 'stock_count'];

    public function warehouses()
    {
        return $this->belongsTo(Warehouses::class);
    }
}
