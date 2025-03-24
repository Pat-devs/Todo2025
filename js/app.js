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
    console.log(todoText)
    

    //todoItemsContainer.innerHTML += todoText
    // Manually create the element and put text in it to prevent XSS-attacks

    createTodoElements(todoText)


    
}

// creates a todo element and sets its text
function createTodoElements(todoText) {
  
    const myElement = document.createElement("p")
    myElement.innerText = todoText

    todoItemsContainer.append(myElement)
}
