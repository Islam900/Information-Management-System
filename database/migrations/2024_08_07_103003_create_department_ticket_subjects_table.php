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
        Schema::create('department_ticket_subjects', function (Blueprint $table) {
            $table->id();
            $table->foreignId('departments_id')->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->string('subject');
            $table->integer('status')->default(1);
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('department_ticket_subjects');
    }
};
