@extends('admin.layouts.app')
@section('content')
    <form action="{{ route('sendMessageRouteName') }}" method="POST">
        @csrf 
        <input type="text" name="to_user_id" value="{{ Auth::user()->id }}" id="to_user_id">
        <input type="text" name="message" id="message">
    </form>
@endsection