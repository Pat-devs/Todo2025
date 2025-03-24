// Grab html elements:
const inputTodoEl = document.getElementById("input-todo-text")
const addTodoButtonEl = document.getElementById("add-todo-button")

// Add event to the "form"
addTodoButtonEl.addEventListener("click", addTodoHandler)

// Add todo item to the todolist
function addTodoHandler() {
    console.log(inputTodoEl.value)
}


//const test = addTodoHandler
