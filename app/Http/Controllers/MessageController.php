<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MessageController extends Controller
{
    public function index()
    {
        return view('admin.messages.index');
    }
    public function sendMessage(Request $request)
    {
        $request->validate([
            'to_user_id' => 'required|exists:users,id',
            'message' => 'required|string',
        ]);

        $message = Message::create([
            'from_user_id' => Auth::id(),
            'to_user_id' => $request->to_user_id,
            'message' => $request->message,
        ]);

        // Olayı tetikle (WebSocket veya diğer dinleyiciler için)
        event(new \App\Events\MessageSent($message));

        return response()->json(['message' => 'Message sent successfully']);
    }

    public function getMessages($userId)
    {
        $messages = Message::where(function ($query) use ($userId) {
            $query->where('from_user_id', Auth::id())
                ->orWhere('to_user_id', Auth::id());
        })->where(function ($query) use ($userId) {
            $query->where('from_user_id', $userId)
                ->orWhere('to_user_id', $userId);
        })->get();

        return response()->json($messages);
    }
}
