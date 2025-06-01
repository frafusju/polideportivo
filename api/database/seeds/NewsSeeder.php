<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class NewsSeeder extends Seeder
{
    public function run()
    {
        DB::table('news')->insert([
            [
                'headline' => 'Medidas COVID-19 en el polideportivo',
                'subhead' => 'Nuevas medidas frente al COVID-19',
                'inlet' => 'El polideportivo implementa nuevas medidas de seguridad.',
                'body' => 'El polideportivo implementa nuevas medidas de seguridad frente al COVID-19 para proteger a todos los usuarios.',
                'image' => 'news_1.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'headline' => 'Niños jugando al fútbol',
                'subhead' => 'Jornada deportiva infantil',
                'inlet' => 'Gran jornada de fútbol para los más pequeños.',
                'body' => 'Gran jornada de fútbol para los más pequeños en nuestras instalaciones. ¡Diversión y deporte asegurados!',
                'image' => 'news_2.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
