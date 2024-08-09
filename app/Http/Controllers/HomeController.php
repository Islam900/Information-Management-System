<?php

namespace App\Http\Controllers;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Jmrashed\Zkteco\Lib\ZKTeco;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $zk = new ZKTeco('10.1.36.72');
        $connected = $zk->connect();

        if (!$connected) {
            return []; // Return empty array if connection fails
        }

        $firstAndLastLogs = [];

        $attendanceLog = $zk->getAttendance();
        $userLogs = [];

        foreach ($attendanceLog as $record) {
            $userName = User::where('biometric_id', $record['id'])->first()->name ?? "İstifadəçi yoxdur";

            if (!isset($userLogs[$userName])) {
                $userLogs[$userName] = [];
            }

            $userLogs[$userName][] = $record['timestamp'];
        }

        foreach ($userLogs as $userName => $timestamps) {
            $firstAndLastLogs[] = [
                'userName' => $userName,
                'firstTimestamp' => reset($timestamps),
                'lastTimestamp' => end($timestamps),
            ];
        }

        return $firstAndLastLogs;

        return view('admin.dashboard', compact('firstAndLastLogs'));
    }

    public function profile()
    {
        $user = Auth::user();
        return view('admin.profile', compact('user'));
    }

    public function update_profile (Request $request, $id)
    {
        $data = $request->all();

        $user = User::find($id);
        if ($request->password) {
            if (bcrypt($request->new_password) == $user->password) {
                return redirect()->route('admin.profile')
                    ->with('error', 'Daxil etdiyiniz yeni şifrə mövcud şifrə ilə eynidir!');
            } elseif (bcrypt($request->password) != $user->password) {
                return redirect()->route('admin.profile')
                    ->with('error', 'Mövcud şifrəni düzgün daxil etməmisiniz!');
            } else {
                $data['password'] = bcrypt($request->new_password);
            }
            $user->password = $data['password'];
        }

        $user->name = $request->name;
        $user->email = $request->email;
        $user->save();

        return redirect()->route('admin.profile')
            ->with('success', 'Məlumatlar müvəffəqiyyətlə dəyişdirildi.');
    }
}
