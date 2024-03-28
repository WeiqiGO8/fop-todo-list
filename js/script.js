// get html elements
let amoutELement = document.getElementById("amount");
let inputTextElement = document.getElementById("input-text");
let inputBtnElement = document.getElementById("input-btn");
let todoUlElement = document.getElementById("todo-ul");

// array to store the todo list
let todoList = []; //ulItem

// The following 16 lines of code was adapted from
// https://www.shecodes.io/athena/42851-how-to-create-a-to-do-list-using-html-css-and-javascript - 2024-03-28
// https://chat.openai.com/c/0f6111b0-0c0c-4ed8-9fbc-c5fd6a6eace9 - 2024-03-28
function addTodo(event) {
  let inputValue = inputTextElement.value;

  let todoIp = document.createElement("input");
  todoIp.type = "checkbox";

  let textNode = document.createTextNode(inputValue);

  let todoLi = document.createElement("li");
  todoLi.appendChild(todoIp);
  todoLi.appendChild(textNode);

  todoUlElement.appendChild(todoLi);

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
