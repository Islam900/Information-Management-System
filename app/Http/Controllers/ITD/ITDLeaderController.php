<?php

namespace App\Http\Controllers\ITD;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ITDLeaderController extends Controller
{
    public function index()
    {
        return view('itd-leader.dashboard');
    }

    public function update_profile(\http\Env\Request $request)
    {
        $user = Auth::user();
        $user->name = $request->name;
        $user->email = $request->email;
        if ($request->filled('password')) {
            $user->password = bcrypt($request->password);
        }
        $user->save();

        return redirect()->back()->with('succes', 'Məlumatlar dəyişdirildi');
    }

}
