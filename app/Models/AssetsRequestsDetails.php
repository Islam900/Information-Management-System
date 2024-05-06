<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AssetsRequestsDetails extends Model
{
    protected $table = 'assets_requests_details';
    protected $fillable = ['assets_requests_id', 'users_id', 'status', 'reject_reason'];
    use HasFactory;

    public function users()
    {
        return $this->belongsTo(User::class);
    }
    public function assets_requests()
    {
        return $this->belongsTo(AssetsRequests::class);
    }
}
