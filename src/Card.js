//card holds todos
const Card = (title) => {
    //construct
    let _title = title;
    let todoList = [];

    const getCardTitle = () => _title;
    const getTodoList = () => todoList;
    const setTitle = (newTitle) => _title = newTitle;
    const addTodo = (newTodo) => {
        if(todoList.length == 0) {
            todoList[0] = newTodo;
        } else {
            todoList[todoList.length] = newTodo;
        }
    }
    const removeTodo = (todo) => {
        let index = todoList.indexOf(todo);
        if(index > -1) {
            todoList.splice(index, 1);
        }
    }

    return {getCardTitle, getTodoList, setTitle, addTodo, removeTodo}
};

export default Card;