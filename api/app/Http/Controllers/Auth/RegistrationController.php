<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\User;
use Symfony\Component\HttpFoundation\Response;

class RegistrationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name'       => ['bail', 'required', 'string'],
            'surname'    => ['bail', 'required', 'string'],
            'birth_date' => ['bail', 'required', 'date'],
            'dni'        => ['bail', 'required', 'size:9',
                             'regex:/^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$|[XYZ][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/i',                             
                            function ($dni, $value, $fail) {
                                $dni_letter    = substr($value, -1, 1);
                                $dni_number    = substr($value, 0,8);
                                $dni_number    = str_replace(['X','Y','Z'], [0, 1, 2], $dni_number);
                                $valid_letters = "TRWAGMYFPDXBNJZSQVHLCKE";

                                if(substr($valid_letters, $dni_number%23, 1) !== $dni_letter) {
                                    $fail('DNI is invalid');
                                }
                            }],
            'password'   => ['bail', 'required', 'min:8'],
            'email'      => ['bail', 'required', 'email']
        ]);

        $user = new User;

        $user->name       = $request->name;
        $user->surname    = $request->surname;
        $user->birth_date = $request->birth_date;
        $user->dni        = $request->dni;        
        $user->password   = Hash::make($request->password);        
        $user->email      = $request->email;        

        $user->save();

        return response('{"Message":"Usuario registrado"}', 201)
                  ->header('Content-Type', 'text/plain');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {        
        return User::where('id', $id)->first();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
