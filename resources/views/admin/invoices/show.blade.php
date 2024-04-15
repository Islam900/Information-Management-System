@extends('admin.layouts.app')
@section('content')
    <div class="row mb-4">
        <div class="col-md-12 mb-4">
            <div class="card mt-4">
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center">
                        <button class="btn btn-lg btn-warning">
                            E-Qaimə nömrəsi : {{ $invoice->e_invoice_number }}
                        </button>
                        <button class="btn btn-lg btn-warning">
                            Ümumi məhsul sayı : {{ $invoice->products->count() }}
                        </button>
                        <button class="btn btn-lg btn-warning">
                            Alış tarixi : {{ \Carbon\Carbon::parse($invoice->created_at)->format('d.m.Y') }}
                        </button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table id="user-inventories-table" class="display table table-striped" style="width:100%">
                            <thead>
                            <tr>
                                <th>№</th>
                                <th>AVR kodu</th>
                                <th>İnventar adı</th>
                                <th>Kateqoriya</th>
                                <th>Material tipi</th>
                                <th>Ölçü</th>
                                <th>Aktivlik statusu</th>
                                <th>Alış statusu</th>
                                <th>Təhvil tarixi</th>
                            </tr>
                            </thead>
                            <tbody>
                            @forelse($invoice->products as $item)
                                <tr>
                                    <td>{{ $item->id }}</td>
                                    <td>{{ $item->avr_code }}</td>
                                    <td>{{ $item->product_name }}</td>
                                    <td>{{ $item->categories->name }}</td>
                                    <td>{{ $item->material_type }}</td>
                                    <td>{{ $item->size }}</td>
                                    <td>
                                        <button class="btn btn-{{$item->activity_status == 1 ? 'success' : 'danger'}}">
                                            {{ $item->activity_status == 1 ? 'Aktiv' : 'Deaktiv' }}
                                        </button>
                                    </td>
                                    <td>
                                        <button class="btn btn-primary">
                                            {{ $item->status }}
                                        </button>
                                    </td>
                                    <td>{{ \Carbon\Carbon::parse($item->created_at)->format('d.m.Y') }}</td>
                                </tr>
                            @empty
                                <tr>
                                    <td colspan="10" class="text-center">
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
