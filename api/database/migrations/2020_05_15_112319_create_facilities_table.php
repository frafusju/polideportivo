<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFacilitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('facilities', function (Blueprint $table) {
            $table->id();
            $table->string('name');            
            $table->text('description');
            $table->tinyInteger('max_users');
            $table->tinyInteger('quantity');
            $table->boolean('light')->default(true);
            $table->decimal('price', 6, 2);
            $table->decimal('price_member', 6, 2)->nullable()->default(null);
            $table->decimal('price_light', 5, 2)->nullabe()->default(null);
            $table->string('surface');
            $table->string('image')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('facilities');
    }
}
