import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import "./ProductDetail.scss"

export default function ProductDetail(props) {
    let prdDetail
  if(Object.keys(props).length > 0){
    prdDetail=props.prdDetail
    // console.log(prdDetail);
  }
  return (
<Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      
    >
      {/* <Modal.Header closeButton >
        <Modal.Title id="contained-modal-title-vcenter">
        Chi Tiết Sản Phẩm
        </Modal.Title> 
      </Modal.Header>  */}
      <Modal.Body  style={{width:"100%"}} >
        <div className='containerDetail'>
        <div className='containerDetail__l'>
        <img width={400} src={prdDetail?.img} alt="" />
        </div>
        <div className='containerDetail__r'>
        <p style={{fontSize:30, fontWeight:600}}>  {prdDetail?.name}</p>
        <p style={{marginLeft:20,fontSize:20,color:"brown"}} >{prdDetail?.price}</p>
        <p>-Thông Tin Sản Phẩm</p>
        <p>{prdDetail?.describe}</p>
        <div className='quantity'>
        <Button className="btnDetail" size="lg">
        -
        </Button>{' '}
        <p style={{fontSize:25, marginTop:15}}>0</p>
        <Button className="btnDetail" size="lg">
        +
        </Button>{' '}
        </div>
        <Button  style={{marginLeft:190}}
        variant="primary" size="lg">
Mua Ngay
        </Button>{' '}
        </div>
        </div>
       
        
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  )
}
