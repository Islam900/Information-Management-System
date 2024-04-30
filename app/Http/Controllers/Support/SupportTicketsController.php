<?php

namespace App\Http\Controllers\Support;

use App\Http\Controllers\Controller;
use App\Models\Tickets;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SupportTicketsController extends Controller
{
    public function index()
    {
        $tickets = Tickets::with('user', 'ticket_reasons', 'appointments.products')->get();
        return view('support.tickets.index', compact('tickets'));
    }

    public function my_tickets()
    {
        $tickets = Auth::user()->my_tickets;
        return view('support.tickets.my-tickets', compact('tickets'));
    }

    public function accept_ticket(Request $request)
    {
        $ticket = Tickets::where('ticket_number', $request->ticket_number)->first();
        if($ticket)
        {
            $ticket->helpdesk_id = Auth::user()->id;

            if ($ticket->save()) {
                return response()->json([
                    'notification' => 'Bileti qəbul etdiniz',
                    'route' => route('support.my-tickets'),
                    'status' => 200
                ]);
            }
            else
            {
                return response()->json([
                    'notification' => 'Xəta',
                    'route' => route('support.tickets.index'),
                    'status' => 500
                ]);
            }
        }
        else
        {
            return response()->json([
                'notification' => 'Bilet tapılmadı',
                'route' => route('support.tickets.index'),
                'status' => 404
            ]);
        }
    }

    public function update_ticket(Request $request)
    {
        $ticket = Tickets::where('ticket_number', $request->ticket_number)->first();
        if($ticket)
        {
            $ticket->status = $request->ticket_status;

            if ($ticket->save()) {
                return response()->json([
                    'notification' => 'Bilet məlumatları dəyişdirildi',
                    'route' => route('support.my-tickets'),
                    'status' => 200
                ]);
            }
            else
            {
                return response()->json([
                    'notification' => 'Xəta',
                    'route' => route('support.tickets.index'),
                    'status' => 500
                ]);
            }
        }
        else
        {
            return response()->json([
                'notification' => 'Bilet tapılmadı',
                'route' => route('support.tickets.index'),
                'status' => 404
            ]);
        }
    }
}
