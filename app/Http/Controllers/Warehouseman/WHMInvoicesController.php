<?php

namespace App\Http\Controllers\Warehouseman;

use App\Http\Controllers\Controller;
use App\Models\Categories;
use App\Models\HandRegisters;
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
        $categories = Categories::whereNull('parent_id')->where('status', 1)->get();
        $vendors = Vendors::where('status', 1)->get();
        $registers = HandRegisters::whereNull('invoices_id')->get();
        return view('warehouseman.invoices.create', compact('categories', 'vendors', 'registers'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        if ($request->register_or_new == "new") {
            $total_amount = 0;
            $productsData = [];

            foreach ($request->price as $pr_key => $price) {
                $total_amount += $price * $request->purchase_count[$pr_key];
                $productsData[] = [
                    'invoices_id' => null,
                    'categories_id' => $request->subcategories_id[$pr_key],
                    'material_type' => $request->material_type[$pr_key],
                    'avr_code' => null,
                    'serial_number' => $request->serial_number[$pr_key],
                    'product_name' => $request->product_name[$pr_key],
                    'price' => $price,
                    'size' => $request->size[$pr_key],
                    'purchase_count' => $request->purchase_count[$pr_key],
                    'stock' => $request->purchase_count[$pr_key],
                    'inventory_cost' => $request->inventory_cost[$pr_key],
                    'activity_status' => $request->activity_status[$pr_key],
                    'status' => $request->status[$pr_key]
                ];
            }

            $invoice = Invoices::create([
                'vendors_id' => $request->vendors_id,
                'categories_id' => $request->main_categories_id,
                'e_invoice_number' => $request->e_invoice_number ?? null,
                'e_invoice_serial_number' => $request->e_invoice_serial_number ?? null,
                'total_amount' => $total_amount,
                'edv_total_amount' => $total_amount * 1.18,
                'note' => $request->note,
                'e_invoice_date' => $request->e_invoice_date
            ]);

            Products::insert(array_map(function ($data) use ($invoice) {
                $data['invoices_id'] = $invoice->id;
                return $data;
            }, $productsData));
        } else {
            $total_register_amount = HandRegisters::whereIn('id', $request->hand_registers_id)->sum('total_amount');
            $total_register_amount_edv = HandRegisters::whereIn('id', $request->hand_registers_id)->sum('edv_total_amount');

            $invoice = Invoices::create([
                'vendors_id' => HandRegisters::find($request->hand_registers_id[0])->vendors_id,
                'categories_id' => HandRegisters::find($request->hand_registers_id[0])->categories_id,
                'e_invoice_number' => $request->e_invoice_number ?? null,
                'e_invoice_serial_number' => $request->e_invoice_serial_number ?? null,
                'total_amount' => $total_register_amount,
                'edv_total_amount' => $total_register_amount_edv,
                'note' => $request->note,
                'e_invoice_date' => $request->e_invoice_date
            ]);

            HandRegisters::whereIn('id', $request->hand_registers_id)->update(['invoices_id' => $invoice->id]);

            Products::whereIn('hand_registers_id', $request->hand_registers_id)->update(['invoices_id' => $invoice->id]);
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
