import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: []
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.productList.push({name: action.payload, id: String(new Date())});
    },
    deleteProduct: (state, action) => {
      
    }
  }
});

export const {addProduct, deleteProduct} = productSlice.actions;

export const selectProductList = (state) => state.product.productList;

export default productSlice.reducer;