import React, {useState} from 'react';
import CreateToDo from "./CreateToDo.jsx";
import TodoLists from "./TodoLists.jsx";
import {Box} from "@mui/material";

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
    const [todos, setTodos] = useState(TODO_LISTS)
    const [todo, setTodo] = useState('')

    const addTodoHandler = newTodo => {
        setTodos([...todos, newTodo])
    }

    return (
        <Box>
            <CreateToDo addTodoHandler={addTodoHandler} todo={todo} setTodo={setTodo} />
            <TodoLists todos={todos} setTodos={setTodos} />
        </Box>
    );
};

export default TodoContainer;