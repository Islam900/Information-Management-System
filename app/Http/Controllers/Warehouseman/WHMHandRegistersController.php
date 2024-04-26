<?php

namespace App\Http\Controllers\Warehouseman;

use App\Http\Controllers\Controller;
use App\Models\Categories;
use App\Models\HandRegisters;
use App\Models\Products;
use App\Models\Vendors;
use Illuminate\Http\Request;

class WHMHandRegistersController extends Controller
{
    public function index()
    {
        $registers = HandRegisters::all();
        return view('warehouseman.hand-registers.index', compact('registers'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Categories::whereNull('parent_id')->where('status', 1)->get();
        $vendors = Vendors::where('status', 1)->get();
        return view('warehouseman.hand-registers.create', compact('categories', 'vendors'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $total_amount = 0;
        foreach ($request->price as $pr_key => $price) {
            $total_amount += $price * $request->purchase_count[$pr_key];
        }


        $register = HandRegisters::create([
            'invoices_id' => NULL,
            'vendors_id' => $request->vendors_id,
            'categories_id' => $request->main_categories_id,
            'register_number' => $request->register_number ?? NULL,
            'total_amount' => $total_amount,
            'edv_total_amount' => $total_amount+($total_amount*1.18),
            'note' => $request->note,
            'register_date' => $request->register_date
        ]);


        foreach ($request->product_name as $key => $product) {
            Products::create([
                'invoices_id' => NULL,
                'hand_registers_id' => $register->id,
                'categories_id' => $request->subcategories_id[$key],
                'material_type' => $request->material_type[$key],
                'avr_code' => NULL,
                'serial_number' => $request->serial_number[$key],
                'product_name' => $request->product_name[$key],
                'price' => $request->price[$key],
                'size' => $request->size[$key],
                'purchase_count' => $request->purchase_count[$key],
                'stock' => $request->purchase_count[$key],
                'inventory_cost' => $request->inventory_cost[$key],
                'activity_status' => $request->activity_status[$key],
                'status' => $request->status[$key]
            ]);
        }

        return redirect()->route('warehouseman.hand-registers.index')->with('success', 'Məlumatlar daxil edildi');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $register = HandRegisters::with('products')->find($id);
        return view('warehouseman.hand-registers.show', compact('register'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
