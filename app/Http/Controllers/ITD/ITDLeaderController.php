<?php

namespace App\Http\Controllers\ITD;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ITDLeaderController extends Controller
{
    public function index() {
        $assets= AssetsRequests::with('user')->get();
        return view('warehouseman.assets-requests.index', compact('assets'));
    }

    public function submit(Request $request, $detail_id) {
        $detail = AssetsRequestsDetails::findOrFail($detail_id);
        $detail->status = 2;
        $detail->save();
        return redirect()->back()->with('success', 'Asset request detail submitted successfully.');
    }
}
