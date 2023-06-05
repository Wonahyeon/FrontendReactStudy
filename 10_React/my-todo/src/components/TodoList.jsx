import React from 'react';
import styled from 'styled-components';
import TodoListItem from './TodoListItem';

const TodoListWrapper = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto; // 스크롤
`;

function TodoList(props) {
  // const todos = props.todos;
  const {todos} = props;
  return (
    <TodoListWrapper>
      {/* <TodoListItem/>
      <TodoListItem/>
      <TodoListItem/> */}
      {/* Quiz: TodoListItem으로 이루어진 배열로 변환하여 반복 렌더링 */}
      {todos.map(todo => (
      <TodoListItem key={todo.id} todo={todo} />
      ))}
    </TodoListWrapper>
  );
}

export default TodoList;