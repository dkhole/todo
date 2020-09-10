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
    const getIndexTodo = (todoTitle) => {
        let i = 0;

        for(i = 0; i < todoList.length; i++) {
            if(todoTitle === todoList[i].getTitle()) {
                return i;
            }
        }
        i = -1;
        return index;
    }

    return {getCardTitle, getTodoList, setTitle, addTodo, getIndexTodo}
};

export default Card;