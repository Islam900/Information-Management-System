<!DOCTYPE html>
<html lang="en">
<meta http-equiv="content-type" content="text/html;charset=UTF-8" />

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>IMS Login</title>
    <link href="https://fonts.googleapis.com/css?family=Nunito:300,400,400i,600,700,800,900" rel="stylesheet">
    <link rel="stylesheet" href="{{asset('assets/styles/css/themes/lite-purple.min.css')}}">
    <style>
        .auth-layout-wrap {
            background-image: url({{ asset('assets/images/bg-main.png') }});
            backdrop-filter: invert(20%);
        }
    </style>
    <link href="https://cdn.jsdelivr.net/npm/sweetalert2@11.10.5/dist/sweetalert2.min.css" rel="stylesheet">

</head>

<body>
<div class="auth-layout-wrap">
    <div class="auth-content">
        <div class="card o-hidden">
            <div class="row">
                <div class="col-md-12">
                    <div class="p-4">
                        <div class="text-center mb-4">
                            <div class="d-flex justify-content-between align-items-center">
                                <img src="{{asset('assets/images/gradient_black.png')}}" alt="" height="60px;">
                                <img src="{{asset('assets/images/logoobiri.svg')}}" alt="" height="60px;">
                            </div>
                        </div>
                        <hr>
                        <form id="loginForm" action="{{route('login')}}" method="POST">
                            @csrf
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input id="email" class="form-control @error('email') is-invalid @enderror" required name="email" value="{{ old('email') }}" placeholder="Email ünvanınızı daxil edin..." type="email">
                            </div>
                            <div class="form-group">
                                <label for="password">Şifrə</label>
                                <input id="password" class="form-control @error('password') is-invalid @enderror" name="password" placeholder="********" type="password">
                            </div>
                            <!-- Add a hidden input field to capture the selected role -->
                            <input type="hidden" id="selectedRole" name="selectedRole">
                            <!-- Modify your login button to trigger role selection if needed -->
                            <button class="btn btn-primary btn-block mt-2" id="loginButton">Daxil olun</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Add a modal for role selection -->
<div class="modal" id="roleSelectionModal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Səlahiyyət seçimi</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <p>Hansı səlahiyyətlərlə daxil olmaq istəyirsiniz:</p>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="roleSelection" id="roleEmployee" value="employee">
                    <label class="form-check-label" for="roleEmployee">
                        Employee
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="roleSelection" id="roleWarehouseman" value="warehouseman">
                    <label class="form-check-label" for="roleWarehouseman">
                        Warehouseman
                    </label>
                </div>
                <!-- Add other roles as needed -->
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" id="confirmRoleSelection">Təsdiqlə</button>
            </div>
        </div>
    </div>
</div>

<script src="{{ asset('assets/js/common-bundle-script.js') }}"></script>

<script src="{{ asset('assets/js/script.js') }}"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.10.5/dist/sweetalert2.all.min.js"></script>

<script>
document.addEventListener("DOMContentLoaded", function () {
    $('#loginButton').click(function (e) {
        e.preventDefault();

        var email = $('#email').val();
        var password = $('#password').val();

        // Get CSRF token from the page's meta tags
        var csrfToken = $('meta[name="csrf-token"]').attr('content');

        // Send AJAX request to check user status
        $.ajax({
            type: "POST",
            url: "{{ route('check.user.status') }}",
            headers: {
                'X-CSRF-TOKEN': csrfToken // Include CSRF token in headers
            },
            data: {
                email: email,
                password: password
            },
            success: function (response) {
                console.log(response);

                if (response.status === 'multiple_roles') {
                    // Display modal
                    $('#roleSelectionModal').modal('show');

                    // Populate modal with roles
                    var roles = response.roles;
                    var modalBody = $('#roleSelectionModal .modal-body');
                    modalBody.empty(); // Clear existing content

                    // Create radio buttons for each role
                    var roleTranslations = {
                        'employee': 'İşçi',
                        'warehouseman': 'Anbardar',
                        'hr': 'İnsan Resursları',
                        'finance': 'Mühasib',
                        'administrator': 'Administrator' // Add translations for other roles as needed
                    };

                    roles.forEach(function(role) {
                        var translatedRole = roleTranslations[role] || role;
                        var radioButton = $('<input type="radio" name="roleSelection" value="' + role + '">');
                        var label = $('<label>').text(translatedRole);
                        modalBody.append(radioButton).append(label).append('<br>');
                    });
                } else if (response.status === 'single_role') {
                    // Submit the form if user has only one role
                    $('#selectedRole').val(response.role);
                    $('#loginForm').submit();
                } else {
                    // Show error message if credentials are invalid or user not found
                    Swal.fire({
                        title: 'Error!',
                        text: response.message || 'Invalid credentials or user not found',
                        icon: 'error',
                        showConfirmButton: true
                    });
                }
            },
            error: function (xhr, status, error) {
                // Show detailed error message if request fails
                var errorMessage = xhr.status + ': ' + xhr.statusText;
                if (xhr.responseJSON && xhr.responseJSON.message) {
                    errorMessage += ' - ' + xhr.responseJSON.message;
                }
                Swal.fire({
                    title: 'Error!',
                    text: errorMessage,
                    icon: 'error',
                    showConfirmButton: true
                });
            }
        });
    });

    // Handle role selection confirmation
    $('#confirmRoleSelection').click(function () {
        var selectedRole = $('input[name=roleSelection]:checked').val();
        $('#selectedRole').val(selectedRole);
        console.log(selectedRole);
        $('#loginForm').submit();
    });
});
</script>



</body>
</html>
