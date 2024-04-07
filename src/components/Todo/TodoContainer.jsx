import React, {useState} from 'react';
import CreateToDo from "./CreateToDo.jsx";
import TodoLists from "./TodoLists.jsx";

const TODO_LISTS = [
    {
        id: Date.now(),
        todo: 'Clean Room',
        isDone: false,
    },
    {
        id: Date.now(),
        todo: 'Go to Church',
        isDone: false,
    },
    {
        id: Date.now(),
        todo: 'Cook',
        isDone: false,
    }
]

const TodoContainer = () => {
    const [todo, setTodo] = useState(TODO_LISTS)

    console.log(todo)
    return (
        <div>
            <CreateToDo/>
            <TodoLists todo={todo} />
        </div>
    );
};

export default TodoContainer;