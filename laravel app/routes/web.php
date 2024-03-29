<?php

use App\Http\Controllers\CommentsController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});



Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/comments', [CommentsController::class, 'index'])->name('comments');
Route::get('/create', [CommentsController::class, 'create'])->name('create');
Route::post('/create', [CommentsController::class, 'store'])->name('store');
Route::get('/delete/{id}', [CommentsController::class, 'destroy'])->name('delete');
Route::get('/edit/{id}', [CommentsController::class, 'edit'])->name('edit');
Route::put('/update/{id}', [CommentsController::class, 'update'])->name('update');
