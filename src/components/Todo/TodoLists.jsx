import React from 'react';
import TodoItem from './TodoItem.jsx';
import { Stack } from '@mui/material';

const TodoLists = ({todos, setTodos, setCompleted, filterCompleted}) => {

    console.log('TodoLists Completed', filterCompleted);

    return (
        <Stack>
            {filterCompleted && <p>TodoLists: filter completed</p>}
            {
                todos.map(todoItem => <TodoItem key={todoItem.id} todo={todoItem} todos={todos} setTodos={setTodos}/>)
            }
        </Stack>
    );
};

export default TodoLists;
