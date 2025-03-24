// Grab html elements:
const inputTodoEl = document.getElementById("input-todo-text")
const addTodoButtonEl = document.getElementById("add-todo-button")
const todoItemsContainer = document.getElementById("todo-items")
const errorEl = document.getElementById("error")


// Add event to the "form"
addTodoButtonEl.addEventListener("click", addTodoHandler)

// Add todo item to the todolist
function addTodoHandler() {
    // 1. read input value
    let todoText = inputTodoEl.value
    // 2. check if input is valid 
    if (todoText == "") {
        let errorMessage = "Todo item cannot be empty!"
        errorEl.textContent = errorMessage
        
        return // if there are errors, return will prevent execution of code below this line
    } else if (todoText.length < 3) {
        let errorMessage = "Todo item cannot be less than 3 characers!"
        errorEl.textContent = errorMessage
        
        return
    }
    // 3. clear the error message
    errorEl.innerText = ""

    // 4. clear the input field
    inputTodoEl.value = ""
    // 3. do something with the input text...
    createTodoElements(todoText)


    
}

// creates a todo element and sets its text
function createTodoElements(todoText) {

    const todoItemEl = document.createElement("li")
    todoItemEl.innerText = todoText

    const todoItemRemoveButton = document.createElement("button")
    todoItemRemoveButton.textContent = "Remove!"

    todoItemEl.append(todoItemRemoveButton)

    todoItemsContainer.append(todoItemEl) 

    // add remove todo event handler
    todoItemRemoveButton.addEventListener("click", function() {
        //console.warn("I want to remove " + todoItemEl.textContent)

        todoItemEl.remove() // remove only this todoitem
    })
}

