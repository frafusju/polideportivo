<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\MembershipFee;

class MembershipFeeController extends Controller
{
    public function membershipFee($id)
    {   
       return MembershipFee::find($id);        
    }    
}