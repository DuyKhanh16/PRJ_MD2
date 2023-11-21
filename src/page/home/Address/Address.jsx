// import React from 'react'
import React, { Component } from "react";
import Slider from "react-slick";
import './Address.scss'

export default function Address()   {
  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000
  };
  return (
    <div className="addressContainer">
      <h2>HỆ THỐNG CỬA HÀNG</h2>
      <Slider {...settings}>
        <div className="address1">
          <h3>SỐ 7 NGUYỄN CHÍ THANH, THÀNH PHỐ ĐÀ LẠT, TỈNH LÂM ĐỒNG</h3>
          <p>Số điện thoại: 1900 3013</p>
        </div>
        <div className="address2">
          <h3>SỐ 35 – 41 NGUYỄN VĂN LINH, HẢI CHÂU, ĐÀ NẴNG</h3>
          <p>Số điện thoại: 1900 3013</p>
        </div>
        <div className="address3">
          <h3>SỐ 34 NGUYỄN VĂN LỘC, MỘ LAO, HÀ ĐÔNG, HÀ NỘI</h3>
          <p>Số điện thoại: 1900 3013</p>
        </div>
        <div className="address4">
          <h3>SỐ 453 NGUYỄN VĂN CỪ, QUẬN LONG BIÊN, HÀ NỘ</h3>
          <p>Số điện thoại: 1900 3013</p>
        </div>
        <div className="address5">
          <h3>
            SỐ 35 LÊ VĂN THIÊM (TÒA NHÀ STELLAR GARDEN), THANH XUÂN, HÀ NỘI
          </h3>
          <p>Số điện thoại: 1900 3013</p>
        </div>
        <div className="address6">
          <h3>SỐ 2 NÚI TRÚC, KIM MÃ, BA ĐÌNH, HÀ NỘI</h3>
          <p>Số điện thoại: 1900 3013</p>
        </div>
        <div className="address7">
          <h3>SỐ N04 – B1 THÀNH THÁI, DỊCH VỌNG, CẦU GIẤY, HÀ NỘI</h3>
          <p>Số điện thoại: 1900 3013</p>
        </div>
        <div className="address8">
          <h3>SỐ 24, NGÕ 128C ĐẠI LA, ĐỒNG TÂM, HAI BÀ TRƯNG, HÀ NỘI</h3>
          <p>Số điện thoại: 1900 3013</p>
        </div>
        <div className="address9">
          <h3>SỐ 14 ĐẶNG TIẾN ĐÔNG, TRUNG LIỆT, ĐỐNG ĐA, HÀ NỘI</h3>
          <p>Số điện thoại: 1900 3013</p>
        </div>
        <div className="address10">
          <h3>SỐ 24 HÀNG CÓT, HÀNG MÃ, HOÀN KIẾM, HÀ NỘI</h3>
          <p>Số điện thoại: 1900 3013</p>
        </div>
        <div className="address22">
          <h3>SỐ 45B LÝ THƯỜNG KIỆT, HOÀN KIẾM, HÀ NỘI</h3>
          <p>Số điện thoại: 1900 3013</p>
        </div>
        <div className="address11">
          <h3>SỐ 65 PHẠM NGỌC THẠCH, ĐỐNG ĐA, HÀ NỘI</h3>
          <p>Số điện thoại: 1900 3013</p>
        </div>
        <div className="address12">
          <h3>SỐ 289 ĐINH BỘ LĨNH, PHƯỜNG 26, QUẬN BÌNH THẠNH, TP HCM</h3>
          <p>Số điện thoại: 1900 3013</p>
        </div>
        <div className="address13">
          <h3>SỐ 493 HỒNG BÀNG, PHƯỜNG 14, QUẬN 5, TP HCM</h3>
          <p>Số điện thoại: 1900 3013</p>
        </div>
        <div className="address14">
          <h3>SỐ 446 NGUYỄN THỊ THẬP, PHƯỜNG TÂN QUY, QUẬN 7, TP HCM</h3>
          <p>Số điện thoại: 1900 3013</p>
        </div>
        <div className="address15">
          <h3>SỐ 212 PHAN XÍCH LONG, PHƯỜNG 2, QUẬN PHÚ NHUẬN, TP HCM</h3>
          <p>Số điện thoại: 1900 3013</p>
        </div>
        <div className="address16">
          <h3>SỐ 6 CÔNG TRƯỜNG QUỐC TẾ, PHƯỜNG 6, QUẬN 3, TP HCM</h3>
          <p>Số điện thoại: 1900 3013</p>
        </div>
        <div className="address17">
          <h3>SỐ 115 TRƯƠNG ĐỊNH, QUẬN 3, TP HCM</h3>
          <p>Số điện thoại: 1900 3013</p>
        </div>
        <div className="address18">
          <h3>SỐ 193/1 ĐIỆN BIÊN PHỦ, PHƯỜNG 15, QUẬN BÌNH THẠNH, TP HCM</h3>
          <p>Số điện thoại: 1900 3013</p>
        </div>
        <div className="address19">
          <h3>SỐ 6, TRƯƠNG ĐỊNH, PHƯỜNG BẾN THÀNH, QUẬN 1, TP HCM</h3>
          <p>Số điện thoại: 1900 3013</p>
        </div>
        <div className="address20">
          <h3>SỐ 125 HỒ TÙNG MẬU, BẾN NGHÉ, QUẬN 1, TP HCM</h3>
          <p>Số điện thoại: 1900 3013</p>
        </div>
        <div className="address21">
          <h3>
            SỐ 10 PHAN CHÂU TRINH, PHƯỜNG CẨM CHÂU, THÀNH PHỐ HỘI AN, QUẢNG NAM
          </h3>
          <p>Số điện thoại: 1900 3013</p>
        </div>
      </Slider>
    </div>
  );
}
