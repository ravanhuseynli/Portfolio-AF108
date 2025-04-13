// let numOne = document.querySelector("#num1");
// let numTwo = document.querySelector("#num2");
// let numThree = document.querySelector("#num3");
// let numFour = document.querySelector("#num4");
// let numFive = document.querySelector("#num5");
// let numSix = document.querySelector("#num6");
// let numSeven = document.querySelector("#num7");
// let numEight = document.querySelector("#num8");
// let numNine = document.querySelector("#num9");
// let numZero = document.querySelector("#zero");
// let numPlus = document.querySelector("#addition");
// let numMinus = document.querySelector("#subtraction");
// let numMultiply = document.querySelector("#multip");
// let numDivide = document.querySelector("#division");
// let numEqual = document.querySelector("#equals");
// let numClear = document.querySelector("#clear");
// let Display = document.querySelector("#display");
// let numPoint = document.querySelector("#point");

// numNine.addEventListener('click', () => {
//     Display.value += numNine.textContent;
//   });
// numEight.addEventListener('click', () => {
//     Display.value += numEight.textContent;
//   });
// numSeven.addEventListener('click', () => {
//     Display.value += numSeven.textContent;
//   });
// numSix.addEventListener('click', () => {
//     Display.value += numSix.textContent;
//   });
// numFive.addEventListener('click', () => {
//     Display.value += numFive.textContent;
//   });
// numFour.addEventListener('click', () => {
//     Display.value += numFour.textContent;
//   });
// numThree.addEventListener('click', () => {
//     Display.value += numThree.textContent;
//   });
// numTwo.addEventListener('click', () => {
//     Display.value += numTwo.textContent;
//   });
// numOne.addEventListener('click', () => {
//     Display.value += numOne.textContent;
//   });
// numZero.addEventListener('click', () => {
//     Display.value += numZero.textContent;
//   });
// numPlus.addEventListener('click', () => {
//     Display.value += numPlus.textContent;
//   });
// numMinus.addEventListener('click', () => {
//     Display.value += numMinus.textContent;
//   });
// numMultiply.addEventListener('click', () => {
//     Display.value += numMultiply.textContent;
//   });
// numDivide.addEventListener('click', () => {
//     Display.value += numDivide.textContent;
//   });

// numEqual.addEventListener('click', () => {
//     if (Display.value === "") {
//         alert("Please enter a value!");
//     } else {
//         Display.value = eval(Display.value);
//     }
// }
// );
// numClear.addEventListener('click', () => {
//     Display.value = "";
//   });
// numPoint.addEventListener('click', () => {
//     Display.value += numPoint.textContent;
//   });

// ----------------------------------------------- task 2 --------------------------------------------------------

let todos = JSON.parse(localStorage.getItem("todos")) || [];

let todoInput = document.getElementById("todo-input");
let addButton = document.getElementById("add-todo");
let todoList = document.getElementById("todo-list");
let clearButton = document.getElementById("clear-todos");


function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}


function renderTodos() {
  todoList.innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    let todo = todos[i];

    let li = document.createElement("li");
    li.className =
      "list-group-item d-flex justify-content-between align-items-center";


    let label = document.createElement("label");
    label.textContent = i + 1 + ". " + todo.text;
    label.className = todo.completed ? "todo-completed" : "todo-incomplete";
    label.style.marginLeft = "8px";

  
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;

    checkbox.addEventListener("change", function () {
      todo.completed = checkbox.checked;
      saveTodos();
      renderTodos();
    });

  
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "btn btn-sm btn-warning edit-btn";

    if (todo.completed) {
      editBtn.disabled = true;
    }

    editBtn.addEventListener("click", function () {
      let newText = prompt("Todo'nu dəyiş:", todo.text);
      if (newText !== null && newText.trim() !== "") {
        todo.text = newText.trim();
        saveTodos();
        renderTodos();
      }
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-sm btn-danger ms-2";

    let icon = document.createElement("i");
    icon.className = "fa-solid fa-trash";
    deleteBtn.appendChild(icon);

    deleteBtn.addEventListener("click", function () {
      todos.splice(i, 1);
      saveTodos();
      renderTodos();
    });

    let leftDiv = document.createElement("div");
    leftDiv.className = "d-flex align-items-center";
    leftDiv.appendChild(checkbox);
    leftDiv.appendChild(label);

    let rightDiv = document.createElement("div");
    rightDiv.appendChild(editBtn);
    rightDiv.appendChild(deleteBtn);

    li.appendChild(leftDiv);
    li.appendChild(rightDiv);
    todoList.appendChild(li);
  }
}


addButton.addEventListener("click", function () {
  let text = todoInput.value.trim();
  if (text !== "") {
    let newTodo = {
      text: text,
      completed: false,
    };
    todos.push(newTodo);
    saveTodos();
    todoInput.value = "";
    renderTodos();
  }
});


clearButton.addEventListener("click", function () {
  todos = [];
  saveTodos();
  renderTodos();
});

renderTodos();
