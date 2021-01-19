// UI Variables
const form = document.querySelector('#task-form'); 
const taskList = document.querySelector('.collection');
const clearButton = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

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
    } else {
        taskList.appendChild(createLi(taskInput.value));
        taskInput.value = "";
    }
    
    e.preventDefault();
};

// removeTask Function
function removeTask(e) {
    if (e.target.classList.contains('fa-remove')) {
        if (confirm('Are you sure you want to delete this task?')) {
            e.target.parentElement.parentElement.remove();
        }
    }
};

// clearTasks
function clearTasks(e) {
    if (confirm('Are you sure you want to delete all the tasks?')) {
        while(taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }
    }
};


// filterTasks

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
