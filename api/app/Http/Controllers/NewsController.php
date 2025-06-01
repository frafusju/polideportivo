<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\News;

class NewsController extends Controller
{
    public function getNews() {
        return News::orderByDesc('created_at')->get();
    }

    public function getNewsItem($id) {
        return News::where('id', $id)->first();
    }
}
