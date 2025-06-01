<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Subscription;

class SubscriptionController extends Controller
{
    public function saveSubscription(Request $request) {
        $subscription = new Subscription;

        $subscription->users_id           = $request->users_id;
        $subscription->membership_fees_id = $request->membership_fees_id;

        $subscription->save();
    }

    public function getSubscription($id) {
        return Subscription::where('users_id', $id)->first();
    }

    public function cancelSubscription(Request $request) {
        $subscription = $request->subscription;
        
        // Usa la clave desde el archivo .env
        \Stripe\Stripe::setApiKey(env('STRIPE_KEY'));

        \Stripe\Subscription::update(
            $subscription,
            [
                'cancel_at_period_end' => true,
            ]
        );
        
        return response()->json(['Successfully unsubscribed!' => 'You will not be charged in the future'], 201);
    }
  
    public function renewSubscription(Request $request) {
        $subscription = $request->subscription;
        
        // Usa la clave desde el archivo .env
        \Stripe\Stripe::setApiKey(env('STRIPE_SECRET_KEY'));

        \Stripe\Subscription::update(
            $subscription,
            [
                'cancel_at_period_end' => false,
            ]
        );
        
        return response()->json(['Successfully reactivated subscription!' => 'Welcome back! Enjoy our services.'], 201);
    }
}