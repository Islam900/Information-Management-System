<?php

namespace App\Http\Controllers;

use App\Models\Departments;
use App\Models\DepartmentTicketSubjects;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class GeneralController extends Controller
{
    public function update_user_notf_status(Request $request)
    {
        $user = Auth::user();
        $user->read_notf = 1;
        $user->save();

        return response()->json([
            'status' => true,
            'icon' => 'success',
            'title' => 'Bildiriş!',
            'message' => 'Məlumatla tanış oldunuz!'
        ]);
    }

    public function get_department_ticket_subject(Request $request)
    {
        $subjects = DepartmentTicketSubjects::where('departments_id', $request->value)->get();
        if($subjects->count() == 0){
            return response()->json([
                'status' => false,
                'message' => "Bu departament üçün təyin olunan bilet səbəbləri yoxdur",
                'subjects' => []
            ]);
        }
        return response()->json([
            'status' => true,
            'message' => "Bilet səbəbləri tapıldı",
            'subjects' => $subjects
        ]);

    }


    public function get_department_data(Request $request)
    {
        $department = Departments::with('branches.positions.users')->find($request->id);

        if (!$department) {
            return response()->json([
                'status' => false,
                'data' => []
            ]);
        }

        $data = [
            'name' => $department->name,
            'branches' => $department->branches->map(function ($branch) {
                return [
                    'name' => $branch->name,
                    'positions' => $branch->positions->map(function ($position) {
                        return [
                            'name' => $position->name
                        ];
                    })->toArray()
                ];
            })->toArray()
        ];

        return response()->json([
            'status' => true,
            'data' => $data
        ]);
    }
}
