import { addEventCheckbox, addEventTodo, addEventsOnForm } from './events.js';
import Edit from './edit-icon.png'

export function renderCloseForm() {
    const overlay = document.getElementById("overlay-new");
    const form = document.getElementById("new-todo");
    form.reset();
    overlay.style.visibility = "hidden";
    overlay.style.opacity = "0";
}

export function renderForm() {
    const overlay = document.getElementById("overlay-new");
    overlay.style.visibility = "visible";
    overlay.style.opacity = "1";  
}

export function renderEditForm(card, todo) {
    const overlay = document.getElementById("overlay-edit");
    overlay.style.visibility = "visible";
    overlay.style.opacity = "1";  

    //change input values to value of todo
    const title = document.getElementById("title-input-edit");
    title.value = todo.getTitle();
    const priority = document.getElementById("dropdown-edit");
    priority.value = todo.getPriority();
    const inputNotes = document.getElementById("notes-input-edit");
    inputNotes.value = todo.getNotes();

    //card get index of todo
    const i = card.getIndexTodo(todo.getTitle());
    const hidden = document.createElement("div");
    hidden.id = "hidden";
    hidden.textContent = i;
    hidden.style.visibility = "hidden";

    overlay.appendChild(hidden);
}

export function renderCloseEditForm() {
    const overlay = document.getElementById("overlay-edit");
    const form = document.getElementById("edit-todo");
    const hidden = document.getElementById("hidden");

    hidden.remove();
    form.reset();
    overlay.style.visibility = "hidden";
    overlay.style.opacity = "0"; 
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

export function renderOpen(card, domTodo, todo) {

    const editIcon = new Image();
    editIcon.src = Edit;

    const editWrapper = document.createElement("div");
    editWrapper.className = "edit-wrapper";
    editWrapper.appendChild(editIcon);
    domTodo.children[0].appendChild(editWrapper);

    //add event to edit wrapper - move into event function
    editWrapper.addEventListener("click", () => {
        renderEditForm(card, todo);
        //change values of input to todo values
    })
    //event to ensure code renders only after transition ends
    const transitionEnd = transEvent();
    domTodo.addEventListener(transitionEnd, endTransition(todo, domTodo), false);
    domTodo.className = "todo-open";
}

export function renderClosed(domTodo, todo) {

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

//clean up this function, can probably put render wrappers into a function refractor renderopen as well
function renderStaticOpen(card, domTodo, todo) {
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

    const editWrapper = document.createElement("div");
    editWrapper.className = "edit-wrapper";
    editWrapper.appendChild(editIcon);
    domTodo.children[0].appendChild(editWrapper);

    //add event to edit wrapper
    editWrapper.addEventListener("click", () => {
        renderEditForm(card, todo);
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
}

export function renderTodo(card, todo) {
    const todoList = document.getElementById("todo-list");
    const todoItem = document.createElement("div");
    const todoTop = document.createElement("div");

    //first render top bar as its shared with both open and closed
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

    //now determine the rest depending on open status
    if(todo.isOpen()) { 
        renderStaticOpen(card, todoItem, todo);

        if(todo.getComplete()) {
            titleWrap.style.textDecoration = "line-through";
        }

        addEventTodo(card, todo, todoItem, todoItem.children[0].lastElementChild);
    } else {

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

//helper function to dtermine transition dependant on browser
const transEvent = function() {
    let t;
    const transElement = document.createElement('div');
    const transitions = {
      'transition':'transitionend',
      'OTransition':'oTransitionEnd',
      'MozTransition':'transitionend',
      'WebkitTransition':'webkitTransitionEnd'
    }
    
    for(t in transitions){
        if( transElement.style[t] !== undefined ){

            return transitions[t];
        }
    }
}

//destructured in order to reference afterTrans in remove event
const endTransition = function(todo, domTodo) {
    return function afterTrans(e) {
        //set restrictions to combat event bubbling
        if(e.propertyName == 'height' && todo.isOpen()) {
            //render rest of open once transition finished
            if(todo.getComplete()) {
                domTodo.style.backgroundColor = "rgb(19, 19, 19)";
                domTodo.children[0].style.backgroundColor = "rgb(19, 19, 19)";
            } else {
                domTodo.style.backgroundColor = "rgb(63, 63, 63)";
                domTodo.children[0].style.backgroundColor = "rgb(63, 63, 63)";
            }
        
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
            //rotate arrow
            arrowWrap.lastElementChild.style.transform = "rotate(90deg)";
            arrowWrap.lastElementChild.style.marginLeft = "16px";
    
            const transitionEnd = transEvent();
            renderPriorityColorOpen(priority, arrowWrap, titleNotes, startDateWrapper, todo);
            //remove event straight away to prevent it firing multiple times
            domTodo.removeEventListener(transitionEnd, afterTrans);
        }
    }
}

