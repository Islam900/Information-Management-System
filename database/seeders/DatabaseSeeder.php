<?php

namespace Database\Seeders;

use App\Models\Branches;
use App\Models\Categories;
use App\Models\Departments;
use App\Models\GeneralSettings;
use App\Models\Positions;
use App\Models\Rooms;
use App\Models\TicketReasons;
use App\Models\User;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Vendors;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(DepartmentsSeeder::class);
        $this->call(BranchesSeeder::class);
        $this->call(PositionsSeeder::class);
        $this->call(RoomsSeeder::class);
        $this->call(CategoriesSeeder::class);
        // $this->call(EmployeesSeeder::class);
        $this->call(VendorsSeeder::class);
        $this->call(GeneralSettingsSeeder::class);

        User::create([
            'departments_id' => NULL,
            'branches_id' => NULL,
            'positions_id' => NULL,
            'rooms_id' => 1,
            'name' => 'Cavid Şıxıyev',
            'email' => 'admin@gmail.com',
            'password' => bcrypt('salamadmin'),
            'type' => 'administrator'
        ]);

        User::create([
            'departments_id' => 1,
            'branches_id' => 3,
            'positions_id' => 17,
            'rooms_id' => 1,
            'name' => 'Elman Ənvərli',
            'email' => 'whm@gmail.com',
            'password' => bcrypt('salamadmin'),
            'type' => 'warehouseman'
        ]);

        User::create([
            'departments_id' => 1,
            'branches_id' => 3,
            'positions_id' => 16,
            'rooms_id' => 1,
            'name' => 'Güllər Qədimova',
            'email' => 'hr@gmail.com',
            'password' => bcrypt('salamadmin'),
            'type' => 'human-resource'
        ]);

        User::create([
            'departments_id' => 1,
            'branches_id' => 3,
            'positions_id' => 15,
            'rooms_id' => 1,
            'name' => 'Cavid Həsənli',
            'email' => 'support@gmail.com',
            'password' => bcrypt('salamadmin'),
            'type' => 'support'
        ]);

        User::create([
            'departments_id' => 1,
            'branches_id' => 3,
            'positions_id' => 18,
            'rooms_id' => 1,
            'name' => 'Röya Quliyeva',
            'email' => 'user@gmail.com',
            'password' => bcrypt('salamadmin'),
            'type' => 'employee'
        ]);

        TicketReasons::create([
            'reason' => 'Səbəb 1',
            'status' => 1
        ]);
        TicketReasons::create([
            'reason' => 'Səbəb 2',
            'status' => 1
        ]);
        TicketReasons::create([
            'reason' => 'Səbəb 3',
            'status' => 1
        ]);
    }
}
