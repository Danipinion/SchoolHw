<?php

namespace Database\Seeders;

use App\Models\Homeworks;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class HomeworksSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Homeworks::factory()->count(10)->create();
    }
}
