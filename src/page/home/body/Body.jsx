import React from 'react'
import Intro from '../intro/Intro'
import Address from '../Address/Address'
import { useSelector, useDispatch } from "react-redux";

export default function Body() {
  return (
    <div>
      <Intro></Intro>
      <div className="bestseller" style={{textAlign:"center"}}>
        <h2>Sản Phẩm Nổi Bật</h2>
        
      </div>
      <Address></Address>
 </div>
  )
}
