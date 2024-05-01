@extends('employee.layouts.app')
@section('content')
    <style>
        .wrapper {
            display: table;
            width: 100%;
        }

        .wrapper .wrapper_inside{
            display: flex;
            width: 100%;
        }

        .wrapper_inside > div{
            flex: 1 1 50%;
        }

        .wrapper .wrapper_inside .header{
            font-size: 16px;
            padding: 10px 20px;
            margin: 10px;
            color: #ededed;
            text-align: center;
            border-radius: 6px;
            font-weight: 600;
        }

        .wrapper .wrapper_inside .right_container .header{
            background-color: #00af1c;
        }

        .wrapper .wrapper_inside .left_container .header{
            background-color: #e10101b5;
        }

        .container_dragula{
            min-height: 50px;
            cursor: pointer;
        }

        .container_dragula > div {
            display: flex;
            align-items: center;
        }

        .container_dragula button {
            flex: 1 1 10%;
            padding: 12px 24px;
            border: 1px solid #e9e9e9;
            border-radius: 4px;
            background-color: #ff4545;
            font-size: 16px;
            text-align: center;
            color: #fff;
            font-weight: 400;
            cursor: pointer;
            transition: all 0.2s ease;
            margin-right: 10px;
        }

        .container_dragula button:hover{
            border-color: #ffa2a2;
            background-color: #ff0000;
        }

        .container_dragula div.list_item {
            flex: 1 1 90%;
            margin: 10px;
            padding: 10px;
            background-color: rgb(225 225 225 / 52%);
            transition: all 0.4s ease-in-out;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
            font-size: 13px;
        }

        .container_dragula {
            background-color: rgba(255, 255, 255, 0.2);
        }

        .container_dragula:nth-child(odd) {
            background-color: rgba(0, 0, 0, 0.2);
        }

        .wrapper_inside .input_section{
            display: flex;
            align-items: center;
            gap: 16px;
            padding: 12px 8px;
        }

        .input_section input{
            flex: 1 1 80%;
            padding: 12px;
            border: 1px solid #bdbdbd;
            border-radius: 4px;
            transition: border-color 0.2s ease;
            font-size: 14px;
        }

        .input_section input:focus-visible{
            outline: none;
            border-color: #605e5e;
        }

        .input_section button{
            flex: 1 1 20%;
            padding: 12px 24px;
            border: 1px solid #e9e9e9;
            border-radius: 4px;
            background-color: #918d8d;
            font-size: 17px;
            text-align: center;
            color: #fff;
            font-weight: 400;
            cursor: pointer;
            transition: all 0.2s ease;
        }

        button:focus-visible{
            outline: none;
        }

        .input_section button:hover{
            border-color: #524f4f;
            background-color: #a9a4a4;
        }
    </style>
    <div class="row mb-4">
        <div class="col-md-12 mb-4">


            <div class="card">
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center">
                        <h3>Hesabat tərkibi</h3>

                    </div>

                </div>
                <div class="card-body">

                    <div class="wrapper">
                        <div class="wrapper_inside" id="wrapper">
                            <div class="left_container">
                                <div class="header">Görüləcək işlər</div>

                                <div id="left" class="container_dragula">
                                @foreach($reports as $report)
                                    @foreach($report->reports_subjects->where('status', 0) as $subject_key => $subject)
                                    <div>
                                        <div class="list_item"><p data-id="{{ $subject->id }}">{{ $subject->project_name ?? NULL }} - {{ $subject->subject}}</p></div>
                                        <button>Sil</button>
                                    </div>
                                    @endforeach
                                @endforeach
                                </div>

                                <div class="input_section">
                                    <input type="text">
                                    <button type="button">Əlavə et</button>
                                </div>
                            </div>

                            <div class="right_container">
                                <div class="header">Hesabat tərkibi</div>
                                <div id="right" class="container_dragula">
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="card mt-4">
                <div class="card-header">
                    <h3>Həftəlik hesabatlar</h3>
                </div>
                <div class="card-body">
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
                </div>
            </div>

        </div>
    </div>

@endsection

@section('js')
<script src="https://cdn.jsdelivr.net/npm/interactjs/dist/interact.min.js"></script>
<!-- <script src='https://cdnjs.cloudflare.com/ajax/libs/dragula/$VERSION/dragula.min.js'></script> -->
<script src='https://cdnjs.cloudflare.com/ajax/libs/dragula/3.6.6/dragula.min.js'></script>
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

    <script>

        dragula([document.querySelector('#left'), document.querySelector('#right')]);

        // Function to initialize the MutationObserver
        function observeDivChanges() {
            // Select the target node
            const target = document.getElementById('left');

            // Create a callback function to execute when mutations are observed
            const callback = function(mutationsList, observer) {
                
                for (const mutation of mutationsList) {

                    if (mutation.type === 'childList') {
                        
                        if (mutation.addedNodes.length > 0) {
                            mutation.addedNodes.forEach(node => {
                                const data_id = node.querySelector('p').getAttribute('data-id');
                            });
                        }
                        
                        if (mutation.removedNodes.length > 0) {
                            mutation.removedNodes.forEach(node => {
                                const data_id = node.querySelector('p').getAttribute('data-id');
                            });
                        }
                    }

                    if(mutation.type === 'attributes'){
                        console.log('something changed inside of the element 🦝')
                    }
                }
            };

            // Create an observer instance linked to the callback function
            const observer = new MutationObserver(callback);

            // Options for the observer (which mutations to observe)
            var config = { attributes: true, childList: true, subtree: true, characterData: true };

            // Start observing
            observer.observe(target, config);

            // Optionally, stop observing
            // observer.disconnect();
        }

        observeDivChanges();

    </script>

@endsection
