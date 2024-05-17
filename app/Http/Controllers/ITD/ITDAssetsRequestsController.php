<?php

namespace App\Http\Controllers\ITD;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\AssetsRequests;
use App\Models\AssetsRequestsDetails;

class ITDAssetsRequestsController extends Controller
{
    public function index() {
        $current_user_id = Auth::user()->assets_requests_id;
        $assets = AssetsRequests::with('user')
            ->whereHas('assets_requests_details', function ($query) use ($current_user_id) {
                $query->where('assets_requests_id', '<', $current_user_id);
            })
            ->get();
        dd($assets);

        return view('itd-leader.assets-requests.index', compact('assets'));
    }

    public function submit(Request $request, $detail_id) {
        $detail = AssetsRequestsDetails::findOrFail($detail_id);
        $detail->status = 2;
        $detail->save();
        return redirect()->back()->with('success', 'Mal-material sorğusu təsdiq edildi.');
    }
}
