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
        $uncompleted_reports = Reports::with('reports_subjects')->where('user_id', Auth::user()->id)->where('status', 0)->first();

        return view('employee.reports.index', compact( 'completed_reports', 'uncompleted_reports'));
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

    public function confirm_reports(Request $request)
    {
        $report = Reports::where('user_id', Auth::user()->id)->where('status', 0)->first();

        if($report)
        {
            $report->reports_subjects()->update(['status' => 1]);
            $report->status = 1;
            $report->report_date = Carbon::now();
            if($report->save())
            {
                return response()->json(
                    [
                        'message' => 'Həftəlik hesabat müvəffəqiyyətlə göndərildi',
                        'icon' => 'success',
                        'route' => route('employee.reports.index'),
                    ], 200);
            } else {
                return response()->json(
                    [
                        'message' => 'Xəta baş verdi',
                        'icon' => 'error',
                    ], 500);
            }

        } else {
            return response()->json(
                [
                    'message' => 'Hesabat tapılmadı',
                    'icon' => 'info',
                ], 404);
        }







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
