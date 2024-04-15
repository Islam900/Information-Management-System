@extends('admin.layouts.app')
@section('content')
    <div class="row mb-4">
        <div class="col-md-12 mb-4">

            <div class="card">
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center">
                        <h3>Ümumi tənzimləmələr</h3>
                    </div>
                </div>
                <form action="{{ route('admin.update-general-settings') }}" method="POST">
                @csrf
                    <div class="card-body">
                            
                                    <div class="accordion mt-2" id="accordionRightIcon">
                                        <div class="card">
                                            <div class="card-header header-elements-inline">
                                                <h6 class="card-title ul-collapse__icon--size ul-collapse__right-icon mb-0">
                                                    <a data-toggle="collapse" class="text-default collapsed"
                                                    href="#accordion-item-icons-1" aria-expanded="false">
                                                        <span><i class="i-Big-Data ul-accordion__font"> </i></span>
                                                        Sistemə giriş mesajı</a>
                                                </h6>
                                            </div>
                                            <div id="accordion-item-icons-1" class="collapse"
                                                data-parent="#accordionRightIcon" style="">
                                                <div class="card-body">
                                                    <textarea name="welcome_message" class="summernote" id="" cols="30" rows="10">{{ !is_null($item->welcome_message) ? $item->welcome_message : '' }}</textarea>
                                                </div>                                                
                                            </div>
                                        </div>
                                    </div>

                                    <div class="accordion mt-2" id="accordionRightIcon">
                                        <div class="card">
                                            <div class="card-header header-elements-inline">
                                                <h6 class="card-title ul-collapse__icon--size ul-collapse__right-icon mb-0">
                                                    <a data-toggle="collapse" class="text-default collapsed"
                                                    href="#accordion-item-icons-2" aria-expanded="false">
                                                        <span><i class="i-Big-Data ul-accordion__font"> </i></span>
                                                        Təmir modu və bildiriş</a>
                                                </h6>
                                            </div>
                                            <div id="accordion-item-icons-2" class="collapse"
                                                data-parent="#accordionRightIcon" style="">
                                                <div class="card-body">
                                                    <label class="checkbox checkbox-warning">
                                                        <input type="checkbox" name="repair_mode" {{ $item->repair_mode == 1 ? 'checked' : ''}}>
                                                        <span>Təmir modu</span>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                    <hr>
                                                    <textarea name="repair_mode_message" class="summernote" id="" cols="30" rows="10">{{ !is_null($item->repair_mode_message) ? $item->repair_mode_message : '' }}</textarea>
                                                </div>                                                
                                            </div>

                                        </div>
                                    </div>

                                    <div class="accordion mt-2" id="accordionRightIcon">
                                        <div class="card">
                                            <div class="card-header header-elements-inline">
                                                <h6 class="card-title ul-collapse__icon--size ul-collapse__right-icon mb-0">
                                                    <a data-toggle="collapse" class="text-default collapsed"
                                                    href="#accordion-item-icons-3" aria-expanded="false">
                                                        <span><i class="i-Big-Data ul-accordion__font"> </i></span>
                                                        Həftəlik hesabat modulu və istifadəçilər</a>
                                                </h6>
                                            </div>
                                            <div id="accordion-item-icons-3" class="collapse"
                                                data-parent="#accordionRightIcon" style="">
                                                <div class="card-body">
                                                    <label class="checkbox checkbox-warning">
                                                        <input type="checkbox" name="weekly_report_module" {{ $item->weekly_report_module == 1 ? 'checked' : ''}}>
                                                        <span>Həftəlik hesabat modulu</span>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                    <hr>
                                                    <div class="row">
                                                        <div class="col-4">
                                                            <h3>Departament</h3>
                                                            @foreach ($departments as $department_key => $department)
                                                            <label class="checkbox checkbox-primary">
                                                                <input type="checkbox" id="{{$department_key}}" name="departments_id[]" value="{{ $department->id }}">
                                                                <span>{{ $department->name}}</span>
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            @endforeach
                                                        </div>
                                                        <div class="col-8">
                                                            <h3>Şöbə</h3>
                                                            <div class="row">
                                                                @foreach ($branches as $branch_key => $branch)
                                                                <div class="col-4">
                                                                    <label class="checkbox checkbox-primary">
                                                                        <input type="checkbox" id="{{$branch_key}}" name="branch_id[]" value="{{ $branch->id }}">
                                                                        <span>{{ $branch->name}}</span>
                                                                        <span class="checkmark"></span>
                                                                    </label>
                                                                </div>
                                                                @endforeach
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <hr>
                                                    <div class="row">
                                                        <div class="col-12 mt-2">
                                                            <h3>İşçilər</h3>
                                                            <div class="row">
                                                                @foreach ($users as $user_key => $user)
                                                                <div class="col-4">
                                                                    <label class="checkbox checkbox-primary">
                                                                        <input type="checkbox" id="{{$user_key}}" name="user_id[]" value="{{ $user->id }}">
                                                                        <span>{{ $user->name}}</span>
                                                                        <span class="checkmark"></span>
                                                                    </label>
                                                                </div>
                                                                    @endforeach
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>                                                
                                            </div>
                                        </div>
                                    </div>

                                    <div class="accordion mt-2" id="accordionRightIcon">
                                        <div class="card">
                                            <div class="card-header header-elements-inline">
                                                <h6 class="card-title ul-collapse__icon--size ul-collapse__right-icon mb-0">
                                                    <a data-toggle="collapse" class="text-default collapsed"
                                                    href="#accordion-item-icons-4" aria-expanded="false">
                                                        <span><i class="i-Big-Data ul-accordion__font"> </i></span>
                                                        Ticket modulu</a>
                                                </h6>
                                            </div>
                                            <div id="accordion-item-icons-4" class="collapse"
                                                data-parent="#accordionRightIcon" style="">
                                                <div class="card-body">
                                                    <label class="checkbox checkbox-warning">
                                                        <input type="checkbox" name="ticket_module" {{ $item->ticket_module == 1 ? 'checked' : ''}}>
                                                        <span>Ticket modulu</span>
                                                        <span class="checkmark"></span>
                                                    </label>                                                        
                                                </div>                                                
                                            </div>
                                        </div>
                                    </div>

                                    <div class="accordion mt-2" id="accordionRightIcon">
                                        <div class="card">
                                            <div class="card-header header-elements-inline">
                                                <h6 class="card-title ul-collapse__icon--size ul-collapse__right-icon mb-0">
                                                    <a data-toggle="collapse" class="text-default collapsed"
                                                    href="#accordion-item-icons-5" aria-expanded="false">
                                                        <span><i class="i-Big-Data ul-accordion__font"> </i></span>
                                                        Təhvil-təslimdə pdf və excel generasiyası</a>
                                                </h6>
                                            </div>
                                            <div id="accordion-item-icons-5" class="collapse"
                                                data-parent="#accordionRightIcon" style="">
                                                <div class="card-body">
                                                    <label class="checkbox checkbox-warning">
                                                        <input type="checkbox" name="delivery_act_generation" {{ $item->delivery_to_another_employee == 1 ? 'checked' : ''}}>
                                                        <span>Təhvil-təslimdə pdf və excel generasiyası</span>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                    <hr>
                                                    <textarea name="delivery_act_content" class="summernote" id="" cols="30" rows="10">{{ $item->delivery_act_content }}</textarea>
                                                </div>                                                
                                            </div>

                                        </div>
                                    </div>

                                    <div class="accordion mt-2" id="accordionRightIcon">
                                        <div class="card">
                                            <div class="card-header header-elements-inline">
                                                <h6 class="card-title ul-collapse__icon--size ul-collapse__right-icon mb-0">
                                                    <a data-toggle="collapse" class="text-default collapsed"
                                                    href="#accordion-item-icons-6" aria-expanded="false">
                                                        <span><i class="i-Big-Data ul-accordion__font"> </i></span>
                                                        Bir işçidən başqa işçiyə təhvil verilən zaman pdf və excel generasiyası</a>
                                                </h6>
                                            </div>
                                            <div id="accordion-item-icons-6" class="collapse"
                                                data-parent="#accordionRightIcon" style="">
                                                <div class="card-body">
                                                    <label class="checkbox checkbox-warning">
                                                        <input type="checkbox" name="deliveryto_another_employee_act_generation" {{ $item->deliveryto_another_employee_act_generation == 1 ? 'checked' : ''}}>
                                                        <span>Bir işçidən başqa işçiyə təhvil verilən zaman pdf və excel generasiyası</span>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                    <hr>
                                                    <textarea name="delivery_to_another_employee_act_content" class="summernote" id="" cols="30" rows="10">{{ !is_null($item->delivery_to_another_employee_act_content) ? $item->delivery_to_another_employee_act_content : '' }}</textarea>
                                                </div>                                                
                                            </div>

                                        </div>
                                    </div>

                                    <div class="accordion mt-2" id="accordionRightIcon">
                                        <div class="card">
                                            <div class="card-header header-elements-inline">
                                                <h6 class="card-title ul-collapse__icon--size ul-collapse__right-icon mb-0">
                                                    <a data-toggle="collapse" class="text-default collapsed"
                                                    href="#accordion-item-icons-7" aria-expanded="false">
                                                        <span><i class="i-Big-Data ul-accordion__font"> </i></span>
                                                        Bildiriş modulu</a>
                                                </h6>
                                            </div>
                                            <div id="accordion-item-icons-7" class="collapse"
                                                data-parent="#accordionRightIcon" style="">
                                                <div class="card-body">
                                                    <label class="checkbox checkbox-warning">
                                                        <input type="checkbox" name="notification_module" {{ $item->notification_module == 1 ? 'checked' : ''}}>
                                                        <span>Bildiriş modulu</span>
                                                        <span class="checkmark"></span>
                                                    </label>
                                                    <hr>
                                                    <textarea name="notification_content" class="summernote" id="" cols="30" rows="10">{{ !is_null($item->notification_content) ? $item->notification_content : '' }}</textarea>
                                                </div>                                                
                                            </div>

                                        </div>
                                    </div>
                                    <button class="btn btn-success btn-lg mt-2" type="submit">
                                        Yadda saxlayın
                                    </button>
                    </div>
                        
                </form>

                <div class="card-body">
                    <div class="accordion mt-2" id="accordionRightIcon">
                        <div class="card">
                            <div class="card-header header-elements-inline">
                                <h6 class="card-title ul-collapse__icon--size ul-collapse__right-icon mb-0">
                                    <a data-toggle="collapse" class="text-default collapsed"
                                    href="#accordion-item-icons-reason" aria-expanded="false">
                                        <span><i class="i-Big-Data ul-accordion__font"> </i></span>
                                        Texniki dəstək səbəbləri</a>
                                </h6>
                            </div>
                            <div id="accordion-item-icons-reason" class="collapse"
                                data-parent="#accordionRightIcon" style="">
                                <div class="card-body">
                                    <table class="table table-bordered table-striped">
                                        <thead>
                                            <tr>
                                                <th colspan="4">
                                                    <form action="{{ route('admin.store-ticket-reasons') }}" method="POST">
                                                    @csrf 
                                                    <div class="d-flex align-items-center">
                                                        <input type="text" class="form-control mr-2" required name="reason" id="">
                                                        <button class="btn btn-lg btn-outline-success" type="submit" style="height: 48px;">Yeni</button>
                                                    </div>
                                                </form>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>№</th>
                                                <th>Səbəb</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            @foreach ($reasons as $reason)
                                            <tr>
                                                <td>{{ $reason->id }}</td>
                                                <td>{{ $reason->reason }}</td>
                                                <td>
                                                    <button class="btn btn-sm btn-{{$reason->status == 1 ? 'success' : 'danger'}}">
                                                        {{$reason->status == 1 ? 'Aktiv' : 'Deaktiv'}}
                                                    </button>
                                                </td>
                                            </tr>
                                            @endforeach
                                        </tbody>
                                    </table>
                                </div>                                                
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
@endsection
@section('js')
    <script>
        
        $(document).ready(function() {
            $('.summernote').summernote({ height: 300 });
        });

        
    </script>
@endsection
