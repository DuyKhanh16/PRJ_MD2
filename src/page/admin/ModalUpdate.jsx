import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import "./ProductDetail.scss"

export default function ModalUpdate(props) {
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
      
      <Modal.Body  style={{width:"100%"}} >
     
        <p>hdjsbfjkhdsb</p>
      </Modal.Body>
     
    </Modal>
  )
}
