<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFacilitiesPricesIdsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('facilities_prices_ids', function (Blueprint $table) {
            $table->foreignId('facilities_id')->constrained();
            $table->string('facility_price_id');
            $table->string('facility_price_member_id')->nullable()->default(null);
            $table->string('light_price_id')->nullable()->default(null);
            
            $table->primary('facilities_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('facilities_prices_ids');
    }
}
