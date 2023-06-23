import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: []
};

// 장바구니 정보를 담을 slice 만들기
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // 상품의 id값을 받아와서 해당 상품의 장바구니 수량을 1씩 증가/감소
    increaseCount: (state, {payload: id}) => {
      const targetItem = state.cartList.find((cart) => cart.id === id);
      targetItem.count += 1;
    },
    decreaseCount: (state, {payload: id}) => {
      const targetItem = state.cartList.find((cart) => cart.id === id);
      targetItem.count -= 1;
    },
    // 장바구니 아이템 추가
    addItemToCart: (state, {payload: item}) => { // item = {id, title, price, count}; 를 받아옴
      // console.log(item);
      const targetItem = state.cartList.find((cart) => cart.id === item.id);
      if (targetItem) {
        targetItem.count += item.count;
      } else {
        state.cartList.push(item);
      }
    },
    // 장바구니 아이템 삭제
    removeItemFromCart: (state, {payload: id}) => {
      // filter() 사용 시
      // const newCartList = state.cartList.filter((cart) => cart.id !== id);
      // state.cartList = newCartList;
      
      const targetIndex = state.cartList.findIndex((cart) => cart.id === id);
      state.cartList.splice(targetIndex,1);
    },
  }
});

export const {increaseCount, decreaseCount, addItemToCart, removeItemFromCart} = cartSlice.actions;

export const selectCartList = (state) => state.cart.cartList;

export default cartSlice.reducer;