<?php

namespace App\Http\Controllers\Warehouseman;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class WarehousemanController extends Controller
{
    public function index()
    {
        return view('warehouseman.warehouseman');
    }
}
