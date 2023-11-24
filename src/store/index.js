import {
  createSlice,
  configureStore,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";
import apiGetAllProduct from "../service/apis/api.product"


export const getAllProduct=createAsyncThunk(
  "product/getAllProduct",
   async()=>{
  const res= await axios.get(apiGetAllProduct.getProduct);
  return res.data;
})
const state = createSlice({
  name: "product",
  initialState: {
    product: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProduct.pending, (state, action) => {
        // trạng thái đưa vào xử lý
      })
      .addCase(getAllProduct.fulfilled, (state, action) => {
        // xử lý khi thành công
        state.product=action.payload;
      })
      .addCase(getAllProduct.rejected, (state, action) => {
        // Xử lý khi thất bại
        // state.error = action.error;
      });
  },
});
export const { chargerFlag, addLogin } = state.actions;
const stateReducer = state.reducer;

const store = configureStore({
  reducer: {
    stateReducer,
  },
});
export default store;
