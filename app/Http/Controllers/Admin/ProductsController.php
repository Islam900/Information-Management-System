<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Products;
use App\Models\Stocks;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $stocks = DB::table('stocks as s')
            ->leftJoin('products as p', 's.product_unical_code', '=', 'p.unical_code')
            ->leftJoin('categories as c', 'p.categories_id', '=', 'c.id')
            ->leftJoin('invoices as inv', 'p.invoices_id', '=', 'inv.id')
            ->leftJoin('hand_registers as hr', 'p.hand_registers_id', '=', 'hr.id')
            ->leftJoin('vendors as v', function ($join) {
                $join->on('inv.vendors_id', '=', 'v.id')
                    ->orOn('hr.vendors_id', '=', 'v.id');
            })
            ->select('p.product_name', 'p.size', 'p.material_type', 'p.status','p.activity_status' ,'inv.e_invoice_number', 'inv.e_invoice_serial_number', 'inv.e_invoice_date' ,'hr.register_number', 'c.name as category_name', 's.*', 'v.name as vendor_name')
            ->groupBy('p.product_name', 'p.material_type', 'p.size', 'p.status','p.activity_status' ,'inv.e_invoice_number', 'inv.e_invoice_date','inv.e_invoice_serial_number', 'hr.register_number' , 'category_name', 's.id', 's.warehouses_id', 's.product_unical_code', 's.purchase_count', 's.stock_count', 's.created_at', 's.updated_at', 'v.name')
            ->get();

        return view('admin.products.index', compact('stocks'));
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
        return redirect()->route('admin.products.index')->with('success', 'Məlumatlar əlavə edildi');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {

    }

    public function details(Request $request)
    {
        $products = Products::where('unical_code', $request->productCode)->get();
        $users = User::where('type', 'employee')->get();
        return view('admin.warehouses.products.details', compact('products', 'users'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $products = Products::findOrFail($id);
        return view('admin.products.edit', compact('products'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $data = $request->all();
        $products = Products::findOrFail($id);
        $products->update($data);

        return redirect()->route('admin.products.index')->with('success', 'Məlumatlar dəyişdirildi');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $products = Products::findOrFail($id);
        $products->delete();
        return redirect()->route('admin.admin.products.index')->with('success', 'Məlumatlar silindi');
    }
}
