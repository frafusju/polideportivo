<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\FacilitiesPricesId;

class FacilitiesPricesIdController extends Controller
{
    public function priceId($id)
    {   
       return FacilitiesPricesId::find($id);        
    }
}
