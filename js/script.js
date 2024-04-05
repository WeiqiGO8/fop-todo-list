// array for the li element and checked li elements
todoArray = [];
checkedArray = [];

// create the elements
function createElements() {
  const inputTextElement = document.getElementById("input-text");
  const inputBtnElement = document.getElementById("input-btn");
  const todoUlElement = document.getElementById("todo-ul");

  // create li element
  const liElement = document.createElement("li");

  // create input checkbox
  const inputCheckboxElement = document.createElement("input");
  inputCheckboxElement.innerText = "✅";
  inputCheckboxElement.type("button");

  // create delete input button
  const deleteInputBtnElement = document.createElement("input");
  deleteInputBtnElement.innerText = "❌";
}
