<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\UserController;

Route::get('/', [UserController::class, 'signInMenu']);
Route::get('/waiter', [UserController::class, 'waiterMenu']);
Route::get('/admin', [UserController::class, 'adminMenu']);
Route::get('/showChef', [UserController::class, 'showOrders']);
Route::get('/showAdmin', [UserController::class, 'showOrds']);
Route::get('/chef', [UserController::class, 'chefMenu']);
Route::get('/ordUpdate', [UserController::class, 'ords']);
Route::get('/waitOrdUpdate', [UserController::class, 'waitOrds']);
Route::get('/createOrd', [UserController::class, 'getAll']);
Route::get('/adminShifts', [UserController::class, 'getEmp']);

Route::post('/adminShifts/{$id}', [UserController::class, 'setCurrentShift'])
Route::post('/createUser', [UserController::class, 'getEmployees']);
Route::post('/createOrd', [UserController::class, 'createOrder']);
Route::post('/createUser', [UserController::class, 'createEmployee']);