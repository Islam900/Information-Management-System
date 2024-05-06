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
        Schema::create('assets_requests_details', function (Blueprint $table) {
            $table->id();
            $table->foreignId('assets_requests_id')->constrained()->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('users_id')->constrained()->cascadeOnUpdate()->cascadeOnDelete();
            $table->integer('status')->default(0);
            $table->string('reject_reason');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('assets_requests_details');
    }
};
