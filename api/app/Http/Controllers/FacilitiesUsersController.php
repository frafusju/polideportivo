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
        $booking = new FacilitiesUsers;

        $booking->users_id = $request->user;
        $booking->facilities_id = $request->facility;
        $booking->date = $request->date;
        $booking->start_time = $request->start_time;
        $booking->end_time = $request->end_time;
        $booking->light = $request->light;
        $booking->total_amount = $request->total_amount;
        $booking->token = $request->token;

        $booking->save();
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
