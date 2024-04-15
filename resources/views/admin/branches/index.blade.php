@extends('admin.layouts.app')
@section('content')
    <div class="row mb-4">
        <div class="col-md-12 mb-4">

           <div class="card">
               <div class="card-header">
                   <div class="d-flex justify-content-between align-items-center">
                       <h3>Şöbələr</h3>

                       <a href="{{route('admin.branches.create')}}">
                           <button class="btn btn-success">
                                <span class="me-2">
                                    <i class="nav-icon i-Add-File"></i>
                                </span>
                               Yeni şöbə
                           </button>
                       </a>
                   </div>
               </div>
               <div class="card-body">
                   <div class="table-responsive">
                       <table id="branches-table" class="display table table-striped" style="width:100%">
                           <thead>
                           <tr>
                               <th>№</th>
                               <th>Departament</th>
                               <th>Şöbə</th>
                               <th>Status</th>
                               <th>Əməliyyatlar</th>
                           </tr>
                           </thead>
                           <tbody>
                           @foreach($branches as $item)
                               <tr>
                                   <td>{{ $item->id }}</td>
                                   <td>{{$item->departments->name}}</td>
                                   <td>{{$item->name}}</td>
                                   <td>
                                       <button class="btn btn-sm btn-{{$item->status == 1 ? 'success' : 'danger'}}">
                                           {{$item->status == 1 ? 'Aktiv' : 'Deaktiv'}}
                                       </button>
                                   </td>
                                   <td>
                                       <a href="{{ route('admin.branches.edit', $item->id ) }}"
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
            $('#branches-table').DataTable();
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
