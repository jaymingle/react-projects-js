import React from 'react';
import {Box, Button, styled, TextField} from "@mui/material";

const CreateToDo = ({addTodoHandler}) => {

    const StyledBox = styled(Box)({
        display: 'flex',
        justifyContent: 'center',
        margin: "30px 0",
        width: "100%"
    })

    const formSubmitHandler = e => {
        e.preventDefault()
        console.log('Clicked')
    }

    return (
        <StyledBox>
            <form onSubmit={formSubmitHandler} style={{ width: "100%", marginTop: "10px", display: "flex", justifyContent: "space-around" }}>
                <TextField sx={{width: "60%"}} id="standard-basic" placeholder="Enter Todo" variant="standard" onChange={e => e} />
                <Button type="submit" variant="contained">Add Todo</Button>
            </form>
        </StyledBox>
    );
};

export default CreateToDo;