<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class CheckRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, $role): Response
    {
        $ourRoles = ['employee', 'warehouseman', 'hr', 'finance', 'administrator'];
        // $userRoles = ['employee', 'warehouseman'];
        $userRolesArray = explode(',', Auth::user()->type);
        

        $unassignedRoles = array_diff($ourRoles, $userRolesArray);


        
        if(Auth::check() && in_array($role, $userRolesArray))
        {
            return $next($request);
        }
        abort(403, 'İcazə təyin edilməyib');
    }
}
