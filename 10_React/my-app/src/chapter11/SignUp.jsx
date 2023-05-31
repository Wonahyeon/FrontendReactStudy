import React, { useState } from 'react';

// Quiz
// 사용자의 정보를 입력받는 가입 양식 컴포넌트 만들기

// 1. 이름 입력받기
// 이름을 입력할 수 있는 input 태그와 입력된 값을 저장하기 위한 name이라는 state를 정의
// 값이 변경되면 이를 처리하기 위한 handleChangeName() 이라는 이벤트 핸들러 정의

// 2. 성별 입력받기
// gender라는 이름의 state 추가하고, 성별을 입력받기 위한 select 태그 추가
// select 태그에는 총 두가지 옵션이 들어감(남자, 여자)
// 값이 변경되면 이를 처리하기 위한 handleChangeGender() 라는 이벤트 핸들러 정의

// 3. 출력
// 이름과 성별을 입력하고 버튼을 누를시 alert 창으로 입력된 이름과 성별 출력하기

// (선택 사항)
// 1) form 태그를 사용해도 되고 아니면 button 태그의 click 이벤트에서 처리해도 됨
// 2) 어려우면 일단 각각의 state를 따로 선언해도 되고 객체 형태로 한번에 관리해도 됨

function SignUp(props) {
  // 방법1) state 따로 선언
  // const [name, setName] = useState('');
  // const [gender, setGender] = useState('male');

  
  // const handleChangeName = (e) => {
  //   setName(e.target.value);
  // };
  
  // const handleChangeGender = (e) => {
  //   setGender(e.target.value)
  // };
  
  // 방법2) state 객체 형태로 선언
  const [userInfo, setUserInfo] = useState({
    name: '',
    gender: 'male'
  });
  const {name, gender} = userInfo;

  const handleUserInfoChange = (e) => {
    const {name, value} = e.target;
    console.log(name, value); 
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    alert(`이름: ${name}, 성별: ${gender}`);
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        이름: 
        <input 
          type="text"
          name='name'
          value={name}
          onChange={handleUserInfoChange}
        />
      </label>
      <br />
      <label>
        성별: 
        <select
          name='gender'
          value={gender}
          onChange={handleUserInfoChange}
          >
          <option value="male">남자</option>
          <option value="female">여자</option>
        </select>
      </label>
      <button type='submit'>출력</button>
    </form>
  );
}

export default SignUp;