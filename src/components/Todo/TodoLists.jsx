import React from 'react';
import TodoItem from './TodoItem.jsx';
import { Stack } from '@mui/material';

const TodoLists = ({todos, setTodos, filterCompleted}) => {

    const completedTodos = filterCompleted ? todos.filter(todo => todo.isDone === filterCompleted) : todos;

    return (
        <Stack>
            {
                completedTodos.map(todoItem => <TodoItem key={todoItem.id} todo={todoItem} todos={todos} setTodos={setTodos}/>)
            }
        </Stack>
    );
};

export default TodoLists;
