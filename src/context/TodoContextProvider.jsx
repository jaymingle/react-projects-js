import React, {useContext} from 'react';
import TodoContext from './TodoContext';

const TodoContextProvider = ({children}) => {
    return (
        <TodoContextProvider.TodoContext>
            {children}
        </TodoContextProvider.TodoContext>
    );
};

export default TodoContextProvider;