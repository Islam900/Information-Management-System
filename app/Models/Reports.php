<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reports extends Model
{
    use HasFactory;
    protected $table = 'reports';
    protected $fillable = ['departments_id','branches_id', 'user_id' ,'report_date'];


    public function departments()
    {
        return $this->belongsTo(Departments::class);
    }

    public function branches()
    {
        return $this->belongsTo(Branches::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function reports_subjects()
    {
        return $this->hasMany(ReportsSubjects::class);
    }
}
