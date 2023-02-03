@extends('layouts.app')
@section('title')
    My Todo App
@endsection
@section('content')


<!-- Display a form to add a new to-do -->
<form id="form">
  <input type="text" id="input">
  <button type="submit">Add</button>
</form>

<div id="todos">
  
</div>



<!-- Include the todos.js file -->
<script src="{{ asset('js/todos.js') }}"></script>


@endsection