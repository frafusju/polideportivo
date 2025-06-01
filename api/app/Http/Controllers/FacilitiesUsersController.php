<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\FacilitiesUsers;

class FacilitiesUsersController extends Controller
{
    /** Returns a booking that matches with the token requested */
    public function getBookingData($token)
    {        
        return FacilitiesUsers::where('token', $token)->first();
    }
    
    /** Returns all payed bookings for an specific date and facility */
    public function getHours($date, $facility) {
        return FacilitiesUsers::where('date', $date)->where('facilities_id', $facility)->where('payment_accepted', 1)->get(['start_time', 'end_time']);
    }

    /** Saves a new booking (needs to confirm payment in StripeWebhookController) */
    public function saveBooking(Request $request) {
    $request->validate([
        'user' => 'required|integer',
        'facility' => 'required|integer',
        'date' => 'required|date',
        'start_time' => 'required|date_format:H:i',
        'end_time' => 'required|date_format:H:i|after:start_time',
        'light' => 'required|boolean',
        'total_amount' => 'required|numeric|min:0',
        'token' => 'required|string',
    ]);

    $booking = new FacilitiesUsers;

    $booking->users_id = $request->user;
    $booking->facilities_id = $request->facility;
    $booking->date = $request->date;
    $booking->start_time = $request->start_time;
    $booking->end_time = $request->end_time;
    $booking->light = $request->light;
    $booking->total_amount = $request->total_amount;
    $booking->token = $request->token;

    // Verifica si el usuario es socio
    $isMember = $this->isUserMember($request->user);
    $booking->payment_accepted = $isMember ? 1 : 0;

    $booking->save();

    return response()->json(['message' => 'Reserva creada con éxito'], 201);
}

/**
 * Verifica si un usuario es socio.
 *
 * @param int $userId
 * @return bool
 */
private function isUserMember($userId) {
    return \App\User::where('id', $userId)->value('is_active') == 1;
}

    /** Gets all bookings for a certain user */
    public function getUserBookings($user_id) {
        return FacilitiesUsers::join('facilities', 'facilities.id', '=', 'facilities_users.facilities_id')
        ->select('facilities_users.*', 'facilities.name')
        ->where('facilities_users.users_id', $user_id)
        ->where('facilities_users.payment_accepted', 1)
        ->whereDate('facilities_users.date', '>=', now())
        ->get();
    }
}