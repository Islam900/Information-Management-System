<?php

function display_user_types()
{
    $types_array = [
        'employee' => [
            'name' => 'İşçi',
            'route' => route("employee.home")
        ],
        'administrator' => [
            'name' => 'Administrator',
            'route' => route("admin.dashboard")
        ],
        'hr' => [
            'name' => 'İnsan resursları',
            'route' => NULL
        ],
        'finance' => [
            'name' => 'Mühasibatlıq',
            'route' => NULL
        ],
        'warehouseman' => [
            'name' => 'Təhcizat',
            'route' => route('warehouseman.warehouseman')
        ],
        'support' => [
            'name' => 'Texniki dəstək',
            'route' => route('support.home')
        ]
    ];

    $user_types = explode(',', \Illuminate\Support\Facades\Auth::user()->type);

    $compact_types = [];
    if (count($user_types) > 1) {
        foreach ($user_types as $type_key => $type) {
             $compact_types[$type_key]['type'] = $types_array[$type];
        }
    }

    return $compact_types;
}

