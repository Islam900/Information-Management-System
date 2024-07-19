<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('invoices_id')->nullable()->constrained()->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('categories_id')->constrained()->cascadeOnUpdate()->cascadeOnDelete();
            $table->string('material_type', 15);
            $table->string('avr_code', 15);
            $table->string('product_name', 50);
            $table->float('price');
            $table->string('size', 15);
            $table->integer('purchase_count')->default(0);
            $table->integer('stock')->default(0);
            $table->float('inventory_cost');
            $table->integer('activity_status')->default(1);
            $table->string('status')->default("Yeni");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
