@extends('warehouseman.layouts.app')
<style>
    .invoice-details {
        display: flex;
        flex-wrap: wrap;
    }

    .invoice-detail {
        flex: 1;
        margin-right: 20px;
        margin-bottom: 20px;
    }

    .invoice-detail h3 {
        margin-bottom: 5px;
        font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif
    }
</style>
@section('content')
    <div class="row mb-4">
        <div class="col-md-12 mb-4">
            <div class="card mt-4">
                <div class="card-header">
                    <div class="invoice-details">
                        <div class="invoice-detail">
                            <h3>E-Qaimə nömrəsi / Seria nömrəsi :</h3>
                            <p>{{ $invoice->e_invoice_number. ' ' . $invoice->e_invoice_serial_number }}</p>
                        </div>

                        <div class="invoice-detail">
                            <h3>Əsas kateqoriya :</h3>
                            <p>{{ $invoice->categories->name }}</p>
                        </div>

                        <div class="invoice-detail">
                            <h3>Ümumi məhsul sayı :</h3>
                            <p>{{ $invoice->products->count() }} ədəd</p>
                        </div>

                        <div class="invoice-detail">
                            <h3>Ümumi məbləğ :</h3>
                            <p>{{ $invoice->total_amount }} AZN</p>
                        </div>

                        <div class="invoice-detail">
                            <h3>ƏDV daxil məbləğ :</h3>
                            <p>{{ $invoice->edv_total_amount }} AZN</p>
                        </div>

                        <div class="invoice-detail">
                            <h3>Alış tarixi :</h3>
                            <p>{{ \Carbon\Carbon::parse($invoice->e_invoice_date)->format('d.m.Y') }}</p>
                        </div>
                    </div>

                </div>

                <div class="card-body">
                    @if($invoice->hand_registers)
                        @foreach($invoice->hand_registers as $register)
                            <div class="card">
                                <div class="card-header">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <h3 class="text-primary">
                                            Qaimə nömrəsi : {{ $register->register_number }}
                                        </h3>
                                        <h3 class="text-primary">
                                            Qaimə məbləği: {{ $register->total_amount }} AZN ({{ $register->edv_total_amount }} AZN)
                                        </h3>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table id="user-inventories-table" class="display table table-striped"
                                               style="width:100%">
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
                                            @forelse($register->products as $item)
                                                <tr>
                                                    <td>{{ $item->id }}</td>
                                                    <td>{{ $item->avr_code }}</td>
                                                    <td>{{ $item->product_name }}</td>
                                                    <td>{{ $item->categories->name }}</td>
                                                    <td>{{ $item->material_type }}</td>
                                                    <td>{{ $item->size }}</td>
                                                    <td>
                                                        <button
                                                            class="btn btn-{{$item->activity_status == 1 ? 'success' : 'danger'}}">
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
                        @endforeach
                    @else
                        <div class="card">
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table id="user-inventories-table" class="display table table-striped"
                                           style="width:100%">
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
                                                    <button
                                                        class="btn btn-{{$item->activity_status == 1 ? 'success' : 'danger'}}">
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
                    @endif
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
