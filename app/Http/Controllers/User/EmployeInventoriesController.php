<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EmployeInventoriesController extends Controller
{
    public function index()
    {
        $inventories = Auth::user()->inventories;
        return view('employee.inventories.index', compact('inventories'));
    }
}
