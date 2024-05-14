<?php

namespace App\Http\Controllers\ITD;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\AssetsRequests;
use App\Models\AssetsRequestsDetails;

class ITDAssetsRequestsController extends Controller
{
    public function index() {
        print_r("1");
        $assets= AssetsRequests::with('user')->get();
        return view('itd-leader.assets-requests.index', compact('assets'));
    }

    public function submit(Request $request, $detail_id) {
        $detail = AssetsRequestsDetails::findOrFail($detail_id);
        $detail->status = 2;
        $detail->save();
        return redirect()->back()->with('success', 'Mal-material sorğusu təsdiq edildi.');
    }
}
