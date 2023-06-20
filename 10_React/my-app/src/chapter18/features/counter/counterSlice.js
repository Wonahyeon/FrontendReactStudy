
// 3. Redux State Slice 만들기
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  value: 0
};

// 전역 state 만드는 방법
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => { // 첫번째 파라미터: 현재 state 받아옴
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => { // 두번째 파라미터
      console.log(action);
      state.value += action.payload;
    }
  },
});

// console.log(counterSlice);

// 각 리듀서에 대한 액션 생성 함수들이 객체 형태로 들어있음
// 액션 생성 함수를 사용하면 해당 액션 객체가 만들어짐
export const {increment, decrement, incrementByAmount} = counterSlice.actions;

// 위에서 정의한 리듀서 함수들
export default counterSlice.reducer;