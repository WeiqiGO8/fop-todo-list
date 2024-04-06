// get html elements
const numberElement = document.getElementById("number");
const inputTextElement = document.getElementById("input-text");
const inputBtnElement = document.getElementById("input-btn");
const todoUlElement = document.getElementById("todo-ul");

// the following 2 lines of code was adapted from ChatGPT: https://chat.openai.com/share/80637849-86aa-4553-b3ce-0f7f015e6a99 - 2024-04-05
let todoListArray = JSON.parse(localStorage.todoTask || "[]");
let checkedListArray = JSON.parse(localStorage.checkedTask || "[]");

let numberOfTodo = 0;

function addTodoTask() {
  const inputValue = inputTextElement.value;

  // if input field is filled - create elements for the value
  if (inputValue !== "") {
    todoListArray.push(inputValue);
    localStorage.todoTask = JSON.stringify(todoListArray);

    // Update the page
    createElements(inputValue);
    inputTextElement.value = "";
  } else {
    createElements.preventDefault();
  }
}

// The following 16 lines of code was adapted from
// https://www.shecodes.io/athena/42851-how-to-create-a-to-do-list-using-html-css-and-javascript - 2024-03-28
// https://chat.openai.com/share/f2900035-a174-4d04-b8d4-c89a610de4a6 - 2024-03-28
function createElements(inputValue) {
  // create elements for the input value
  const inputCheckboxElement = document.createElement("input");
  inputCheckboxElement.type = "checkbox";
  inputCheckboxElement.classList.add("checkedbox");
  inputCheckboxElement.addEventListener("change", checkTodo);

  const liElement = document.createElement("li");

  //delete button
  const deleteInputBtnElement = document.createElement("input");
  deleteInputBtnElement.type = "button";
  deleteInputBtnElement.value = "❌";
  deleteInputBtnElement.classList.add("deletebox");
  deleteInputBtnElement.addEventListener("click", deleteTodoTask);

  const textNode = document.createTextNode(inputValue);

  todoUlElement.appendChild(liElement);
  liElement.appendChild(textNode);
  liElement.appendChild(inputCheckboxElement);
  liElement.appendChild(deleteInputBtnElement);
}

// toggle finished/not finished todo-list items class style ✅
// The following 10 lines of code was adapted from https://chat.openai.com/share/0f3b3bb7-93c0-4adf-a355-e52a35bb5473 - 2024-03-28
function checkTodo(event) {
  let inputCheckboxElement = event.target;
  let liElement = inputCheckboxElement.parentNode;

  if (inputCheckboxElement.checked === true) {
    liElement.classList.add("check");
    checkedListArray.push(liElement.innerText);
    localStorage.checkedTask = JSON.stringify(checkedListArray);
  } else {
    liElement.classList.remove("check");

    // the following 6 lines of code was adapted from ChatGPT: https://chat.openai.com/share/454e06e4-c555-4ea3-93b0-da0556993904 - 2024-04-05
    let index = checkedListArray.indexOf(liElement.innerText);
    if (index !== -1) {
      checkedListArray.splice(index, 1);
      localStorage.checkedTask = JSON.stringify(checkedListArray);
    }
  }
}

// the following 13 lines of code was adapted from ChatGPT: https://chat.openai.com/share/454e06e4-c555-4ea3-93b0-da0556993904 - 2024-04-05
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
// the following 17 lines of code was adapted from chatGPT: https://chat.openai.com/share/4ca0cbad-71ae-4c4d-bfb6-f32ea30ee7ac - 2024-04-05
function deleteTodoTask() {
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
  inputBtnElement.addEventListener("click", addTodoTask);
  todoListArray.forEach(createElements);
  checkedListArray.forEach(saveCheckTodo);
  updateTodoNumber();
}

window.addEventListener("load", loadPageHandler);
window.addEventListener("storage", loadPageHandler);
