@extends('support.layouts.app')
@section('content')
    <div class="row mb-4">
        <div class="col-md-12 mb-4">

            <div class="card">
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center">
                        <h3>Texniki dəstək biletləri</h3>
                        <div>
                            <a href="{{route('support.my-tickets')}}">
                                <button class="btn btn-lg btn-warning">
                                <span class="me-2">
                                    <i class="nav-icon i-Ticket"></i>
                                </span>
                                    Mənim biletlərim
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table id="inventories-table" class="display table table-striped" style="width:100%">
                            <thead>
                            <tr>
                                <th>№</th>
                                <th>Bilet nömrəsi</th>
                                <th>İşçi</th>
                                <th>İnventar</th>
                                <th>Səbəb</th>
                                <th>Qeyd</th>
                                <th>Status</th>
                                <th>Bilet statusu</th>
                                <th>Tarix</th>
                                <th>Əməliyyatlar</th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach($tickets as $item)
                                @php
                                    if($item->status == 0)
                                    {
                                        $text = 'Gözləyir';
                                        $class = 'warning';
                                    }elseif ($item->status == 1) {
                                        $text = 'Həll olundu';
                                        $class = 'success';
                                    }
                                    elseif($item->status == 2) {
                                        $text = 'Problem yoxdur - Əsassız';
                                        $class = 'primary';
                                    }
                                    elseif($item->status == 3) {
                                        $text = 'İnventar sıradan çıxıb';
                                        $class = 'danger';
                                    }
                                @endphp
                                <tr>
                                    <td>{{ $item->id }}</td>
                                    <td><strong>
                                            {{$item->ticket_number}}
                                        </strong></td>
                                    <td>{{$item->user->name}}</td>
                                    <td>{{$item->inventories->products->product_name}}</td>
                                    <td>{{$item->ticket_reasons->reason}}</td>
                                    <td>{{$item->note}}</td>
                                    <td>
                                        <button class="btn btn-lg btn-{{ $class }}">{{ $text }}</button>
                                    </td>
                                    <td>
                                        <button class="btn btn-lg btn-{{ $item->ticket_status == 0 ? 'outline-danger' : 'outline-info' }}">
                                            {{ $item->ticket_status == 0 ? 'Bilet açıqdır' : 'Bilet bağlıdır' }}
                                        </button>
                                    </td>
                                    <td>{{\Illuminate\Support\Carbon::parse($item->created_at)->format('d.m.Y')}}</td>
                                    <td>
                                        @if(!$item->helpdesk_id)
                                            <a href="#"
                                               class="text-success mr-2 accept-ticket" data-ticket-number="{{$item->ticket_number}}">
                                                <i class="nav-icon i-Rewind font-weight-bold"></i>
                                            </a>
                                        @endif
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
            $('#appointments-table').DataTable();

            $('.accept-ticket').on("click", function () {
                const ticket_number = $(this).data('ticket-number');
                Swal.fire({
                    title: "Bileti qəbul etmək istəyirsiniz ?",
                    showDenyButton: true,
                    showCancelButton: false,
                    confirmButtonText: "Qəbul et",
                    denyButtonText: `İmtina et`
                }).then((result) => {
                    if (result.isConfirmed) {
                        $.ajax({
                            url: "{{ route('support.accept-ticket') }}",
                            method:"POST",
                            data: {
                                "_token" : "{{ csrf_token() }}",
                                "ticket_number" : ticket_number
                            },
                            success:function (response) {
                                if(response.status == 200)
                                {
                                    Swal.fire(response.notification, "", "success")
                                        .then((result) => {
                                            if (result.isConfirmed) {
                                                location.href = response.route
                                            }
                                        });
                                }
                                else if(response.status == 404)
                                {
                                    Swal.fire(response.notification, "", "danger")
                                        .then((result) => {
                                            if (result.isConfirmed) {
                                                location.href = response.route
                                            }
                                        });
                                }
                                else {
                                    Swal.fire(response.notification, "", "info")
                                        .then((result) => {
                                            if (result.isConfirmed) {
                                                location.href = response.route
                                            }
                                        });
                                }

                            }
                        })
                    } else if (result.isDenied) {
                        Swal.fire("Bileti qəbul etmədiniz", "", "info");
                    }
                });
            })
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
