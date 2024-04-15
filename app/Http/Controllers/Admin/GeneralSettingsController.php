<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Branches;
use App\Models\GeneralSettings;
use App\Models\TicketReasons;
use App\Models\User;
use App\Models\Departments;
use Illuminate\Http\Request;

class GeneralSettingsController extends Controller
{
    public function index()
    {
        $item = GeneralSettings::first();
        $departments = Departments::where('status', 1)->get();
        $branches = Branches::where('status', 1)->get();
        $users = User::all();
        $reasons = TicketReasons::all();
        return view('admin.general-settings.index', compact('item', 'departments', 'branches', 'users', 'reasons'));
    }

    public function update_general_settings(Request $request)
    {
        $general_settings = GeneralSettings::updateOrCreate(
            ['id' => 1],
            [
                'welcome_message' => $request->welcome_message ?? NULL,
                'repair_mode' => isset($request->repair_mode) && $request->repair_mode == "on" ? 1 : 0,
                'repair_mode_message' => $request->repair_mode_message ?? NULL,
                'weekly_report_module' => isset($request->weekly_report_module) && $request->weekly_report_module == "on" ? 1 : 0,
                'ticket_module' => isset($request->ticket_module) && $request->ticket_module == "on" ? 1 : 0,
                'delivery_act_generation' => isset($request->delivery_act_generation) && $request->delivery_act_generation == "on" ? 1 : 0,
                'delivery_act_content' => $request->delivery_act_content ?? NULL,
                'delivery_to_another_employee_act_generation' => isset($request->delivery_to_another_employee_act_generation) && $request->delivery_to_another_employee_act_generation == "on" ? 1 : 0,
                'delivery_to_another_employee_act_content' => $request->delivery_to_another_employee_act_content ?? NULL,
                'notification_module' => isset($request->notification_module) && $request->notification_module == "on" ? 1 : 0,
                'notification_content' => $request->notification_content ?? NULL,
                'hr_blog_module' => isset($request->hr_blog_module) && $request->hr_blog_module == "on" ? 1 : 0
            ]
        );

        return redirect()->back()->with('success', 'Məlumatlar dəyişdirildi');

    }

    public function store_ticket_reasons(Request $request)
    {
        TicketReasons::create([
            'reason' => $request->reason,
            'status' => 1
        ]);

        return redirect()->back()->with('success', 'Məlumatlar əlavə edildi');
    }

}
