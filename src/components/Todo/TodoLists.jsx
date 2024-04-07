import React from 'react';
import TodoItem from './TodoItem.jsx';
import { Stack } from '@mui/material';

const TodoLists = ({todos}) => {

    console.log('TodoLists', todos)

    return (
        <Stack>

            {
                todos.map(todoItem => <TodoItem key={todoItem.id} todo={todoItem}/>)
            }
        </Stack>
    );
};

export default TodoLists;
