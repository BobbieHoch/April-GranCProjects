// Our todo list Array.

const form = document.querySelector('#form');
const todoList = document.querySelector('.todo-list');

// Add an event listener to the form element.
form.addEventListener('submit', handleFormSubmit);

// The form submit event handler function for when the user submits a new todo.
function handleFormSubmit(event) {
  // Prevent the default behavior of refreshing the page when the form is submitted.
  event.preventDefault();
  const todoInput = document.querySelector('.todo-input');
  // Add the todo to the todoListArray and to the DOM.
  addTodoToList(todoInput.value); // Passing the value from the todo input field as an argument to the addTodoToArray function.
  // Clear the todo list form when the form is submitted.
  todoInput.value = '';
}

// Function to create a new todo list item element The function takes in todo object as an argument.
function createTodoItem(todo) {
  const todoItem = document.createElement('li');
  // Assigning a class name to the created todo item li element.
  todoItem.className = 'todo-item';
  // Assigning a id to the created todo item li element. The id comes from the todo object paramater of our function.
  todoItem.id = todo.id;
  // Setting the inner text oif the todo item.
  todoItem.innerText = todo.text;
  // Creating our delete button for the todo item.
  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'delete';
  deleteButton.className = 'delete-btn';
  // Appending the delete button to the todo item element.
  todoItem.appendChild(deleteButton);
  // Adding an event listener to the delete button.
  deleteButton.addEventListener('click', handleDeleteTodo);
  // returning our todoItem element.
  return todoItem;
}

// Function to add our new todo to the todoListArray and the todo list ul element.
function addTodoToList(todoValue) {
  // Creating a todo object from our todo value paramater.
  const todo = {
    id: randomId(),
    text: todoValue,
    completed: false,
  };
  // Adding the todo object to the todo list array.
  todoListArray.push(todo);
  // Creating a new todo item element using the createTodoItem function.
  const todoItemListElement = createTodoItem(todo);
  // Adding the todo item li element to the todo list ul element.
  todoList.appendChild(todoItemListElement);
  console.log(todoListArray);
}

// The delete todo event handler function for when the user deletes a todo.
function handleDeleteTodo(event) {
  //Get the parent element fo the delete button. This is the li element that the button is in.
  const todoListItem = event.target.parentElement;
  event.target.style.color = 'blue';

  //Remove the todo list item from the DOM
  todoListItem.remove();
  console.log(todoListItem);
}

function randomId() {
  const unit32 = window.crypto.getRandomValues(new unit32Array(1))[0];
  return unit32.toString(16);
}