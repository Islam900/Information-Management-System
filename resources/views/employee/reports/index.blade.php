@extends('employee.layouts.app')
@section('content')

    <div class="row mb-4">
        <div class="col-md-12 mb-4">


            <div class="card">
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center">
                        <h3>Hesabatlar</h3>
                        <a href="{{route('employee.reports.create')}}">
                            <button class="btn btn-success">
                                <span class="me-2">
                                    <i class="nav-icon i-Add-File"></i>
                                </span>
                                Yeni hesabat
                            </button>
                        </a>
                    </div>

                </div>
                <div class="card-body">

                            <!-- right control icon -->
                            <div class="accordion" id="accordionRightIcon">

                                @foreach($reports as $report)
                                    <div class="card p-8">
                                        <div class="card-header header-elements-inline">
                                            <h6 class="card-title ul-collapse__icon--size ul-collapse__right-icon mb-0">
                                                <a data-toggle="collapse" class="text-default collapsed"
                                                   href="#accordion-item-icons-{{ $report->id }}" aria-expanded="false">
                                                    <span><i class="i-Data-Settings ul-accordion__font"> </i></span>
                                                    {{ \Carbon\Carbon::parse($report->report_date)->format('d.m.Y') }} tarixi üçün həftəlik hesabat</a>
                                            </h6>
                                        </div>
                                        <div id="accordion-item-icons-{{ $report->id }}" class="collapse" data-parent="#accordionRightIcon"
                                             style="">
                                            <div class="card-body">
                                                <p><strong>Kullanıcı Adı:</strong> {{ $report->user->name }}</p>
                                                <ul class="list-group">
                                                    @foreach($report->reports_subjects as $subject_key => $subject)
                                                        <li class="list-group-item d-flex justify-content-between align-items-center">
                                                            <p class="text-primary">{{ $subject_key+1 }}. {{ $subject->subject }}</p>
                                                            <strong>{{ $subject->project_name }}</strong>
                                                        </li>
                                                    @endforeach
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                @endforeach

                            </div>
                            <!-- /right control icon -->

                </div>
            </div>

        </div>
    </div>

@endsection

@section('js')
    <script>
        $(document).ready(function () {
            $('#reports-table').DataTable({
                responsive: true
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
    </script>
@endsection
