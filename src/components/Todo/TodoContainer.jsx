import React from 'react';
import CreateToDo from "./CreateToDo.jsx";
import TodoLists from "./TodoLists.jsx";

const TodoContainer = () => {
    return (
        <div>
            <CreateToDo/>
            <TodoLists/>
        </div>
    );
};

export default TodoContainer;