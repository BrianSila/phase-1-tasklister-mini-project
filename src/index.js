document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const newTask = document.createElement('li');
    newTask.textContent = event.target.elements['new-task-description'].value;
    taskList.appendChild(newTask);
    form.reset();
  });
});
