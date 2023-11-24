import axios from "axios";
export default{
    getProduct:`${import.meta.env.VITE_HOST_NAME}products`,
    addProduct:async(data)=>{
        return await axios.post(`${import.meta.env.VITE_HOST_NAME}products`,data)
    },
    delProduct:async(data)=>{
        return await axios.delete(`${import.meta.env.VITE_HOST_NAME}products/${data}`)
    },
   
}