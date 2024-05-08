@extends('employee.layouts.app')
@section('content')

    <div class="card">
        <div class="card-header">
            <div class="d-flex justify-content-between align-items-center">
                <h3>Mal-material sorğusu</h3>
            </div>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table id="inventories-table" class="display table table-striped" style="width:100%">
                    <thead>
                    <tr>
                        <th>№</th>
                        <th>Mətn</th>
                        <th>Status</th>
                        <th>Tarix</th>
                        <th>Əməliyyatlar</th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach($user_assets_requests as $asset)
                        <tr>
                            <td>{{ $asset->id }}</td>
                            <td>{{ $asset->content }}</td>
                            <td>Gözləyir</td>
                            <td>{{ $asset->created_at }}</td>
                            <td>

                            </td>
                        </tr>
                    @endforeach
                    </tbody>
                </table>
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
