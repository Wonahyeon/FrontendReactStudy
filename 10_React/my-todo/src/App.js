import { createGlobalStyle } from "styled-components";
import { Reset } from "styled-reset";
import reset from "styled-reset";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import { useState } from "react";

// 글로벌(공통) 스타일 적용과 reset css 적용
const GlobalStyle = createGlobalStyle`
  /* reset css 적용 */
  ${reset}

  /* 글로벌(공통) 스타일 */
  body {
    background: #e9ecef;
  }
`;


function App() {
  // todos 배열 안에 객체 형태로 데이터가 존재
  // id, 내용, 완료 여부
  // TodoList에 props로 전달
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '수업 교안 작성하기',
      checked: true
    },
    {
      id: 2,
      text: '시험 채점하기',
      checked: true
    },
    {
      id: 3,
      text: '단계별 실습 예제 만들기',
      checked: false
    },
  ]);
  return (
    <>
      {/* <Reset/> */}
      <GlobalStyle/>
      <TodoTemplate>
        <TodoInsert/>
        <TodoList todos={todos}/>
      </TodoTemplate>
    </>
  );
}

export default App;
