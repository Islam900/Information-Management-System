@extends('employee.layouts.app')
@section('content')
    <style>
        .steps {
            border: 1px solid #e7e7e7
        }

        .steps-header {
            padding: .375rem;
            border-bottom: 1px solid #e7e7e7
        }

        .steps-header .progress {
            height: .25rem
        }

        .steps-body {
            display: table;
            table-layout: fixed;
            width: 100%
        }

        .step {
            display: table-cell;
            position: relative;
            padding: 1rem .75rem;
            -webkit-transition: all 0.25s ease-in-out;
            transition: all 0.25s ease-in-out;
            border-right: 1px dashed #dfdfdf;
            color: rgba(0, 0, 0, 0.65);
            font-weight: 600;
            text-align: center;
            text-decoration: none
        }

        .step:last-child {
            border-right: 0
        }

        .step-indicator {
            display: block;
            position: absolute;
            top: .75rem;
            left: .75rem;
            width: 1.5rem;
            height: 1.5rem;
            border: 1px solid #e7e7e7;
            border-radius: 50%;
            background-color: #fff;
            font-size: .875rem;
            line-height: 1.375rem
        }

        .has-indicator {
            padding-right: 1.5rem;
            padding-left: 2.375rem
        }

        .has-indicator .step-indicator {
            top: 50%;
            margin-top: -.75rem
        }

        .step-icon {
            display: block;
            width: 1.5rem;
            height: 1.5rem;
            margin: 0 auto;
            margin-bottom: .75rem;
            -webkit-transition: all 0.25s ease-in-out;
            transition: all 0.25s ease-in-out;
            color: #888
        }

        .step:hover {
            color: rgba(0, 0, 0, 0.9);
            text-decoration: none
        }

        .step:hover .step-indicator {
            -webkit-transition: all 0.25s ease-in-out;
            transition: all 0.25s ease-in-out;
            border-color: transparent;
            background-color: #f4f4f4
        }

        .step:hover .step-icon {
            color: rgba(0, 0, 0, 0.9)
        }

        .step-active,
        .step-active:hover {
            color: rgba(0, 0, 0, 0.9);
            pointer-events: none;
            cursor: default
        }

        .step-active .step-indicator,
        .step-active:hover .step-indicator {
            border-color: transparent;
            background-color: #64ff00;
            color: #fff
        }

        .step-active .step-icon,
        .step-active:hover .step-icon {
            color: #00ff20
        }

        .step-completed .step-indicator,
        .step-completed:hover .step-indicator {
            border-color: transparent;
            background-color: rgba(51, 203, 129, 0.12);
            color: #33cb81;
            line-height: 1.25rem
        }

        .step-completed .step-indicator .feather,
        .step-completed:hover .step-indicator .feather {
            width: .875rem;
            height: .875rem
        }

        @media (max-width: 575.98px) {
            .steps-header {
                display: none
            }
            .steps-body,
            .step {
                display: block
            }
            .step {
                border-right: 0;
                border-bottom: 1px dashed #e7e7e7
            }
            .step:last-child {
                border-bottom: 0
            }
            .has-indicator {
                padding: 1rem .75rem
            }
            .has-indicator .step-indicator {
                display: inline-block;
                position: static;
                margin: 0;
                margin-right: 0.75rem
            }
        }

        .bg-secondary {
            background-color: #f7f7f7 !important;
        }
    </style>
    <div class="row mb-4">
        <div class="col-md-12 mb-4">
            <div class="card">
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center">
                        <h3>Mal-material sorğusu</h3>
                        <button class="btn btn-success new-assets-requests-button">
                            <span>
                                <i class="nav-icon i-Add-File"></i>
                            </span>
                            Yeni mal-material sorğusu
                        </button>
                    </div>
                </div>
                <div class="card-body">
                    @foreach($user_assets_requests as $asset_key => $assets_requests)
                        <div class="card mt-2">
                            <div class="p-5 mb-sm-4">
                                <!-- Details-->

                                <!-- Progress-->
                                <div class="steps">
                                    <div class="steps-header">
                                        <div class="p-4">
                                            <h4>{{ $assets_requests->content }}</h4>
                                        </div>
                                        <div class="progress">
                                            <div class="progress-bar" role="progressbar" style="width: {{20+$assets_requests->assets_requests_details()->where('status', 2)->count()*20}}%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div class="steps-body">
                                        <div class="step step-completed">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <img src="{{ asset('assets/images/2.png') }}" height="150px;"  width="150px;" alt="">
                                                <strong>
                                                    Mal-material sorğusu yaradıldı
                                                </strong>
                                            </div>
                                        </div>
                                        @foreach($assets_requests->assets_requests_details as $detail_key => $detail)
                                            <div class="step step-completed">
                                                <div class="d-flex justify-content-between align-items-center">
                                                        <img src="{{ asset('assets/images/').'/'.$detail->status.'.png' }}" height="150px;"  width="150px;" alt="">
                                                        <strong>
                                                        {{ $detail->users->name }}
                                                    </strong>
                                                </div>
                                            </div>
                                        @endforeach
                                    </div>
                                </div>

                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>

@endsection

@section('js')
    <script>
        $('document').ready(function () {
            $('.new-assets-requests-button').on('click', function (e) {

                Swal.fire({
                    title: "Yeni mal-material sorğusu yaradın",
                    input: "text",
                    inputAttributes: {
                        autocapitalize: "off"
                    },
                    showCancelButton: true,
                    confirmButtonText: "Göndərin",
                    showLoaderOnConfirm: true,
                    preConfirm: async (assets_content) => {
                        $.ajax({
                            url:"{{route('employee.assets-requests.store')}}",
                            method:"POST",
                            data:{
                                "_token":"{{csrf_token()}}",
                                "assets_content": assets_content
                            },
                            success:function (response) {
                                if(response.status == 200)
                                {
                                    Swal.fire({
                                        title: response.message,
                                    }).then((e) => {
                                        if(e.isConfirmed)
                                        {
                                            location.href = response.route;
                                        }
                                    });
                                }
                            }
                        })
                    },
                    allowOutsideClick: () => !Swal.isLoading()
                })
            });
        });
    </script>
@endsection
