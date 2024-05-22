<?php

namespace App\Http\Controllers\ITD;

use Auth;
use App\Http\Controllers\Controller;
use App\Models\Reports;
use App\Models\User;
use Illuminate\Http\Request;
use DB;

class ITDReportsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $dates = Reports::select('report_date', DB::raw('count(*) as report_count'))
            ->groupBy('report_date')
            ->where('status', '!=', 0)
            ->get();

        $report_users_count = User::where('report_receiver_id', Auth::user()->id)->count();

        $persentages = [];
        foreach ($dates as $key => $value) {
            $persentages[$key] = round($value->report_count*100/$report_users_count);
        }
        return view('itd-leader.reports.index', compact('dates', 'persentages'));
    }

    /**
     * Show the form for creating a new resource.
     */

    public function details($date)
    {
        $reports = Reports::with('reports_subjects')->where('report_date', $date)->get();
        return view('itd-leader.reports.details', compact('reports'));
    }
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
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
