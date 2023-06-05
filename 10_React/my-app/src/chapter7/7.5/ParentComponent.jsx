import React, { useState }from 'react';
import ChildComponent from './ChildComponent';
import { useEffect } from 'react';
import { useCallback } from 'react';

function ParentComponent(props) {
  const [count, setCount] = useState(0);
  
  // countState가 변경되서 재렌더링 될 때마다 매번 함수가 새로 정의 됨
  // 실행이 아니라 정의!! 즉, 메모리 상에 새로운 함수가 만들어짐
  const handleClick = () => {
    setCount(count => count + 1);
  };

  // useCallback() 안에 넣으면 컴포넌트가 마운트 될 때 한번만 함수가 정의됨
  // memoization : 자주 사용하는 것들을 메모리에 저장 후 필요할 때만 꺼내 사용
  // Props로 전달해야 할 함수를 만들 때는 useCallback()을 사용해본다! (무조건은 아님)
  const handleClickCallback = useCallback(() => {
    setCount(count => count + 1);
  }, []);
  
  useEffect(() => {
    console.log('handleClick을 새롭게 정의: ', handleClick);
  }, [handleClick]);

  useEffect(() => {
    console.log('handleClickCallback을 새롭게 정의: ', handleClickCallback);
  }, [handleClickCallback]);

  return (
    <>
      <p>총 {count}번 카운트</p>
      <button type='button' onClick={handleClick}>
        카운트 증가(재렌더링 발생)
      </button>

      {/* 자식 컴포넌트에 props로 함수를 전달 후 차이점 확인 */}
      {/* <ChildComponent handleClick={handleClick}/> */}
      <ChildComponent handleClick={handleClickCallback}/>
    </>
  );
}

export default ParentComponent;