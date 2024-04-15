<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\GeneralSettings;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\LogController;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    //    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    //    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function showLoginForm()
    {
        return view('auth.login');
    }
    public function login(Request $request)
    {
        $general_settings = GeneralSettings::first();
        $repair_mode = $general_settings->repair_mode;

        $credentials = $request->only('email', 'password');
        if (Auth::attempt($credentials)) {
            $user = Auth::user();

            if($user->type != 'administrator')
            {
                if ($repair_mode == 1) {
                    $site_under_construction_text = $general_settings->repair_mode_message;
                    Auth::logout();
                    return view('site-under-construction', compact('site_under_construction_text'));
                }
            }

            (new LogController())->create_logs($user->name . ' sistemə giriş etdi.', 'Sistemə giriş');
            if (Auth::check() && $user->type == 'administrator') {
                return redirect()->route('admin.dashboard')->with('login_success', 'Sistemə daxil oldunuz');
            } elseif (Auth::check() && $user->type == 'warehouseman') {
                return redirect()->route('warehouseman.warehouseman')->with('login_success', 'Sistemə daxil oldunuz');
            } elseif (Auth::check() && $user->type == 'employee') {
                return redirect()->route('employee.home')->with('login_success', 'Sistemə daxil oldunuz');
            } elseif (Auth::check() && $user->type == 'support') {
                return redirect()->route('support.home')->with('login_success', 'Sistemə daxil oldunuz');
            }
        }
        return redirect()->back()->withInput(request()->only('email'))->with('login_error', 'Daxil etdiyiniz məlumatlar doğru deyil');
    }
    public function logout(Request $request)
    {

        (new LogController())->create_logs(Auth::user()->name . ' sistemdən çıxış etdi.', 'Sistemdən çıxış');
        Auth::logout();
        return redirect('/');
    }
}
