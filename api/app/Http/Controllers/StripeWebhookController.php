<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\FacilitiesUsers;
use App\User;
use App\Subscription;
use Log;

class StripeWebhookController extends Controller
{
    public function handleWebhook(Request $request) {        

        // Usa la clave secreta desde el archivo .env
        \Stripe\Stripe::setApiKey(env('STRIPE_KEY'));

        // Usa el secreto del endpoint desde el archivo .env
        $endpoint_secret = env('STRIPE_WEBHOOK_SECRET');

        $payload = @file_get_contents('php://input');
        $sig_header = $_SERVER['HTTP_STRIPE_SIGNATURE'];
        $event = null;       

        try {
            $event = \Stripe\Webhook::constructEvent(
                $payload, $sig_header, $endpoint_secret
            );
        } catch(\UnexpectedValueException $e) {
            // Invalid payload
            http_response_code(400);
            exit();
        } catch(\Stripe\Exception\SignatureVerificationException $e) {
            // Invalid signature
            http_response_code(400);
            exit();
        }

        // Handle a single facility payment
        if ($event->type == 'checkout.session.completed') {
            $session = $event->data->object;            
            
            FacilitiesUsers::where('token', $session->id)->update(['payment_accepted' => 1]);
        }

        // Handles subscriptions payments
        if ($event->type == 'invoice.payment_succeeded') {
            
            $session = $event->data->object;
            
            $email = $session->customer_email;            
            $user = User::where('email', $email)->first('id');            
            $subscription_id = $session->lines->data[0]->subscription;
            $customer = $session->customer;
            $start_date = date("Y-m-d", $session->lines->data[0]->period->start);
            $expiration_date = date("Y-m-d", $session->lines->data[0]->period->end);

            Subscription::where('users_id' , $user->id)->update([                                
                'stripe_subscription_id' => $subscription_id,
                'stripe_customer_id' => $customer,
                'active' => 1,
                'membership_start' => $start_date,
                'membership_end' => $expiration_date
            ]);

            $membership_number = $this->generateRandomNumber(100000, 999999);

            User::where('email', $email)->update([
                'is_active' => 1,
                'membership_number' => $membership_number
            ]);
            
        }

        if ($event->type == 'customer.subscription.updated') {

            $session = $event->data->object;

            Subscription::where('stripe_subscription_id', $session->id)->update([
                'cancel_at_period_end' => $session->cancel_at_period_end
            ]);
        }

        http_response_code(200);
    }

    protected function generateRandomNumber($min, $max) {
        
        $number = mt_rand($min, $max);
        
        if ($this->membershipNumberExists($number)) {
            return generateRandomNumber();
        }    
       
        return $number;
    }
    
    protected function membershipNumberExists($number) {        
        return User::where('membership_number', $number)->exists();
    }
}