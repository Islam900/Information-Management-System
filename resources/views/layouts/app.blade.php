<!DOCTYPE html>
<html lang="en">
<meta http-equiv="content-type" content="text/html;charset=UTF-8"/>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="BRo50BKcBSbFtNDV2aE5RHXS6DX69Y6ll9PEvImY">
    <title>İnventar İdarə Sistemi</title>
    <link id="gull-theme" rel="stylesheet" href="{{ asset('assets/styles/css/themes/create_foreign_broadcast.css') }}">
    <link id="gull-theme" rel="stylesheet" href="{{ asset('assets/styles/css/themes/lite-purple.min.css')}}">
    <link rel="stylesheet" href="{{ asset('assets/styles/vendor/perfect-scrollbar.css')}}">
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.11.5/css/jquery.dataTables.css">
    <link rel="stylesheet" href="{{ asset('assets/styles/vendor/pickadate/classic.css')}}">
    <link rel="stylesheet" href="{{ asset('assets/styles/vendor/pickadate/classic.date.css')}}">
    <link href="https://cdn.jsdelivr.net/npm/sweetalert2@11.10.5/dist/sweetalert2.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.5.0/semantic.min.css"
          integrity="sha512-KXol4x3sVoO+8ZsWPFI/r5KBVB/ssCGB5tsv2nVOKwLg33wTFP3fmnXa47FdSVIshVTgsYk/1734xSk9aFIa4A=="
          crossorigin="anonymous" referrerpolicy="no-referrer"/>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.css" rel="stylesheet">

    <style>
        .main-content-wrap {
            background-image: url({{ asset('assets/images/bg-main.png') }});
            backdrop-filter: invert(20%);
        }
    </style>
    @yield('css')
</head>
<body class="text-left main-body">
<div class='loadscreen' id="preloader">
    <div class="loader spinner-bubble spinner-bubble-primary">
    </div>
</div>
<!-- ============ Compact Layout start ============= -->
<!-- ============Deafult  Large SIdebar Layout start ============= -->
<div class="app-admin-wrap layout-sidebar-large clearfix">
    @yield('main-content')

    <!-- ============ Body content End ============= -->
</div>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="{{ asset('assets/js/common-bundle-script.js')}}"></script>

<script src="{{ asset('assets/js/es5/dashboard.v1.script.js')}}"></script>
<script src="{{ asset('assets/js/es5/dashboard.v2.script.js')}}"></script>
<script src="{{ asset('assets/js/script.js')}}"></script>
<script src="{{ asset('assets/js/sidebar.large.script.js')}}"></script>
<script src="{{ asset('assets/js/customizer.script.js')}}"></script>
<script src="{{ asset('assets/js/form.basic.script.js')}}"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.10.5/dist/sweetalert2.all.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.5.0/semantic.min.js"
        integrity="sha512-Xo0Jh8MsOn72LGV8kU5LsclG7SUzJsWGhXbWcYs2MAmChkQzwiW/yTQwdJ8w6UA9C6EVG18GHb/TrYpYCjyAQw=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://cdn.datatables.net/1.11.5/js/jquery.dataTables.min.js"></script>
<script src="{{ asset('assets/js/vendor/pickadate/picker.js')}}"></script>

<script src="{{ asset('assets/js/vendor/pickadate/picker.date.js')}}"></script>
<script src="{{ asset('assets/js/create_foreign_broadcast.js') }}"></script>

<script src="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.js"></script>
<!-- Initialize Quill editor -->
@yield('js')
</body>
</html>
