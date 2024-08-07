<?php

namespace App\Models;

use Dyrynda\Database\Support\CascadeSoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DepartmentTicketSubjects extends Model
{
    use HasFactory,CascadeSoftDeletes;
    protected $table = 'department_ticket_subjects';
    protected $fillable = [
        'departments_id',
        'subject',
        'status'
    ];

    public function departments()
    {
        return $this->belongsTo(Departments::class);
    }
}
