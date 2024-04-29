<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tickets', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('helpdesk_id')->nullable()->constrained('users')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('appointments_id')->constrained()->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('ticket_reasons_id')->constrained()->cascadeOnUpdate()->cascadeOnDelete();
            $table->string('ticket_number')->unique();
            $table->integer('status')->default(0);
            $table->integer('ticket_status')->default(0);
            $table->integer('rate')->default(5);
            $table->text('note')->nullable();
            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tickets');
    }
};
