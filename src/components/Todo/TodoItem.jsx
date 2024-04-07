import React from 'react'
import {AppBar, IconButton, Stack, Toolbar, Typography} from "@mui/material";
import {Delete} from "@mui/icons-material";

function TodoItem() {


  return (
    <Stack>
        <AppBar position="static">
            <Toolbar variant="dense">
                <Typography variant="h6" color="inherit" component="div">
                    Photos
                </Typography>
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ ml: 2 }}>
                    <Delete />
                </IconButton>
            </Toolbar>
        </AppBar>
    </Stack>
  )
}

export default TodoItem
