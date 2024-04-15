<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    use HasFactory;
    protected $table = 'products';
    protected $fillable = [
        'categories_id',
        'invoices_id',
        'material_type',
        'avr_code',
        'product_name',
        'price',
        'size',
        'purchase_count',
        'stock',
        'inventory_cost',
        'activity_status',
        'status'
    ];

    public function invoices()
    {
        return $this->belongsTo(Invoices::class);
    }

    public function categories()
    {
        return $this->belongsTo(Categories::class);
    }

    public function inventories()
    {
        return $this->hasMany(Inventories::class);
    }
}
