<?php

namespace App\Http\Controllers;

use App\Models\Departments;
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

    public function get_department_data(Request $request)
    {
        $department = Departments::with('branches.positions.users')->find($request->id);
        if(!$department){
            return response()->json([
                'status' => false,
                'data' => []
            ]);
        }
        return response()->json([
            'status' => true,
            'data' => $department
        ]);
    }
}
