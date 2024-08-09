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
            $table->foreignId('user_id')->constrained('users')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('operator_id')->nullable()->constrained('users')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('helpdesk_id')->nullable()->constrained('users')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('departments_id')->constrained('departments')->nullable()->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('department_ticket_subjects_id')->constrained('department_ticket_subjects')->nullable()->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('branches_id')->constrained('branches')->nullable()->onUpdate('cascade')->onDelete('cascade');
            $table->string('type');
            $table->text('subject')->nullable();
            $table->string('ticket_number')->unique();
            $table->integer('status')->default(0);
            $table->integer('ticket_status')->default(0);
            $table->dateTime('ticket_solve_time')->nullable();
            $table->string('ticket_priority')->default('Təcili deyil');
            $table->integer('rate')->default(5);
            $table->integer('solve_percentage')->default(0);
            $table->text('rate_comment')->nullable();
            $table->text('note')->nullable();
            $table->string('file')->nullable();
            $table->text('watcher')->nullable();
            $table->softDeletes();
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
