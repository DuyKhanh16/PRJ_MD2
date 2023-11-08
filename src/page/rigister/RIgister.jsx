import React,{useState} from 'react'
import uuid from 'react-uuid'
import Form from 'react-bootstrap/Form';
import { Button } from '@mui/material';
import { SiGnuprivacyguard } from 'react-icons/si';
import './Rigister.scss'
function InputSizesExample() {
    let listUser=JSON.parse(localStorage.getItem("listUser"))||[]

    const [users,setUsers]=useState([])
    const [user,setUser]=useState({
        name:"",
        id:uuid(),
        email:"",
        password:"",
        compelete:"active"
    })
    const chargerValue=(e)=>{
        setUser({...user,[e.target.name] : e.target.value})
    }
    const addUser=()=>{
       
        setUsers([...users,user])
        localStorage.setItem("listUser",JSON.stringify(users))
    }

  return (
    <>
    <div className='signup'>
   < SiGnuprivacyguard/>
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
      <p>Already have an account? Sign in</p>
      </div>
    </>
  );
}

export default InputSizesExample;
