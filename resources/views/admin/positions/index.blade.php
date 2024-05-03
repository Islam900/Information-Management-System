@extends('admin.layouts.app')
@section('content')
    <div class="row mb-4">
        <div class="col-md-12 mb-4">


            <div class="card">
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center">
                        <h3>Vəzifələr</h3>

                        <a href="{{route('admin.positions.create')}}">
                            <button class="btn btn-success">
                                <span class="me-2">
                                    <i class="nav-icon i-Add-File"></i>
                                </span>
                                Yeni vəzifə
                            </button>
                        </a>
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table id="positions-table" class="display table table-hover" style="width:100%">
                            <thead>
                            <tr>
                                <th>№</th>
                                <th>Departament</th>
                                <th>Şöbə</th>
                                <th>Vəzifə</th>
                                <th>Hesabat qəbulu</th>
                                <th>Ştat</th>
                                <th>Status</th>
                                <th>Əməliyyatlar</th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach($positions as $item)
                                <tr>
                                    <td>{{ $item->id }}</td>
                                    <td>{{!is_null($item->departments) ? $item->departments->name : 'İdarə heyəti'}}</td>
                                    <td>{{!is_null($item->branches) ? $item->branches->name : 'Şöbə yoxdur'}}</td>
                                    <td>{{$item->name}}</td>
                                    <td>
                                        <strong class="{{ $item->report_receiver == 1 ? 'text-success' : 'text-danger' }}">
                                            {{ $item->report_receiver == 1 ? 'Hesabat qəbul edə bilər' : 'Hesabat qəbul edə bilməz' }}
                                        </strong>
                                    </td>
                                    <td>
                                        {{ $item->count }}
                                    </td>
                                    <td>
                                        <button class="btn btn-sm btn-{{$item->status == 1 ? 'success' : 'danger'}}">
                                            {{$item->status == 1 ? 'Aktiv' : 'Deaktiv'}}
                                        </button>
                                    </td>
                                    <td>
                                        <a href="{{ route('admin.positions.edit', $item->id ) }}"
                                           class="text-success mr-2">
                                            <i class="nav-icon i-Pen-2 font-weight-bold"></i>
                                        </a>
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
            $('#positions-table').DataTable();
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
