import React from 'react'
import { Routes,Route } from 'react-router'
import routesList from '../store/utils/routesList'
import Golds from '../golds/components/Golds';
import Error404 from './../error/pages/Error404.jsx';
import Manufacturers from '../manufacturers/pages/Manufacturers.jsx';
function AppRoutes() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Golds/>} />
    <Route path='*' element={<Error404></Error404>} />
    <Route path='/golds' element={<Golds/>} />
    <Route path='/golds' element={<Golds/>} />
    <Route path='/manufacturers' element={<Manufacturers/>} />
    </Routes>
    </>
  )
}

export default AppRoutes