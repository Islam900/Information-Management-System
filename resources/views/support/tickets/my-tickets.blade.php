@extends('support.layouts.app')
@section('content')
    <div class="row mb-4">
        <div class="col-md-12 mb-4">

            <div class="card">
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center">
                        <h3>Mənim biletlərim</h3>
                        <div>
                            <a href="{{route('support.tickets.index')}}">
                                <button class="btn btn-lg btn-danger">
                                <span class="me-2">
                                    <i class="nav-icon i-Arrow-Back"></i>
                                </span>
                                    Texniki dəstək biletləri
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table id="tickets-table" class="display table table-striped" style="width:100%">
                            <thead>
                            <tr>
                                <th>№</th>
                                <th>Bilet nömrəsi</th>
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
                                    @if($item->status == 0)
                                        <td>
                                            <a href="#"
                                               class="text-success mr-2 solve-ticket" data-ticket-number="{{$item->ticket_number}}">
                                                <i class="nav-icon i-Rewind font-weight-bold"></i>
                                            </a>
                                        </td>
                                    @endif
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
            // $('#tickets-table').DataTable();

            $('.solve-ticket').on("click", function () {
                const ticket_number = $(this).data('ticket-number');

                Swal.fire({
                    title: "Bilet statusunu seçin",
                    icon: "info",
                    html: `
                    <select class="form-control" id="ticket-status" name="status">
                        <option value="1">Həll olundu</option>
                        <option value="2">Problem yoxdur - Əsassız</option>
                        <option value="3">İnventar sıradan çıxıb</option>
                    </select>
                  `,
                   showCloseButton: true,
                   showCancelButton: true,
                   focusConfirm: false,
                   confirmButtonText: `
                    <i class="fa fa-thumbs-up"></i> Təsdiqləyin
                  `,
                   confirmButtonAriaLabel: "Təsdiqləyin",
                   cancelButtonText: `
                    <i class="fa fa-thumbs-down"></i> Ləğv edin
                  `,
                    cancelButtonAriaLabel: "Ləğv edin"
                }).then((result) => {
                    if (result.isConfirmed) {
                        const selectedStatus = $('#ticket-status').val();
                        $.ajax({
                            url: "{{ route('support.update-ticket') }}",
                            method:"POST",
                            data: {
                                "_token" : "{{ csrf_token() }}",
                                "ticket_number" : ticket_number,
                                "ticket_status" : selectedStatus
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
                        Swal.fire("Dəyişikliklər qeydə alınmadı", "", "info");
                    };
                });
            })
        })
    </script>
@endsection
