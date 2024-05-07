<?php

namespace App\Http\Controllers\Warehouseman;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\AssetsRequests;

class WHMAssetsController extends Controller
{
    public function index() {

        $assets= AssetsRequests::all();
        return view('warehouseman.assets-requests.index', compact('assets'));

    }
}
