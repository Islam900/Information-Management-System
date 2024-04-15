<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Branches;
use App\Models\Departments;
use App\Models\Positions;
use App\Models\Rooms;
use App\Models\User;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::all();
        return view('admin.users.index', compact('users'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $departments = Departments::where('status', 1)->get();
        $branches = Branches::where('status', 1)->get();
        $management_board = Positions::where('departments_id', NULL)->where('branches_id', NULL)->get();
        $positions = Positions::where('status', 1)->whereNot('departments_id', NULL)->get();
        $rooms = Rooms::where('status', 1)->get();

        return view('admin.users.create', compact('departments', 'branches', 'rooms', 'positions', 'management_board'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $data['branches_id'] = $request->branches_id === "NULL" ? NULL : $request->branches_id;
        $data['password'] = bcrypt($request->email);
        User::create($data);

        return redirect()->route('admin.users.index')->with('success', 'Məlumatlar əlavə edildi');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $user = User::find($id);
        return view('admin.users.show', compact('user'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $departments = Departments::where('status', 1)->get();
        $branches = Branches::where('status', 1)->get();
        $rooms = Rooms::where('status', 1)->get();
        $management_board = Positions::where('departments_id', NULL)->where('branches_id', NULL)->get();
        $positions = Positions::where('status', 1)->whereNot('departments_id', NULL)->get();

        $user = User::findOrFail($id);
        return view('admin.users.edit', compact('user', 'departments', 'branches', 'rooms', 'positions', 'management_board'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $data = $request->all();
        if (isset($data['password'])) {
            $data['password'] = bcrypt($request->password);
        }
        $user = User::findOrFail($id);
        $user->update($data);

        return redirect()->route('admin.users.index')->with('success', 'Məlumatlar dəyişdirildi');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
