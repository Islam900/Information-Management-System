<?php

use App\Http\Controllers\User\TicketController;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\User\{
    EmployeeController,
    EmployeInventoriesController,
    EmployeeTicketController,
};

use \App\Http\Controllers\Admin\{
    DepartmentsController,
    BranchesController,
    PositionsController,
    RoomsController,
    InventoriesController,
    InvoicesController,
    TicketsController,
    GeneralSettingsController,
    VendorsController,
    CategoriesController,
    ProductsController,
    StructureController,
    UsersController
};

use \App\Http\Controllers\Warehouseman\{
    WarehousemanController,
    WHMCategoriesController,
    WHMInventoriesController,
    WHMInvoicesController,
    WHMProductsController,
    WHMVendorsController
};

use \App\Http\Controllers\Support\{
  SupportController,
  SupportTicketsController
};

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/


if (env('APP_ENV') === 'production') {
    URL::forceScheme('https');
}


Route::get('/', function () {
    return redirect()->route('login');
});

Auth::routes();

Route::prefix('admin')->name('admin.')->middleware(['auth', 'check_role:administrator'])->group(function () {
    Route::get('/dashboard', [App\Http\Controllers\HomeController::class, 'index'])->name('dashboard');
    Route::resource('departments', DepartmentsController::class);
    Route::resource('branches', BranchesController::class);
    Route::resource('positions', PositionsController::class);
    Route::resource('rooms', RoomsController::class);
    Route::resource('vendors', VendorsController::class);
    Route::resource('categories', CategoriesController::class);
    Route::resource('products', ProductsController::class);
    Route::resource('invoices', InvoicesController::class);
    Route::resource('inventories', InventoriesController::class);
    Route::resource('tickets', TicketsController::class);
    Route::get('inventories/{id}/refund', [InventoriesController::class, 'refund'])->name('inventories.refund');
    Route::get('structure', [StructureController::class, 'index'])->name('structures.index');
    Route::resource('users', UsersController::class);
    Route::get('general-settings', [GeneralSettingsController::class, 'index'])->name('general-settings.index');
    Route::post('update-general-settings', [GeneralSettingsController::class, 'update_general_settings'])->name('update-general-settings');
    Route::post('store-ticket-reasons', [GeneralSettingsController::class, 'store_ticket_reasons'])->name('store-ticket-reasons');


    Route::get('logs', [\App\Http\Controllers\LogController::class, 'logs'])->name('logs');
    Route::post('get-branches-by-department', [BranchesController::class, 'get_branches_by_department'])->name('get-branches-by-department');
    Route::post('get-positions-by-branch', [PositionsController::class, 'get_positions_by_branch'])->name('get-positions-by-branch');
    Route::post('get-positions-by-management-board', [PositionsController::class, 'get_positions_by_management_board'])->name('get-positions-by-management-board');
    Route::post('get-positions-by-null-department', [PositionsController::class, 'get_positions_by_null_department'])->name('get-positions-by-null-department');
    Route::post('get-inventories-by-user', [TicketsController::class, 'get_inventories_by_user'])->name('get-inventories-by-user');
});

Route::prefix('warehouseman')->name('warehouseman.')->middleware(['auth', 'check_role:warehouseman'])->group(function () {
    Route::get('/warehouseman', [WarehousemanController::class, 'index'])->name('warehouseman');
    Route::resource('vendors', WHMVendorsController::class);
    Route::resource('categories', WHMCategoriesController::class);
    Route::resource('products', WHMProductsController::class);
    Route::resource('invoices', WHMInvoicesController::class);
    Route::resource('inventories', WHMInventoriesController::class);
    Route::get('inventories/{id}/refund', [WHMInventoriesController::class, 'refund'])->name('inventories.refund');
});

Route::prefix('employee')->name('employee.')->middleware(['auth', 'check_role:employee'])->group(function () {
    Route::get('/home', [EmployeeController::class, 'index'])->name('home');
    Route::get('employee-inventories', [EmployeInventoriesController::class, 'index'])->name('employee-inventories');
    Route::resource('tickets', EmployeeTicketController::class);
});

Route::prefix('support')->name('support.')->middleware(['auth', 'check_role:support'])->group(function () {
    Route::get('/home', [SupportController::class, 'index'])->name('home');
    Route::resource('tickets', SupportTicketsController::class);
    Route::get('my-tickets', [SupportTicketsController::class, 'my_tickets'])->name('my-tickets');
    Route::post('accept-ticket', [SupportTicketsController::class, 'accept_ticket'])->name('accept-ticket');
    Route::post('update-ticket', [SupportTicketsController::class, 'update_ticket'])->name('update-ticket');
});
