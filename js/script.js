// get html elements
const numberElement = document.getElementById("number");
const inputTextElement = document.getElementById("input-text");
const inputBtnElement = document.getElementById("input-btn");
const todoUlElement = document.getElementById("todo-ul");

// the following 2 lines of code was adapted from ChatGPT: https://chat.openai.com/share/80637849-86aa-4553-b3ce-0f7f015e6a99 - 2024-04-05
let todoListArray = JSON.parse(localStorage.todoTask || "[]");

// the following 15 lines of code was adapted from:
// https://www.shecodes.io/athena/42851-how-to-create-a-to-do-list-using-html-css-and-javascript - 2024-03-28
// https://chat.openai.com/share/f2900035-a174-4d04-b8d4-c89a610de4a6 - 2024-03-28
// https://chat.openai.com/share/80637849-86aa-4553-b3ce-0f7f015e6a99 - 2024-04-05

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
  inputCheckboxElement.addEventListener("change", function (event) {
    checkTodo(task, event);
  });

  const deleteInputBtnElement = document.createElement("input");
  deleteInputBtnElement.type = "button";
  deleteInputBtnElement.value = "❌";
  deleteInputBtnElement.classList.add("deletebox");
  deleteInputBtnElement.addEventListener("click", function () {
    deleteTodoTask(task);
  });

  const textNode = document.createTextNode(task.text);

  todoUlElement.appendChild(liElement);
  liElement.appendChild(inputCheckboxElement);
  liElement.appendChild(deleteInputBtnElement);
  liElement.appendChild(textNode);

  updateTodoNumber();
}

// toggle finished/not finished todo-list items class style ✅
// The following 19 lines of code was adapted from:
// https://chat.openai.com/share/0f3b3bb7-93c0-4adf-a355-e52a35bb5473 - 2024-03-28
// https://chat.openai.com/share/80637849-86aa-4553-b3ce-0f7f015e6a99 - 2024-04-05
function checkTodo(task, event) {
  task.finished = event.target.checked;
  localStorage.todoTask = JSON.stringify(todoListArray);

  if (event.target.checked === true) {
    event.target.parentNode.classList.add("check");
  } else {
    event.target.parentNode.classList.remove("check");
  }
}

// let inputCheckboxElement = event.target;
// let liElement = inputCheckboxElement.parentNode;

// if (liIndex !== -1) {
//   todoListArray[todoTaskIndex].finished = inputCheckboxElement.checked;
//   localStorage.todoTask = JSON.stringify(todoListArray);
// }

// remove the checked-style class and remove the list item from the list ❌
// the following 17 lines of code was adapted from: https://chat.openai.com/share/4ca0cbad-71ae-4c4d-bfb6-f32ea30ee7ac - 2024-04-05
function deleteTodoTask(task) {
  const taskIndex = todoListArray.indexOf(task);
  if (taskIndex !== -1) {
    todoListArray.splice(taskIndex, 1);
    localStorage.todoTask = JSON.stringify(todoListArray);
    event.target.parentNode.remove();
    updateTodoNumber();
  }

  // const liElement = this.parentNode;
  // const todoText = liElement.innerText;

  // if (taskIndex !== -1) {
  //   todoListArray.splice(taskIndex, 1);
  //   localStorage.todoTask = JSON.stringify(todoListArray);
  // }

  // const checkedIndex = todoListArray.indexOf(todoText);
  // liElement.parentNode.removeChild(liElement);
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
// window.addEventListener("storage", loadPageHandler);
