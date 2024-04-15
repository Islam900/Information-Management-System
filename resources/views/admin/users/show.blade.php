@extends('admin.layouts.app')
@section('content')
    <div class="row mb-4">
        <div class="col-md-12 mb-4">
            <div class="card">
                <div class="card-header">
                    <h3>İstifadəçi məlumatları</h3>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="display table table-striped" style="width:100%">
                            <thead>
                            <tr>
                                <th>№</th>
                                <th>Ad soyad</th>
                                <th>Departament</th>
                                <th>Şöbə</th>
                                <th>Otaq</th>
                                <th>Email</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{{ $user->id }}</td>
                                <td>{{ $user->name}}</td>
                                <td>
                                    {{ $item->user->departments->name }}
                                </td>
                                <td>
                                    {{ !is_null($item->user->branches) ? $item->user->branches->name : '' }}
                                </td>
                                <td>
                                    {{ $item->user->room }}
                                </td>
                                <td>{{ $user->email}}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div class="card mt-4">
                <div class="card-header">
                    <h3>
                        Təhkim olunan inventarlar
                    </h3>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table id="user-inventories-table" class="display table table-striped" style="width:100%">
                            <thead>
                            <tr>
                                <th>№</th>
                                <th>E-Qaimə nömrəsi</th>
                                <th>İnventar nömrəsi</th>
                                <th>AVR kodu</th>
                                <th>İnventar adı</th>
                                <th>Kateqoriya</th>
                                <th>Material tipi</th>
                                <th>Ədəd</th>
                                <th>Aktivlik statusu</th>
                                <th>Alış statusu</th>
                                <th>Təhvil tarixi</th>
                            </tr>
                            </thead>
                            <tbody>
                            @forelse($user->inventories as $item)
                                <tr>
                                    <td>{{ $item->id }}</td>
                                    <td>{{ $item->products->invoices->e_invoice_number }}</td>
                                    <td>{{ $item->inventory_number}}</td>
                                    <td>{{ $item->products->avr_code }}</td>
                                    <td>{{ $item->products->product_name }}</td>
                                    <td>{{ $item->products->categories->name }}</td>
                                    <td>{{ $item->products->material_type }}</td>
                                    <td>{{ $item->products->size }}</td>
                                    <td>
                                        <button class="btn btn-{{$item->products->activity_status == 1 ? 'success' : 'danger'}}">
                                            {{ $item->products->activity_status == 1 ? 'Aktiv' : 'Deaktiv' }}
                                        </button>
                                    </td>
                                    <td>
                                        <button class="btn btn-primary">
                                            {{ $item->products->status }}
                                        </button>
                                    </td>
                                    <td>{{ \Carbon\Carbon::parse($item->created_at)->format('d.m.Y') }}</td>
                                </tr>
                            @empty
                                <tr>
                                    <td colspan="11" class="text-center">
                                        İnventar təhkim olunmayıb
                                    </td>
                                </tr>
                            @endforelse
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    </div>
@endsection

@section('js')
    <script>
        $(document).ready(function () {
            $('#user-inventories-table').DataTable();
        })
    </script>
@endsection
