// get html elements
let amoutELement = document.getElementById("amount");

let inputBtnElement = document.getElementById("input-btn");
let todoUlElement = document.getElementById("todo-ul");

// array to store the todo list
let todoList = []; //ulItem

function addTodo(event) {
  let inputTextElement = document.getElementById("input-text");
  let inputValue = inputTextElement.value;
  console.log(inputValue);
}

// toggle finished/not finished todo-list items class style ✅
function checkedTodo() {}

// remove the checked-style class and remove the list item from the list ❌
function deleteTodo() {}

function updateTodoNumber() {}

function loadTodoList() {}

//event listeners
inputBtnElement.addEventListener("click", addTodo);
