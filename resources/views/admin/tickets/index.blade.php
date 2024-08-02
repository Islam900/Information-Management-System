@extends('admin.layouts.app')
@section('content')

    <style>
        .ticket-container .item {
            width: 32%;
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
            font-size: 20px;
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

        @media screen and (max-width: 1900px) {
            .sidenav-open .ticket-container .item {
                width: 48%;
            }
        }

        @media screen and (max-width: 1800px) {
            .ticket-container .item {
                width: 48%;
            }
        }

        @media screen and (max-width: 1350px) {
            .ticket-container .item,
            .sidenav-open .ticket-container .item {
                width: 100%;
            }
        }
    </style>

    <div class="row mb-4">
        <div class="col-md-12 mb-4">

            <div class="card">
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center">
                        <h3>Texniki dəstək biletləri</h3>
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
                                    <span class="up-border"></span>
                                    <span class="down-border"></span>
                                </div> <!-- end item-right -->

                                <div class="item-left">
                                    <p class="event">Bilet №: {{$item->ticket_number}}</p>
                                    <h3 style="white-space: nowrap;">{{ $item->appointments->products->product_name }}</h3>

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
                                    <div class="d-flex flex-column align-items-end justify-content-end buttons_container">
                                        <button class="tickets w-100">{{ $text }}</button>
                                    </div>
                                </div> <!-- end item-left -->
                            </div> <!-- end item -->
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
@endsection
