import React from 'react'
import Switcher from './features/switcher/Switcher'
import Golds from './features/golds/components/Golds'
import { BrowserRouter } from 'react-router'
import AppRoutes from './features/routes/AppRoutes'

function App() {
  return (
    <>
    <BrowserRouter>
    <AppRoutes />
    <Switcher ></Switcher>
</BrowserRouter>
  </>
  )
}

export default App