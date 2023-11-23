import React,{useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getAllProduct } from '../../store';

import { Button } from '@mui/material';
import Form from 'react-bootstrap/Form';

export default function AdminOrder() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProduct());
  }, []);

  const data = useSelector((a) => {
    return a.stateReducer.product;
  });
  return (
    <div>
      order
    </div>
  )
}
