// UI Variables
const form = document.querySelector('#task-form'); 
const taskList = document.querySelector('.collection');
const clearButton = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

function getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    return tasks
};

// createLink Function
function createLink() {
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    return link;
}

// createLi Function
function createLi(text) {
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(text));
    li.appendChild(createLink());
    console.log(li);
    return li;
}

// addTask Function
function addTask(e) {
    if (taskInput.value === "") {
        alert('Please add a task');
    } 
    taskList.appendChild(createLi(taskInput.value));
    storeInLocal(taskInput.value);
    taskInput.value = "";
    e.preventDefault();
};

// storeInLocal Function
function storeInLocal(task) {
    let tasks = getTasks();
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// displayTasks Function
function displayTasks() {
    let tasks = getTasks();
    tasks.forEach(function(task) {
        taskList.appendChild(createLi(task));
    });
};

// removeTask Function
function removeTask(e) {
    if (e.target.classList.contains('fa-remove')) {
        if (confirm('Are you sure you want to delete this task?')) {
            e.target.parentElement.parentElement.remove();
        }
    }
};

// clearTasks Function
function clearTasks(e) {
    if (confirm('Are you sure you want to delete all the tasks?')) {
        while(taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }
    }
};

// filterTasks Function
function filterTasks(e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function(task) {
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) === -1) {
            task.style.display = 'none';
        } else {
            task.style.display = 'block';
        }
    });
}

// loadEventListener Function
function loadEventListeners() {
    // DOM Load 
    document.addEventListener('DOMContentLoaded', displayTasks);

    //  Adding tasks
    form.addEventListener('submit', addTask);

    // Remove tasks
    taskList.addEventListener('click', removeTask);

    // Clear tasks
    clearButton.addEventListener('click', clearTasks)

    // Filter tasks
    filter.addEventListener('keyup', filterTasks);
}

// Calling loadEventListeners
loadEventListeners();
