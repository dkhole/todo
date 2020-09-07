import { renderList, renderOpen, renderClosed } from './render.js';
import Todo from './Todo.js';

function addTodoFromDom(card) {
    //if buttons been clicked or input text has been 'entered'
    const inputTodo = document.getElementById("quick-add");
    if(inputTodo.value) {
        const todoName = inputTodo.value;
        const newTodo = Todo(inputTodo.value, "low", "-");
        card.addTodo(newTodo);
    }
    renderList(card);
}

export function addEventCheckbox(titleWrap, checkbox, todo) {
    checkbox.addEventListener("change", (e) => {
        if(e.target.checked) {
            prompt("check mate");
            todo.toggleComplete(true);
            titleWrap.style.textDecoration = "line-through";            
        } else {
            todo.toggleComplete(false); 
            titleWrap.style.textDecoration = "none";
        }
    });
}

const callOpen = function(todo, domTodo, lastButton) {

    return function openTodo(e) {

        if(e.target == lastButton) {return;}

        lastButton.parentElement.remove();

        renderOpen(domTodo);
        todo.setOpen(true);

        domTodo.removeEventListener('click', openTodo);
        domTodo.addEventListener('click', callClosed(todo, domTodo, domTodo.lastElementChild));
    }
}

const callClosed = function(todo, domTodo, lastButton) {

    return function closeTodo(e) {
        if(e.target.parentElement == lastButton) {return;}
        
        lastButton.remove();
        renderClosed(domTodo);

        const inpCheckbox = domTodo.lastElementChild.lastElementChild;

        if(todo.getComplete()) {
            inpCheckbox.checked = true;
        }

        addEventCheckbox(domTodo.children[1], inpCheckbox, todo);

        domTodo.removeEventListener('click', closeTodo);
        domTodo.addEventListener('click', callOpen(todo, domTodo, inpCheckbox));

        todo.setOpen(false);
    }
}

export function addEventTodo(card, todo, domTodo, lastButton) {

    if(todo.isOpen()) {
        domTodo.addEventListener('click', callClosed(todo, domTodo, lastButton));
    } else {
        domTodo.addEventListener('click', callOpen(todo, domTodo, lastButton));
    }
}

export function addEventsOnLoad(card) {

    //submit form on button click and enter key
    //clear input text after each submit

    const quickAdd = document.getElementById("quick-add");
    quickAdd.addEventListener('keypress', (e) => {
        if(e.key == 'Enter') {
            addTodoFromDom(card);
            quickAdd.value = "";
        }
    });

    const addButton = document.getElementById("add-button");
    addButton.addEventListener('click', () => {
        addTodoFromDom(card);
        quickAdd.value = "";
    });
}