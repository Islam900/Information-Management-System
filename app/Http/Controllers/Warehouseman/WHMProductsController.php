<?php

namespace App\Http\Controllers\Warehouseman;

use App\Http\Controllers\Controller;
use App\Models\Products;
use Illuminate\Http\Request;

class WHMProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Products::all();
        return view('warehouseman.products.index', compact('products'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->all();
        Products::create($data);
        return redirect()->route('warehouseman.products.index')->with('success', 'Məlumatlar əlavə edildi');
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
        $products = Products::findOrFail($id);
        return view('warehouseman.products.edit', compact('products'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $data = $request->all();
        $products = Products::findOrFail($id);
        $products->update($data);

        return redirect()->route('warehouseman.products.index')->with('success', 'Məlumatlar dəyişdirildi');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $products = Products::findOrFail($id);
        $products->delete();
        return redirect()->route('warehouseman.warehouseman.products.index')->with('success', 'Məlumatlar silindi');
    }
}
