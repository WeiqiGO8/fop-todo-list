// get html elements
const amountElement = document.getElementById("amount");
const inputTextElement = document.getElementById("input-text");
const inputBtnElement = document.getElementById("input-btn");
const todoUlElement = document.getElementById("todo-ul");

// the following 2 lines of code was adapted from ChatGPT: https://chat.openai.com/c/d55fbfc5-80d7-4be3-827c-79acf7548873 - 2024-04-05
let todoListArray = JSON.parse(localStorage.todoTask || "[]");
let checkedListArray = JSON.parse(localStorage.checkedTask || "[]");

let amountOfTodo = 0;

function addTodo() {
  const inputValue = inputTextElement.value;

  // if input field is filled - create elements for the value
  if (inputValue !== "") {
    todoListArray.push(inputValue);
    localStorage.todoTask = JSON.stringify(todoListArray);

    // Update the page
    elementCreation(inputValue);
  } else {
    elementCreation.preventDefault();
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

  const todoLi = document.createElement("li");

  //delete button
  const deleteBtn = document.createElement("input");
  deleteBtn.type = "button";
  deleteBtn.value = "❌";
  deleteBtn.classList.add("delete");
  deleteBtn.addEventListener("click", deleteTodo);

  const textNode = document.createTextNode(inputValue);

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
    checkedListArray.push(todoLi.innerText);
    localStorage.checkedTask = JSON.stringify(checkedListArray);
  } else {
    todoLi.classList.remove("check");

    // the following 6 lines of code was adapted from ChatGPT: https://chat.openai.com/c/5b3e8092-78a0-4fa2-a1ec-0468c859fc60 - 2024-04-05
    let index = checkedListArray.indexOf(todoLi.innerText);
    if (index !== -1) {
      checkedListArray.splice(index, 1);
      localStorage.checkedTask = JSON.stringify(checkedListArray);
    }
  }
}

// the following 13 lines of code was adapted from ChatGPT: https://chat.openai.com/c/5b3e8092-78a0-4fa2-a1ec-0468c859fc60 - 2024-04-05
function saveCheckTodo() {
  // Mark todo items as checked and apply styling
  checkedListArray.forEach(function (todoText) {
    let todoItems = todoUlElement.getElementsByTagName("li");
    for (let i = 0; i < todoItems.length; i++) {
      if (todoItems[i].textContent.trim() === todoText.trim()) {
        let checkbox = todoItems[i].querySelector("input[type=checkbox]");
        checkbox.checked = true;
        todoItems[i].classList.add("check");
      }
    }
  });
}

// remove the checked-style class and remove the list item from the list ❌
// the following 17 lines of code was adapted from chatGPT: https://chat.openai.com/c/b5a2f0a0-e0b7-43fa-8d47-90f84bb49592 - 2024-04-05
function deleteTodo() {
  const liElement = this.parentNode;
  const todoText = liElement.innerText;

  let index = todoListArray.indexOf(todoText);
  if (index !== -1) {
    todoListArray.splice(index, 1);
    localStorage.todoTask = JSON.stringify(todoListArray);
  }

  let checkedIndex = checkedListArray.indexOf(todoText);
  if (checkedIndex !== -1) {
    checkedListArray.splice(checkedIndex, 1);
    localStorage.checkedTask = JSON.stringify(checkedListArray);
  }
  liElement.parentNode.removeChild(liElement);
}

function updateTodoNumber() {}

function loadPageHandler() {
  inputBtnElement.addEventListener("click", addTodo);
  todoListArray.forEach(elementCreation);
  checkedListArray.forEach(saveCheckTodo);
  updateTodoNumber();
}

window.addEventListener("load", loadPageHandler);
window.addEventListener("storage", loadPageHandler);
