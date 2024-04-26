<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\TicketReasons;
use App\Models\Tickets;
use Auth;
use Illuminate\Http\Request;

class EmployeeTicketController extends Controller
{
    public function index()
    {
        $tickets = Auth::user()->tickets;
        return view('employee.tickets.index', compact('tickets'));
    }

    public function create()
    {
        $inventories = Auth::user()->inventories;
        $reasons = TicketReasons::where('status', 1)->get();
        return view('employee.tickets.create', compact('reasons', 'inventories'));
    }

    public function store(Request $request)
    {
        Tickets::create([
            'user_id' => Auth::user()->id,
            'helpdesk_id' => NULL,
            'ticket_reasons_id' => $request->ticket_reasons_id,
            'inventories_id' => $request->inventories_id,
            'ticket_number' => '#TICKET-NO-' . rand(0, 999999),
            'status' => 0,
            'rate' => 0,
            'note' => $request->note,
        ]);

        return redirect()->route('employee.tickets.index')->with('success', 'Texniki dəstək bileti yaradıldı');
    }

    public function update_ticket(Request $request)
    {
        $ticket = Tickets::where('ticket_number', $request->ticket_number)->first();
        if($ticket)
        {
            $ticket->ticket_status = 1;
            $ticket->rate = $request->ticket_rating;

            if ($ticket->save()) {
                return response()->json([
                    'notification' => 'Bilet məlumatları dəyişdirildi',
                    'route' => route('employee.tickets.index'),
                    'status' => 200
                ]);
            }
            else
            {
                return response()->json([
                    'notification' => 'Xəta',
                    'route' => route('employee.tickets.index'),
                    'status' => 500
                ]);
            }
        }
        else
        {
            return response()->json([
                'notification' => 'Bilet tapılmadı',
                'route' => route('employee.tickets.index'),
                'status' => 404
            ]);
        }
    }
}
