// Retrieve the to-dos from local storage
let todos = JSON.parse(localStorage.getItem('todos')) || [];

// Function to add a to-do
function addTodo(name) {
  // Append the new to-do on top (latest first)
  todos.unshift({name, completed: false });

  // Save the updated to-dos in local storage
  localStorage.setItem('todos', JSON.stringify(todos));
}


// Function to render the to-dos on the page
function renderTodos() {
  // Clear the existing to-dos from the page
  document.getElementById('todos').innerHTML = '';

  // Loop through the to-dos and create an HTML element for each one
  for (let todo of todos) {
    let el = document.createElement('div');
    el.innerHTML = todo.name;
    document.getElementById('todos').appendChild(el);
  }
}



// Listen for form submit event to add a new to-do
document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();
  addTodo(document.getElementById('input').value);
  renderTodos();
  document.getElementById('input').value = '';
});

// Reset the to-dos when the browser is refreshed
window.addEventListener('beforeunload', function() {
  localStorage.setItem('todos', JSON.stringify([]));
});

// Function to delete a to-do
function deleteTodo(index) {
  // Remove the to-do from the array
  todos.splice(index, 1);

  // Save the updated to-dos in local storage
  localStorage.setItem('todos', JSON.stringify(todos));

  // Re-render the to-dos on the page
  renderTodos();
}

// Function to toggle the completion status of a to-do
function toggleTodoCompletion(index) {
  // Update the to-do's completed status
  todos[index].completed = !todos[index].completed;

  // Save the updated to-dos in local storage
  localStorage.setItem('todos', JSON.stringify(todos));

  // Re-render the to-dos on the page
  renderTodos();
}


// Function to render the to-dos on the page
function renderTodos() {
  // Clear the existing to-dos from the page
  document.getElementById('todos').innerHTML = '';

  // Loop through the to-dos and create an HTML element for each one
  for (let i = 0; i < todos.length; i++) {
    let todo = todos[i];
    let el = document.createElement('div');
    el.innerHTML = `
      <div style="text-decoration: ${todo.completed ? 'line-through' : 'none'};">
        ${todo.name}
      </div>
      <button onclick="deleteTodo(${i})">Delete</button>
      <button onclick="toggleTodoCompletion(${i})">Mark as ${todo.completed ? 'Incomplete' : 'Complete'}</button>
    `;
    document.getElementById('todos').appendChild(el);
  }
}


// Render the to-dos on the page
renderTodos();

