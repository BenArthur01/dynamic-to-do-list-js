#  Dynamic To-Do List App

This project is a simple, interactive To-Do List application built with **HTML**, **CSS**, and **JavaScript**. It allows users to add, display, and remove tasks dynamically using DOM manipulation techniques.

##  Features

- Add tasks using a button or the Enter key
- Display tasks in a clean, scrollable list
- Remove tasks individually with a click
- Input validation to prevent empty entries
- Automatic persistence in local Storage
- Clean, readable code structure

##  Files

- `index.html` — Contains the structure of the app
- `styles.css` — Handles the visual styling
- `script.js` — Implements the interactive logic

##  How It Works

1. Users type a task into the input field.
2. Clicking **Add Task** or pressing **Enter** triggers the `addTask()` function.
3. The task is added to the list with a **Remove** button.
4. Clicking **Remove** deletes the task from the list.
5. Tasks are read from Local Storage (`localStorage.getItem('tasks')`) and rendered.
6. Removing a task updates the DOM and Local Storage accordingly.
