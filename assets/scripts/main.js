const todoForm = document.querySelector("form");
const todoList = document.querySelector("#todoList");
const clearList = document.querySelector("#clearTodoList");

let ACTIVITIES_TODO = [];

function addItemToTodoList(event) {
  event.preventDefault();

  const newItemTodo = todoForm.todo.value;

  if (newItemTodo.trim() == "") {
    todoForm.reset();
    return;
  }

  ACTIVITIES_TODO.push(newItemTodo);

  console.log(ACTIVITIES_TODO);

  todoForm.reset();

  refreshTodoList();
}

function refreshTodoList() {
  todoList.innerHTML = "";

  for (let index = ACTIVITIES_TODO.length - 1; index >= 0; index--) {
    const li = document.createElement("li");

    // li.innerHTML = ACTIVITIES_TODO[index];

    li.innerHTML = `<div class="content">${ACTIVITIES_TODO[index]}<button>delete</button></div>`;

    todoList.appendChild(li);
  }
}

function clearTodoList() {
  ACTIVITIES_TODO = [];
  todoList.innerHTML = "No items in todo list.";
}

todoForm.addEventListener("submit", addItemToTodoList);
clearList.addEventListener("click", clearTodoList);
