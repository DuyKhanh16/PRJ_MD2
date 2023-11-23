import React,{useState,useEffect} from 'react'
import logo from '../../../assets/phela.png'
import "./Header.scss"
import axios from "axios";
import { Link ,useNavigate, NavLink} from 'react-router-dom'

export default function Header() {
    const [users,setUsers]=useState([])
    let curentUser = localStorage.getItem("idUsers");


    const naviGate=useNavigate()
    const gologin=()=>{
        naviGate("/login")
    }
    const goHome=()=>{
      naviGate("/")
    }
    useEffect(()=>{
        window.scrollTo({top:0})
    },[])
    return (
        <div className='header'>
            <img onClick={goHome} className='header__logo' width={80} height={40} src={logo}  />
            <div className="header__nav">
            <p><NavLink to={"/"}>TRANG CHỦ</NavLink></p>
            <p><NavLink to={"/product"}>SẢN PHẨM</NavLink></p>
            <p><NavLink to={"/infor"}>GIỚI THIỆU</NavLink></p>
            <p><a href="#fotter">LIÊN HỆ</a></p>
            </div>
            <div className="header__user" >
         <a className='header--icon' ><img onClick={gologin} width={50} height={50} src="https://cdn.icon-icons.com/icons2/1182/PNG/96/1490129329-rounded38_82203.png" alt="" /></a>
         <a className='header--icon' ><img width={70} height={50} src="https://cdn.icon-icons.com/icons2/1182/PNG/96/1490129392-rounded28_82189.png" alt="" /></a>
         <p className='header--count'>0</p>
            </div>
            
         </div>
    )
}
