// retreve the html elements to js
const numberElement = document.getElementById("number");
const inputTextElement = document.getElementById("input-text");
const inputBtnElement = document.getElementById("input-btn");
const todoUlElement = document.getElementById("todo-ul");

// array for the li element and checked li elements
// the following 2 lines of code was adapted from ChatGPT: https://chat.openai.com/share/80637849-86aa-4553-b3ce-0f7f015e6a99 - 2024-04-05
let todoListArray = JSON.parse(localStorage.todoTask || "[]");
let checkedListArray = JSON.parse(localStorage.checkedTask || "[]");

// add input text to the list and localStorage
function addTodoTask() {
  const inputValue = inputTextElement.value;

  createElements(inputValue);
  todoListArray.push(inputValue);
  localStorage.setItem("todoTask", JSON.stringify(todoListArray));
  inputTextElement.value = "";
}

// save checked todo task to localStorage in checkedListArray
function saveCheckedTodoTask() {}

// remove todo task from the list and localStorage
function removeTodoTask() {}

// the following 19 lines of code was adapted from a combination of:
// https://www.shecodes.io/athena/42851-how-to-create-a-to-do-list-using-html-css-and-javascript - 2024-03-28
// https://chat.openai.com/share/0eaaa72e-c4ba-4352-876b-464ab3956809 - 2024-04-05
function createElements(inputValue) {
  const liElement = document.createElement("li");
  const textNode = document.createTextNode(inputValue);

  const inputCheckboxBtnElement = document.createElement("input");
  inputCheckboxBtnElement.type = "checkbox";
  inputCheckboxBtnElement.classList.add("checkedbox");
  inputCheckboxBtnElement.addEventListener("change", styleELements);

  const deleteInputBtnElement = document.createElement("input");
  deleteInputBtnElement.type = "button";
  deleteInputBtnElement.classList.add("deletebox");
  deleteInputBtnElement.value = "❌";

  todoUlElement.appendChild(liElement);
  liElement.appendChild(textNode);
  liElement.appendChild(inputCheckboxBtnElement);
  liElement.appendChild(deleteInputBtnElement);
}

function styleELements(event) {
  const inputCheckboxBtnElement = event.target;
  const liElement = inputCheckboxBtnElement.parentNode;
}

function loadHandler() {
  inputBtnElement.addEventListener("click", addTodoTask);
}

loadHandler();
