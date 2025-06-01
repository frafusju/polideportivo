<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class StripePaymentController extends Controller
{
    /**
     * success response method.
     *
     * @return \Illuminate\Http\Response
     */
    public function paymentProcess(Request $request) {
        
        $email = $request->input('email');
        $line_items = $request->input('line_items');
        $mode = $request->input('mode');
        
        // Usa la clave desde el archivo .env
        \Stripe\Stripe::setApiKey(env('STRIPE_KEY'));

        $session = \Stripe\Checkout\Session::create([            
            'customer_email' => $email,
            'payment_method_types' => ['card'],
            'line_items' => $line_items,
            'mode' => $mode,
            'success_url' => $mode === 'payment' ? 'http://localhost:4200/reservas/checkout?session_id={CHECKOUT_SESSION_ID}' : 'http://localhost:4200/perfil-usuario',
            'cancel_url' => $mode === 'payment' ? 'http://localhost:4200/reservas' : 'http://localhost:4200/perfil-usuario'
        ]); 

        return $session;
    }
}