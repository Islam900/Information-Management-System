<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Reports;
use App\Models\ReportsSubjects;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EmployeeReportsSubjectsController extends Controller
{
    function update_reports_subjects(Request $request)
    {
        $subjects = ReportsSubjects::find($request->data_id);
        if ($subjects) {
            $subjects->status = $request->status;

            if ($subjects->save()) {
                return response()->json(
                    [
                        'message' => 'Tapşırıq həftəlik hesabat tərkibinə əlavə olundu',
                        'icon' => 'success',
                    ], 200);
            } else {
                return response()->json(
                    [
                        'message' => 'Xəta baş verdi',
                        'icon' => 'error',
                    ], 406);
            }


        } else {
            return response()->json(
                [
                    'message' => 'Tapşırıq tapılmadı',
                    'icon' => 'error',
                ], 404);
        }
    }

    function create_reports_subjects(Request $request)
    {
        $subject = ReportsSubjects::create([
            'reports_id' => NULL,
            'project_name' => $request->project_name ?? NULL,
            'subject' => $request->subject_content ?? NULL,
            'status' => $request->status
        ]);

        if ($subject) {
            return response()->json(
                [
                    'message' => 'Tapşırıq görüləcək işlər siyahısına əlavə edildi',
                    'icon' => 'success',
                    'subjects' => $subject,
                ], 200);
        } else {
            return response()->json(
                [
                    'message' => 'Tapşırıq əlavə edilmədi',
                    'icon' => 'error',
                ], 406);
        }

    }

    function delete_reports_subjects(Request $request)
    {
        $subject_const_id = $request->data_id;
        $subject = ReportsSubjects::find($request->data_id);
        if ($subject) {
            if ($subject->delete())
            {
                return response()->json(
                    [
                        'message' => 'Tapşırıq müvəffəqiyyətlə silindi',
                        'icon' => 'success',
                        'subject_id' => $subject_const_id,
                    ], 200);
            }
            else {
                return response()->json(
                    [
                        'message' => 'Xəta baş verdi',
                        'icon' => 'error',
                    ], 406);
            }
        }
        else
        {
            return response()->json(
            [
                'message' => 'Tapşırıq tapılmadı',
                'icon' => 'error',
            ], 404);
        }
    }
}
