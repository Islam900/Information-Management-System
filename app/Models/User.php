<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'departments_id',
        'branches_id',
        'positions_id',
        'rooms_id',
        'name',
        'email',
        'type',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function inventories()
    {
        return $this->hasMany(Inventories::class);
    }

    public function departments()
    {
        return $this->belongsTo(Departments::class);
    }

    public function branches()
    {
        return $this->belongsTo(Branches::class);
    }

    public function positions()
    {
        return $this->belongsTo(Positions::class);
    }

    public function tickets()
    {
        return $this->hasMany(Tickets::class);
    }

    public function my_tickets()
    {
        return $this->hasMany(Tickets::class, 'helpdesk_id');
    }

}
