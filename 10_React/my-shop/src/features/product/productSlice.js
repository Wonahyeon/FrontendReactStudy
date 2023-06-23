import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../../api/productAPI";

const initialState = {
  productList: [],
  selectedProduct: null,
  status: 'idle', // API 요청 상태
};

// thunk를 이용한 비동기 작업 처리하기
// 비동기 작업 처리하는 액션 생성 함수 만듦
export const getMoreProductsAsync = createAsyncThunk(
  'product/getMoreProductsAsync',
  async () => {
    const result =  await getProducts(); // 비동기 함수 실행 시 `pending` 상태
    return result; // 꼭 해줘야 함 => `fulfiled` 상태로 바뀌고 action.payload에 담겨 리듀서 함수로 전달됨
  }
);

// 상품 정보를 담을 slice 만듦
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getAllProducts: (state, action) => {
      state.productList = action.payload;
    },
    getSelectedProducts: (state, action) => {
      state.selectedProduct = action.payload;
    },
    getMoreProducts: (state, action) => {
      // console.log(action.payload);
      state.productList.push(...action.payload);
    },
    clearSelectedProduct: (state) => {
      state.selectedProduct = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMoreProductsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getMoreProductsAsync.fulfilled, (state, action) => {
        state.status = 'idle'; // complete, success 등
      state.productList.push(...action.payload);
      })
      .addCase(getMoreProductsAsync.rejected, (state) => {
        state.status = 'fail';
      });
  }
});

export const {getAllProducts, getSelectedProducts, getMoreProducts, clearSelectedProduct} = productSlice.actions;

export const selectProductList = (state) => state.product.productList;
export const selectSelectedProduct = (state) => state.product.selectedProduct;
export const selectStatus = (state) => state.product.status;


export default productSlice.reducer;