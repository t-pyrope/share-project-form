import './App.css'
import { Card } from "./components/Card";
import { ThemeProvider } from '@mui/material/styles';
import {theme} from "./theme.tsx";
function App() {

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Card />
      </div>
    </ThemeProvider>
  )
}

export default App
