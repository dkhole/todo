import { addEventCheckbox, addEventTodo } from './events.js';
import Edit from './edit-icon.png'

export function renderClosed(domTodo) {
    domTodo.className = "todo-item";

    const checkbox = document.createElement("div");
    checkbox.className = "checkbox-wrapper";
    const inpCheckbox = document.createElement("input");
    inpCheckbox.type = "checkbox";

    checkbox.appendChild(inpCheckbox);
    domTodo.children[0].appendChild(checkbox);
}

export function renderOpen(domTodo) {
    const editIcon = new Image();
    editIcon.src = Edit;
    domTodo.className = "todo-open";

    const editWrapper = document.createElement("div");
    editWrapper.className = "edit-wrapper";

    editWrapper.appendChild(editIcon);
    domTodo.children[0].appendChild(editWrapper);
}


//split function render open todo, render close todo
export function renderTodo(card, todo) {
    const todoList = document.getElementById("todo-list");
    const todoItem = document.createElement("div");
    const todoTop = document.createElement("div");
   
    todoList.appendChild(todoItem);
    todoItem.appendChild(todoTop);

    const arrowWrap = document.createElement("div");
    arrowWrap.className = "arrow-wrapper";
    const spanArrow = document.createElement("span");
    spanArrow.textContent = ">";
    //arrowWrap.textContent = ">";

    arrowWrap.appendChild(spanArrow);
    todoTop.appendChild(arrowWrap);

    const titleWrap = document.createElement("div");
    titleWrap.className = "todo-title-wrap";
    titleWrap.textContent = todo.getTitle();
    todoTop.appendChild(titleWrap);

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

    todoTop.appendChild(priority);
    todoTop.appendChild(dueDate);

    if(todo.isOpen()) { 
        //try toggle height through eventjs, just render the appropriate todo for open or closed
        renderOpen(todoItem);

        if(todo.getComplete()) {
            titleWrap.style.textDecoration = "line-through";
        }

        addEventTodo(card, todo, todoItem, todoItem.children[0].lastElementChild);
    } else {
        //render closed
        //create checkbox and cross out if complete

        renderClosed(todoItem);

        const inpCheck = todoItem.children[0].lastElementChild.lastElementChild;


        if(todo.getComplete()) {
            inpCheck.checked = true;
            titleWrap.style.textDecoration = "line-through";
        }
        
        addEventCheckbox(titleWrap, inpCheck, todo);
        addEventTodo(card, todo, todoItem, inpCheck);
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