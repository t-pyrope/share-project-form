import './App.css'
import {Card} from "./components/Card";
import {ThemeProvider} from '@mui/material/styles';
import {theme} from "./theme.tsx";

function App() {

    return (
        <ThemeProvider theme={theme}>
            <Card/>
        </ThemeProvider>
    )
}

export default App
