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
function addTodo() {
  let inputValue = inputTextElement.value;

  let todoIp = document.createElement("input");
  todoIp.type = "checkbox";
  todoIp.addEventListener("change", checkTodo);

  let textNode = document.createTextNode(inputValue);

  let todoLi = document.createElement("li");
  todoLi.appendChild(todoIp);
  todoLi.appendChild(textNode);

  todoUlElement.appendChild(todoLi);

  console.log(inputValue);
}

// toggle finished/not finished todo-list items class style ✅
// The following 10 lines of code was adapted from https://chat.openai.com/share/0f3b3bb7-93c0-4adf-a355-e52a35bb5473 - 2024-03-28
function checkTodo(event) {
  let todoIp = event.target;
  let todoLi = todoIp.parentNode;

  if (todoIp.checked === true) {
    todoLi.classList.add("check");
  } else {
    todoLi.classList.remove("check");
  }
}

// remove the checked-style class and remove the list item from the list ❌
function deleteTodo() {}

function updateTodoNumber() {}

function loadTodoList() {}

//event listeners
inputBtnElement.addEventListener("click", addTodo);
