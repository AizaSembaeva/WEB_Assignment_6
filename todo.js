const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

let tasks = [];

addTaskBtn.onclick = function() {
  const text = taskInput.value.trim();
  if (text === "") return;

  const task = { text, completed: false };
  tasks.push(task);
  taskInput.value = "";
  renderTasks();
};

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task.text;
    if (task.completed) li.style.textDecoration = "line-through";

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = function() {
      tasks.splice(index, 1);
      renderTasks();
    };

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Done";
    completeBtn.onclick = function() {
      task.completed = !task.completed;
      renderTasks();
    };

    li.appendChild(completeBtn);
    li.appendChild(delBtn);
    taskList.appendChild(li);
  });
}
