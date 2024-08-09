@extends('employee.layouts.app')
@section('content')

    <div class="row mb-4">
        <div class="col-md-12 mb-4">
            <div class="card">
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center">
                        <h3>Yeni texniki dəstək bileti</h3>
                        <a href="{{ route('employee.tickets.index') }}">
                            <button class="btn btn-danger">
                                <span class="me-2">
                                    <i class="nav-icon i-Arrow-Back-2"></i>
                                </span>
                                Texniki dəstək biletləri
                            </button>
                        </a>
                    </div>
                </div>
                <div class="card-body">
                    <form method="POST" action="{{ route('employee.tickets.store') }}" class="store-local-report-form" enctype="multipart/form-data">
                        @csrf
                        <div class="form_inputs_container position-relative">
                            <div class="row position-relative form_block" id="formRow">
                                <div class="col-md-3 form-group mb-3">
                                    <div class="select_label ui sub header ">Biletin tipi <span class="red-star">*</span></div>
                                    <select frequency="true" id="type" name="type" required
                                            class="form-control ui fluid search dropdown create_form_dropdown vendors_select_cl">
                                        <option value="">Biletin tipini seçin</option>
                                        <option value="Sorğu">Sorğu</option>
                                        <option value="Tapşırıq">Tapşırıq</option>
                                    </select>
                                    <span class="text-danger error_message" id="categories_idError"></span>
                                </div>

                                <div class="col-md-3 form-group mb-3">
                                    <div class="select_label ui sub header ">Tərkib <span class="red-star">*</span></div>
                                    <div
                                        class="ui scrolling labeled icon form-control fluid create_form_dropdown vendors_select_cl pointing dropdown department_container button">
                                        <i class="filter icon"></i>
                                        <span class="text">Hədəf təyin edin</span>
                                        <div class="menu">
                                            <div class="ui search icon input">
                                                <i class="search icon"></i>
                                                <input type="text" name="search" placeholder="Axarın...">
                                            </div>
                                            <div class="divider"></div>
                                            <div class="header">
                                                <i class="calendar icon"></i>
                                                Departamentlər
                                            </div>
                                            @foreach($departments as $department)
                                                <div class="item" data-department-value="{{ $department->id }}">
                                                    <div class="ui blue empty circular label"></div>
                                                    {{ $department->name }}
                                                </div>
                                            @endforeach
                                            <div class="header">
                                                <i class="calendar icon"></i>
                                                Şöbələr
                                            </div>
                                            @foreach($branches as $branch)
                                                <div class="item"
                                                     data-department-value="{{ $branch->departments ? $branch->departments->id : '' }}">
                                                    <i class="ui orange empty circular label"></i>
                                                    {{ $branch->name }}
                                                </div>
                                            @endforeach
                                            <div class="header">
                                                <i class="calendar icon"></i>
                                                İşçilər
                                            </div>
                                            @foreach($users as $user)
                                                <div
                                                    class="item" {{ $user->departments ? $user->departments->id : '' }}>
                                                    <i class="ui green empty circular label"></i>
                                                    {{ $user->name }}
                                                </div>
                                            @endforeach
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-3 form-group mb-3">
                                    <div class="select_label ui sub header ">Səbəb <span class="red-star">*</span></div>
                                    <select frequency="true" id="department_ticket_subjects_id"
                                            name="department_ticket_subjects_id"
                                            class="form-control ui fluid search dropdown create_form_dropdown vendors_select_cl department_ticket_subjects">
                                        <option value="">Səbəb seçin</option>
                                    </select>
                                    <span class="text-danger error_message" id="categories_idError"></span>
                                </div>

                                <div class="col-md-3 form-group mb-3" id="individual-subject">
                                    <div class="select_label ui sub header ">Səbəbi qeyd edin</div>
                                    <div class="ui input">
                                        <input id="subject" name="subject" type="text" placeholder="">
                                    </div>
                                    <span class="text-danger error_message" id="noteError"></span>
                                </div>

                                <div class="col-md-3 form-group mb-3">
                                    <div class="select_label ui sub header ">Vaciblik dərəcəsi <span class="red-star">*</span></div>
                                    <select frequency="true" id="ticket_priority" name="ticket_priority"
                                            class="form-control ui fluid search dropdown create_form_dropdown vendors_select_cl">
                                        <option value="">Vaciblik dərəcəsi seçin</option>
                                        <option value="Təcili deyil">Təcili deyil</option>
                                        <option value="Normal">Normal</option>
                                        <option value="Təcilidir">Təcilidir</option>
                                    </select>
                                    <span class="text-danger error_message" id="categories_idError"></span>
                                </div>
                            </div>

                            <div class="row position-relative form_block"  id="formRow">

                                <div class="col-md-8 form-group mb-3">
                                    <div class="select_label ui sub header ">Əlavə qeyd daxil edin</div>
                                    <div class="input">
                                        <textarea name="note" class="summernote" rows="10"></textarea>
                                    </div>
                                </div>

                                <div class="col-md-4 form-group mb-3">
                                    <div class="select_label ui sub header ">Fayl əlavə edin</div>
                                    <div class="input">
                                        <input type="file" name="file" id="myDropify" required/>
                                    </div>
                                </div>
                            </div>
                            <button class="btn btn-primary btn-lg" type="submit">Yeni bilet yaradın</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('js')
    <script>
        $('#myDropify').dropify({height: 330});
        $('#individual-subject').hide();
        $('.summernote').summernote({height: 300});
        $('.ui.dropdown.department_container').dropdown({
            onChange: function (value, text, $selectedItem) {
                var departmentValue = $selectedItem.data('department-value');
                if (!departmentValue) return;
                $.post("{{ route('employee.get-department-ticket-subject') }}", {
                    value: departmentValue,
                    _token: '{{ csrf_token() }}'
                })
                    .done(function (response) {
                        if (response.status) {
                            var $subjectSelect = $('#department_ticket_subjects_id');
                            $subjectSelect.prop('disabled', false);
                            $.each(response.subjects, function (index, subject) {
                                $subjectSelect.append(new Option(subject.subject, subject.id));
                            });
                        } else {
                            $('#department_ticket_subjects_id').html(response.message);
                            $('#department_ticket_subjects_id').prop('disabled', true);
                        }
                    })
                    .fail(function (xhr, status, error) {
                        console.error('Error:', error);
                    });
            }
        });


        $('.department_ticket_subjects').dropdown({
            onChange: function (value, text, $selectedItem) {
                text == "Digər" ? $('#individual-subject').fadeIn(500) : $('#individual-subject').hide();
            }
        });


    </script>
@endsection
