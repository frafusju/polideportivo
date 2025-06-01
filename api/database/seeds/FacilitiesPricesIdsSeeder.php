<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FacilitiesPricesIdsSeeder extends Seeder
{
    public function run()
    {
        DB::table('facilities_prices_ids')->insert([
            [
                'facilities_id' => 1, // Fútbol 11
                'facility_price_id' => '95.00',
                'facility_price_member_id' => null,
                'light_price_id' => '25.00',
            ],
            [
                'facilities_id' => 2, // Fútbol 7
                'facility_price_id' => '60.00',
                'facility_price_member_id' => null,
                'light_price_id' => '15.00',
            ],
            [
                'facilities_id' => 3, // Pabellón exterior
                'facility_price_id' => '10.00',
                'facility_price_member_id' => null,
                'light_price_id' => '5.00',
            ],
            [
                'facilities_id' => 4, // Pabellón interior
                'facility_price_id' => '30.00',
                'facility_price_member_id' => null,
                'light_price_id' => '6.00',
            ],
            [
                'facilities_id' => 5, // Tenis pista dura
                'facility_price_id' => '5.50',
                'facility_price_member_id' => '4.00',
                'light_price_id' => '2.50',
            ],
            [
                'facilities_id' => 6, // Tenis tierra batida
                'facility_price_id' => '7.50',
                'facility_price_member_id' => '6.00',
                'light_price_id' => '2.50',
            ],
            [
                'facilities_id' => 7, // Pádel
                'facility_price_id' => '12.00',
                'facility_price_member_id' => '9.00',
                'light_price_id' => '3.00',
            ],
            [
                'facilities_id' => 8, // Pista de atletismo
                'facility_price_id' => '1.50',
                'facility_price_member_id' => '1.00',
                'light_price_id' => null,
            ],
            [
                'facilities_id' => 9, // Petanca
                'facility_price_id' => '1.50',
                'facility_price_member_id' => '1.00',
                'light_price_id' => null,
            ],
            [
                'facilities_id' => 10, // Sauna
                'facility_price_id' => '5.00',
                'facility_price_member_id' => '4.00',
                'light_price_id' => null,
            ],
            [
                'facilities_id' => 11, // Sala multiusos
                'facility_price_id' => '18.00',
                'facility_price_member_id' => null,
                'light_price_id' => '6.00',
            ],
        ]);
    }
}