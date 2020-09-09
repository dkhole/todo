import { addEventCheckbox, addEventTodo } from './events.js';
import Edit from './edit-icon.png'

export function renderClosed(domTodo, todo) {

    //doesnt remove previous render
    domTodo.className = "todo-item";

    if(todo.getComplete()) {
        domTodo.style.backgroundColor = "rgb(19, 19, 19)";
        domTodo.children[0].style.backgroundColor = "rgb(19, 19, 19)";
    } else {
        domTodo.style.backgroundColor = "rgb(49, 49, 49)";
        domTodo.children[0].style.backgroundColor = "rgb(49, 49, 49)";
    }

    const checkbox = document.createElement("div");
    checkbox.className = "checkbox-wrapper";
    const inpCheckbox = document.createElement("input");
    inpCheckbox.type = "checkbox";

    const arrowWrap = domTodo.children[0].children[0];

    arrowWrap.lastElementChild.style.transform = "rotate(-90deg)";
    arrowWrap.lastElementChild.style.marginLeft = "9.5px";

    checkbox.appendChild(inpCheckbox);
    domTodo.children[0].appendChild(checkbox);
}

export function renderOpen(domTodo, todo) {
    const editIcon = new Image();
    editIcon.src = Edit;
    domTodo.className = "todo-open";

    if(todo.getComplete()) {
        domTodo.style.backgroundColor = "rgb(19, 19, 19)";
        domTodo.children[0].style.backgroundColor = "rgb(19, 19, 19)";
    } else {
        domTodo.style.backgroundColor = "rgb(63, 63, 63)";
        domTodo.children[0].style.backgroundColor = "rgb(63, 63, 63)";
    }

    //need to delay to avoid text appearing before div resizes
    //setting delay breaks app if clicking buttons quickly (calling clicks before render finishes)
   //setTimeout(function(){
        const editWrapper = document.createElement("div");
        editWrapper.className = "edit-wrapper";

        editWrapper.appendChild(editIcon);
        domTodo.children[0].appendChild(editWrapper);

        //add event to edit wrapper
    editWrapper.addEventListener("click", () => {
        const overlay = document.getElementById("overlay");
        overlay.style.visibility = "visible";
        overlay.style.opacity = "1";

        const close = document.getElementById("close");
        close.addEventListener("click", () => {
            overlay.style.visibility = "hidden";
            overlay.style.opacity = "0";
        })
    })

        const notesWrapper = document.createElement("div");
        notesWrapper.className = "notes-wrapper";
        const titleNotes = document.createElement("div");
        titleNotes.className = "title-notes";
        titleNotes.textContent = "NOTES";
        const notes = document.createElement("div");
        notes.className = "notes";
        notes.textContent = todo.getNotes();

        domTodo.appendChild(notesWrapper);
        notesWrapper.appendChild(titleNotes);
        notesWrapper.appendChild(notes);

        const startDateWrapper = document.createElement("div");
        startDateWrapper.className = "start-date-wrapper";
        startDateWrapper.textContent = "Started On";

        const startDate = document.createElement("div");
        startDate.className = "start-date";    
        startDate.textContent = todo.getStartDate();

        startDateWrapper.appendChild(startDate);
        domTodo.appendChild(startDateWrapper);

        const priority = domTodo.children[0].children[2];
        const arrowWrap = domTodo.children[0].children[0];

        arrowWrap.lastElementChild.style.transform = "rotate(90deg)";
        arrowWrap.lastElementChild.style.marginLeft = "16px";

        renderPriorityColorOpen(priority, arrowWrap, titleNotes, startDateWrapper, todo);
    //}, 200);
}

export function renderPriorityColorOpen(priority, arrowWrap, titleNotes, startDateWrapper, todo) {
    switch(todo.getPriority()) {
        case "low":
            priority.style.backgroundColor = "rgb(65,190,255)";
            arrowWrap.style.color = "rgb(65,190,255)";
            titleNotes.style.color = "rgb(65,190,255)";
            startDateWrapper.style.borderLeftColor = "rgb(65,190,255)";
            break;
        case "med":
            priority.style.backgroundColor = "rgb(255, 240, 0)";
            arrowWrap.style.color = "rgb(255, 240, 0)";
            titleNotes.style.color = "rgb(255, 240, 0)";
            startDateWrapper.style.borderLeftColor = "rgb(255, 240, 0)";
            break;
        case "high":
            priority.style.backgroundColor = "rgb(255, 0, 0)";
            arrowWrap.style.color = "rgb(255, 0, 0)";
            titleNotes.style.color = "rgb(255, 0, 0)";
            startDateWrapper.style.borderLeftColor = "rgb(255, 0, 0)";
            break;
    }
}

export function renderPriorityColorClosed(todo, priority, arrowWrap) {
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
}

//split function render open todo, render close todo
export function renderTodo(card, todo) {
    const todoList = document.getElementById("todo-list");
    const todoItem = document.createElement("div");
    const todoTop = document.createElement("div");
   
    todoTop.className = "todo-top";

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
    

    //probably need to change this when we get user input
    const dueDate = document.createElement("div");
    dueDate.className = "due-date";
    dueDate.textContent = todo.getDueDate();

    todoTop.appendChild(priority);
    todoTop.appendChild(dueDate);

    if(todo.isOpen()) { 
        //try toggle height through eventjs, just render the appropriate todo for open or closed
        renderOpen(todoItem, todo);

        if(todo.getComplete()) {
            titleWrap.style.textDecoration = "line-through";
        }

        addEventTodo(card, todo, todoItem, todoItem.children[0].lastElementChild);
    } else {
        //render closed
        //create checkbox and cross out if complete

        renderClosed(todoItem, todo);

        const inpCheck = todoItem.children[0].lastElementChild.lastElementChild;


        if(todo.getComplete()) {
            inpCheck.checked = true;
            titleWrap.style.textDecoration = "line-through";
        }

        renderPriorityColorClosed(todo, priority, arrowWrap)

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