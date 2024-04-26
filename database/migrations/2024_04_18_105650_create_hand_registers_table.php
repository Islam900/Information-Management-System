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
        Schema::create('hand_registers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('invoices_id')->nullable()->constrained()->cascadeOnUpdate()->cascadeOnUpdate();
            $table->foreignId('vendors_id')->constrained()->cascadeOnUpdate()->cascadeOnUpdate();
            $table->foreignId('categories_id')->constrained()->cascadeOnUpdate()->cascadeOnDelete();
            $table->string('register_number', 50)->nullable();
            $table->float('total_amount');
            $table->float('edv_total_amount');
            $table->text('note')->nullable();
            $table->date('register_date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hand_registers');
    }
};
