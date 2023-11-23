import React from 'react'
import './Fotter.scss'

export default function Fotter() {
  return (
    <div className='fotter' id='fotter'>
      <div className="fotter__logo">
        <img src="https://phela.vn/wp-content/uploads/2021/07/group-20210119101820.png" alt="" />
      </div>
      <div className="fotter__address">
        <a href="">Giới thiệu về chúng tôi</a>
        <br />
        <a href="">Hệ thống cửa hàng</a>
      </div>
      <div className="fotter__info">
        <p>Địa chỉ công ty</p>
        <p>Trụ sở chính: 96-98-100 Trần Nguyên Đán, phường 3, quận Bình Thạnh, TP HCM</p>
        <p>Chi nhánh Đà Lạt: 7 Nguyễn Chí Thanh, phường 1, thành phố Đà Lạt, tỉnh Lâm Đồng

        </p>
        <p>Chi nhánh Hà Nội: Lô 04-9A Khu công nghiệp Vĩnh Hoàng, <br />
         phường Hoàng Văn Thụ, quận Hoàng Mai, Hà Nội</p>
         <br />
         @Project.DuyKhanh16...
      </div>
      <div className="fotter__support">
        <p>EMAIL HỖ TRỢ KHÁCH HÀNG:</p>
        <p>cskh@phela.vn</p>
        <p>HOTLINE HỖ TRỢ KHÁCH HÀNG:</p>
        
        <p>1900 3013 (8h30 – 22h)</p>
      </div>
  
    </div>
  )
}
