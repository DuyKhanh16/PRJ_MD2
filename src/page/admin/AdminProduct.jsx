import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProduct } from "../../store";
import { storage } from "../../config/firebase";

import { Button } from "@mui/material";
import Form from "react-bootstrap/Form";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from "axios";

export default function AdminProduct() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProduct());
  }, []);

  const data = useSelector((a) => {
    return a.stateReducer.product;
  });

  const [urlImg, setUrlImg] = useState(null);
  const [text,setText]=useState()
  
  const chengeImage = (e) => {
    let file = e.target.files[0];
    const imageRef = ref(storage, `images/${file.name}`);
    uploadBytes(imageRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setUrlImg(url);

      });
    });
  };
  const [product,setProduct]= useState(
    {
      name:"",
      img:"",
      price:0,
      quantity:0,
      class:"",
      describe:""
    }
  )
    const changeValue=(e)=>{
      setText(e.target.valua)
      setProduct({...product,[e.target.name]:e.target.value,img:urlImg})

    }
  const addProduct = () => {
  

  };
  console.log(product);
 console.log(urlImg);

  return (
    <div>
      <div
        style={{
          width: 700,
          height: 600,
          padding: 20,
          border: "1px solid gray",
          marginTop: 50,
        }}
      >
        <h4>Thêm sản Phẩm</h4>
        <label htmlFor="">Tên Sản Phẩm:</label>
        <Form.Control onChange={changeValue} name="name" type="text" placeholder="Tên Sản Phẩm" value={text} />
        <label htmlFor="">Ảnh Sản Phẩm:</label>
        <Form.Control type="file"  onChange={chengeImage} />
        <div style={{height:100,width:100,backgroundColor:"#ccc", marginLeft:0}} ><img width={100} src={urlImg} alt="Upload" /></div>
        <label  htmlFor="">Giá Sản Phẩm:</label>
        <Form.Control onChange={changeValue} type="number" name="price" value={text}  placeholder="Giá Sản Phẩm" />
        <label htmlFor="">Số Lượng:</label>
        <Form.Control onChange={changeValue} type="number" name="quantity" value={text} placeholder="Số Lượng Sản Phẩm" />
        <p>Phân Loại Sản Phẩm:</p>
        <select name="class"  onChange={changeValue}>
          <option value="cafe">Cà Phê</option>
           <option value="olong">Ô long Matcha</option>
          <option value="syphon">Syphon</option>
          <option value="french">French Press</option>
          <option value="moka">Moka Pot</option>
          <option value="nitro">Nitro Cold Brew</option>
          <option value="v60">V60</option>
        </select> <br />
        <label htmlFor="">Thêm Mô Tả:</label>
        <Form.Control onChange={changeValue} type="text" name="describe" value={text} placeholder="Mô Tả" />
        <Button
          variant="contained"
          style={{ marginLeft:260,marginTop:20}}
          onClick={addProduct}
        >
          Thêm Sản Phẩm
        </Button>
      </div>
        <div style={{display:"flex" ,width:300,marginTop:50,marginLeft:20}}>
      <Form.Control type="text" placeholder="Search....." /> 
      <Button
          variant="contained"
        style={{width:50}}
        >
        <img width={20}  src="https://cdn.icon-icons.com/icons2/1659/PNG/512/3844432-magnifier-search-zoom_110300.png" alt="" />
        </Button>
        </div>

      <div style={{ marginTop: 50 }}>
        <table
          style={{
            width: "100vw",
            border: "1px solid black",
            textAlign: "center",
          }}
        >
          <thead>
            <th style={{ width: 50, border: "1px solid black" }}>STT</th>
            <th style={{ width: 200, border: "1px solid black" }}>
              Tên Sản Phẩm
            </th>
            <th style={{ width: 120, border: "1px solid black" }}>
              Ảnh Sản Phẩm
            </th>
            <th style={{ width: 100, border: "1px solid black" }}>Giá Tiền</th>
            <th style={{ width: 100, border: "1px solid black" }}>Số Lượng</th>
            <th style={{ width: 100, border: "1px solid black" }}>Phân Loại</th>
            <th style={{ width: 700, border: "1px solid black" }}>Mô Tả</th>
            <th style={{ width: 200, border: "1px solid black" }}>Thao Tác</th>
          </thead>
          {data[0]?.map((e, i) => {
            return (
              <tr key={i} style={{ border: "1px solid black" }}>
                <td style={{ border: "1px solid black", height: 150 }}>
                  {e.id}
                </td>
                <td style={{ border: "1px solid black" }}>{e.name}</td>
                <td style={{ border: "1px solid black" }}>
                  <img width={130} src={e.img} alt="" />
                </td>
                <td style={{ border: "1px solid black" }}>{e.price}</td>
                <td style={{ border: "1px solid black" }}>{e.quantity}</td>
                <td style={{ border: "1px solid black" }}>{e.class}</td>
                <td style={{ border: "1px solid black" }}>{e.describe}</td>
                <td style={{ border: "1px solid black" }}>
                  <Button variant="contained" style={{ margin: 10 }}>
                    EDIT
                  </Button>
                  <Button variant="contained" style={{ margin: 10 }}>
                    DELETE
                  </Button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}
