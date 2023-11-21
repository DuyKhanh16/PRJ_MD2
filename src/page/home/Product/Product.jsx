import React, { useEffect } from 'react'
import {useSelector,useDispatch} from "react-redux"
import { getAllProduct } from '../../../store'

export default function Product() {
    const data= useSelector(a=>{
        return a.stateReducer.product
    })
    console.log(data);

    const dispatch=useDispatch()
    useEffect(()=>{
dispatch(getAllProduct())
    },[])
  return (
    <div>
      
    </div>
  )
}
