import React from 'react';
import {Box, Button, styled, TextField} from "@mui/material";

const CreateToDo = () => {

    const StyledBox = styled(Box)({
        display: 'flex',
        justifyContent: 'center',
        margin: "10px 0",
        width: "100%"
    })

    const formSubmitHandler = e => {
        e.preventDefault()
    }

    return (
        <StyledBox>
            <form onSubmit={formSubmitHandler}>
                <TextField sx={{width: "50%"}} id="standard-basic" placeholder="Enter Todo" variant="standard" />
                <Button type="submit" variant="contained">Add Todo</Button>
            </form>
        </StyledBox>
    );
};

export default CreateToDo;