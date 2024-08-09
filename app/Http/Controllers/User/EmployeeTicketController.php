<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Branches;
use App\Models\Departments;
use App\Models\DepartmentTicketSubjects;
use App\Models\TicketHistories;
use App\Models\TicketReasons;
use App\Models\Tickets;
use App\Models\User;
use Auth;
use Illuminate\Http\Request;
use function PHPUnit\Framework\containsEqual;

class EmployeeTicketController extends Controller
{
    public function index()
    {
        $tickets = Auth::user()->tickets;
        return view('employee.tickets.index', compact('tickets'));
    }

    public function create()
    {
        $departments = Departments::where('status', 1)->get();
        $branches = Branches::where('status', 1)->get();
        $users = User::all();
        return view('employee.tickets.create', compact('departments', 'branches', 'users'));
    }

    public function store(Request $request)
    {

        if($request->hasFile('file'))
        {
            $file = $request->file('file');
            $filename = time() . '.' . $file->getClientOriginalExtension();
            move_uploaded_file($file, public_path('ticket-documents/' . $filename));

        }

        $ticket = Tickets::create([
            'user_id' => Auth::user()->id,
            'operator_id' => NULL,
            'helpdesk_id' => NULL,
            'departments_id' => DepartmentTicketSubjects::find($request->department_ticket_subjects_id)->departments->id,
            'branches_id' => NULL,
            'department_ticket_subjects_id' => $request->department_ticket_subjects_id,
            'type' => $request->type,
            'subject' => $request->subject ?? NULL,
            'appointments_id' => $request->inventories_id,
            'ticket_number' => '#TICKET-NO-' . rand(0, 999999),
            'ticket_priority' => $request->ticket_priority,
            'status' => 0,
            'rate' => 0,
            'rate_comment' => NULL,
            'note' => $request->note ?? NULL
        ]);



        $ticket_history = TicketHistories::create([
            'tickets_id' => $ticket->id,
            'subject' => 'Yeni bilet yaradıldı',
            'description' => Auth::user()->name . ' tərəfindən ' . $ticket->ticket_number . ' nömrəli bilet yaradıldı.',
            'class' => 'success',

        ]);

        return redirect()->route('employee.tickets.index')->with('success', 'Bilet yaradıldı');
    }

    public function update_ticket(Request $request)
    {
        $ticket = Tickets::where('ticket_number', $request->ticket_number)->first();
        if ($ticket) {

            if($request->ticket_rating == "NULL")
            {
                $ticket->delete();

                return response()->json([
                    'notification' => 'Bilet müvəffəqiyyətlə silindi',
                    'route' => route('employee.tickets.index'),
                    'status' => 200
                ]);
            } else {
                $ticket->ticket_status = 1;
                $ticket->rate = $request->ticket_rating;

                if ($ticket->save()) {


                    $ticket_history = TicketHistories::create([
                        'tickets_id' => $ticket->id,
                        'subject' => 'Bilet statusu dəyişdirildi',
                        'description' => Auth::user()->name.' tərəfindən '. $ticket->ticket_number .' nömrəli bilet '. $ticket->rate .' qiymətləndirilmə ilə bağlandı.',
                        'class' => 'success',
                    ]);

                    return response()->json([
                        'notification' => 'Bilet məlumatları dəyişdirildi',
                        'route' => route('employee.tickets.index'),
                        'status' => 200
                    ]);
                } else {
                    return response()->json([
                        'notification' => 'Xəta',
                        'route' => route('employee.tickets.index'),
                        'status' => 500
                    ]);
                }
            }

        } else {
            return response()->json([
                'notification' => 'Bilet tapılmadı',
                'route' => route('employee.tickets.index'),
                'status' => 404
            ]);
        }
    }
}
