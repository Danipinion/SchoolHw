<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Homeworks;
use Illuminate\Http\Request;
use App\Http\Resources\HomeworksCollection;
// use App\Http\Requests\StoreHomeworksRequest;
// use App\Http\Requests\UpdateHomeworksRequest;

class HomeworksController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $hws = new HomeworksCollection(Homeworks::OrderByDesc('id')->paginate(3));
        return Inertia::render('Homepage',['hws' => $hws]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $hws = new Homeworks();
        $hws->title = $request->title;
        $hws->description = $request->description;
        $hws->mapel = $request->mapel;
        $hws->author = auth()->user()->name;
        $hws->save();
        return  redirect()->back()->with('message', 'Pr Berhasil Ditambahkan');
    }

    /**
     * Display the specified resource.
     */
    public function show()
    {
        $hwsd = Homeworks::where('author', auth()->user()->name)->OrderByDesc('id')->get();
        return Inertia::render('Dashboard',['hwsd' => $hwsd]);

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Homeworks $homeworks,Request $request)
    {
        return Inertia::render('EditHw',[
            'ehws' => $homeworks->find($request->id),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        Homeworks::where('id', $request->id)->update([
            'title' =>  $request->title,
            'description' =>  $request->description,
            'mapel' =>  $request->mapel,
        ]);
        return to_route('dashboard')->with('message','Update Pr Berhasil');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        Homeworks::where('id', $request->id)->delete();
        return redirect()->back()->with('message', 'Pr Berhasil Ditambahkan');

    }
}
