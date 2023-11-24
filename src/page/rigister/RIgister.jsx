import React,{useState,useEffect} from 'react'
import uuid from 'react-uuid'
import Form from 'react-bootstrap/Form';
import { Button } from '@mui/material';
import { SiGnuprivacyguard } from 'react-icons/si';
import './Rigister.scss'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import api from '../../service/apis/api.user'

function InputSizesExample() {
    const navLink=useNavigate()
    const [users,setUsers]=useState([])
    const [user,setUser]=useState({
        name:"",
        id:uuid(),
        email:"",
        password:"",
        compelete:"active",
        address:[],
        cart:[],
        order:[],
        avata:""
    })
    const chargerValue=(e)=>{
        setUser({...user,[e.target.name] : e.target.value})
    }
    const addUser=()=>{
     
      api.checkRegister(user.email)
      .then((check)=>{
        if (check.data.length!=0) {
          alert("email đã tồn tại")
        }else{
          api.register(user)
          alert("ok")
          setTimeout(() => {
          navLink("/login")
          }, 3000);
        }
      })
    }
    const login=()=>{
      navLink("/login")
    }
  return (
    <div className='containerMain'>
    <div className='signup'>
   < SiGnuprivacyguard className='signup--icon'/>
    <h2 style={{color:"rgb(80, 120, 204)"}}>SIGN UP</h2>
    <label htmlFor="" className='signup--label'>Name</label> 
      <Form.Control  type="text" placeholder="Create Name" className='signup--input' onChange={chargerValue} name='name' />
      <br />
      <label htmlFor="" className='signup--label' >Email</label>
      <Form.Control type="text" placeholder="Create Email" className='signup--input'   onChange={chargerValue} name='email'/>
      <br />
      <label htmlFor="" className='signup--label'>Password</label>
      <Form.Control  type="text" placeholder="Create Password " className='signup--input'  onChange={chargerValue} name='password' />
      <Button variant='contained' className='signup--button' onClick={addUser}>SIGN UP</Button>
      <p>Already have an account? <span onClick={login} style={{color:"blue"}}>Sign in</span></p>
      
      </div>
    </div>
  );
}

export default InputSizesExample;
