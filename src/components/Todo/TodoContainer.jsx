import React, {useState} from 'react';
import CreateToDo from "./CreateToDo.jsx";
import TodoLists from "./TodoLists.jsx";

const TODO_LISTS = [
    {
        id: 1,
        todo: 'Clean Room',
        isDone: false,
    },
    {
        id: 2,
        todo: 'Go to Church',
        isDone: false,
    },
    {
        id: 3,
        todo: 'Cook',
        isDone: false,
    }
]

const TodoContainer = () => {
    const [todo, setTodo] = useState(TODO_LISTS)

    console.log(todo)

    const addTodoHandler = newTodo => {
        setTodo([...todo, {id: Date.now, todo: newTodo.todo, isDone: newTodo.isDone}])
    }

    return (
        <div>
            <CreateToDo addTodoHandler={addTodoHandler} />
            <TodoLists todo={todo} />
        </div>
    );
};

export default TodoContainer;