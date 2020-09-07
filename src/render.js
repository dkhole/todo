import { addEventCheckbox, addEventTodo } from './events.js';
import Edit from './edit-icon.png'

//get image
const editIcon = new Image();
editIcon.src = Edit;

function renderCheckbox(todo) {
    const checkbox = document.createElement("div");
    checkbox.className = "checkbox-wrapper";
    const inpCheckbox = document.createElement("input");
    inpCheckbox.type = "checkbox";
    todo.appendChild(checkbox);
    checkbox.appendChild(inpCheckbox);
}


//split function render open todo, render close todo
export function renderTodo(card, todo) {
    const todoList = document.getElementById("todo-list");
    const todoItem = document.createElement("div");
   
    todoList.appendChild(todoItem);

    const arrowWrap = document.createElement("div");
    arrowWrap.className = "arrow-wrapper";
    const spanArrow = document.createElement("span");
    spanArrow.textContent = ">";
    //arrowWrap.textContent = ">";

    arrowWrap.appendChild(spanArrow);
    todoItem.appendChild(arrowWrap);

    const titleWrap = document.createElement("div");
    titleWrap.className = "todo-title-wrap";
    titleWrap.textContent = todo.getTitle();
    todoItem.appendChild(titleWrap);

    const priority = document.createElement("div");
    priority.className = "priority-meter";
    switch(todo.getPriority()) {
        case "low":
            priority.style.backgroundColor = "rgb(65,190,255)";
            arrowWrap.style.color = "rgb(65,190,255)";
            break;
        case "med":
            priority.style.backgroundColor = "rgb(255, 240, 0)";
            arrowWrap.style.color = "rgb(255, 240, 0)";
            break;
        case "high":
            priority.style.backgroundColor = "rgb(255, 0, 0)";
            arrowWrap.style.color = "rgb(255, 0, 0)";
            break;
    }

    //probably need to change this when we get user input
    const dueDate = document.createElement("div");
    dueDate.className = "due-date";
    dueDate.textContent = todo.getDueDate();

    todoItem.appendChild(priority);
    todoItem.appendChild(dueDate);

    if(todo.isOpen()) { 
        //try toggle height through eventjs, just render the appropriate todo for open or closed

        //to toggle height
        todoItem.className = "todo-open";

        //render icon instead of checkbox
        const editWrapper = document.createElement("div");
        editWrapper.className = "edit-wrapper";
        editWrapper.appendChild(editIcon);

        todoItem.appendChild(editWrapper);

        if(todo.getComplete()) {
            titleWrap.style.textDecoration = "line-through";
        }

        addEventTodo(card, todo, todoItem, editWrapper);
    } else {
        
        todoItem.className = "todo-item";
        //render closed
        //create checkbox and cross out if complete

        //renderCheckbox(todoItem);

        const checkbox = document.createElement("div");
        checkbox.className = "checkbox-wrapper";
        const inpCheckbox = document.createElement("input");
        inpCheckbox.type = "checkbox";
        todoItem.appendChild(checkbox);
        checkbox.appendChild(inpCheckbox);

        addEventCheckbox(card, inpCheckbox, todo);
        //add event to checkbox, if checked toggle complete 
        if(todo.getComplete()) {
            inpCheckbox.checked = true;
            titleWrap.style.textDecoration = "line-through";
        }

        addEventTodo(card, todo, todoItem, inpCheckbox);
    }

    
    
}

export function renderCard(card) {
    const title = document.getElementById("card-title");
    title.textContent = card.getCardTitle();
}

export function renderList(card) {

    const todoList = document.getElementById("todo-list");

    while(todoList.lastElementChild) {
        todoList.removeChild(todoList.lastElementChild);
    }

    card.getTodoList().forEach(element => {
        renderTodo(card, element);
    });
}