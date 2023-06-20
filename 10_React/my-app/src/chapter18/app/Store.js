import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import productReducer from "../features/product/productSlice";

// 1. Redux Store 만들기
// createStore()
export const store = configureStore({
  reducer: {
    // 4. Redux Store에 slice Reducers를 추가하기
    counter: counterReducer,
    product: productReducer
  }
});