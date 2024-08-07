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
                    <form method="POST" action="{{ route('employee.tickets.store') }}" class="store-local-report-form">
                        @csrf
                        <div class="form_inputs_container position-relative">
                            <div class="row position-relative form_block" id="formRow">
                                <div class="col-md-3 form-group mb-3">
                                    <div class="select_label ui sub header ">Biletin tipi</div>
                                    <select frequency="true" id="type" name="type" class="form-control ui fluid search dropdown create_form_dropdown vendors_select_cl">
                                        <option value="">Biletin tipini seçin</option>
                                        <option value="Sorğu">Sorğu</option>
                                        <option value="Tapşırıq">Tapşırıq</option>
                                    </select>
                                    <span class="text-danger error_message" id="categories_idError"></span>
                                </div>

                                <div class="col-md-3 form-group mb-3">
                                    <div class="select_label ui sub header ">Departament</div>
                                    <select frequency="true" id="department" name="departments_id" class="form-control ui fluid search dropdown create_form_dropdown vendors_select_cl">
                                        <option value="">Departament seçin</option>
                                        @foreach($departments as $department)
                                            <option value="{{ $department->id }}">{{ $department->name }}</option>
                                        @endforeach
                                    </select>
                                    <span class="text-danger error_message" id="categories_idError"></span>
                                </div>

                                <div class="col-md-3 form-group mb-3" id="departament-contain">
                                    <div class="select_label ui sub header ">Tərkib</div>
                                    <select frequency="true" id="department_contain_select" name="branch_user" class="form-control ui fluid search dropdown create_form_dropdown vendors_select_cl">
                                    </select>
                                    <span class="text-danger error_message" id="categories_idError"></span>
                                </div>

                                <div class="col-md-3 form-group mb-3">
                                    <div class="select_label ui sub header ">Səbəb</div>
                                    <select frequency="true" id="reasons_select" name="ticket_reasons_id" class="form-control ui fluid search dropdown create_form_dropdown vendors_select_cl">
                                        <option value="">Səbəb seçin</option>
                                        <option value="0">Digər...</option>
                                    </select>
                                    <span class="text-danger error_message" id="categories_idError"></span>
                                </div>

                                <div class="col-md-3 form-group mb-3">
                                    <div class="select_label ui sub header ">Vaciblik dərəcəsi</div>
                                    <select frequency="true" id="ticket_priority" name="ticket_priority" class="form-control ui fluid search dropdown create_form_dropdown vendors_select_cl">
                                        <option value="">Vaciblik dərəcəsi seçin</option>
                                        <option value="Təcili deyil">Təcili deyil</option>
                                        <option value="Normal">Normal</option>
                                        <option value="Təcilidir">Təcilidir</option>
                                    </select>
                                    <span class="text-danger error_message" id="categories_idError"></span>
                                </div>

                                <div class="col-md-3 form-group mb-3">
                                    <div class="select_label ui sub header ">Əlavə qeyd</div>
                                    <div class="ui input">
                                        <input id="note" required value="{{old('note')}}"
                                               name="note" type="text" placeholder="">
                                    </div>
                                    <span class="text-danger error_message" id="noteError"></span>
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
        $('#department').on("change", function () {
            const id = $(this).val();
            $.ajax({
                url:"{{ route('employee.get-department-data') }}",
                method:"POST",
                data:{
                    "_token":"{{ csrf_token() }}",
                    "id":id
                },
                success:function(response)
                {
                    if (response.status) {
                        $('#department_contain_select').empty();

                        let department = response.data;
                        $('#department_contain_select').append(
                            $('<option>', {
                                value: department.id,
                                text: `${department.name}`
                            })
                        );

                        department.branches.forEach(branch => {
                            let branchOptGroup = $('<optgroup>', {
                                label: branch.name
                            });

                            branch.positions.forEach(position => {
                                let positionOptGroup = $('<optgroup>', {
                                    label: position.name
                                });

                                position.users.forEach(user => {
                                    positionOptGroup.append(
                                        $('<option>', {
                                            value: user.id,
                                            text: user.name
                                        })
                                    );
                                });

                                branchOptGroup.append(positionOptGroup);
                            });

                            $('#department_contain_select').append(branchOptGroup);
                        });

                        $('#department_contain_select').dropdown('refresh');
                    } else {
                        console.log('No department data found');
                    }
                }
            })
        })
    </script>
@endsection
