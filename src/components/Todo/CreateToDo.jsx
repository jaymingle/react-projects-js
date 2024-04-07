import React, {useState} from 'react';
import {Box, Button, styled, TextField} from "@mui/material";

const CreateToDo = ({addTodoHandler, setTodo, todo}) => {

    const [myTodo, setMyTodo] = useState('')

    const StyledBox = styled(Box)({
        display: 'flex',
        justifyContent: 'center',
        margin: "30px 0",
        width: "100%"
    })

    const inputChangeHandler = e => {
        setTodo(e.target.value)
        console.log(myTodo)
    }

    const formSubmitHandler = e => {
        e.preventDefault()
        if(todo){
            addTodoHandler({
                id: Date.now(),
                todo: myTodo,
                isDone: false
            })
        }

        setTodo('')
    }

    return (
        <StyledBox>
            <form onSubmit={formSubmitHandler} style={{ width: "100%", marginTop: "10px", display: "flex", justifyContent: "space-around" }}>
                <TextField sx={{width: "60%"}}  id="standard-basic" placeholder="Enter Todo" variant="standard" value={myTodo} onChange={inputChangeHandler} />
                <Button type="submit" variant="contained">Add Todo</Button>
            </form>
        </StyledBox>
    );
};

export default CreateToDo;