@extends('support.layouts.app')
@section('content')

    <style>
        .ticket-container .item-right .down-border {
            bottom: -140px;
            right: -35px;
        }
        /*.urg_endTime {*/
        /*    position: absolute;*/
        /*    left: 50%;*/
        /*    bottom: -105px;*/
        /*    transform: translateX(-50%);*/
        /*    padding: 4px 18px;*/
        /*    border-radius: 20px;*/
        /*    color: #fff;*/
        /*}*/
    </style>

    <div class="row mb-4">
        <div class="col-lg-8 col-12 mb-4">

            <div class="card">
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center ">
                        <h3 class="">Texniki dəstək biletləri</h3>
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
                    @foreach($tickets as $item)
                        @php
                            $text = '';
                            if($item->ticket_status == 1)
                                {
                                     if ($item->status == 1) {
                                        $text = 'Həll olundu';
                                        $class = 'status-success';
                                    } elseif($item->status == 2) {
                                        $text = 'Problem yoxdur - Əsassız';
                                        $class = 'status-primary';
                                    } elseif($item->status == 3) {
                                        $text = 'İnventar sıradan çıxıb';
                                        $class = 'status-danger';
                                    }
                                } else {
                                    if($item->status == 0) {
                                        $text = 'Gözləyir';
                                    }
                                    elseif ($item->status == 1) {
                                        $text = 'Həll olundu';
                                    } elseif($item->status == 2) {
                                        $text = 'Problem yoxdur - Əsassız';
                                    } elseif($item->status == 3) {
                                        $text = 'İnventar sıradan çıxıb';
                                    }
                                    $class = 'status-pending';
                                }
                        @endphp
                        <div class="ticket-container">
                            <div class="item {{ $class }}">
                                @php
                                    if($item->ticket_priority == "Təcili deyil")
                                    {
                                        $pr_class = 'urg_status_tecili_deyil';
                                    } elseif ($item->ticket_priority == "Normal")
                                    {
                                        $pr_class = 'urg_status_normal';
                                    } elseif ($item->ticket_priority == "Təcilidir")
                                    {
                                        $pr_class = 'urg_status_tecili';
                                    }
                                @endphp
                                <div class="item-right">
                                    <div class="urg_status {{ $pr_class }} text-white">{{ $item->ticket_priority }}</div>
                                    <h2 class="num">{{ \Illuminate\Support\Carbon::parse($item->created_at)->format('d') }}</h2>
                                    <p class="day">{{ \Illuminate\Support\Carbon::parse($item->created_at)->format('M') }}</p>

                                    <button class="btn btn-secondary show-details" data-ticket-id="{{$item->id}}">
                                            <span>
                                                <i class="nav-icon i-Eye font-weight-bold"></i>
                                            </span>
                                        Ətraflı bax
                                    </button>
                                    <span class="up-border"></span>
                                    <span class="down-border"></span>
                                    {{--                                    <div class="urg_endTime"></div>--}}
                                    <!-- Göz simgesi burada -->

                                </div> <!-- end item-right -->

                                <div class="item-left">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <p class="event mb-0">{{$item->ticket_number}}</p>
                                        @if(!$item->helpdesk_id)
                                            @can('Texniki dəstək bileti təhkim etmə')
                                                <button class="tickets assign-ticket mt-0"
                                                        data-ticket-number="{{ $item->ticket_number }}">Bileti təhkim et
                                                </button>
                                            @endcan

                                        @else
                                            <strong class="text-secondary">{{ $item->helpdesk->name }}
                                            </strong>
                                        @endif
                                    </div>
                                    <p style="white-space: wrap; margin-top: 10px">{{ $item->user->name }}
                                        - {{ $item->appointments->products->product_name }}</p>
                                    <div class="sce">
                                        <div class="icon">
                                            <i class="nav-icon i-Calendar"></i>
                                        </div>
                                        <strong>{{ \Illuminate\Support\Carbon::parse($item->created_at)->format('d.m.Y') }}</strong>
                                    </div>
                                    <div class="fix"></div>
                                    <div class="loc">
                                        <strong>{{$item->ticket_reasons->reason}}</strong>
                                    </div>
                                    <div class="desc_container">
                                        <input type="checkbox" class="hidden_check" id="myInput{{$item -> id}}"
                                               style="display: none">
                                        <label class="description" for='myInput{{$item -> id}}'>{{$item->note}}</label>
                                    </div>
                                    {{--                                    <div class="fix"></div>--}}
                                    <div
                                        class="d-flex flex-column align-items-end justify-content-end buttons_container"
                                        style="height: 87px">

                                        @if($item->status == 0 && is_null($item->helpdesk_id))
                                            <button class="tickets w-100 accept-ticket"
                                                    data-ticket-number="{{ $item->ticket_number }}">Bileti qəbul et
                                            </button>
                                        @elseif($item->ticket_status == 1 && $item->status != 0)
                                            <button class="tickets w-100">Bilet bağlıdır</button>
                                        @elseif($item->status != 0 && $item->ticket_status == 0)
                                            <button class="tickets w-100">İşçi tərəfindən təsdiq gözləyir</button>
                                        @elseif($item->ticket_status == 0)
                                            <button class="tickets w-100">Bilet açıqdır</button>
                                        @endif
                                        <button class="tickets w-100">{{ $text }}</button>
                                    </div>
                                </div> <!-- end item-left -->
                            </div> <!-- end item -->
                        </div>

                    @endforeach
                </div>
            </div>
        </div>

        <div class="col-lg-4 col-12 mb-4">
            <div class="card">
                <div class="card-body">
                    <div class="card-title">
                        <h3>Bilet əməliyyatları</h3>
                        <hr>
                        <div class="main-card mb-3">
                            <div class="card-body">
                                <div class="vertical-timeline-item vertical-timeline-element text-center">
                                    @if(count($tickets) > 0)
                                        Əməliyyat tarixçəsinə baxmaq üçün zəhmət olmasa bilet seçin
                                    @else
                                        Texniki dəstək bileti yaradılmayıb
                                    @endif
                                </div>
                            </div>
                        </div>
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
                    html: `
                        <div class="col-12 form-group mb-3 none-field">
                            <div class="select_label ui sub header">Tarix <span class="text-danger">*</span></div>
                            <input type="text" id="date-time-picker" name="ticket_solve_time" required
                                class="form-control" style="background: #f8f9fa;" placeholder="Təxmini həll olunma tarixi">
                        </div>

                        `,
                    showDenyButton: true,
                    showCancelButton: false,
                    confirmButtonText: "Qəbul et",
                    denyButtonText: `İmtina et`
                }).then((result) => {
                    if (result.isConfirmed) {
                        const ticket_solve_time = $('#date-time-picker').val();
                        $.ajax({
                            url: "{{ route('support.accept-ticket') }}",
                            method: "POST",
                            data: {
                                "_token": "{{ csrf_token() }}",
                                "ticket_number": ticket_number,
                                "ticket_solve_time": ticket_solve_time
                            },
                            success: function (response) {
                                if (response.status == 200) {
                                    Swal.fire(response.notification, "", "success")
                                        .then((result) => {
                                            if (result.isConfirmed) {
                                                location.href = response.route
                                            }
                                        });
                                } else if (response.status == 404) {
                                    Swal.fire(response.notification, "", "danger")
                                        .then((result) => {
                                            if (result.isConfirmed) {
                                                location.href = response.route
                                            }
                                        });
                                } else {
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
                flatpickr("#date-time-picker", {
                    allowInput: true,
                    enableTime: true,
                    dateFormat: "Y-m-d H:i",
                    minDate: "today",
                    time_24hr: true,
                    locale: "az",
                    onReady: function (selectedDates, dateStr, instance) {
                        var now = new Date();
                        var hours = now.getHours();
                        var minutes = now.getMinutes();
                        instance.set('minTime', (hours < 10 ? '0' : '') + hours + ':' + (minutes < 10 ? '0' : '') + minutes);
                    }
                });

            })


            $(".assign-ticket").on("click", function () {
                const ticket_number = $(this).data('ticket-number');
                Swal.fire({
                    title: "Zəhmət olmasa mütəxəssis seçin",
                    icon: "info",
                    html: `<div class="col-12 form-group mb-3 none-field">
                            <div class="select_label ui sub header">Mütəxəssislər <span class="text-danger">*</span></div>
                            <select id="user_id" name="user_id" class="form-control ui fluid search dropdown create_form_dropdown">
                                @foreach($users as $user)
                                    <option value="{{ $user->id }}">{{ $user->name }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="col-12 form-group mb-3 none-field">
                            <div class="select_label ui sub header">Tarix <span class="text-danger">*</span></div>
                            <input type="text" id="date-time-picker" name="ticket_solve_time" required
                                class="form-control" style="background: #f8f9fa;" placeholder="Təxmini həll olunma tarixi">
                        </div>`,
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
                        const user_id = $('#user_id').val();
                        const ticket_solve_time = $('#date-time-picker').val();
                        $.ajax({
                            url: "{{ route('support.assign-ticket') }}",
                            method: "POST",
                            data: {
                                "_token": "{{ csrf_token() }}",
                                "ticket_number": ticket_number,
                                "ticket_solve_time": ticket_solve_time,
                                "user_id": user_id,
                            },
                            success: function (response) {
                                if (response.status == 200) {
                                    Swal.fire(response.notification, "", "success")
                                        .then((result) => {
                                            if (result.isConfirmed) {
                                                location.href = response.route
                                            }
                                        });
                                } else if (response.status == 404) {
                                    Swal.fire(response.notification, "", "danger")
                                        .then((result) => {
                                            if (result.isConfirmed) {
                                                location.href = response.route
                                            }
                                        });
                                } else {
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
                    }

                });
                flatpickr("#date-time-picker", {
                    allowInput: true,
                    enableTime: true,
                    dateFormat: "Y-m-d H:i",
                    minDate: "today",
                    time_24hr: true,
                    locale: "az",
                    onReady: function (selectedDates, dateStr, instance) {
                        var now = new Date();
                        var hours = now.getHours();
                        var minutes = now.getMinutes();
                        instance.set('minTime', (hours < 10 ? '0' : '') + hours + ':' + (minutes < 10 ? '0' : '') + minutes);
                    }
                });
            })

            $('.show-details').on('click', function () {
                const ticket_id = $(this).data('ticket-id');
                $.ajax({
                    url: "{{ route('support.get-ticket-details') }}",
                    type: "POST",
                    data: {
                        "_token": "{{ csrf_token() }}",
                        "ticket_id": ticket_id
                    },
                    success: function (response) {
                        $('.main-card').html('');
                        $('.main-card').html(response);
                    }
                })
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
