<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Mail\TestMAIL;

Route::get('/', function () {
    return view('welcome');
});
