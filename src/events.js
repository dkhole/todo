import { renderList } from './render.js';
import Todo from './Todo.js';
import Edit from './edit-icon.png'

//get image
const editIcon = new Image();
editIcon.src = Edit;

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

export function addEventCheckbox(card, checkbox, todo) {
    checkbox.addEventListener("change", (e) => {
        if(e.target.checked) {
            todo.toggleComplete(true);
            const titleWrap = checkbox.parentElement.children[1];
            prompt("yoyoyoyoyyoo");
        } else {
            todo.toggleComplete(false); 
        }
        renderList(card);
        return false;
    });
}

export function addEventTodo(card, todo, domTodo, lastButton) {
    //on click enlarge
    domTodo.addEventListener('click', (e) => {
        //catch if event comes from checkbox and dont do anything
        prompt(lastButton);
        if(e.target == lastButton) {prompt("hello");return;}
        //if its open, set class  
        
        if(todo.isOpen()) {
            domTodo.className = "todo-item";
//maybe try resize and then render todolist to add transition
 //i want to render whole todo and add a >new event listener< on each change
            domTodo.lastChild.remove();

            const checkbox = document.createElement("div");
            checkbox.className = "checkbox-wrapper";
            const inpCheckbox = document.createElement("input");
            inpCheckbox.type = "checkbox";
            domTodo.appendChild(checkbox);
            checkbox.appendChild(inpCheckbox);
            
            addEventCheckbox(card, inpCheckbox, todo);
            todo.setOpen(false);
            domTodo.addEventTodo(card, todo, domTodo, inpCheckbox);

            
            //renderList(card);
        } else {
            //style enlarged todo
            domTodo.className = "todo-open";
            //remove checkbox
            //render image
            domTodo.lastChild.remove();
            //prompt(domTodo.lastChild.className);
            //lastButton.remove();
            //checkboxWrapper.remove();            

            const editWrapper = document.createElement("div");
            editWrapper.className = "edit-wrapper";
            domTodo.appendChild(editWrapper);
            editWrapper.appendChild(editIcon);

            //add click event for edit button
            todo.setOpen(true);
            domTodo.addEventTodo(card, todo, domTodo, editWrapper);
        }
    });
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