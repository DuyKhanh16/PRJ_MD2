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
      <Modal.Header closeButton >
        <Modal.Title id="contained-modal-title-vcenter">
        Chi Tiết Sản Phẩm
        </Modal.Title>
      </Modal.Header>
      <Modal.Body  style={{width:"100%"}} >
        <div className='containerDetail'>
        <div>
        <img width={400} src={prdDetail?.img} alt="" />
        </div>
        <div>
        <p>  {prdDetail?.name}</p>
        <p>{prdDetail?.price}</p>
        <p>Thông Tin Sản Phẩm</p>
        <p>{prdDetail?.describe}</p>
        <div style={{display:'flex'}}>
        <Button variant="primary" size="lg">
        -
        </Button>{' '}
        <p>0</p>
        <Button variant="primary" size="lg">
        +
        </Button>{' '}
        </div>
        <Button variant="primary" size="lg">
Mua Ngay
        </Button>{' '}
        </div>
        </div>
       
        
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}
