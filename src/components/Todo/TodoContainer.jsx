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
    return (
        <div>
            <CreateToDo/>
            <TodoLists/>
        </div>
    );
};

export default TodoContainer;