import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProduct } from "../../store";
import { storage } from "../../config/firebase";

import { Button } from "@mui/material";
import Form from "react-bootstrap/Form";
import Modal from 'react-bootstrap/Modal';


import { Pagination } from "antd";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import axios from "axios";
import api from "../../service/apis/api.product";
import { yellow } from "@mui/material/colors";

export default function AdminProduct() {
  const [flag,setFlag]=useState()
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState("all");
  const dispatch = useDispatch();

  // ********************************

  const handleGetData = async () => {
    const res = await axios.get("http://localhost:3000/products");
    setData(res.data);
  };
  useEffect(() => {
    handleGetData();
  }, [flag]);

  // *****************************
  const [urlImg, setUrlImg] = useState(null);
  const [text, setText] = useState();

  const chengeImage = (e) => {
    let file = e.target.files[0];
    const imageRef = ref(storage, `images/${file.name}`);
    uploadBytes(imageRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setUrlImg(url);
      });
    });
  };
  // ********************************

  const [product, setProduct] = useState({
    name: "",
    img: "",
    price: 0,
    quantity: 0,
    class: "",
    describe: "",
  });
  const changeValue = (e) => {
    setText(e.target.valua);
    setProduct({ ...product, [e.target.name]: e.target.value, img: urlImg });
  };
  const addProduct = () => {
    api.addProduct(product);
    setText("");
    setProduct({
      name: "",
      img: "",
      price: 0,
      quantity: 0,
      class: "",
      describe: "",
    });
    setUrlImg(null);
    setFlag(flag+1)
  };
  //  ************************************

  const deletProduct = (id) => {
    let check = confirm("Bạn Muốn Xóa Sản Phẩm Này?");
    if (check) {
      api.delProduct(id);
      setFlag(flag+1)
    }
  };

  // *********************
  const changeClass = async (e) => {
    setSelected(e.target.value);
  };

  const filterProducts = () => {
    return data.filter((item) => selected == "all" || item.class == selected);
  };
  useEffect(() => {
    setCurrentPage(1);
  }, [selected]);
  const [currentPage, setCurrentPage] = useState(1);
  const filterProduct = filterProducts();
  const itemsPerPage = 6;
  const endIndex = currentPage * itemsPerPage;
  const startIndex = endIndex - itemsPerPage;
  const displayedProducts = filterProduct?.slice(startIndex, endIndex);
  const onPageChange = (page) => {
    setCurrentPage(page);
  };
  
  const [show, setShow] = useState(false);
  const [productUpdate,setProductUpdate]=useState()
  const [edit,setEdit]=useState()

  const handleClose = () => setShow(false);
  const editProduct = (e) => {
    setShow(true);
    setProductUpdate({...data[e-1]})
    setText
    setEdit(productUpdate?.name)
  }
  console.log(productUpdate);
  const changeEdit=(e)=>{
    setEdit(e.target.value)
  }
  return (
    <div>
      <div
        style={{
          width: 700,
          height: 600,
          padding: 20,
          marginTop: 50,
          marginLeft: 30,
        }}
      >
        <h4>Thêm sản Phẩm</h4>
        <label htmlFor="">Tên Sản Phẩm:</label>
        <Form.Control
          onChange={changeValue}
          name="name"
          type="text"
          placeholder="Tên Sản Phẩm"
          value={text}
        />
        <label htmlFor="">Ảnh Sản Phẩm:</label>
        <Form.Control type="file" value={text} onChange={chengeImage} />
        <div
          style={{
            height: 100,
            width: 100,
            backgroundColor: "#ccc",
            marginLeft: 0,
          }}
        >
          <img width={100} src={urlImg} alt="Upload" />
        </div>
        <label htmlFor="">Giá Sản Phẩm:</label>
        <Form.Control
          onChange={changeValue}
          type="number"
          name="price"
          value={text}
          placeholder="Giá Sản Phẩm"
        />
        <label htmlFor="">Số Lượng:</label>
        <Form.Control
          onChange={changeValue}
          type="number"
          name="quantity"
          value={text}
          placeholder="Số Lượng Sản Phẩm"
        />
        <p>Phân Loại Sản Phẩm:</p>
        <select value={product.class} name="class" onChange={changeValue}>
          <option value="">Chọn phân loại</option>
          <option value="cafe">Cà Phê</option>
          <option value="olong">Ô long Matcha</option>
          <option value="syphon">Syphon</option>
          <option value="french">French Press</option>
          <option value="moka">Moka Pot</option>
          <option value="nitro">Nitro Cold Brew</option>
          <option value="v60">V60</option>
        </select>{" "}
        <br />
        <label htmlFor="">Thêm Mô Tả:</label>
        <Form.Control
          onChange={changeValue}
          type="text"
          name="describe"
          value={text}
          placeholder="Mô Tả"
        />
        <Button
          variant="contained"
          style={{ marginLeft: 260, marginTop: 20 }}
          onClick={addProduct}
        >
          Thêm Sản Phẩm
        </Button>
      </div>
      {/* ********************************************************* */}
      <div
        style={{ display: "flex", width: 300, marginTop: 50, marginLeft: 20 }}
      >
        <select name="class" onChange={changeClass} style={{ width: 300 }}>
          <option value="all">Tất Cả SẢn Phẩm</option>
          <option value="cafe">Cà Phê</option>
          <option value="olong">Ô long Matcha</option>
          <option value="syphon">Syphon</option>
          <option value="french">French Press</option>
          <option value="moka">Moka Pot</option>
          <option value="nitro">Nitro Cold Brew</option>
          <option value="v60">V60</option>
        </select>
      </div>
      {/* **************************************************** */}
      <div style={{ marginTop: 50 }}>
        <table
          style={{
            width: "100vw",
            border: "1px solid black",
            textAlign: "center",
            marginBottom: 50,
          }}
        >
          <tr>
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
          </tr>
          {displayedProducts
            ?.filter((item) => selected == "all" || item.class == selected)
            .map((e, i) => {
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
                    <Button
                    onClick={()=>editProduct(e.id)}
                      variant="contained"
                      style={{
                        margin: 10,
                        backgroundColor: "rgb(255,215,0)",
                        color: "black",
                      }}
                    >
                      EDIT
                    </Button>
                    <Button
                      onClick={() => deletProduct(e.id)}
                      variant="contained"
                      style={{ margin: 10, backgroundColor: "black" }}
                    >
                      DELETE
                    </Button>
                  </td>
                </tr>
              );
            })}
        </table>

        <Pagination
          style={{ marginLeft: 750, marginBottom: 50 }}
          current={currentPage}
          onChange={onPageChange}
          pageSize={itemsPerPage}
          total={filterProduct?.length}
        />

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Chỉnh Sửa Sản Phẩm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <label htmlFor="">Tên Sản Phẩm:</label>
        <Form.Control
          onChange={changeEdit}
          name="name"
          type="text"
          placeholder="Tên Sản Phẩm"
          value={edit}
        />
        <label htmlFor="">Ảnh Sản Phẩm:</label>
        <Form.Control type="file"  onChange={chengeImage} />
        <div
          style={{
            height: 100,
            width: 100,
            backgroundColor: "#ccc",
            marginLeft: 0,
          }}
        >
          <img width={100} src={productUpdate?.img} alt="Upload" />
        </div>
        <label htmlFor="">Giá Sản Phẩm:</label>
        <Form.Control
          onChange={changeEdit}
          type="number"
          name="price"
          value={text}
          placeholder="Giá Sản Phẩm"
        />
        <label htmlFor="">Số Lượng:</label>
        <Form.Control
          onChange={changeEdit}
          type="number"
          name="quantity"
          value={text}
          placeholder="Số Lượng Sản Phẩm"
        />
        <p>Phân Loại Sản Phẩm:</p>
        <select value={text} name="class" onChange={changeEdit}>
          <option value="">Chọn phân loại</option>
          <option value="cafe">Cà Phê</option>
          <option value="olong">Ô long Matcha</option>
          <option value="syphon">Syphon</option>
          <option value="french">French Press</option>
          <option value="moka">Moka Pot</option>
          <option value="nitro">Nitro Cold Brew</option>
          <option value="v60">V60</option>
        </select>{" "}
        <br />
        <label htmlFor="">Thêm Mô Tả:</label>
        <Form.Control
          onChange={changeEdit}
          type="text"
          name="describe"
          value={text}
          placeholder="Mô Tả"
        />
          </Form>
        </Modal.Body>
        <Modal.Footer>
       
          <Button variant="primary" onClick={handleClose}>
           Lưu Chỉnh Sửa
          </Button>
        </Modal.Footer>
      </Modal>
        
      </div>
    </div>
  );
}
