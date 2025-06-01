<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubscriptionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('subscriptions', function (Blueprint $table) {            
            $table->foreignId('users_id')->constrained();
            $table->foreignId('membership_fees_id')->constrained();
            $table->string('stripe_subscription_id')->default("");
            $table->string('stripe_customer_id')->default("");
            $table->boolean('active')->default(false);
            $table->date('membership_start');
            $table->date('membership_end');
            $table->boolean('cancel_at_period_end')->default(false);
            
            $table->primary(['users_id', 'membership_fees_id']);            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('subscriptions');
    }
}
