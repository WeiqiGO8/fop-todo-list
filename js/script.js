// get html elements
const amoutELement = document.getElementById("amount");
const inputTextElement = document.getElementById("input-text");
const inputBtnElement = document.getElementById("input-btn");
const todoUlElement = document.getElementById("todo-ul");

let todoListArray = []; //ulItem

let amountOfTodo = 0;

function addTodo() {
  const inputValue = inputTextElement.value;

  // if input field is filled - create elements for the value
  if (inputValue !== "") {
    // Update the page
    elementCreation(inputValue);
  }
}

// The following 16 lines of code was adapted from
// https://www.shecodes.io/athena/42851-how-to-create-a-to-do-list-using-html-css-and-javascript - 2024-03-28
// https://chat.openai.com/c/0f6111b0-0c0c-4ed8-9fbc-c5fd6a6eace9 - 2024-03-28
function elementCreation(inputValue) {
  // create elements for the input value
  const todoIp = document.createElement("input");
  todoIp.type = "checkbox";
  todoIp.addEventListener("change", checkTodo);

  //delete button
  const deleteBtn = document.createElement("input");
  deleteBtn.type = "button";
  deleteBtn.value = "❌";
  deleteBtn.classList.add("delete");

  const textNode = document.createTextNode(inputValue);

  const todoLi = document.createElement("li");

  todoLi.appendChild(todoIp);
  todoLi.appendChild(textNode);
  todoLi.appendChild(deleteBtn);
  todoUlElement.appendChild(todoLi);
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

function setTodo() {
  const inputValue = localStorage.getItem("todoText");
  if (inputValue !== null) {
  }
}

function loadPageHandler() {
  inputBtnElement.addEventListener("click", addTodo);
  setTodo();
}
window.addEventListener("load", loadPageHandler);
