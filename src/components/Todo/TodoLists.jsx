import React from 'react';
import TodoItem from './TodoItem.jsx';
import { Stack } from '@mui/material';

const TodoLists = ({todos, setTodos, setCompleted, filterCompleted}) => {

    return (
        <Stack>

            {
                todos.map(todoItem => <TodoItem key={todoItem.id} todo={todoItem} todos={todos} setTodos={setTodos}/>)
            }
        </Stack>
    );
};

export default TodoLists;
