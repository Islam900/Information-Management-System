@extends('admin.layouts.app')
@section('content')
    <div class="row mb-4">
        <div class="col-md-12 mb-4">

            <div class="card">
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center">
                        <h3>Əməliyyatlar</h3>
                        <div>
                            <a href="{{route('admin.tickets.create')}}">
                                <button class="btn btn-success">
                                <span class="me-2">
                                    <i class="nav-icon i-Add-File"></i>
                                </span>
                                    Yeni texniki dəstək bileti
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
                                <th>İşçi</th>
                                <th>Bilet nömrəsi</th>
                                <th>Təhkim olunan</th>
                                <th>İnventar</th>
                                <th>Səbəb</th>
                                <th>Qeyd</th>
                                <th>Status</th>
                                <th>Qiymət</th>
                                <th>Aktivlik statusu</th>
                                <th>Tarix</th>
                                <th>Əməliyyatlar</th>
                            </tr>
                            </thead>
                            <tbody>
                            @forelse($tickets as $item)
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
                                    <td><strong>{{ $item->user->name }}</strong> (
                                        {{ !is_null($item->user->departments) ? $item->user->departments->name : ''}}
                                        {{ !is_null($item->user->branches) ? $item->user->branches->name : ''}}
                                        {{ !is_null($item->user->positions) ? $item->user->positions->name : ''}}
                                        )
                                    </td>
                                    <td><strong>{{$item->ticket_number}}</strong></td>
                                    <td>{{ !is_null($item->helpdesk) ? $item->helpdesk->name : 'Təhkim olunmayıb'}}</td>
                                    <td>{{$item->inventories->products->product_name}}</td>
                                    <td>{{$item->ticket_reasons->reason}}</td>
                                    <td>{{$item->note}}</td>
                                    <td>
                                        <button class="btn btn-lg btn-{{ $class }}">{{ $text }}</button>
                                    </td>
                                    <td>
                                        @for($i=0;$i<$item->rate;$i++)
                                            <span>
                                                &#9733;
                                            </span>
                                        @endfor
                                    </td>
                                    <td>
                                        <button
                                            class="btn btn-lg btn-{{ $item->ticket_status == 0 ? 'danger' : 'info' }}">
                                            {{ $item->ticket_status == 0 ? 'Bilet açıqdır' : 'Bilet bağlıdır' }}
                                        </button>
                                    </td>
                                    <td>{{\Illuminate\Support\Carbon::parse($item->created_at)->format('d.m.Y')}}</td>
                                    <td>
                                        <a href="{{ route('admin.tickets.edit', $item->id) }}"
                                           title="Düzəliş et"
                                           class="text-success mr-2">
                                            <i class="nav-icon i-Pen-2 font-weight-bold"></i>
                                        </a>

                                        @if($item->ticket_status == 0)
                                            <a href="#" title="Bileti bağla"
                                               class="text-danger mr-2 close-ticket"
                                               data-id="{{$item->ticket_number}}">
                                                <i class="nav-icon i-Close font-weight-bold"></i>
                                            </a>
                                        @endif
                                    </td>
                                </tr>
                                @empty
                                <tr>
                                    <td class="text-center" colspan="12">
                                        <h3 class="text-primary">Texniki dəstək bileti yaradılmayıb</h3>
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
            $('#appointments-table').DataTable();

            $(".close-ticket").on("click", function () {
                const ticket_number = $(this).data('id');
                Swal.fire({
                    title: "Bileti bağlamaq istəyirsiniz ?",
                    icon: "info",
                    html: `<div class="rating-stars">
                                <input type="radio" name="rating" id="rs0" value="0" checked><label for="rs0"></label>
                                <input type="radio" name="rating" id="rs1" value="1"><label for="rs1"></label>
                                <input type="radio" name="rating" id="rs2" value="2"><label for="rs2"></label>
                                <input type="radio" name="rating" id="rs3" value="3"><label for="rs3"></label>
                                <input type="radio" name="rating" id="rs4" value="4"><label for="rs4"></label>
                                <input type="radio" name="rating" id="rs5" value="5"><label for="rs5"></label>
                                <span class="rating-counter"></span>
                            </div>
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
                        const selectedRating = $('input[name="rating"]:checked').val();
                        $.ajax({
                            url: "{{ route('admin.update-ticket') }}",
                            method:"POST",
                            data: {
                                "_token" : "{{ csrf_token() }}",
                                "ticket_number" : ticket_number,
                                "ticket_rating" : selectedRating,
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
                    } else {
                        Swal.fire("Dəyişikliklər qeydə alınmadı", "", "info");
                    };
                });
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
        })
    </script>
@endsection
