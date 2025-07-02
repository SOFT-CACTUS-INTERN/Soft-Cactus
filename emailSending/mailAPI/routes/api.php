<?php

use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Mail\TestMAIL;
use Illuminate\Support\Facades\Mail;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/email', function (Request $request) {
    $data = $request->validate([
        'fullName' => 'required|string|max:255',
        'societyName' => 'required|string|max:255',
        'projectName' => 'required|string|max:255',
        'email' => 'required|email',
        'number' => 'nullable|string|max:20'
    ]);

    // Save to database
    $contact = Contact::create($data);

    Mail::to('softcactus@contact.com')->send(new TestMAIL($data));
    return response()->json(['message' => 'Email sent!']);
});