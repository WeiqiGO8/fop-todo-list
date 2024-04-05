// retreve the html elements to js
const numberElement = document.getElementById("number");
const inputTextElement = document.getElementById("input-text");
const inputBtnElement = document.getElementById("input-btn");
const todoUlElement = document.getElementById("todo-ul");

// array for the li element and checked li elements
// the following 2 lines of code was adapted from ChatGPT: https://chat.openai.com/c/d55fbfc5-80d7-4be3-827c-79acf7548873 - 2024-04-05
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

// the following 19 lines of code was adapted from a combination of:
// https://www.shecodes.io/athena/42851-how-to-create-a-to-do-list-using-html-css-and-javascript - 2024-03-28
// https://chat.openai.com/c/f2ef1436-01cc-4e32-ac24-2062a7c83229 - 2024-04-05
function createElements(inputValue) {
  const liElement = document.createElement("li");
  const textNode = document.createTextNode(inputValue);

  const inputCheckboxBtnElement = document.createElement("input");
  inputCheckboxBtnElement.type = "button";
  inputCheckboxBtnElement.classList.add("checkedbox");
  inputCheckboxBtnElement.value = "✅";

  const deleteInputBtnElement = document.createElement("input");
  deleteInputBtnElement.type = "button";
  deleteInputBtnElement.classList.add("deletebox");
  deleteInputBtnElement.value = "❌";

  todoUlElement.appendChild(liElement);
  liElement.appendChild(textNode);
  liElement.appendChild(inputCheckboxBtnElement);
  liElement.appendChild(deleteInputBtnElement);
}

function loadHandler() {
  inputBtnElement.addEventListener("click", addTodoTask);
}

loadHandler();
