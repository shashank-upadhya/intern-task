document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('newTask');
    const addTaskButton = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span class="task-text">${taskText}</span>
                <button class="delete-btn">Delete</button>
            `;
            taskList.appendChild(listItem);
            taskInput.value = '';

            const deleteButton = listItem.querySelector('.delete-btn');
            deleteButton.addEventListener('click', removeTask);
        }
    }

    function removeTask(event) {
        const listItem = event.target.parentNode;
        taskList.removeChild(listItem);
    }
});