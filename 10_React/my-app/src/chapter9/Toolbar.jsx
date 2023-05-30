import React from 'react';

const styles = {
  wrapper: {
    padding: 16,
    display: "flex",
    flexDirection: "row",
    borderBottom: "1px solid gray"
  },
  greeting: {
    marginRight: 8
  }
}

function Toolbar(props) {
  const {isLoggedIn, handleClickLogin, handleClickLogout} = props; 
  // props는 객체, 객체 구조 분해 할당하여 변수 한번에 선언
  // console.log(props); // {isLoggedIn: false, handleClickLogin: ƒ, handleClickLogout: ƒ}
  return (
    <div style={styles.wrapper}>
      {/* Quiz:
        로그인/로그아웃 버튼을 누를 때마다
        로그인 상태이면 인사말이 나오도록 &&로 조건부 렌더링
        버튼도 로그인/로그아웃 버튼이 바뀌도록 삼항 연산자로 조건부 렌더링
      */}
      {/* isLoggedIn 값에 따라 조건부 렌더링 처리 */}
      
      {isLoggedIn && <span style={styles.greeting}>환영합니다!</span>}
      {/* 로그인 상태 */}
      {/* true => span 렌더링 */}
      {/* false => 빈 화면 */}

      {isLoggedIn
        ?<button type='button' onClick={handleClickLogout}>로그아웃</button>
        :<button type='button' onClick={handleClickLogin}>로그인</button>
      }
      {/* 로그인 상태 */}
      {/* true => 클릭하면 로그아웃하는 로그아웃 버튼 */}
      {/* false => 클릭하면 로그인하는 로그인 버튼 */}
      {/* 변수 handleClickLogout은 부모(LandingPage 컴포넌트)로부터 props로 받아옴 -> LandingPage 컴포넌트 확인 */}
      {/* handleClickLogin은 로그인 상태를 true로 바꿔줌 = 로그인 */}
      {/* handleClickLogout은 로그인 상태를 false로 바꿔줌 = 로그아웃 */}
      
    </div>
  );
}

export default Toolbar;
