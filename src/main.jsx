import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '@mantine/core/styles.css';
import { MantineProvider, createTheme } from '@mantine/core';
import './global.css'
import { ToastContainer } from 'react-toastify';

const goldPalette = [
  '#FFFAE5',
  '#FFF6CC',
  '#FFF2B2',
  '#FFEE99',
  '#FFE97F',
  '#FFE566',
  '#ffe14c',
  '#ffdd32',
  '#ffd819',
  '#ffd400'
];

const greenTheme = createTheme({
  colors: {
    gold: goldPalette
  },
  primaryColor: 'gold',
  
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MantineProvider theme={greenTheme} defaultColorScheme="light">
    <App />
    <ToastContainer 
      theme='light'
      position='bottom-right'
      autoClose={3000}
      />
      </MantineProvider>
  </StrictMode>,
)
