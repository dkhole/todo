import { addEventCheckbox, addEventTodo, addEventsOnForm, removeEventsForLoad, reloadEvents, refreshEvents } from './events.js';
import Edit from './edit-icon.png';
import Bin from './bin-icon.png';
import Sortable from 'sortablejs';
import Card from './Card.js';

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
    const i = card.getTodoList().indexOf(todo);
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

export function renderBin(domTodo) {
    const editBin = new Image();
    editBin.src = Bin

    const binWrapper = document.createElement("div");
    binWrapper.className = "bin";
    binWrapper.appendChild(editBin);
    domTodo.children[0].appendChild(binWrapper);

    return binWrapper;
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

    const titleNotes = renderNotes(domTodo, todo);
    
    const startDateWrapper = renderStartDate(domTodo, todo);

    const priority = domTodo.children[0].children[2];

    const arrowWrap = rotateArrow(domTodo);

    renderPriorityColorOpen(priority, arrowWrap, titleNotes, startDateWrapper, todo);
}

function renderArrow(todoTop) {
    const arrowWrap = document.createElement("div");
    arrowWrap.className = "arrow-wrapper";
    const spanArrow = document.createElement("span");
    spanArrow.textContent = ">";

    arrowWrap.appendChild(spanArrow);
    todoTop.appendChild(arrowWrap);

    return arrowWrap
}

function renderTitle(todoTop, todo) {
    const titleWrap = document.createElement("div");
    titleWrap.className = "todo-title-wrap";
    titleWrap.textContent = todo.getTitle();
    todoTop.appendChild(titleWrap);

    return titleWrap;
}

function renderPriorityDate(todoTop, todo) {
    const priority = document.createElement("div");
    priority.className = "priority-meter";
    todoTop.appendChild(priority);

    //probably need to change this when we get user input
    const dueDate = document.createElement("div");
    dueDate.className = "due-date";
    dueDate.textContent = todo.getDueDate();
    todoTop.appendChild(dueDate);

    return priority;
}

export function renderTodo(card, todo) {
    const todoList = document.getElementById("todo-list");
    const todoItem = document.createElement("div");
    const todoTop = document.createElement("div");

    //first render top bar as its shared with both open and closed
    todoTop.className = "todo-top";

    todoList.appendChild(todoItem);
    todoItem.appendChild(todoTop);

    const arrowWrap = renderArrow(todoTop);

    const titleWrap = renderTitle(todoTop, todo);

    const priority = renderPriorityDate(todoTop, todo);

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

    if(card == "empty") {
        const title = document.getElementById("card-title");
        title.textContent = "empty";
    } else {
        const title = document.getElementById("card-title");
        title.textContent = card.getCardTitle();
    }    
}

export function renderList(card) {

    if(card == "empty") {
        deleteDomList();
    } else {
        deleteDomList();

        card.getTodoList().forEach(element => {
            renderTodo(card, element);
        });
    
        const domTodoList = document.getElementById("todo-list");

        Sortable.create(domTodoList, { 
            ghostClass: 'ghost'
        });
    } 
}

export function renderDeleteTodo(card, todo) {
    
    const todoList = document.getElementById("todo-list");
    const todoItem = document.createElement("div");
    const todoTop = document.createElement("div");

    //first render top bar as its shared with both open and closed
    todoItem.className = "todo-delete";
    todoTop.className = "todo-top";

    todoList.appendChild(todoItem);
    todoItem.appendChild(todoTop);

    renderArrow(todoTop);

    renderTitle(todoTop, todo);

    renderPriorityDate(todoTop, todo);

    const binWrapper = renderBin(todoItem);

    binWrapper.addEventListener('click', () => {
        todoItem.remove();
        card.removeTodo(todo);
    })

}

export function deleteDomList() {
    const domTodoList = [...(document.getElementById("todo-list").children)];
        //remove all dom list items and rerender delete option view
        for(let i = 0; i < domTodoList.length; i++) {
            let domTodo = domTodoList[i]
            domTodo.remove();
        }
}

export function renderListDelete(card) {
    //previous render already removed
    card.getTodoList().forEach(todo => {
        renderDeleteTodo(card, todo);
    })
}

export function removeDeckRender() {
    const addCard = document.getElementById("add-card");
    addCard.remove();
    
    const wrapCards = document.getElementById("cards-wrap");
    const wrapChildren = [...(wrapCards.children)];

    for(let i = 0; i < wrapChildren.length; i++) {
        wrapChildren[i].remove();
    }

    wrapCards.remove();
}

export function renderDeck(Board, domCardList, eventsLoad) {
    
    //add button
    const addCard = document.createElement("div");
    addCard.id = "add-card";
    addCard.style.backgroundImage = "url(https://image.flaticon.com/icons/png/512/32/32360.png)";
    addCard.addEventListener("click", () => {
        const newCardTitle = prompt("Title of your new card? (Recommend 1 word max)");
       
        if(newCardTitle != "") {
            const newCard = Card(newCardTitle);

            Board.addCard(newCard);
            //rerender
            removeDeckRender();
            refreshEvents(newCard, eventsLoad);
            renderDeck(Board, domCardList, eventsLoad);
       }
        
    })

    domCardList.appendChild(addCard);

    const cardsWrap = document.createElement("div");
    cardsWrap.id = "cards-wrap";
    domCardList.appendChild(cardsWrap);

    const cardList = Board.getCardList();

    for(let i = 0; i < cardList.length; i++) {
        renderCardDeck(Board, cardList[i], cardsWrap, domCardList, eventsLoad);
    }
}

function getPriorityColor(todoPriority) {
    switch(todoPriority) {
        case "low":
            return "rgb(65,190,255)";
        case "med":
            return "rgb(255, 240, 0)";
        case "high":
            return "rgb(255, 0, 0)";
    }
}

export function renderPriorityCircle(todo, priorityCardWrapper) {
    const priorityCircle = document.createElement("div");
    priorityCircle.className = "priority-circle";
    priorityCardWrapper.appendChild(priorityCircle);

    const todoPriority = todo.getPriority();
    const circleColor = getPriorityColor(todoPriority);
    priorityCircle.style.backgroundColor = circleColor;
}

export function renderCardDeck(Board, card, cardsWrap, domCardList, eventsLoad) {
    const domCard = document.createElement("div");
    //need to add event to card
    domCard.className = "card";

    domCard.addEventListener('click', () => {
        refreshEvents(card, eventsLoad);
    })

    const domCardTitle = document.createElement("div");

    domCard.appendChild(domCardTitle);
    cardsWrap.appendChild(domCard);

    domCardTitle.className = "card-title";
    domCardTitle.innerHTML = card.getCardTitle();

    //priority preview
    const priorityCardWrapper = document.createElement("div");
    priorityCardWrapper.className = "priority-card-wrap";
    domCard.appendChild(priorityCardWrapper);

    //circle for first 6 todo
    const todoList = card.getTodoList();
    const i = todoList.length;

    if(i >= 6) {
        //just create 6 circles
        for(let z = 0; z < 6; z++) {
            renderPriorityCircle(todoList[z], priorityCardWrapper);
        }
    } else {
        //create all todos
        for(let y = 0; y < i; y++) {
            renderPriorityCircle(todoList[y], priorityCardWrapper);
        }
    }
    
    
    
    //circle for each todo
    /*const priorityCircle2 = document.createElement("div");
    priorityCircle2.className = "priority-circle";
    priorityCardWrapper.appendChild(priorityCircle2);
    //circle for each todo
    const priorityCircle3 = document.createElement("div");
    priorityCircle3.className = "priority-circle";
    priorityCardWrapper.appendChild(priorityCircle3);
    const priorityCircle4 = document.createElement("div");
    priorityCircle4.className = "priority-circle";
    priorityCardWrapper.appendChild(priorityCircle4);
    const priorityCircle5 = document.createElement("div");
    priorityCircle5.className = "priority-circle";
    priorityCardWrapper.appendChild(priorityCircle5);
    const priorityCircle6 = document.createElement("div");
    priorityCircle6.className = "priority-circle";
    priorityCardWrapper.appendChild(priorityCircle6);*/


    //render delete button
    const delCard = document.createElement("div");
    delCard.className = "card-delete";
    domCard.appendChild(delCard);
    delCard.innerHTML = "X";

    //add event to delete button
    delCard.addEventListener("click", (e) => {

        let result = confirm("Deleting this will delete all the todos within. Are you sure you want to delete?");

        if(result) {
            //delete card remove prev render, then rerender cards
            Board.removeCard(card);
            const firstCard = Board.getCardList()[0];
            
            //if deck is empty render empty otherwise render first card
            if(Board.getCardList().length == 0) {
                //rerender
                removeDeckRender();
                renderCard("empty");
                renderList("empty");
                //remove and reload events
                removeEventsForLoad(eventsLoad);
                
                //reload new card events
                eventsLoad = [];
                eventsLoad = reloadEvents(firstCard);
                renderDeck(Board, domCardList, eventsLoad);
            } else {
                //rerender
                removeDeckRender();
                refreshEvents(firstCard, eventsLoad);
                renderDeck(Board, domCardList, eventsLoad);
            }
        }
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

function renderNotes(domTodo, todo) {
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

    return titleNotes;
}

function renderStartDate(domTodo, todo) {
    const startDateWrapper = document.createElement("div");
    startDateWrapper.className = "start-date-wrapper";
    startDateWrapper.textContent = "Started On";
    const startDate = document.createElement("div");
    startDate.className = "start-date";    
    startDate.textContent = todo.getStartDate();

    startDateWrapper.appendChild(startDate);
    domTodo.appendChild(startDateWrapper);

    return startDateWrapper;
}

function rotateArrow(domTodo) {
    const arrowWrap = domTodo.children[0].children[0];
    arrowWrap.lastElementChild.style.transform = "rotate(90deg)";
    arrowWrap.lastElementChild.style.marginLeft = "16px";

    return arrowWrap;
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
        
            const titleNotes = renderNotes(domTodo, todo);
    
            const startDateWrapper = renderStartDate(domTodo, todo);
    
            const priority = domTodo.children[0].children[2];

            const arrowWrap = rotateArrow(domTodo);
    
            const transitionEnd = transEvent();
            renderPriorityColorOpen(priority, arrowWrap, titleNotes, startDateWrapper, todo);
            //remove event straight away to prevent it firing multiple times
            domTodo.removeEventListener(transitionEnd, afterTrans);
        }
    }
}

