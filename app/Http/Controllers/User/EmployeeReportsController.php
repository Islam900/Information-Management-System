<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Reports;
use App\Models\ReportsSubjects;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EmployeeReportsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $completed_reports = Reports::with('reports_subjects')->where('user_id', Auth::user()->id)->where('status', 2)->get();
        $uncompleted_reports = Reports::with('reports_subjects')->where('status', 0)->get();
        return view('employee.reports.index', compact('completed_reports', 'completed_reports', 'uncompleted_reports'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('employee.reports.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $report = Reports::create([
            'departments_id' => !is_null(Auth::user()->departments) ? Auth::user()->departments->id : NULL,
            'branches_id' => !is_null(Auth::user()->branches) ? Auth::user()->branches->id : NULL,
            'user_id' => Auth::user()->id,
            'report_date' => Carbon::now()
        ]);

        foreach ($request->subjects as $subject_key => $subject) {
            if (!empty($subject)) {
                ReportsSubjects::create([
                    'reports_id' => $report->id,
                    'project_name' => $request->project_name[$subject_key],
                    'subject' => $subject,
                ]);
            }
        }

        return redirect()->route('employee.reports.index')->with('success', Carbon::now()->format('d.m.Y').' tarixi üçün həftəlik hesabat daxil edildi');


    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
