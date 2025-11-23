import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '@mantine/core/styles.css';
import { MantineProvider, createTheme } from '@mantine/core';
import './global.css'
import { ToastContainer } from 'react-toastify';

const greenTheme = createTheme({
  primaryColor: 'teal'
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MantineProvider theme={greenTheme} defaultColorScheme="dark">
    <App />
    <ToastContainer 
      theme='dark'
      position='bottom-right'
      autoClose={3000}
      />
      </MantineProvider>
  </StrictMode>,
)
