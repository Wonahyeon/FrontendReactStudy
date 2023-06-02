import React from 'react';
import FancyBorder from './FancyBorder';

// 13.1.1.1 WelcomeDialog 리팩터링
function Dialog(props) {
  return (
    // 제목과 메시지, 컬러를 어떻게 사용하느냐에 따라
    // 인사말 다이얼로그가 될 수도 있고, 경고 다이얼로그가 될 수도 있음
    // WelcomeDialog처럼 쓰지말고 범용적인 Dialog를 만들고 이를 구체화하여 사용
    <FancyBorder color={props.color}>
      {/* FancyBorder 컴포넌트 안에 있는 모든 자식 요소들은 children 이라는 이름의 props로 전달됨 */}
      {/* 자식 엘리먼트로 무엇이 올지 모를 때 동적으로 전달 가능 */}
      <h1 className='Dialog-title'>
        {props.title}
      </h1>
      <p className='Dialog-message'>
        {props.message}
      </p>
    </FancyBorder>
  );
}

export default Dialog;