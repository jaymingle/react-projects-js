import React from 'react'
import {AppBar, Box, IconButton, Stack, styled, Toolbar, Typography} from "@mui/material";
import {Check, Clear, Delete} from "@mui/icons-material";

function TodoItem({todo, todos, setTodos}) {

    const StyledToolbar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: `${todo.isDone ? 'red' : 'inherit'}`

    })

    const handleDelete = id => {
        console.log(id)
        console.log(todo)

        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const handleDone = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isDone: !todo.isDone} : todo))
    }


    return (
    <Stack sx={{margin: '5px 0'}}>
        <AppBar position="static">
            <StyledToolbar variant="dense">
                <Typography sx={todo.isDone ? {textDecoration: 'line-through'} : {}} variant="h6" color="inherit" component="div">
                    {todo.todo}
                </Typography>
                <Box>
                    <IconButton onClick={e => handleDelete(todo.id)} color="inherit" aria-label="delete" sx={{ ml: 2 }}>
                        <Delete />
                    </IconButton>
                    <IconButton onClick={e => handleDone(todo.id)} color="inherit" aria-label="check" sx={{ ml: 2 }}>
                        {todo.isDone ? <Clear /> : <Check />}
                    </IconButton>
                </Box>
            </StyledToolbar>
        </AppBar>
    </Stack>
  )
}

export default TodoItem
