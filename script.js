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

    // Step 3: Create the addTask Function
    // This function handles adding a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        const listItem = document.createElement("li");
        listItem.textContent = taskText;
 
        // Step 4: Task Creation & Removal
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";

        removeButton.onclick = () => {
            taskList.removeChild(listItem);
        };

        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        taskInput.value = "";  // Clear input field
        taskInput.focus();
    }

    //  Step 5: Add Event Listener
    // Making the app respond to button clicks and enter key presses
    addButton.addEventListener("click", addTask);

    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") addTask();
    });
});