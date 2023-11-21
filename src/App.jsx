import React from 'react'
import Login from './page/login/Login'
import Rigister from './page/rigister/RIgister'
import Home from './page/home/Home'
import { Routes,Route } from 'react-router-dom'
export default function App() {
  return (
    <div>
      <Routes>
      <Route path='' element={<Home></Home>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='rigister' element={<Rigister></Rigister>}></Route>
      </Routes>
    </div>
  )
}
