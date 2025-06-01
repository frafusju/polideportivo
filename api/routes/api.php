<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/** Users */
Route::resource('users', 'Auth\RegistrationController');

/** Facilities */
Route::resource('facilities', 'FacilitiesController');

/** Stripe Payment */
Route::group([
    'middleware' => 'api',
    'prefix' => 'stripe'
    ], function($router) {
        Route::post('', 'StripePaymentController@paymentProcess');
        Route::post('unsuscribe', 'StripeSubscriptionController@cancelSubscription');
});

/** Stripe prices id */
Route::get('/prices/{id}', 'FacilitiesPricesIdController@priceId')->middleware('auth:api');

/** Booking */
Route::group([
    'middleware' => 'api',
    'prefix' => 'bookings'
    ], function ($router) {
        Route::post('', 'FacilitiesUsersController@saveBooking');
        Route::get('booking/{user_id}', 'FacilitiesUsersController@getUserBookings');
        Route::get('{token}', 'FacilitiesUsersController@getBookingData');
        Route::get('{date}/{facility}', 'FacilitiesUsersController@getHours');
});

/** Membership */
Route::get('/membership/{id}', 'MembershipFeeController@membershipFee');

/** Subscriptions */
Route::group([
    'middleware' => 'api',
    'prefix' => 'subscription'
    ], function($router) {
        Route::post('', 'SubscriptionController@saveSubscription');
        Route::post('cancel', 'SubscriptionController@cancelSubscription');
        Route::post('renew', 'SubscriptionController@renewSubscription');
        Route::get('{id}', 'SubscriptionController@getSubscription');
    }
);

/** News */
Route::group([
    'prefix' => 'news'
    ], function($router) {
        Route::get('', 'NewsController@getNews');
        Route::get('{id}', 'NewsController@getNewsItem');
});

/** Auth */
Route::group([
    'middleware' => 'api',    
    'prefix' => 'auth'
    ], function ($router) {
        Route::post('login', 'AuthController@login');
        Route::post('logout', 'AuthController@logout');
        Route::post('refresh', 'AuthController@refresh');
        Route::post('me', 'AuthController@me');
});