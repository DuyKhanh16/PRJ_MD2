import React from 'react'
import Login from './page/login/Login'
import Rigister from './page/rigister/RIgister'
import Home from './page/home/Home'
import { Routes,Route, Outlet } from 'react-router-dom'
import User from './page/user/User'
// import Admin from './page/admin/Admin'
import Product from './page/home/Product/Product'
import Infor from './page/infor/Infor'
import Header from './page/home/header/Header'
import AdminNav from './page/admin/AdminNav'
import AdminUser from './page/admin/AdminUser'
import Fotter from './page/home/fotter/Fotter'
import AdminOrder from './page/admin/AdminOrder'
import AdminProduct from './page/admin/AdminProduct'
export default function App() {
  return (
    <div>
      <Routes>
      <Route path='' element={<Home></Home>}></Route>
      <Route path='/product' element={<Product></Product>}></Route>
      <Route path='/infor'element={<Infor></Infor>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='rigister' element={<Rigister></Rigister>}></Route>
      <Route path='/user' element={<User></User>}></Route>
      <Route path='/admin' element={<> <AdminNav/> <Outlet/> <Fotter/></>}>
            <Route path='/admin/product' element={<AdminProduct/>}/>
            <Route path='/admin/user'element={<AdminUser/>}/>
            <Route path='/admin/order' element={<AdminOrder/>}/>
      </Route>
      </Routes>
    </div>
  )
}
