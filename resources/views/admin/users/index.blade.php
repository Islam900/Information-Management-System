@extends('admin.layouts.app')
@section('content')
    <div class="row mb-4">
        <div class="col-md-12 mb-4">
            <div class="card">
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center">
                        <h3>İşçi heyəti</h3>

                        <a href="{{route('admin.users.create')}}">
                            <button class="btn btn-success">
                                <span class="me-2">
                                    <i class="nav-icon i-Add-File"></i>
                                </span>
                                Yeni işçi
                            </button>
                        </a>
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table id="users-table" class="display table table-striped" style="width:100%">
                            <thead>
                            <tr>
                                <th>№</th>
                                <th>Ad soyad</th>
                                <th>Departament</th>
                                <th>Şöbə</th>
                                <th>Otaq</th>
                                <th>Email</th>
                                <th>Əməliyyatlar</th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach($users as $item)
                                <tr>
                                    <td>{{ $item->id }}</td>
                                    <td>{{$item->name}}</td>
                                    <td>{{ !is_null($item->departments) ? $item->departments->name : 'İdarə heyəti' }}</td>
                                    <td>{{ !is_null($item->branches) ? $item->branches->name : '' }}</td>
                                    <td>{{ $item->room }}</td>
                                    <td>{{$item->email}}</td>
                                    <td>
                                        <a href="{{ route('admin.users.edit', $item->id ) }}"
                                           class="text-success mr-2">
                                            <i class="nav-icon i-Pen-2 font-weight-bold"></i>
                                        </a>
                                        <a href="{{ route('admin.users.show', $item->id ) }}"
                                           class="text-info mr-2">
                                            <i class="nav-icon i-Eye font-weight-bold"></i>
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
            $('#users-table').DataTable();
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
