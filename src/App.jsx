import {Box} from "@mui/material";
import TodoContainer from "./components/Todo/TodoContainer.jsx";

function App() {

    const styles = {
        backgroundColor: 'yellow',
        width: '800px',
        margin: '0 auto',
    }

  return (
    <Box sx={styles}>
      <TodoContainer/>
    </Box>
  )
}

export default App
