<?php

namespace App\Models;

use Dyrynda\Database\Support\CascadeSoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Tickets extends Model
{
    use HasFactory,SoftDeletes, CascadeSoftDeletes;
    protected $table = 'tickets';
    protected $fillable = [
        'departments_id',
        'branches_id',
        'type',
        'user_id',
        'operator_id',
        'helpdesk_id',
        'department_ticket_subjects_id',
        'subject',
        'ticket_number',
        'ticket_solve_time',
        'ticket_priority',
        'rate',
        'rate_comment',
        'file',
        'watcher',
        'solve_percentage',
        'note',
        'status',
        'ticket_status',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function departments()
    {
        return $this->belongsTo(Departments::class);
    }

    public function branches()
    {
        return $this->belongsTo(Departments::class);
    }

    public function department_ticket_subjects()
    {
        return $this->belongsTo(DepartmentTicketSubjects::class);
    }
    public function operator()
    {
        return $this->belongsTo(User::class, 'operator_id');
    }
    public function helpdesk()
    {
        return $this->belongsTo(User::class, 'helpdesk_id');
    }

    public function ticket_histories(){
        return $this->hasMany(TicketHistories::class);
    }

}
