// Step 1: Setup event listener for page load
document.addEventListener("DOMContentLoaded", () => {
    // All the logic goes inside here


    // Step 2: Select Key elements from the page
    // Using getElementById to grab the input field, buttom and task list
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    if (!taskInput || !addButton || !taskList) {
        console.error("Missing DOM elements. checks IDs: task-input, add-task-btn, task-list");
        return;
    }

    // Steps to implement Local Storage
    // Step 1: Setup stored tasks array and load on start
    let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');

    function loadTasks() {
        tasks.forEach(taskText => addTask(taskText, false)); // false prevents re-saving while loading
    }


    // Step 3: Create the addTask Function
    // This function handles adding a new task
    // Adjust addTask to optionally save tasks to avoid duplication when loading from local storage
    function addTask(taskTextParam, save = true) {
        const taskText = (typeof taskTextParam === 'string') ? taskTextParam.trim() : taskInput.value.trim();

        if (taskText === "") {
            if (save) alert("Please enter a task.");
            return;
        }

        // Step 4: Task Creation & Removal
        const listItem = document.createElement("li");
        listItem.textContent = taskText;
        listItem.classList.add("task-item"); // add a class here
 
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-btn"); // use classlist.add here 
        // ...classlist.add("...") adds a class without removing existing ones.

        removeButton.onclick = () => {
            taskList.removeChild(listItem);
            // update tasks array and and localStorage
            tasks = tasks.filter(t => t !== taskText);
            localStorage.setItem('tasks', JSON.stringify(tasks));
        };

        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        if  (save) {
            tasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            taskInput.value = "";  // Clear input field
            taskInput.focus();
        } else {
            // when loading from storage, do not clear input
        }  
    }

    // Load saved tasks
    loadTasks();

    //  Step 5: Add Event Listener
    // Making the app respond to button clicks and enter key presses
    addButton.addEventListener('click', () => addTask(undefined, true));

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') addTask(undefined, true);
    });
});