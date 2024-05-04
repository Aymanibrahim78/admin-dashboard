// import { Outlet } from "react-router-dom"
import MiniDrawer from "./assets/Components/Drawer"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { getDesignTokens } from "./assets/theme/Theme";
import { useMemo, useState } from "react";
import Footer from "./assets/Components/Footer";

function App() {
  const [mode, setMode] = useState(localStorage.getItem("currentMOde")?localStorage.getItem("currentMOde"):"dark");
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>

 <MiniDrawer setMode={setMode} />

 <Footer/>

    </ThemeProvider>




  
 
  )
}

export default App
