import React from 'react';
import TodoItem from './TodoItem.jsx';
import { Stack } from '@mui/material';

const TodoLists = ({todo}) => {

    console.log('TodoLists', todo)

    return (
        <Stack>

            {
                todo.map(todoItem => <TodoItem key={todoItem.id} todo={todoItem}/>)
            }
        </Stack>
    );
};

export default TodoLists;
