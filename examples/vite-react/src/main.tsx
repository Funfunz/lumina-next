import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { ContextProvider } from './context/contextProvider.tsx'

const theme = createTheme({
  typography: {
    h1: {
      fontWeight: 700,
      fontSize: '2.75rem',
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ContextProvider>
  </React.StrictMode>
)
