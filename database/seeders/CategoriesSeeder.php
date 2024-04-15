<?php

namespace Database\Seeders;

use App\Models\Categories;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            'Kondisioner',
            'Notebook',
            'Klaviatura',
            'Planşet',
            'Soyuducu',
            'Printer',
            'Notebook',
            'Monoblok',
            'Masa',
            'Dolab',
            'Elektrik malları',
            'Monitor',
            'Mouse',
            'Stasionar telefon',
            'Stul',
            'Kreslo',
            'Yaddaş diski (xarici)',
            'Yaddaş diski (xarici)',
            'Unify',
            'Televizor',
            'Şredder ( kağız doğrayan)',
            'Switch',
            'SİP telefon',
            'RJ Aləti',
            'Proyektor',
            'Printer',
            'Planşet',
            'Notebook üçün altlıq',
            'Notebook çantası',
            'Notebook',
            'Mouse',
            'Monoblok',
            'Monitor',
            'Klaviatura naqilsiz',
            'Klaviatura naqilli',
            'Kabel (HDMI)',
            'Fotoaparat',
            'Flaş ( Yaddaş qurğusu)',
            'Etiketləmə maşını',
            'Tester'
        ];

        foreach ($categories as $item)
        {
            Categories::create([
                'name' => $item,
                'status' => 1
            ]);
        }
    }
}
