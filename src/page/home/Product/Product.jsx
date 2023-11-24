import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProduct } from "../../../store";
import "./Product.scss";
import Fotter from "../fotter/Fotter";
import Header from "../header/Header";
import Banner from "../Banner/Banner";
import ProductDetail from "../../productDetail/ProductDetail";
import axios from "axios";

export default function Product() {
  const [modalShow, setModalShow] = React.useState(false);
 const [prdDetail,setPrdDetail]=useState();
 const dispatch = useDispatch();
 const [data, setData] = useState([]);
 
//  useEffect(() => {
//    dispatch(getAllProduct());
//    window.scrollTo({top:850})
//  }, []);

//   const data = useSelector((a) => {
//     return a.stateReducer.product[0];
//   });

const handleGetData = async () => {
  const res = await axios.get("http://localhost:3000/products");
  setData(res.data);
};
useEffect(() => {
  handleGetData();
  window.scrollTo({top:850})
}, []);

  let cafe = data?.filter((e)=>{
    return e.class=="cafe"
  });
  let olong = data?.filter((e)=>{
    return e.class=="olong"
  });
  let syphon = data?.filter((e)=>{
    return e.class=="syphon"
  });
  let french =data?.filter((e)=>{
    return e.class=="french"
  });
  let moka = data?.filter((e)=>{
    return e.class=="moka"
  });
  let nitro = data?.filter((e)=>{
    return e.class=="nitro"
  });
  let v60 = data?.filter((e)=>{
    return e.class=="v60"
  });
 
 
const viewProduct=(id)=>{
  setModalShow(true)
  let obj=data?.find(e=>e.id==id)
  setPrdDetail({...obj})
}
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
    <div className="product">
      <div className="product__Nav">
        <p>
          <a href="#cafe">CÀ PHÊ</a>
        </p>
        <p>
          <a href="#olong">Ô LONG MATCHA</a>
        </p>
        <p>
          <a href="#syphon">SYPHON</a>
        </p>
        <p>
          <a href="#french">FRENCH PRESS</a>
        </p>
        <p>
          <a href="#moka">MOKA POT</a>
        </p>
        <p>
          <a href="#nitro">NITRO COLD BREW</a>
        </p>
        <p>
          <a href="#v60">V60</a>
        </p>
      </div>
      <div className="product__item">
      <p id="cafe">CÀ PHÊ</p>
        <div className="cafe with" >
       
        {
          cafe?.map((e,i)=>{
            return (
            <div className="item"  key={i} >
            <img onClick={() => viewProduct(e.id)} width={300} height={300} src={e.img} alt="" />
            <p style={{fontSize:20, marginLeft:10, marginTop:20}}>{e.name}</p>
            <p style={{fontSize:20 ,marginLeft:10,fontWeight:600, color:"brown"}}>{e.price}</p>
            <button className="button">Mua Ngay</button>
            </div>
            )
          })
        }
          
         
        </div>
        <p id="olong">Ô LONG MATCHA</p>
        <div className="olong with" >
       
          {
          olong?.map((e,i)=>{
            return (
              <div  className="item"  key={i} >
              <img onClick={() => viewProduct(e.id)} width={300} height={300} src={e.img} alt="" />
              <p style={{fontSize:20, marginLeft:10, marginTop:20}}>{e.name}</p>
              <p style={{fontSize:20 ,marginLeft:10,fontWeight:600, color:"brown"}}>{e.price}</p>
              <button className="button">Mua Ngay</button>
              </div>
              )
            })
        }
        </div>
        <p id="syphon">SYPHON</p>
        <div className="syphon with" >
       
          {
          syphon?.map((e,i)=>{
            return (
              <div  className="item"  key={i} >
              <img onClick={() => viewProduct(e.id)} width={300} height={300} src={e.img} alt="" />
              <p style={{fontSize:20, marginLeft:10, marginTop:20}}>{e.name}</p>
              <p style={{fontSize:20 ,marginLeft:10,fontWeight:600, color:"brown"}}>{e.price}</p>
              
              <button className="button">Mua Ngay</button>
              </div>
              )
            })
        }
        </div>
        <p id="french">FRENCH PRESS</p>
        <div className="french with" >
       
          {
          french?.map((e,i)=>{
            return (
              <div  className="item"  key={i} >
              <img onClick={() => viewProduct(e.id)} width={300} height={300} src={e.img} alt="" />
              <p style={{fontSize:20, marginLeft:10, marginTop:20}}>{e.name}</p>
              <p style={{fontSize:20 ,marginLeft:10,fontWeight:600, color:"brown"}}>{e.price}</p>
              <button className="button">Mua Ngay</button>
              </div>
              )
            })
        }
        </div>
        <p id="moka">MOKA POT</p>
        <div className="moka with" >
       
          {
          moka?.map((e,i)=>{
            return (
              <div  className="item"  key={i} >
              <img onClick={() => viewProduct(e.id)} width={300} height={300} src={e.img} alt="" />
              <p style={{fontSize:20, marginLeft:10, marginTop:20}}>{e.name}</p>
              <p style={{fontSize:20 ,marginLeft:10,fontWeight:600, color:"brown"}}>{e.price}</p>
              <button className="button">Mua Ngay</button>
              </div>
              )
            })
        }
        </div>
        <p id="nitro">NITRO COLD BREW</p>
        <div className="nitro with" >
        
          {
          nitro?.map((e,i)=>{
            return (
              <div  className="item"  key={i} >
              <img onClick={() => viewProduct(e.id)} width={300} height={300} src={e.img} alt="" />
              <p style={{fontSize:20, marginLeft:10, marginTop:20}}>{e.name}</p>
              <p style={{fontSize:20 ,marginLeft:10,fontWeight:600, color:"brown"}}>{e.price}</p>
              <button className="button">Mua Ngay</button>
              </div>
              )
            })
        }
        </div>
        <p id="v60">V60</p>
        <div className="v60 with" >
       
          {
          v60?.map((e,i)=>{
            return (
              <div  className="item"  key={i} >
              <img onClick={() => viewProduct(e.id)} width={300} height={300} src={e.img} alt="" />
              <p style={{fontSize:20, marginLeft:10, marginTop:20}}>{e.name}</p>
              <p style={{fontSize:20 ,marginLeft:10,fontWeight:600, color:"brown"}}>{e.price}</p>
              <button className="button">Mua Ngay</button>
              </div>
              )
            })
        }
        </div>
      </div>
    </div>
    <ProductDetail
        show={modalShow}
        onHide={() => setModalShow(false)}
        prdDetail={prdDetail}
      />
    <Fotter></Fotter>
    </div>
  );
}
