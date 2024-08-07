<?php

namespace Database\Seeders;

use App\Models\DepartmentTicketSubjects;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DepartmentTicketSubjectsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $array = [
            "Printerlə bağlı müraciətlər",
            "Email ilə bağlı müraciətlər",
            "İstifadəçi adı ilə bağlı müraciətlər",
            "Proqram təminatının yazılması",
            "Simli şəbəkə bağlantıları ilə bağlı müraciətlər",
            "Tətbiqi proqramlarla bağlı texniki dəstək",
            "Telefonarla bağlı müraciətlər",
            "IT avadanlıqlarının quraşdırılması",
            "Simsiz şəbəkə bağlantıları ilə bağlı müraciətlər",
            "Kompüterdə texniki nasazlıqar",
            "İnternet saytlarında qadağalar",
            "VPN bağlantısı üçün müraciət",
            "Share folderlə bağlı müraciətlər",
            "Digər"
        ];

        foreach ($array as $value) {
            DepartmentTicketSubjects::create([
                'departments_id' => 3,
                'subject' => $value,
                'status' => 1
            ]);
        }
    }
}
