<?php

namespace App\Http\Controllers\Warehouseman;

use App\Http\Controllers\Controller;
use App\Models\Categories;
use Illuminate\Http\Request;

class WHMCategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Categories::all();
        return view('warehouseman.categories.index', compact('categories'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('warehouseman.categories.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->all();
        Categories::create($data);
        return redirect()->route('warehouseman.categories.index')->with('success', 'Məlumatlar əlavə edildi');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $category = Categories::findOrFail($id);
        return view('warehouseman.categories.edit', compact('category'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $data = $request->all();
        $categories = Categories::findOrFail($id);
        $categories->update($data);

        return redirect()->route('warehouseman.categories.index')->with('success', 'Məlumatlar dəyişdirildi');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $categories = Categories::findOrFail($id);
        $categories->delete();
        return redirect()->route('warehouseman.warehouseman.categories.index')->with('success', 'Məlumatlar silindi');
    }
}
