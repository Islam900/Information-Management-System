@extends('support.layouts.app')
@section('content')

    <style>
        .ticket-container .item {
            width: 48%;
            float: left;
            padding: 0 20px;
            overflow: hidden;
            margin: 10px
        }

        .ticket-container * {
            white-space: nowrap;
        }

        .ticket-container .status-warning {
            background-color: #f3c863;

            * {
                color: #545454;
            }

            .tickets {
                background-color: #fab005;
                color: #fff;
            }

            .assign-ticket {
                background-color: #ff9900;
                color: #fff;
                cursor: pointer !important;
            }
        }

        .ticket-container .status-success {
            background-color: #40c0571a;

            * {
                color: #40c057;
            }

            .tickets {
                background-color: #40c057;
                color: #fff;
            }
        }

        .ticket-container .status-primary {
            background-color: #99c8fdf2;

            .tickets {
                background-color: #1ba9d7;
                color: #fff;
            }
        }

        .ticket-container .status-danger {
            background-color: #f5cdcd;

            * {
                color: #464646;
            }

            .tickets {
                background-color: #fa5252;
                color: #fff;
            }
        }

        .ticket-container .desc_container {
            margin-top: 16px;
            margin-bottom: 8px;

            .description {
                display: -webkit-box;
                -webkit-line-clamp: 6;
                -webkit-box-orient: vertical;
                white-space: normal;
                overflow: hidden;
                text-overflow: ellipsis;
                width: 100%;
                height: 118px;
                position: relative;
                cursor: pointer;

                &:hover::after {
                    content: 'Mətnin kontenti tam görünmürsə, yazıya klikləyərək tam formada görə bilərsiniz.';
                    position: absolute;
                    top: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    background-color: white;
                    color: #000;
                    font-size: 14px;
                    padding: 8px 12px;
                    border-radius: 8px;
                }
            }

            .hidden_check:checked + .description {
                overflow: auto;
                text-overflow: unset;
                -webkit-box-orient: unset;

                &:hover::after {
                    content: unset;
                }
            }

        }

        .buttons_container {
            height: 86px;
        }

        .ticket-container .item-right, .ticket-container .item-left {
            float: left;
            padding: 20px
        }

        .ticket-container .item-right {
            padding: 79px 50px;
            margin-right: 20px;
            width: 25%;
            position: relative;
            height: 286px
        }

        .ticket-container .item-right .up-border, .ticket-container .item-right .down-border {
            padding: 14px 15px;
            background-color: #fff;
            border-radius: 50%;
            position: absolute
        }

        .ticket-container .item-right .up-border {
            top: -8px;
            right: -35px;
        }

        .ticket-container .item-right .down-border {
            bottom: -145px;
            right: -35px;
        }

        .ticket-container .item-right .num {
            font-size: 60px;
            text-align: center;
        }

        .ticket-container .item-right .day, .ticket-container .item-left .event {
            font-size: 16px;
            margin-bottom: 9px;
        }

        .ticket-container .item-right .day {
            text-align: center;
            font-size: 25px;
        }

        .ticket-container .item-left {
            width: 71%;
            padding: 34px 0px 19px 46px;
            border-left: 3px dotted #999;
        }

        .ticket-container .item-left .title {
            font-size: 34px;
            margin-bottom: 12px
        }

        .ticket-container .item-left .sce {
            margin-top: 5px;
            display: block
        }

        .ticket-container .item-left .sce .icon, .ticket-container .item-left .sce p,
        .ticket-container .item-left .loc .icon, .ticket-container .item-left .loc p {
            float: left;
            word-spacing: 5px;
            letter-spacing: 1px;
            margin-bottom: 10px;
        }

        .ticket-container .item-left .sce .icon, .ticket-container .item-left .loc .icon {
            margin-right: 10px;
            font-size: 20px;
        }

        .ticket-container .item-left .loc {
            display: block
        }

        .fix {
            clear: both
        }

        .ticket-container .item .tickets, .booked, .cancel {
            padding: 6px 14px;
            float: right;
            margin-top: 10px;
            font-size: 18px;
            border: none;
            cursor: pointer
        }

        .ticket-container .item .tickets {
            border-radius: 28px;
            cursor: default;
            width: max-content;
        }

        .ticket-container .item .booked {
            background: #3D71E9
        }

        .ticket-container .item .cancel {
            background: #DF5454
        }

        .linethrough {
            text-decoration: line-through
        }

        @media only screen and (max-width: 1150px) {
            .ticket-container .item {
                width: 100%;
                margin-right: 20px
            }

            div.ticket-container {
                margin: 0 20px auto
            }
        }

        @media screen and (max-width: 1960px) {
            .ticket-container .item {
                width: 100%;
            }
        }

        .card {
            box-shadow: 0 0.46875rem 2.1875rem rgba(4, 9, 20, 0.03), 0 0.9375rem 1.40625rem rgba(4, 9, 20, 0.03), 0 0.25rem 0.53125rem rgba(4, 9, 20, 0.05), 0 0.125rem 0.1875rem rgba(4, 9, 20, 0.03);
            border-width: 0;
            transition: all .2s;
        }

        .card {
            position: relative;
            display: flex;
            flex-direction: column;
            min-width: 0;
            word-wrap: break-word;
            background-color: #fff;
            background-clip: border-box;
            border: 1px solid rgba(26, 54, 126, 0.125);
            border-radius: .25rem;
        }

        .card-body {
            flex: 1 1 auto;
            padding: 1.25rem;
        }

        .vertical-timeline {
            width: 100%;
            position: relative;
            padding: 1.5rem 0 1rem;
        }

        .vertical-timeline::before {
            content: '';
            position: absolute;
            top: 0;
            left: 67px;
            height: 100%;
            width: 4px;
            background: #e9ecef;
            border-radius: .25rem;
        }

        .vertical-timeline-element {
            position: relative;
            margin: 0 0 1rem;
        }

        .vertical-timeline--animate .vertical-timeline-element-icon.bounce-in {
            visibility: visible;
            animation: cd-bounce-1 .8s;
        }

        .vertical-timeline-element-icon {
            position: absolute;
            top: 0;
            left: 60px;
        }

        .vertical-timeline-element-icon .badge-dot-xl {
            box-shadow: 0 0 0 5px #fff;
        }

        .badge-dot-xl {
            width: 18px;
            height: 18px;
            position: relative;
        }

        .badge:empty {
            display: none;
        }


        .badge-dot-xl::before {
            content: '';
            width: 10px;
            height: 10px;
            border-radius: .25rem;
            position: absolute;
            left: 50%;
            top: 50%;
            margin: -5px 0 0 -5px;
            background: #fff;
        }

        .vertical-timeline-element-content {
            position: relative;
            margin-left: 90px;
            font-size: .8rem;
        }

        .vertical-timeline-element-content .timeline-title {
            font-size: .8rem;
            text-transform: uppercase;
            margin: 0 0 .5rem;
            padding: 2px 0 0;
            font-weight: bold;
        }

        .vertical-timeline-element-content .vertical-timeline-element-date {
            display: block;
            position: absolute;
            left: -90px;
            top: 0;
            padding-right: 10px;
            text-align: right;
            color: #adb5bd;
            font-size: .7619rem;
            white-space: nowrap;
        }

        .vertical-timeline-element-content .vertical-timeline-element-time {
            display: block;
            position: absolute;
            left: -90px;
            top: 20px;
            padding-right: 10px;
            text-align: right;
            color: #adb5bd;
            font-size: .7619rem;
            white-space: nowrap;
        }

        .vertical-timeline-element-content:after {
            content: "";
            display: table;
            clear: both;
        }
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
                            if($item->status == 0) {
                                $text = 'Gözləyir';
                                $class = 'status-warning';
                            } elseif ($item->status == 1) {
                                $text = 'Həll olundu';
                                $class = 'status-success';
                            } elseif($item->status == 2) {
                                $text = 'Problem yoxdur - Əsassız';
                                $class = 'status-primary';
                            } elseif($item->status == 3) {
                                $text = 'İnventar sıradan çıxıb';
                                $class = 'status-danger';
                            }
                        @endphp
                        <div class="ticket-container">
                            <div class="item {{ $class }}">
                                <div class="item-right">
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
                                            <strong class="text-white">{{ $item->helpdesk->name }}
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
                    showDenyButton: true,
                    showCancelButton: false,
                    confirmButtonText: "Qəbul et",
                    denyButtonText: `İmtina et`
                }).then((result) => {
                    if (result.isConfirmed) {
                        $.ajax({
                            url: "{{ route('support.accept-ticket') }}",
                            method: "POST",
                            data: {
                                "_token": "{{ csrf_token() }}",
                                "ticket_number": ticket_number
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
            })

            $(".assign-ticket").on("click", function () {
                const ticket_number = $(this).data('ticket-number');
                Swal.fire({
                    title: "Zəhmət olmasa mütəxəssis seçin",
                    icon: "info",
                    html: `
                        <select id="user_id" name="user_id" class="form-control ui fluid search dropdown create_form_dropdown">
                            @foreach($users as $user)
                    <option value="{{ $user->id }}">{{ $user->name }}</option>
                            @endforeach
                    </select>`,
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
                        $.ajax({
                            url: "{{ route('support.assign-ticket') }}",
                            method: "POST",
                            data: {
                                "_token": "{{ csrf_token() }}",
                                "ticket_number": ticket_number,
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
                    ;
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
