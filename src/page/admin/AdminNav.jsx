import React from 'react'
import { NavLink } from 'react-router-dom'
import "./AdminNav.scss"

export default function AdminNav() {
 
  return (
    <div>
      <div style={{width:"100%", height:500,backgroundImage:'URL("https://phela.vn/wp-content/uploads/2021/08/4.jpg")',
      backgroundRepeat:"no-repeat", backgroundSize:"cover",backgroundPosition:"center"
     }}>  
     <h1 style={{fontWeight:800, fontSize:80,color:"wheat",textAlign:"center", paddingTop:70}}>ADMIN</h1>
      </div>
    <div style={{display:'flex',fontSize:23,fontWeight:600,marginTop:20,color:"gray"}}
    className="admin_nav">
      <p><NavLink to={"/admin/product"} className="adminNav">Quản Lý Sản Phẩm</NavLink></p>
      <p><NavLink to={"/admin/user"} className="adminNav">Quản Lý Người Dùng</NavLink></p>
      <p><NavLink to={"/admin/order"} className="adminNav">Quản lý đơn hàng</NavLink></p>
    </div>
    </div>
  )
}
