// Grab html elements:
const inputTodoEl = document.getElementById("input-todo-text")
const addTodoButtonEl = document.getElementById("add-todo-button")
const todoItemsContainer = document.getElementById("todo-items")



// Add event to the "form"
addTodoButtonEl.addEventListener("click", addTodoHandler)

// Add todo item to the todolist
function addTodoHandler() {
    // 1. read input value
    let todoText = inputTodoEl.value
    // 2. clear the input field
    inputTodoEl.value = ""
    // 3. do something with the input text...
    console.log(todoText)
    

    //todoItemsContainer.innerHTML += todoText
    // Manually create the element and put text in it to prevent XSS-attacks

    createTodoElements(todoText)


    
}

// creates a todo element and sets its text
function createTodoElements(todoText) {

    if (todoText == "") {
        alert("Todo item cannot be empty!")
    }
    
    const myElement = document.createElement("h1")
    myElement.innerText = todoText

    todoItemsContainer.append(myElement)
}
