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
}

// loadEventListener Function
function loadEventListeners() {
    //  Adding tasks
    form.addEventListener('submit', addTask);
}

// Calling loadEventListeners
loadEventListeners();
