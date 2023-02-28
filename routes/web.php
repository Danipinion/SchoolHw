<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\HomeworksController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [HomeworksController::class, 'index']);


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::post('/homeworks', [HomeworksController::class, 'store']);
    Route::get('/homeworks', [HomeworksController::class, 'show']);
    Route::get('/homeworks/edit', [HomeworksController::class, 'edit'])->name('edit.hw');
    Route::post('/homeworks/update', [HomeworksController::class, 'update'])->name('post.hw');
    Route::delete('/homeworks/delete', [HomeworksController::class, 'destroy'])->name('del.hw');
});

require __DIR__.'/auth.php';
