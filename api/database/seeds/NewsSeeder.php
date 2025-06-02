<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class NewsSeeder extends Seeder
{
    public function run()
    {
        DB::table('news')->insert([
            [
                'headline' => 'Anunciades les dates de la Cursa Popular de Sant Valentí 2025',
                'subhead' => 'La tradicional cursa popular se celebrarà el 14 de febrer',
                'inlet' => 'Ja tenim data per a la pròxima edició de la Cursa Popular de Sant Valentí!',
                'body' => 'L\'Ajuntament de La Font d\'en Carròs anuncia que la pròxima edició de la Cursa Popular de Sant Valentí tindrà lloc el 14 de febrer de 2025. Aquesta cita esportiva, que cada any reuneix centenars de corredors i corredores de totes les edats, recorrerà els principals carrers del municipi en un ambient festiu i familiar. Les inscripcions s\'obriran pròximament a través de la web municipal i a les oficines del poliesportiu. No et perdes aquesta jornada d\'esport, salut i convivència!',
                'image' => 'news_1.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'headline' => 'Nou rocòdrom al Poliesportiu Municipal',
                'subhead' => 'S\'inaugura una nova instal·lació per a l\'escalada',
                'inlet' => 'El poliesportiu municipal amplia la seua oferta amb un rocòdrom per a totes les edats.',
                'body' => 'El Poliesportiu Municipal de La Font d\'en Carròs estrena un nou rocòdrom, una instal·lació pensada per a aficionats i aficionades a l\'escalada de totes les edats i nivells. El rocòdrom compta amb diferents rutes i graus de dificultat, així com amb totes les mesures de seguretat necessàries. Aquesta nova infraestructura respon a la demanda creixent d\'activitats esportives alternatives i fomenta l\'esport i l\'aventura entre la ciutadania. Pròximament s\'organitzaran tallers i cursos d\'iniciació. Vine a provar-ho!',
                'image' => 'news_2.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}