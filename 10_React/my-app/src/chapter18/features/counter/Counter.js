import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from './counterSlice';

// 5. 리액트 컴포넌트에서 Redux Store와 Actions 사용하기
function Counter(props) {
  const count = useSelector((state) => state.counter.value); // state만 리턴하면 전역 state 전부 가져옴

  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState('2');
  const incrementValue = Number(incrementAmount) || 0;

  return (
    <>
      <div>
        <button
          type='button'
          onClick={() => dispatch(decrement())}
          >
          감소
        </button>
        <span>{count}</span>
        <button
          type='button'
          onClick={() => dispatch(increment())}
        >
          증가
        </button>
      </div>
      <div>
        <input
        type='text'
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          type='button'
          onClick={() => dispatch(incrementByAmount(incrementValue))} // incrementValue -> action객체 payload에 들어감
        >
          Add Amount
        </button>
      </div>
    </>
  );
}

export default Counter;