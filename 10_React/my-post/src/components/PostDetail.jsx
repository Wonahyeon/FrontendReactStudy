import React, { useState } from 'react';

function PostDetail(props) {
  const {posts, currentIndex, setPosts} = props;
  const [changeTitle, setChangeTitle] = useState('');

  const handleChangeTitle = (e) => {
    setChangeTitle(e.target.value);
  };

  return (
    <div className='detail'>
      <h4>제목: {posts[currentIndex].title}</h4>
      <p>날짜: {posts[currentIndex].date}</p>
      <p>작성자: {posts[currentIndex].author}</p>
      <p>...상세내용...</p>

      {/* 간단한 포스트 수정하기 */}
      <button onClick={() => {

        // 배열이나 객체의 state 변경하는 법
        // 새로운 배열 또는 객체를 만들어서 set함수에 넣어줘야 함
        const copyPosts = [...posts]; // 배열의 복사본 만들기(새로운 배열)
        copyPosts[currentIndex].title = `${copyPosts[currentIndex].title} - 수정`;

        setPosts(copyPosts);
      }}>
        수정하기
      </button>
    </div>
  );
}

export default PostDetail;

