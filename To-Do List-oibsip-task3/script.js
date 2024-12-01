const taskTitle = document.getElementById("task-title");
const taskDesc = document.getElementById("task-desc");
const addTaskBtn = document.getElementById("add-task-btn");
const pendingTasksList = document.getElementById("pending-tasks-list");
const completedTasksList = document.getElementById("completed-tasks-list");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
  if (!taskTitle.value.trim() || !taskDesc.value.trim()) {
    alert("Please fill out both the Title and Description fields.");
    return;
  }

  const task = createTaskElement(taskTitle.value, taskDesc.value);
  pendingTasksList.appendChild(task);
  taskTitle.value = "";
  taskDesc.value = "";
}

function createTaskElement(title, desc) {
  const li = document.createElement("li");

  const taskInfo = document.createElement("span");
  taskInfo.textContent = `${title}: ${desc}`;
  li.appendChild(taskInfo);

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Complete";
  completeBtn.classList.add("complete-btn");
  completeBtn.addEventListener("click", () => {
    li.remove();
    completedTasksList.appendChild(li);
    completeBtn.remove();
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", () => li.remove());

  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);

  return li;
}
