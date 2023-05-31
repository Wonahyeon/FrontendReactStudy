import React, { useRef } from 'react';

function FileInput(props) {
  const fileInput = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fileInput.current.files);
    // FileList 객체 FileList {0: File, length: 1}
    // 0: File {name: '박혜진_드로잉 이미지 편집 디자인.jpg',...
    alert(`선택된 파일: ${fileInput.current.files[0].name}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        파일 업로드:
        <input ref={fileInput} type="file" />
        {/* 프로그래밍적으로 값을 설정할 수 없고
        사용자가 첨부한 파일의 정보만 읽어올 수 있기 때문에 항상 비제어 컴포넌트 */}
      </label>
      <br />
      <button type='submit'>제출</button>
    </form>
  );
}

export default FileInput;