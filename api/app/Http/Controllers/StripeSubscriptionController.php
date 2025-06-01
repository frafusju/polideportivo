<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class StripeSubscriptionController extends Controller
{    
    public function cancelSubscription(Request $request) {

        $subscription = $request->all();
        
        // Usa la clave desde el archivo .env
        \Stripe\Stripe::setApiKey(env('STRIPE_KEY'));

        \Stripe\Subscription::update(
            $subscription,
            [
              'cancel_at_period_end' => true,
            ]
          );
    }
}