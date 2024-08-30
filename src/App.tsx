

import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from './Components/Home'
import { Admin } from './Components/Admin'
import { NotFound } from './Components/NotFound'
import { Login } from './Components/Login'

function App() {



  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
