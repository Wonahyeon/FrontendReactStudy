import { useCallback, useEffect, useRef, useState } from "react";
import { createGlobalStyle } from "styled-components";
import { Reset } from "styled-reset";
import reset from "styled-reset";
import { v4 as uuidv4 } from "uuid";

import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

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
    // {
    //   id: 1,
    //   text: '수업 교안 작성하기',
    //   checked: true
    // },
    // {
    //   id: 2,
    //   text: '시험 채점하기',
    //   checked: true
    // },
    // {
    //   id: 3,
    //   text: '단계별 실습 예제 만들기',
    //   checked: false
    // },
  ]);

  // 로컬 스토리지에서 가져오기
  // 활용 예: 장바구니, 아이디 기억하기, 최근 본 상품 등
  useEffect(() => {
    const dbTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(dbTodos);
  }, []);

  // 로컬 스토리지에 저장(주의: DB가 아님, DB처럼 쓰면 안됨!!)
  // 추가, 수정, 삭제 각 함수에 넣어도 되지만, useEffect()를 활용하면 한번에 처리 가능
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);


  // 새 객체를 만들 때마다 id값에 1씩 더해주어야 하는데 useRef()를 사용하여 변수 생성
  const nextId = useRef(4);

  // props로 전달해야 할 함수를 만들 때는 useCallback()을 사용해본다!
  const handleInsert = useCallback((text) => {
    const todo = {
      // id: nextId.current,
      id: uuidv4(),
      text,
      checked : false
    };

    // 방법1 - 이전까지 쓰던 방법
    // const copyTodos = [...todos];
    // copyTodos.push(todo);
    // setTodos(copyTodos); // 새로운 배열을 만들어 넣어줌

    // 방법2★ - 배열의 내장 함수 이용
    // 함수형 업데이트를 쓸 경우 의존성을 제거해 줄 수 있다!
    setTodos(todos => todos.concat(todo)); // concat: 새로운 배열을 반환

    nextId.current += 1; // nextId에 1씩 더하기
  }, []); 

  const handleRemove = useCallback((id) => {
    // 방법1
    // const copyTodos = [...todos];
    // const targetIndex = todos.findIndex(todo => todo.id === id);
    // copyTodos.splice(targetIndex, 1);
    // setTodos(copyTodos);

    // 방법2★ - 배열의 내장 함수 이용
    // 불변성을 지키면서(원본 변경 X) 배열의 요소를 제거해야할 때 filter() 활용
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }, []);
  
  const handleToggle = useCallback((id) => {
    // 방법1
    // const copyTodos = [...todos];
    // const target = todos.find(todo => todo.id === id);
    // target.checked = !target.checked;
    // const targetIndex = todos.findIndex(todo => todo.id === id);
    // copyTodos[targetIndex] = target;
    // setTodos(copyTodos);
    
    // 방법2★ - 배열의 내장 함수 이용
    // 불변성을 유지하면서 배열의 특정 요소를 업데이트 해야할 때 map() 활용
    setTodos(todos => todos.map(todo => 
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
      ));
  }, []);

  return (
    <>
      {/* <Reset/> */}
      <GlobalStyle/>
      <TodoTemplate>
        <TodoInsert onInsert={handleInsert}/>
        <TodoList todos={todos} onRemove={handleRemove} onToggle={handleToggle}/>
      </TodoTemplate>
    </>
  );
}

export default App;

// HTML 웹 스토리지란?
// 브라우저에서 제공하는 데이터 저장소
// 사용자의 브라우저 내에 로컬로 데이터를 저장할 수 있음
// key-value 형태로 저장
// 최대 5MB까지 문자만 저장가능
// 콘솔 창에서 연습해보기

// 웹 스토리지는 origin(도메인 및 프로토콜)당입니다. 
// 같은 출처의 모든 페이지는 동일한 데이터를 저장하고 액세스할 수 있습니다.

// HTML 웹 스토리지 객체
// HTML 웹 스토리지는 클라이언트에 데이터를 저장하기 위한 두 가지 객체를 제공합니다.
// window.localStorage - 만료 날짜 없이 데이터를 저장
// window.sessionStorage - 한 세션에 대한 데이터 저장(브라우저 탭을 닫으면 데이터가 손실됨)