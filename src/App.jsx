import {Box, Typography} from "@mui/material";
import TodoContainer from "./components/Todo/TodoContainer.jsx";

function App() {

    const styles = {
        width: '800px',
        margin: '0 auto',
        marginTop: '80px',
    }

  return (
    <Box sx={styles}>
        <Typography variant="h4" mb={5} textAlign="center" component="h1">Simple Todo</Typography>
      <TodoContainer/>
    </Box>
  )
}

export default App
