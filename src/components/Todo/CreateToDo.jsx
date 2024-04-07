import React from 'react';
import {Box, styled, TextField} from "@mui/material";

const CreateToDo = () => {

    const StyledBox = styled(Box)({
        display: 'flex',
        justifyContent: 'center'
    })

    return (
        <StyledBox>
            <TextField sx={{width: "80%"}} id="standard-basic" placeholder="Enter Todo" variant="standard" />
        </StyledBox>
    );
};

export default CreateToDo;