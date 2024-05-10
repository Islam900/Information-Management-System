@extends('itd-leader.layouts.app')
@section('content')
    <div class="row mb-4">
        <div class="col-md-12 mb-4">


            <div class="card">
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center">
                        <h3>Departamentlər</h3>
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table id="departments-table" class="display table table-hover" style="width:100%">
                            <thead>
                            <tr>
                                <th>№</th>
                                <th>Departament</th>
                                <th>Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach($departments as $item)
                                <tr>
                                    <td>{{ $item->id }}</td>
                                    <td>{{$item->name}}</td>
                                    <td>
                                        <button class="btn btn-sm btn-{{$item->status == 1 ? 'success' : 'danger'}}">
                                            {{$item->status == 1 ? 'Aktiv' : 'Deaktiv'}}
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
            $('#departments-table').DataTable();
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
