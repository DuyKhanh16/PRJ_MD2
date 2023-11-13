import React from 'react'
import logo from '../../../assets/phela.png'
import "./Header.scss"


export default function Header() {
    return (
        <div className='header'>
            <img className='header__logo' width={100} height={50} src={logo}  />
            {/* <h1>LION TEA</h1> */}
            <div className="header__nav">
            <p><a href="">TRANG CHỦ</a></p>
            <p><a href="">SẢN PHẨM</a></p>
            <p><a href="">GIỚI THIỆU</a></p>
            <p><a href="">LIÊN HỆ</a></p>
            </div>
            <div className="header__user">
         <a className='header--icon' href=""><img width={50} height={50} src="https://cdn.icon-icons.com/icons2/1182/PNG/96/1490129329-rounded38_82203.png" alt="" /></a>
         <a className='header--icon' href=""><img width={70} height={50} src="https://cdn.icon-icons.com/icons2/1182/PNG/96/1490129392-rounded28_82189.png" alt="" /></a>
         <p className='header--count'>0</p>
            </div>
         </div>
    )
}
