@extends('admin.layouts.app')
@section('content')
    <div class="row mb-4">
        <div class="col-md-12 mb-4">

            <div class="card">
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center">
                        <h3>İnventarlar</h3>
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table id="products-table" class="display table table-striped" style="width:100%">
                            <thead>
                            <tr>
                                <th>№</th>
                                <th>İnventar</th>
                                <th>Unikal kodu</th>
                                <th>Kateqoriya</th>
                                <th>E-qaimə</th>
                                <th>Əl qaiməsi</th>
                                <th>Təminatçı</th>
                                <th>Alış sayı</th>
                                <th>İstifadədə olan</th>
                                <th>Qalıq</th>
                                <th>Aktivlik statusu</th>
                                <th>Alış tarixi</th>
                                <th>Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach($stocks as $item)
                                <tr>
                                    <td>{{ $item->id }}</td>
                                    <td>{{$item->product_name}}</td>
                                    <td>{{$item->product_unical_code}}</td>
                                    <td>{{$item->category_name}}</td>
                                    <td>
                                        {{ $item->e_invoice_number.' '.$item->e_invoice_serial_number }}
                                    </td>
                                    <td>
                                        {{ $item->register_number }}
                                    </td>
                                    <td>
                                        {{ $item->vendor_name }}
                                    </td>
                                    <td>{{$item->purchase_count}} {{ $item->size }}</td>
                                    <td>{{$item->purchase_count - $item->stock_count}} {{ $item->size }}</td>
                                    <td class="text-{{$item->stock_count == 0 ? 'danger' : 'success'}}"><strong>{{$item->stock_count}} {{ $item->size }}</strong></td>
                                    <td>
                                        <button class="btn btn-sm btn-{{$item->activity_status == 1 ? 'success' : 'danger'}}">
                                            {{$item->activity_status == 1 ? 'Aktiv' : 'Deaktiv'}}
                                        </button>
                                    </td>
                                    <td>
                                        {{ !is_null($item->e_invoice_number) ? \Carbon\Carbon::parse($item->e_invoice_date)->format('d.m.Y') : \Carbon\Carbon::parse($item->register_date)->format('d.m.Y') }}
                                    </td>
                                    <td>
                                        <button class="btn btn-sm btn-primary">
                                            {{ $item->status }}
                                        </button>
                                    </td>
                                </tr>
                            @endforeach
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
            $('#products-table').DataTable();
        })

        @if (session('success'))
        const storeSuccess = "{{ session('success') }}";
        const SuccessAlert = Swal.fire({
            title: "Uğurlu!",
            text: storeSuccess,
            icon: "success"
        })
        SuccessAlert.fire();

        @php session()->forget('success') @endphp
        @endif


        @if (session('error'))
        const storeError = "{{ session('error') }}";
        const ErrorAlert = Swal.fire({
            title: "Xəta!",
            text: storeError,
            icon: "error"
        })
        ErrorAlert.fire();

        @php session()->forget('error') @endphp
        @endif
    </script>
@endsection
