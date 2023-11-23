// import React,{useEffect} from 'react'
// import Header from '../home/header/Header'
// import Fotter from '../home/fotter/Fotter'
// import AdminNav from './AdminNav'
// import { useSelector, useDispatch } from "react-redux";
// import { getAllProduct } from '../../store';
// import { red } from '@mui/material/colors';

// import { Button } from '@mui/material';
// import Form from 'react-bootstrap/Form';

// export default function Admin() { 

//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getAllProduct());
//   }, []);

//   const data = useSelector((a) => {
//     return a.stateReducer.product;
//   });
//   // console.log(data);
//   return (
//     <div>


//     <div style={{width:700 ,height:450,padding:20, border:"1px solid gray", marginTop:50}}>
//       <h4>Thêm sản Phẩm</h4>
//       <label htmlFor="">Tên Sản Phẩm:</label>
//       <Form.Control  type="text" placeholder="Tên Sản Phẩm"    />
//       <label htmlFor="">Ảnh Sản Phẩm:</label>
//       <Form.Control  type="file"  name='name' />
//       <label htmlFor="">Giá Sản Phẩm:</label>
//       <Form.Control  type="text" placeholder="Giá Sản Phẩm"  />
//       <label htmlFor="">Số Lượng:</label>
//       <Form.Control  type="text" placeholder="Số Lượng Sản Phẩm"   />
//       <label htmlFor="">Thêm Mô Tả:</label>
//       <Form.Control  type="text" placeholder="Mô Tả"  />
//       <Button variant='contained' style={{marginTop:20}} >Thêm Sản Phẩm</Button>
//     </div>
//     <div style={{marginTop:50}}>
//       <table style={{width:"100vw",border:"1px solid black",textAlign:"center"}}>
//         <thead >
//           <th style={{width:50 ,border:"1px solid black"} }>STT</th>
//           <th style={{width:200 ,border:"1px solid black"}}>Tên Sản Phẩm</th>
//           <th style={{width:120 ,border:"1px solid black"}}>Ảnh Sản Phẩm</th>
//           <th style={{width:100,border:"1px solid black"}}>Giá Tiền</th>
//           <th style={{width:100,border:"1px solid black"}}>Số Lượng</th>
//           <th style={{width:100,border:"1px solid black"}}>Phân Loại</th>
//           <th style={{width:700,border:"1px solid black"}}>Mô Tả</th>
//           <th style={{width:200,border:"1px solid black"}}>Thao Tác</th>
//         </thead>
//        { data[0]?.map((e,i)=>{
//         return (
         
//            <tr key={i} style={{border:"1px solid black"}}>
//             <td style={{border:"1px solid black",height:150}}>{e.id}</td>
//             <td style={{border:"1px solid black"}}>{e.name}</td>
//             <td style={{border:"1px solid black"}}><img width={130} src={e.img} alt="" /></td>
//             <td style={{border:"1px solid black"}}>{e.price}</td>
//             <td style={{border:"1px solid black"}}>{e.quantity}</td>
//             <td style={{border:"1px solid black"}}>{e.class}</td>
//             <td style={{border:"1px solid black"}}>{e.describe}</td>
//             <td style={{border:"1px solid black"}}>
//             <Button variant='contained' style={{margin:10}} >EDIT</Button>
//             <Button variant='contained' style={{margin:10}} >DELETE</Button>
//             </td>
//             </tr>
          
//         )
//        })}
//       </table>
//     </div>
//     </div>
//   )
// }
