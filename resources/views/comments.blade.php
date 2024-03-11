@php use Illuminate\Support\Facades\Auth; @endphp
@extends('layouts.app')

@section('content')
    <div class="m-0">
        <div class="title">
            <h3>Księga komentarzy</h3>
        </div>
        @auth
            <table data-toggle="table" class="table m-0">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Użytkownik</th>
                    <th>Data dodania</th>
                    <th>Komentarz</th>
                    <th>Akcja</th>
                </tr>
                </thead>
                <tbody>
                @foreach($comments as $comment)
                    <tr>
                        <td>{{$comment->id}}</td>
                        <td>{{$comment->user->name}}</td>
                        <td>{{$comment->created_at}}</td>
                        <td>{{$comment->message}}</td>
                        <td>@if($comment->user_id == Auth::user()->id)
                                <a href="{{route('delete', $comment->id)}}"
                                class="btn btn-danger btn-xs"
                                onclick="return confirm('Jesteś pewnien')"
                                title="Skasuj">Usuń</a>

                                <a href="{{route('edit', $comment)}}"
                                class="btn btn-success btn-xs"
                                title="Edytuj">Edytuj</a>
                            @endif</td>
                    </tr>
                @endforeach

                </tbody>
            </table>

            <div class="footer-button">
                <a href="{{route('create')}}" class="btn btn-secondary">Dodaj</a>
            </div>
            <br>
        @endauth
    </div>

    @guest
        <div class="table-container">
            <b>Zaloguj się aby przejrzeć komentarze.</b>
        </div>
    @endguest
@endsection
