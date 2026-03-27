<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


use Inertia\Inertia;
use App\Models\Employee;
use App\Models\Order;
use App\Models\Dish;
use App\Models\Support;

class UserController extends Controller
{
    public function signInMenu()
    {
        $employees = Employee::all();
        return Inertia::render('StartPage/Index', ['employees' => $employees]);
    }
    public function adminMenu()
    {
        $employees = Employee::all();
        $orders = Order::all();
        $supports = Support::all();
        return Inertia::render('Admins/Index', ['employees' => $employees, 'orders' => $orders, 'supports' => $supports]);
    }
    public function chefMenu()
    {
        $orders = Order::all();
        $supports = Support::all();
        return Inertia::render('Chefs/Index', ['orders' => $orders, 'supports' => $supports]);
    }
    public function waiterMenu()
    {
        $orders = Order::all();
        $supports = Support::all();
        return Inertia::render('Waiters/Index', ['orders' => $orders, 'supports' => $supports]);
    }
    public function showOrders()
    {
        $orders = Order::all();
        $dishes = Dish::all();
        $supports = Support::all();
        return Inertia::render('Chefs/Show', ['orders' => $orders, 'dishes' => $dishes, 'supports' => $supports]);
    }
    public function showOrds()
    {
        $orders = Order::all();
        $dishes = Dish::all();
        $supports = Support::all();
        return Inertia::render('Admins/Show', ['orders' => $orders, 'dishes' => $dishes, 'supports' => $supports]);
    }
    public function ords(){
        $orders = Order::all();
        return Inertia::render('Chefs/Update', ['orders' => $orders]);
    }
    public function waitOrds(){
        $orders = Order::all();
        return Inertia::render('Waiters/Update', ['orders' => $orders]);
    }
    public function createOrder(Request $request){
        $validated = $request.validate([
            'cookState' => 'Готовиться',
            'payState' => 'required|string|max:255'
        ]);
        $order = Order::create($validated);
        return Inertia::render('Waiters/Create');
    }
    public function getAll(){
        $orders = Order::all();
        $supports = Support::all();
        $dishes = Dish::all();
        return Inertia::render('Waiters/Create', ['orders' => $orders, 'dishes' => $dishes, 'supports' => $supports]);
    }
}