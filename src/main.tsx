import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import THEME from "./configMui.ts";
import { ThemeProvider } from '@mui/material/styles';
import { AuthProvider } from './context/authContext.tsx';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from './context/snackbarContext.tsx';
createRoot(document.getElementById('root')!).render(
 
  <StrictMode>
     <BrowserRouter>
     <AuthProvider>
      <ThemeProvider theme={THEME}>
    <SnackbarProvider>
     <App></App>
    </SnackbarProvider>
     </ThemeProvider>
      </AuthProvider>
      </BrowserRouter>
  </StrictMode>

)
