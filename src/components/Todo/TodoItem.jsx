import React from 'react'
import {AppBar, Box, IconButton, Stack, styled, Toolbar, Typography} from "@mui/material";
import {Check, Delete} from "@mui/icons-material";

function TodoItem() {

    const StyledToolbar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between",
    })

  return (
    <Stack>
        <AppBar position="static">
            <StyledToolbar variant="dense">
                <Typography variant="h6" color="inherit" component="div">
                    Photos
                </Typography>
                <Box>
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ ml: 2 }}>
                        <Delete />
                    </IconButton>
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ ml: 2 }}>
                        <Check />
                    </IconButton>
                </Box>
            </StyledToolbar>
        </AppBar>
    </Stack>
  )
}

export default TodoItem
