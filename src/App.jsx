import TodoLists from "./components/Todo/TodoLists"
import {Box} from "@mui/material";

function App() {

    const styles = {
        backgroundColor: 'yellow',
        width: '800px',
        margin: '0 auto',
    }

  return (
    <Box sx={styles}>
      <TodoLists/>
    </Box>
  )
}

export default App
