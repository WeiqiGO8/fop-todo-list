// get html elements
const numberElement = document.getElementById("number");
const inputTextElement = document.getElementById("input-text");
const inputBtnElement = document.getElementById("input-btn");
const todoUlElement = document.getElementById("todo-ul");

// the following 2 lines of code was adapted from ChatGPT: https://chat.openai.com/share/80637849-86aa-4553-b3ce-0f7f015e6a99 - 2024-04-05
let todoListArray = JSON.parse(localStorage.todoTask || "[]");

// the following 18 lines of code was adapted from:
// https://www.shecodes.io/athena/42851-how-to-create-a-to-do-list-using-html-css-and-javascript - 2024-03-28
// https://chat.openai.com/share/f2900035-a174-4d04-b8d4-c89a610de4a6 - 2024-03-28
// https://chat.openai.com/share/80637849-86aa-4553-b3ce-0f7f015e6a99 - 2024-04-05
// https://chat.openai.com/share/91bb3fcb-811c-4f1b-a6b3-977308377bae - 2024-04-10
function addTodoTask() {
  const inputValue = inputTextElement.value;

  // if input field is filled - create elements for the value
  if (inputValue !== "") {
    let task = {
      finished: false,
      text: inputValue,
    };

    todoListArray.push(task);
    localStorage.todoTask = JSON.stringify(todoListArray);

    // Update the page
    createElements(task);
    inputTextElement.value = "";
  }
}

// The following 24 lines of code was adapted from
// https://www.shecodes.io/athena/42851-how-to-create-a-to-do-list-using-html-css-and-javascript - 2024-03-28
// https://chat.openai.com/share/f2900035-a174-4d04-b8d4-c89a610de4a6 - 2024-03-28
function createElements(task) {
  const liElement = document.createElement("li");

  const inputCheckboxElement = document.createElement("input");
  inputCheckboxElement.type = "checkbox";
  inputCheckboxElement.classList.add("checkedbox");
  // the following 3 lines of code was adapted from:
  // https://chat.openai.com/share/91bb3fcb-811c-4f1b-a6b3-977308377bae - 2024-04-10
  inputCheckboxElement.addEventListener("change", function (event) {
    checkTodo(task, event);
  });

  const deleteInputBtnElement = document.createElement("input");
  deleteInputBtnElement.type = "button";
  deleteInputBtnElement.value = "❌";
  deleteInputBtnElement.classList.add("deletebox");
  deleteInputBtnElement.checked = task.finished;
  // the following 3 lines of code was adapted from:
  // https://chat.openai.com/share/91bb3fcb-811c-4f1b-a6b3-977308377bae - 2024-04-10
  // https://chat.openai.com/share/55e25a05-0588-4334-afc7-51559e72273c - 2024-04-10
  deleteInputBtnElement.addEventListener("click", function () {
    deleteTodoTask(task, liElement);
  });

  const textNode = document.createTextNode(task.text);

  todoUlElement.appendChild(liElement);
  liElement.appendChild(inputCheckboxElement);
  liElement.appendChild(deleteInputBtnElement);
  liElement.appendChild(textNode);

  // the following 6 lines of code was adapted from: https://chat.openai.com/share/1cb385a6-ffda-44f0-aa09-1d40e93ab08c - 2024-04-10
  inputCheckboxElement.checked = task.finished;

  if (task.finished === true) {
    liElement.classList.add("check");
  } else {
    liElement.classList.remove("check");
  }

  updateTodoNumber();
}

// toggle finished/not finished todo-list items class style ✅
// The following 10 lines of code was adapted from:
// https://chat.openai.com/share/0f3b3bb7-93c0-4adf-a355-e52a35bb5473 - 2024-03-28
// https://chat.openai.com/share/80637849-86aa-4553-b3ce-0f7f015e6a99 - 2024-04-05
// https://chat.openai.com/share/91bb3fcb-811c-4f1b-a6b3-977308377bae - 2024-04-10
// https://chat.openai.com/share/1cb385a6-ffda-44f0-aa09-1d40e93ab08c - 2024-04-10
function checkTodo(task, event) {
  task.finished = event.target.checked;
  localStorage.todoTask = JSON.stringify(todoListArray);

  if (task.finished === true) {
    event.target.parentNode.classList.add("check");
  } else {
    event.target.parentNode.classList.remove("check");
  }
}

// remove the checked-style class and remove the list item from the list ❌
// the following 9 lines of code was adapted from:
// https://chat.openai.com/share/4ca0cbad-71ae-4c4d-bfb6-f32ea30ee7ac - 2024-04-05
// https://chat.openai.com/share/91bb3fcb-811c-4f1b-a6b3-977308377bae - 2024-04-10
// https://chat.openai.com/share/55e25a05-0588-4334-afc7-51559e72273c - 2024-04-10
function deleteTodoTask(task, removeElement) {
  const taskIndex = todoListArray.indexOf(task);
  if (taskIndex !== -1) {
    todoListArray.splice(taskIndex, 1);
    localStorage.todoTask = JSON.stringify(todoListArray);
    removeElement.remove();
    updateTodoNumber();
  }
}

function updateTodoNumber() {
  numberElement.innerText = "Number: " + todoListArray.length;
}

function loadPageHandler() {
  inputBtnElement.addEventListener("click", addTodoTask);
  // the following 2 lines of code was adapted from: https://chat.openai.com/share/80637849-86aa-4553-b3ce-0f7f015e6a99 - 2024-04-05
  todoListArray.forEach(createElements);
  updateTodoNumber();
}

window.addEventListener("load", loadPageHandler);
