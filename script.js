
const addTaskBtn = document.getElementById('add-task-btn');
const newTaskInput = document.getElementById('new-task');
const taskList = document.querySelector('.tasks');


addTaskBtn.addEventListener('click', addTask);


function addTask() {
  const taskText = newTaskInput.value.trim();
  if (taskText === '') return;  


  const taskRow = document.createElement('tr');
  const taskData = `
    <td>
      <span class="task-text">${taskText}</span>
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
    </td>
  `;

  taskRow.innerHTML = taskData;
  taskList.appendChild(taskRow);


  newTaskInput.value = '';

 
  const editBtn = taskRow.querySelector('.edit-btn');
  const deleteBtn = taskRow.querySelector('.delete-btn');

  editBtn.addEventListener('click', () => editTask(taskRow));
  deleteBtn.addEventListener('click', () => deleteTask(taskRow));
}


function editTask(taskRow) {
  const taskTextSpan = taskRow.querySelector('.task-text');
  const newTaskText = prompt('Edit your task:', taskTextSpan.textContent);

  if (newTaskText !== null && newTaskText.trim() !== '') {
    taskTextSpan.textContent = newTaskText.trim();
  }
}

function deleteTask(taskRow) {
  taskRow.remove();
}
