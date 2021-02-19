// selectors
document.querySelector("form").addEventListener("submit", handleSubmitForm);
document
  .querySelector("ul")
  .addEventListener("click", handleClickDeleteOrCheck);
document.getElementById("clearAll").addEventListener("click", handleClearAll);

// Event Handlers
function handleSubmitForm(e) {
  e.preventDefault();
  let input = document.querySelector("input");
  if (input.value != "") addToDoList(input.value);
  input.value = "";
}

// check icon
function handleClickDeleteOrCheck(e) {
  if (e.target.name == "checkButton") checkTodo(e);

  if (e.target.name == "deleteButton") deleteTodo(e);
}

function handleClearAll(e) {
  document.querySelector("ul").innerHTML = "";
}

// Helpers
function addToDoList(todo) {
  let ul = document.querySelector("ul");
  let li = document.createElement("li");

  li.innerHTML = `
        <span class="todo-item">${todo}</span>
        <button name="checkButton"><i class="fas fa-check-square"> </i> </button> 
        <button name="deleteButton"><i class="fas fa-trash"> </i> </button
    `;

  li.classList.add("todo-list-item");
  ul.appendChild(li);
}

function checkTodo(e) {
  let item = e.target.parentNode;
  if (item.style.textDecoration == "line-through")
    item.style.textDecoration = "none";
  else item.style.textDecoration = "line-through";
}

////////////////
// delete 
function deleteTodo(e) {
  let item = e.target.parentNode;

  item.addEventListener("transitionend", function () {
    item.remove();
  });

  item.classList.add("todo-list-item-fall");
}

///////////////////////////////////////////////////////////////
// adding color change from click

// document.addEventListener("keydown", function (e) {
//   changeColor(e.key);
// });

// function changeColor(key) {
//   switch (key) {
//     case "c":
//       document.querySelector("html").style.backgroundColor = createRandomColor();
//       break;
//     case "1":
//       document.querySelector("html").style.fontSize = "medium";
//       break;
//     case "2":
//       document.querySelector("html").style.fontSize = "large";
//       break;
//     case "3":
//       document.querySelector("html").style.fontSize = "x-large";
//       break;
//     case "4":
//       document.querySelector("html").style.fontSize = "xx-large";
//       break;
//     default:
//       console.log(colorInnerHTML);
//   }
// }

///////////////////////////
// Create random color
function createRandomColor() {
  const hexParts = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexParts[Math.floor(Math.random() * 16)];
  }
  return color;
}

///////////////////////////////////////////////////////////

// this add the Alt + C to change the background color 
document.addEventListener ("keydown", function (zEvent) {
  if (zEvent.altKey  &&  zEvent.key === "c") {  // case sensitive
    document.querySelector("html").style.backgroundColor = createRandomColor();
  }
} );

// Add font size increase below when pressing alt + num 
document.addEventListener ("keydown", function (zEvent) {
  if (zEvent.altKey  &&  zEvent.key === "1") {  
    document.querySelector("html").style.fontSize = "medium";
  }
} );

document.addEventListener ("keydown", function (zEvent) {
  if (zEvent.altKey  &&  zEvent.key === "2") {  
    document.querySelector("html").style.fontSize = "large";
  }
} );

document.addEventListener ("keydown", function (zEvent) {
  if (zEvent.altKey  &&  zEvent.key === "3") {  
    document.querySelector("html").style.fontSize = "x-large";
  }
} );
document.addEventListener ("keydown", function (zEvent) {
  if (zEvent.altKey  &&  zEvent.key === "4") {  
    document.querySelector("html").style.fontSize = "xx-large";
  }
} );
//////////////////////////////////////////////////////////