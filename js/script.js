// retreve elements from html
let submitTextElement = document.getElementById("submit-tex");
let submitBtnElement = document.getElementById("submit-btn");
let unorderedListElement = document.getElementById("unordered-list");
let amountElement = document.getElementById("amount");

amountElement = 1;

// array to store the todo list
let unorderedList = [];

function addTodo(event) {
  let oldSubmitTextElement = document.querySelectorAll("li");
  if (oldSubmitTextElement.length > 3) {
    oldSubmitTextElement[0].remove();
  }

  let newSubmitTextElement = document.createELement("li");
  newSubmitTextElement.innerText = "" + amountElement;
  unorderedListElement.appendChild(newSubmitTextElement);
  counter += 1;

  submitBtnElement.document.createElement("li");
}
submitBtnElement.addEventListener("click", addTodo);

// behavour for the existing todo-list items
function finishedTodo() {}

function removeTodo() {}
