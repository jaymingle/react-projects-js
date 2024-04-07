import React from 'react'
import {AppBar, Box, IconButton, Stack, styled, Toolbar, Typography} from "@mui/material";
import {Check, Delete} from "@mui/icons-material";

function TodoItem({todo, todos, setTodos}) {

    const StyledToolbar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between",
    })

    const handleDelete = id => {
        console.log(id)
        console.log(todo)

        setTodos(todos.filter((todo) => todo.id !== id))
        // todos.filter(todo => todo.id !== id)
    }

    const handleDone = id => {
        console.log(id)
    }

  return (
    <Stack sx={{margin: '5px 0'}}>
        <AppBar position="static">
            <StyledToolbar variant="dense">
                <Typography variant="h6" color="inherit" component="div">
                    {todo.todo}
                </Typography>
                <Box>
                    <IconButton onClick={e => handleDelete(todo.id)} color="inherit" aria-label="delete" sx={{ ml: 2 }}>
                        <Delete />
                    </IconButton>
                    <IconButton onClick={e => handleDone(todo.id)} color="inherit" aria-label="check" sx={{ ml: 2 }}>
                        <Check />
                    </IconButton>
                </Box>
            </StyledToolbar>
        </AppBar>
    </Stack>
  )
}

export default TodoItem
