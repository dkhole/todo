import { renderCard, renderList, renderOpen, renderClosed, renderForm, renderCloseForm, renderCloseEditForm, renderListDelete, deleteDomList, renderDeck, removeDeckRender} from './render.js';
import Todo from './Todo.js';
import format from 'date-fns/format';

function addTodoFromDom(card) {
    //if buttons been clicked or input text has been 'entered'
    const inputTodo = document.getElementById("quick-add");
    if(inputTodo.value) {
        const newTodo = Todo(inputTodo.value, "low", "---");
        card.addTodo(newTodo);
    }
    renderList(card);
}

export function addEventCheckbox(titleWrap, checkbox, todo) {
    checkbox.addEventListener("change", (e) => {
        if(e.target.checked) {
            todo.toggleComplete(true);
            titleWrap.style.textDecoration = "line-through"; 
            titleWrap.parentElement.style.backgroundColor = "rgb(19, 19, 19)";           
        } else {
            todo.toggleComplete(false); 
            //revert style
            titleWrap.style.textDecoration = "none";
            titleWrap.parentElement.style.backgroundColor = "rgb(49, 49, 49)";
        }
    });
}

const callOpen = function(card, todo, domTodo, lastButton) {

    return function openTodo(e) {

        if(e.target == lastButton) {return;}

        lastButton.parentElement.remove();

        renderOpen(card, domTodo, todo);

        todo.setOpen(true);

        domTodo.removeEventListener('click', openTodo);
        domTodo.addEventListener('click', callClosed(card, todo, domTodo, domTodo.children[0].lastElementChild));
    }
}

const callClosed = function(card, todo, domTodo, lastButton) {

    return function closeTodo(e) {
        if(e.target.parentElement == lastButton) {return;}

        //remove both open render divs - note and start date

        domTodo.children[1].remove();
        domTodo.children[1].remove();

        lastButton.remove();
        renderClosed(domTodo, todo);

        const inpCheckbox = domTodo.children[0].lastElementChild.lastElementChild;
        const titleWrap = domTodo.children[0].children[1];

        if(todo.getComplete()) {
            inpCheckbox.checked = true;
        }

        addEventCheckbox(titleWrap, inpCheckbox, todo);

        domTodo.removeEventListener('click', closeTodo);
        domTodo.addEventListener('click', callOpen(card, todo, domTodo, inpCheckbox));

        todo.setOpen(false);
    }
}

export function addEventTodo(card, todo, domTodo, lastButton) {

    if(todo.isOpen()) {
        domTodo.addEventListener('click', callClosed(card, todo, domTodo, lastButton));
    } else {
        domTodo.addEventListener('click', callOpen(card, todo, domTodo, lastButton));
    }
}

//simulate click to rerender card
export function clickCard(card) {
    const cardsWrap = document.getElementById("cards-wrap");

    if(cardsWrap) {
        const cardTitle = card.getCardTitle();
        const cardList = cardsWrap.children;
        for(let i = 0; i < cardList.length; i++) {
            if(cardList[i].children[0].textContent == cardTitle) {
                cardList[i].click();
            }
        }
    }
}

export function quickAddEvent(card) {
    const quickEvent = function(e) {
        const quickAdd = document.getElementById("quick-add");
        if(e.key == 'Enter') {
            addTodoFromDom(card);
            quickAdd.value = "";
            //rerender card
            //get index of card then if dom element of card exists
            
            clickCard(card);
        }
    }
    return quickEvent;
}

export function addButtonEvent() {
    return renderForm;
}

export function deleteEvent(card, del, delFlag) {
    const deleteEventRemove = function() {
        if(delFlag) { 
            del.id = "delete";
            del.textContent = "Delete Todo";

            deleteDomList();
            renderList(card);
            clickCard(card);
            delFlag = false;
        } else {
            del.id = "delete-clicked";
            del.textContent = "Stop Delete";

            //remove event listener for everything but bin
            //remove quickAdd, newForm, card arrow -> new card
            deleteDomList();
            renderListDelete(card);
            delFlag = true;
        }
    }
    return deleteEventRemove;
}

function openCardsEvent (Board, cardOpen, eventsLoad) {
    const openEvent = function() {
        const domCardList = document.getElementById("card-list");
        const openCards = document.getElementById("open-cards");
        const mainCard = document.getElementById("main-card");
        const cardWrapper = document.getElementById("card-wrapper");

        if(cardOpen) {
            //close card list
            domCardList.style.height = "2.5%";
            openCards.style.height = "100%";
            mainCard.style.height = "90%";
            cardWrapper.style.height = "83%";

            const domTodoList = document.getElementById("todo-list").children;

     
            for(let i = 0; i < domTodoList.length; i++) {
                domTodoList[i].className = domTodoList[i].className.substring(0, 9);
            }

            cardOpen = false;

            //delete button, cards wrap and all its children
            removeDeckRender();

        } else {
            //open card list
            domCardList.style.height = "32.5%";
            openCards.style.height = "10%";
            mainCard.style.height = "67.5%";
            cardWrapper.style.height = "90%";
            //toggle smaller todolist height
            const domTodoList1 = document.getElementById("todo-list").children;
            for(let y = 0; y < domTodoList1.length; y++) {
                domTodoList1[y].className += " card-list-todo";
            }
            
            cardOpen = true;

            //render card list
            renderDeck(Board, domCardList, eventsLoad);
        }
    }
    return openEvent;
}

export function refreshEvents(card, eventsLoad) {
    renderCard(card);
    renderList(card);
    //remove and reload events
    removeEventsForLoad(eventsLoad);
    
    //reload new card events
    eventsLoad = [];
    eventsLoad = reloadEvents(card);
    return eventsLoad;
}

export function addEventsOnLoad(Board, card) {

    let delFlag = false;
    let cardOpen = false;
    const eventsLoad = [];
    //submit form on button click and enter key
    //clear input text after each submit

    const quickEvent = quickAddEvent(card);
    const quickAdd = document.getElementById("quick-add");
    quickAdd.addEventListener('keypress', quickEvent, true);
    eventsLoad.push(quickEvent);

    const addEvent = addButtonEvent();
    const addButton = document.getElementById("add-button");
    addButton.addEventListener('click', addEvent, true);

    const del = document.getElementById("delete");
    const delEvent = deleteEvent(card, del, delFlag);
    del.addEventListener("click", delEvent, true);
    eventsLoad.push(delEvent);

    addEventsOnForm(card, eventsLoad);

    const openEvent = openCardsEvent(Board, cardOpen, eventsLoad);
    const openCards = document.getElementById("open-cards");
    openCards.addEventListener("click", openEvent);
    eventsLoad.push(openEvent);

    return eventsLoad;
}

export function removeEventsForLoad(eventsLoad) {
    
    const quickAdd = document.getElementById("quick-add");
    const del = document.getElementById("delete");
    //const openCards = document.getElementById("open-cards");
    const editForm = document.getElementById("edit-todo");
    const newForm = document.getElementById("new-todo");

    quickAdd.removeEventListener('keypress', eventsLoad[0], true);
    del.removeEventListener('click', eventsLoad[1], true);
    editForm.removeEventListener('submit', eventsLoad[2], true);
    newForm.removeEventListener('submit', eventsLoad[3], true);
}

export function reloadEvents(newCard) {
    const newLoad = [];

    let delFlag = false;

    const quickEvent = quickAddEvent(newCard);
    const quickAdd = document.getElementById("quick-add");
    quickAdd.addEventListener('keypress', quickEvent, true);
    newLoad.push(quickEvent);
    
    const del = document.getElementById("delete");
    const delEvent = deleteEvent(newCard, del, delFlag);
    del.addEventListener("click", delEvent, true);
    newLoad.push(delEvent);

    addEventsOnForm(newCard, newLoad);
    return newLoad;
}

export function editFormEvent(card) {
    const editEvent = function(e) {
        e.preventDefault();
        //get todo
        const index = document.getElementById("hidden").textContent;
        const todo = card.getTodoList()[index];
        
        const title = document.getElementById("title-input-edit").value;
        todo.setTitle(title);

        const priority = document.getElementById("dropdown-edit").value;

        if(priority) {
            todo.setPriority(priority);
        } else {
            todo.setPriority(low);
        }

        const inputDate = document.getElementById("date-input-edit").value;
        if(inputDate) {
            const year = parseInt(inputDate.slice(0, 4));
            const month = parseInt(inputDate.slice(5, 7)) - 1;
            const day = parseInt(inputDate.slice(8, 10));
            
            todo.setDueDate(format(new Date(year, month, day), 'dd MMM'));
        } else {
            todo.setDueDate("---");
        }
        
        const inputNotes = document.getElementById("notes-input-edit").value;
        todo.setNotes(inputNotes);
        renderCloseEditForm();
        renderList(card);
        clickCard(card);
    }
    return editEvent;
}

export function newFormEvent(card) {
    const newEvent = function(e) {
        e.preventDefault();

        const form = document.getElementById("new-todo");
        const title = document.getElementById("title-input-new").value;
        const priority = document.getElementById("dropdown-new").value;
        const inputDate = document.getElementById("date-input-new").value;
        const inputNotes = document.getElementById("notes-input-new").value;

        const newTodo = Todo(title, "low", "---");

        if(inputDate) {
            const year = parseInt(inputDate.slice(0, 4));
            const month = parseInt(inputDate.slice(5, 7)) - 1;
            const day = parseInt(inputDate.slice(8, 10));
            
            newTodo.setDueDate(format(new Date(year, month, day), 'dd MMM'));
        }

        if(priority) {
            newTodo.setPriority(priority);
        }

        newTodo.setNotes(inputNotes);

        card.addTodo(newTodo);
        form.reset();
        renderCloseForm();
        renderList(card);
        clickCard(card);
    }

    return newEvent;
}

export function addEventsOnForm(card, eventsLoad) {

    //edit todo
    const editEvent = editFormEvent(card);
    const editForm = document.getElementById("edit-todo");
    editForm.addEventListener('submit', editEvent, true);
    
    //submit new todo
    const newEvent = newFormEvent(card);
    const form = document.getElementById("new-todo");
    form.addEventListener('submit', newEvent, true);

    //close button
    const closeButtonNew = document.getElementById("close-new");
    const closeButtonEdit = document.getElementById("close-edit");

    closeButtonNew.addEventListener('click', () => { renderCloseForm() });
    closeButtonEdit.addEventListener('click', () => { renderCloseEditForm() });

    //title input transition
    const titleInputs = document.querySelectorAll('.title-input');
    titleInputs.forEach(input => {
        const titleLabel = input.parentElement.children[0];
        input.addEventListener('focusin', () => {
            titleLabel.style.fontSize = "1rem";
            titleLabel.style.top = "-15px";
            titleLabel.style.color = "green";
        });
        input.addEventListener('focusout', () => {
            if(input.value == "") {
                titleLabel.style.fontSize = "1.25rem";
                titleLabel.style.top = "5px";
                titleLabel.style.color = "white";
            } else {
                titleLabel.style.fontSize = "1rem";
                titleLabel.style.top = "-15px";
                titleLabel.style.color = "green";
            }
        });
    });

    eventsLoad.push(editEvent);
    eventsLoad.push(newEvent);
}