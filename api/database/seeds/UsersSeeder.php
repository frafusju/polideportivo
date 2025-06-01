<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsersSeeder extends Seeder
{
    public function run()
    {
        DB::table('users')->insert([
            [
                'name' => 'Kiko',
                'surname' => 'Fuster Just',
                'birth_date' => '1994-18-08',
                'dni' => '12345678A',
                'membership_number' => '001',
                'is_active' => true,
                'password' => bcrypt('12345678'),
                'email' => 'kikodeblay@gmail.com',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Alice',
                'surname' => 'Johnson',
                'birth_date' => '1992-03-20',
                'dni' => '11223344C',
                'membership_number' => 'MEM003',
                'is_active' => false,
                'password' => bcrypt('password789'),
                'email' => 'alice.johnson@example.com',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}