<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FacilitiesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('facilities')->insert([
            [
                'name' => 'Fútbol 11',
                'description' => 'Campo de fútbol 11 con césped natural.',
                'max_users' => 22,
                'quantity' => 1,
                'light' => true,
                'price' => 95.00,
                'price_member' => null,
                'price_light' => 25.00,
                'surface' => 'Césped natural',
                'image' => 'assets/futbol11.jpg',
            ],
            [
                'name' => 'Fútbol 7',
                'description' => 'Campo de fútbol 7 con césped artificial.',
                'max_users' => 14,
                'quantity' => 1,
                'light' => true,
                'price' => 60.00,
                'price_member' => null,
                'price_light' => 15.00,
                'surface' => 'Césped artificial',
                'image' => 'assets/futbol7.jpg',
            ],
            [
                'name' => 'Pabellón exterior',
                'description' => 'Pabellón exterior multiusos.',
                'max_users' => 50,
                'quantity' => 1,
                'light' => true,
                'price' => 10.00,
                'price_member' => null,
                'price_light' => 5.00,
                'surface' => 'Cemento',
                'image' => 'assets/pabellonexterior.jpg',
            ],
            [
                'name' => 'Pabellón interior',
                'description' => 'Pabellón interior con parquet.',
                'max_users' => 50,
                'quantity' => 1,
                'light' => true,
                'price' => 30.00,
                'price_member' => null,
                'price_light' => 6.00,
                'surface' => 'Parquet',
                'image' => 'assets/pabelloninterior.jpg',
            ],
            [
                'name' => 'Tenis pista dura',
                'description' => 'Pista de tenis con superficie dura.',
                'max_users' => 4,
                'quantity' => 2,
                'light' => true,
                'price' => 5.50,
                'price_member' => 4.00,
                'price_light' => 2.50,
                'surface' => 'Dura',
                'image' => 'assets/tenisdura.jpg',
            ],
        ]);
    }
}