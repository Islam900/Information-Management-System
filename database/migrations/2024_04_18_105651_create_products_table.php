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
            $table->foreignId('warehouses_id')->nullable()->constrained()->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('invoices_id')->nullable()->constrained()->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('hand_registers_id')->nullable()->constrained()->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('categories_id')->constrained()->cascadeOnUpdate()->cascadeOnDelete();
            $table->string('unical_code')->default(\Illuminate\Support\Str::random(10));
            $table->string('material_type', 25);
            $table->string('avr_code', )->nullable();
            $table->string('serial_number')->nullable();
            $table->string('product_name', );
            $table->float('price');
            $table->string('size', 15);
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
