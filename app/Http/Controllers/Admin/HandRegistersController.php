<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Categories;
use App\Models\HandRegisters;
use App\Models\Products;
use App\Models\Stocks;
use App\Models\Vendors;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class HandRegistersController extends Controller
{
    public function index()
    {
        $registers = HandRegisters::all();
        return view('admin.hand-registers.index', compact('registers'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Categories::whereNull('parent_id')->where('status', 1)->get();
        $vendors = Vendors::where('status', 1)->get();
        return view('admin.hand-registers.create', compact('categories', 'vendors'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $total_product_price = 0;
        $products = [];
        foreach ($request->product_name as $product_key => $item) {
            $unical_code = Str::random(10);
            if($request->material_type[$product_key] != 'Mal-material') {
                for ($i = 0; $i < $request->purchase_count[$product_key]; $i++) {
                    $rowName = $request->unique_row_name[$product_key];
                    $clean_code = $request->$rowName[$i];
                    $products[] = [
                        'warehouses_id' => $request->warehouses_id,
                        'invoices_id' => NULL,
                        'hand_registers_id' => NULL,
                        'categories_id' => $request->subcategories_id[$product_key],
                        'unical_code' => $unical_code,
                        'material_type' => $request->material_type[$product_key],
                        'avr_code' => $request->material_type[$product_key] == 'Əsas inventar' ? NULL : $clean_code,
                        'serial_number' => $request->material_type[$product_key] != 'Əsas inventar' ? NULL : $clean_code,
                        'product_name' => $item,
                        'price' => $request->price[$product_key],
                        'size' => $request->size[$product_key],
                        'inventory_cost' => $request->inventory_cost[$product_key],
                        'activity_status' => $request->activity_status[$product_key],
                        'status' => $request->status[$product_key]
                    ];
                    $total_product_price += $request->price[$product_key];
                }
            }else {
                $products[] = [
                    'warehouses_id' => $request->warehouses_id,
                    'invoices_id' => NULL,
                    'hand_registers_id' => NULL,
                    'categories_id' => $request->subcategories_id[$product_key],
                    'unical_code' => $unical_code,
                    'material_type' => $request->material_type[$product_key],
                    'avr_code' => NULL,
                    'serial_number' => NULL,
                    'product_name' => $item,
                    'price' => $request->price[$product_key],
                    'size' => $request->size[$product_key],
                    'inventory_cost' => $request->inventory_cost[$product_key],
                    'activity_status' => $request->activity_status[$product_key],
                    'status' => $request->status[$product_key]
                ];
            }


            $stock_data = [
                'warehouses_id' => $request->warehouses_id,
                'product_unical_code' => $unical_code,
                'purchase_count' => $request->purchase_count[$product_key],
                'stock_count' => $request->purchase_count[$product_key],
            ];

            Stocks::create($stock_data);
        }

        $invoice = Invoices::create([
            'vendors_id' => $request->vendors_id,
            'categories_id' => $request->main_categories_id,
            'e_invoice_number' => $request->e_invoice_number,
            'e_invoice_serial_number' => $request->e_invoice_serial_number,
            'total_amount' => $total_product_price,
            'edv_total_amount' => $total_product_price + $total_product_price * 0.18,
            'note' => $request->note,
            'e_invoice_date' => $request->e_invoice_date
        ]);

        Products::insert(array_map(function ($data) use ($invoice) {
            $data['invoices_id'] = $invoice->id;
            return $data;
        }, $products));

        return redirect()->route('admin.hand-registers.index')->with('success', 'Məlumatlar daxil edildi');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $register = HandRegisters::with('products')->find($id);
        return view('admin.hand-registers.show', compact('register'));
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
