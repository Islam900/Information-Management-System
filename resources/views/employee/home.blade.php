@extends('employee.layouts.app')

@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header text-center">
                    <h3>Information Management System</h3>
                    <code>
                        version 1.0.0
                    </code>
                </div>

                <div class="card-body text-center">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                    <code>
                        Hörmətli {{\Illuminate\Support\Facades\Auth::user()->name}}, sistemin təhlükəsizliyi üçün
                        şifrənizi gizli saxlayın
                    </code>
                </div>
            </div>
        </div>
    </div>
@endsection
