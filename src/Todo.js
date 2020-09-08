import startOfToday from 'date-fns/startOfToday';
import format from 'date-fns/format';


//function factory for todos
const Todo = (title, priority, dueDate) => {
    //construct
    let _title = title;
    let _priority = priority;
    const startDate = format(startOfToday(), 'MM/dd/yyyy');
    let _dueDate = dueDate;
    let notes = "";
    let complete = false;
    let open = false;

    //getters and setters
    const getTitle = () => _title;
    const getPriority = () => _priority;
    const getStartDate = () => startDate;
    const getDueDate = () => _dueDate;
    const getNotes = () => notes;
    const getComplete = () => complete;
    
    const isOpen = () => open;

    const setTitle = (newTitle) => _title = newTitle;
    const setPriority = (newPriority) => _priority = newPriority;
    const setDueDate = (newDueDate) => _dueDate = newDueDate;
    const setNotes = (newNotes) => notes = newNotes;
    const toggleComplete = (toggle) => complete = toggle;
    
    const setOpen = (toggle) => open = toggle;

    return {isOpen, setOpen, getTitle, getPriority, getStartDate, getDueDate, getNotes, getComplete, setTitle, setPriority, setDueDate, setNotes, toggleComplete}
};

export default Todo;