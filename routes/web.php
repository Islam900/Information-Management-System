<?php

use App\Http\Controllers\LogController;
use App\Http\Controllers\User\TicketController;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\User\{
    EmployeeController,
    EmployeInventoriesController,
    EmployeeTicketController,
    EmployeeReportsController,
    EmployeeReportsSubjectsController
};

use \App\Http\Controllers\Admin\{
    DepartmentsController,
    BranchesController,
    PositionsController,
    RoomsController,
    AppointmentsController,
    InvoicesController,
    TicketsController,
    GeneralSettingsController,
    VendorsController,
    CategoriesController,
    ProductsController,
    StructureController,
    UsersController,
    ProjectsController,
    ReportsController,
    HandRegistersController,
    LocalNumbersController,
    WarehousesController
};

use \App\Http\Controllers\Warehouseman\{
    WarehousemanController,
    WHMCategoriesController,
    WHMAppointmentsController,
    WHMInvoicesController,
    WHMProductsController,
    WHMVendorsController,
    WHMHandRegistersController,
    WHMWarehousesController
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


//if (env('APP_ENV') === 'production') {
//    URL::forceScheme('https');
//}


Route::get('/', function () {
    return redirect()->route('login');
});

Auth::routes();

/**
 * @return void
 */


// ADMIN ROUTES
Route::prefix('admin')->name('admin.')->middleware(['auth', 'check_role:administrator'])->group(function () {
    Route::get('/dashboard', [App\Http\Controllers\HomeController::class, 'index'])->name('dashboard');
    Route::get('profile', [\App\Http\Controllers\HomeController::class, 'profile'])->name('profile');
    Route::put('update-profile/{id}', [\App\Http\Controllers\HomeController::class, 'update_profile'])->name('update-profile');
    Route::resource('departments', DepartmentsController::class);
    Route::resource('branches', BranchesController::class);
    Route::resource('positions', PositionsController::class);
    Route::resource('rooms', RoomsController::class);
    Route::resource('vendors', VendorsController::class);
    Route::resource('categories', CategoriesController::class);
    Route::resource('products', ProductsController::class);
    Route::resource('invoices', InvoicesController::class);
    Route::resource('hand-registers', HandRegistersController::class);
    Route::resource('appointments', AppointmentsController::class);
    Route::resource('tickets', TicketsController::class);
    Route::resource('reports', ReportsController::class);
    Route::get('appointments/{id}/refund', [InventoriesController::class, 'refund'])->name('appointments.refund');
    Route::get('structure', [StructureController::class, 'index'])->name('structures.index');
    Route::resource('users', UsersController::class);
    Route::resource('local-numbers', LocalNumbersController::class);

    Route::resource('warehouses', WarehousesController::class);

    /* -------------------- GENERAL SETTINGS ---------------------- */
    Route::get('general-settings', [GeneralSettingsController::class, 'index'])->name('general-settings.index');
    Route::post('update-general-settings', [GeneralSettingsController::class, 'update_general_settings'])->name('update-general-settings');
    Route::post('store-ticket-reasons', [GeneralSettingsController::class, 'store_ticket_reasons'])->name('store-ticket-reasons');
    Route::post('update-ticket', [TicketsController::class, 'update_ticket'])->name('update-ticket');

    Route::post('store-technical-users', [GeneralSettingsController::class, 'store_technical_users'])->name('store-technical-users');
    Route::post('store-roles', [GeneralSettingsController::class, 'store_roles'])->name('store-roles');
    Route::post('store-permissions', [GeneralSettingsController::class, 'store_permissions'])->name('store-permissions');
    Route::post('add-permission-to-role', [GeneralSettingsController::class, 'add_permission_to_role'])->name('add-permission-to-role');

    Route::resource('projects', ProjectsController::class);


    Route::get('logs', [LogController::class, 'logs'])->name('logs');

    Route::post('get-branches-by-department', [BranchesController::class, 'get_branches_by_department'])->name('get-branches-by-department');
    Route::post('get-positions-by-branch', [PositionsController::class, 'get_positions_by_branch'])->name('get-positions-by-branch');
    Route::post('get-positions-by-management-board', [PositionsController::class, 'get_positions_by_management_board'])->name('get-positions-by-management-board');
    Route::post('get-positions-by-null-department', [PositionsController::class, 'get_positions_by_null_department'])->name('get-positions-by-null-department');
    Route::post('get-appointments-by-user', [TicketsController::class, 'get_inventories_by_user'])->name('get-appointments-by-user');
    Route::post('get-subcategories-by-main-category', [CategoriesController::class, 'get_subcategories_by_main_category'])->name('get-subcategories-by-main-category');
    Route::post('product-details', [ProductsController::class, 'details'])->name('product-details');

});


// WAREHOUSEMAN ROUTES
Route::prefix('warehouseman')->name('warehouseman.')->middleware(['auth', 'check_role:warehouseman'])->group(function () {
    Route::get('/warehouseman', [WarehousemanController::class, 'index'])->name('warehouseman');
    Route::get('profile', [WarehousemanController::class, 'profile'])->name('profile');
    Route::put('update-profile/{id}', [WarehousemanController::class, 'update_profile'])->name('update-profile');
    Route::resource('vendors', WHMVendorsController::class);
    Route::resource('categories', WHMCategoriesController::class);
    Route::resource('products', WHMProductsController::class);
    Route::resource('invoices', WHMInvoicesController::class);
    Route::resource('hand-registers', WHMHandRegistersController::class);
    Route::resource('appointments', WHMAppointmentsController::class);
    Route::resource('warehouses', WHMWarehousesController::class);
    Route::get('appointments/{id}/refund', [WHMAppointmentsController::class, 'refund'])->name('appointments.refund');
    Route::post('get-subcategories-by-main-category', [CategoriesController::class, 'get_subcategories_by_main_category'])->name('get-subcategories-by-main-category');
    Route::post('product-details', [ProductsController::class, 'details'])->name('product-details');

});


// EMPLOYEE ROUTES
Route::prefix('employee')->name('employee.')->middleware(['auth', 'check_role:employee'])->group(function () {
    Route::get('/home', [EmployeeController::class, 'index'])->name('home');
    Route::get('profile', [EmployeeController::class, 'profile'])->name('profile');
    Route::put('update-profile/{id}', [EmployeeController::class, 'update_profile'])->name('update-profile');
    Route::get('employee-appointments', [EmployeInventoriesController::class, 'index'])->name('employee-appointments');
    Route::resource('tickets', EmployeeTicketController::class);
    Route::resource('reports', EmployeeReportsController::class);
    Route::post('update-ticket', [EmployeeTicketController::class, 'update_ticket'])->name('update-ticket');

    Route::post('update-reports-subjects', [EmployeeReportsSubjectsController::class, 'update_reports_subjects'])->name('update-reports-subjects');
    Route::post('create-reports-subjects', [EmployeeReportsSubjectsController::class, 'create_reports_subjects'])->name('create-reports-subjects');
    Route::post('delete-reports-subjects', [EmployeeReportsSubjectsController::class, 'delete_reports_subjects'])->name('delete-reports-subjects');
});


// SUPPORT ROUTES
Route::prefix('support')->name('support.')->middleware(['auth', 'check_role:support'])->group(function () {
    Route::get('/home', [SupportController::class, 'index'])->name('home');
    Route::get('profile', [SupportController::class, 'profile'])->name('profile');
    Route::put('update-profile/{id}', [SupportController::class, 'update_profile'])->name('update-profile');
    Route::resource('tickets', SupportTicketsController::class);
    Route::get('my-tickets', [SupportTicketsController::class, 'my_tickets'])->name('my-tickets');
    Route::post('accept-ticket', [SupportTicketsController::class, 'accept_ticket'])->name('accept-ticket');
    Route::post('update-ticket', [SupportTicketsController::class, 'update_ticket'])->name('update-ticket');
});


// FINANCE ROUTES
