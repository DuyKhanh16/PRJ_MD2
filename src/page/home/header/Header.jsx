import React,{useState,useEffect} from 'react'
import logo from '../../../assets/phela.png'
import "./Header.scss"
import axios from "axios";
import { Link ,useNavigate} from 'react-router-dom'

export default function Header() {
    const [users,setUsers]=useState([])
    let curentUser = localStorage.getItem("idUsers");

    // useEffect(() => {

    //     axios.get(import.meta.env.VITE_HOST_NAME +"users")
    //    .then((data123) => {
    //     console.log("111111",data123);
    //       setUsers(data123.data);
    //     });
    //   }, [idUser]);
    //   console.log(users);
    // const currentUser=users.find(item=>item.id==idUser)
    const naviGate=useNavigate()
    const gologin=()=>{
        naviGate("/login")
    }
    const goHome=()=>{
      naviGate("/")
    }
    return (
        <div className='header'>
            <img onClick={goHome} className='header__logo' width={80} height={40} src={logo}  />
            <div className="header__nav">
            <p><a href="">TRANG CHỦ</a></p>
            <p><a href="">SẢN PHẨM</a></p>
            <p><a href="">GIỚI THIỆU</a></p>
            <p><a href="">LIÊN HỆ</a></p>
            </div>
            <div className="header__user" >
         <a className='header--icon' ><img onClick={gologin} width={50} height={50} src="https://cdn.icon-icons.com/icons2/1182/PNG/96/1490129329-rounded38_82203.png" alt="" /></a>
         <a className='header--icon' ><img width={70} height={50} src="https://cdn.icon-icons.com/icons2/1182/PNG/96/1490129392-rounded28_82189.png" alt="" /></a>
         <p className='header--count'>0</p>
            </div>
            
         </div>
    )
}
