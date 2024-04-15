<?php

namespace App\Http\Controllers\Warehouseman;

use App\Http\Controllers\Controller;
use App\Models\Categories;
use App\Models\Invoices;
use App\Models\Products;
use App\Models\Vendors;
use Illuminate\Http\Request;

class WHMInvoicesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $invoices = Invoices::all();
        return view('warehouseman.invoices.index', compact('invoices'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $cats = Categories::where('status', 1)->get();
        $vendors = Vendors::where('status', 1)->get();
        return view('warehouseman.invoices.create', compact('cats', 'vendors'));
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


        $invoice = Invoices::create([
            'vendors_id' => $request->vendors_id,
            'e_invoice_number' => $request->e_invoice_number ?? NULL,
            'total_amount' => $total_amount,
            'note' => $request->note
        ]);


        foreach ($request->product_name as $key => $product) {
            Products::create([
                'invoices_id' => $invoice->id ?? NULL,
                'categories_id' => $request->categories_id[$key],
                'material_type' => $request->material_type[$key],
                'avr_code' => $request->avr_code[$key],
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

        return redirect()->route('warehouseman.invoices.index')->with('success', 'Məlumatlar daxil edildi');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $invoice = Invoices::with('products')->find($id);
        return view('warehouseman.invoices.show', compact('invoice'));
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
