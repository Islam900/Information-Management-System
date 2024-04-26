<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tickets extends Model
{
    use HasFactory;
    protected $table = 'tickets';
    protected $fillable = [
        'user_id',
        'helpdesk_id',
        'inventories_id',
        'ticket_reasons_id',
        'ticket_number',
        'status',
        'ticket_status',
        'rate',
        'note'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function helpdesk()
    {
        return $this->belongsTo(User::class, 'helpdesk_id');
    }

    public function inventories()
    {
        return $this->belongsTo(Appointments::class);
    }

    public function ticket_reasons()
    {
        return $this->belongsTo(TicketReasons::class);
    }

}
