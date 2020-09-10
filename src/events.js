import { renderList, renderOpen, renderClosed, renderForm, renderCloseForm } from './render.js';
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

const callOpen = function(todo, domTodo, lastButton) {

    return function openTodo(e) {

        if(e.target == lastButton) {return;}

        lastButton.parentElement.remove();

        renderOpen(domTodo, todo);

        todo.setOpen(true);

        domTodo.removeEventListener('click', openTodo);
        domTodo.addEventListener('click', callClosed(todo, domTodo, domTodo.children[0].lastElementChild));
    }
}

const callClosed = function(todo, domTodo, lastButton) {

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
        renderForm(card);
    });

    addEventsOnForm(card);
}

export function addEventsOnForm(card) {
    //close button
    const close = document.getElementById("close");
    close.addEventListener("click", () => {
        renderCloseForm();
    });

    //title input transition
    const todoTitle = document.getElementById('title-input');
    todoTitle.addEventListener('focusin', () => {
        const titleLabel = document.getElementById('title-label');
        titleLabel.style.fontSize = "1rem";
        titleLabel.style.top = "-15px";
        titleLabel.style.color = "green";
    });
    todoTitle.addEventListener('focusout', () => {
        const titleLabel = document.getElementById('title-label');
        if(todoTitle.value == "") {
            titleLabel.style.fontSize = "1.25rem";
            titleLabel.style.top = "-0";
            titleLabel.style.color = "white";
        } else {
            titleLabel.style.fontSize = "1rem";
            titleLabel.style.top = "-15px";
            titleLabel.style.color = "green";
        }
        
    });

    //submit new todo
    const form = document.getElementById("new-todo");
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const title = document.getElementById("title-input").value;
        const priority = document.getElementById("dropdown").value;
        const inputDate = document.getElementById("date-input").value;
        console.log(inputDate);
        const inputNotes = document.getElementById("notes-input").value;

        const newTodo = Todo(title, "low", "---");

        if(inputDate.value) {
            const year = parseInt(inputDate.slice(0, 4));
            const month = parseInt(inputDate.slice(5, 7)) - 1;
            const day = parseInt(inputDate.slice(8, 10));
            
            newTodo.setDueDate(format(new Date(year, month, day), 'dd MMM'));
        }

        if(priority.value) {
            newTodo.setPriority(priority.value);
        }

        newTodo.setNotes(inputNotes);

        card.addTodo(newTodo);
        form.reset();
        renderCloseForm();
        renderList(card);
    })
}