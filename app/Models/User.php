<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasFactory, Notifiable, HasRoles;

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
        'b_day',
        'report_receiver_id',
        'assets_requests_confirm',
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

    public function appointments()
    {
        return $this->hasMany(Appointments::class);
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

    public function rooms()
    {
        return $this->belongsTo(Rooms::class);
    }

    public function my_tickets()
    {
        return $this->hasMany(Tickets::class, 'helpdesk_id');
    }

    public function reports()
    {
        return $this->hasMany(Reports::class);
    }

    public function local_numbers()
    {
        return $this->hasMany(LocalNumbers::class);
    }

    public function report_receiver()
    {
        return $this->belongsTo(User::class, 'report_reveiver_id');
    }

    public function report_sender()
    {
        return $this->hasMany(User::class, 'report_receiver_id');
    }

    public function assets_requests()
    {
        return $this->hasMany(User::class);
    }

    public function assets_requests_details()
    {
        return $this->hasMany(AssetsRequestsDetails::class);
    }

}
