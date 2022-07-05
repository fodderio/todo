const todoForm = document.querySelector("form");
const todoList = document.querySelector("#todoList");
const clearList = document.querySelector("#clearTodoList");
const todoStatus = document.querySelector("#todoStatus");

let activitiesInStore = localStorage.getItem("todoList");

let ACTIVITIES_TODO = JSON.parse(activitiesInStore) || [];

function addItemToTodoList(event) {
  event.preventDefault();

  const newItemTodo = todoForm.todo.value;

  if (newItemTodo.trim() == "") {
    todoForm.reset();
    return;
  }

  ACTIVITIES_TODO.push({
    title: newItemTodo,
    isDone: false,
  });

  localStorage.setItem("todoList", JSON.stringify(ACTIVITIES_TODO));

  todoForm.reset();

  refreshTodoList();
}

function removeTodoItem(event) {
  const index = event.target.dataset.index;

  ACTIVITIES_TODO.splice(index, 1);

  localStorage.setItem("todoList", JSON.stringify(ACTIVITIES_TODO));

  refreshTodoList();
}

function changeTodoStatus(event) {
  const index = event.target.dataset.index;

  ACTIVITIES_TODO.splice(index, 1, {
    title: ACTIVITIES_TODO[index].title,
    isDone: event.target.checked,
  });

  localStorage.setItem("todoList", JSON.stringify(ACTIVITIES_TODO));

  refreshTodoList();
}

function refreshTodoList() {
  if (ACTIVITIES_TODO.length == 0) return;

  todoList.innerHTML = "";

  const itemsInList = ACTIVITIES_TODO.length;
  const itemsDone = ACTIVITIES_TODO.filter(
    (item) => item.isDone == true
  ).length;

  if (itemsDone == itemsInList) {
    todoStatus.innerHTML = "🎉 All done!";
  } else {
    todoStatus.innerHTML = `Items: ${itemsInList} | Done: ${itemsDone}`;
  }

  ACTIVITIES_TODO.forEach((item, index) => {
    const li = document.createElement("li");
    const button = document.createElement("button");

    button.textContent = "Delete";
    button.dataset.index = index;

    button.addEventListener("click", removeTodoItem);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "todo-item-" + index;
    checkbox.checked = item.isDone;
    checkbox.id = "todo-item-" + index;
    checkbox.dataset.index = index;

    checkbox.addEventListener("change", changeTodoStatus);

    if (item.isDone) {
      li.innerHTML = `<span>✅ ${item.title}</span>`;
      li.classList.add("done");
    } else {
      li.innerHTML = `<span>🎯 ${item.title}</span>`;
    }

    li.appendChild(checkbox);
    li.appendChild(button);

    todoList.appendChild(li);
  });
}

function clearTodoList() {
  localStorage.removeItem("todoList");

  ACTIVITIES_TODO = [];
  todoList.innerHTML = "No items in todo list.";
}

todoForm.addEventListener("submit", addItemToTodoList);
clearList.addEventListener("click", clearTodoList);

refreshTodoList();
