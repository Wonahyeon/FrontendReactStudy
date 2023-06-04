import React, { useState } from 'react';

function PostDetail(props) {
  const {posts, currentIndex, setPosts } = props;
  const [postTitle, setPostTitle] = useState('');
  const [changeTitle, setChangeTitle] = useState(false);

  const handlePostTitle = (e) => {
    setPostTitle(e.target.value);
  };

  return (
    <div className='detail'>
      <h4>제목: {posts[currentIndex].title}</h4>
      <p>날짜: {posts[currentIndex].date}</p>
      <p>작성자: {posts[currentIndex].author}</p>
      <p>...상세내용...</p>

      {/* 간단한 포스트 수정하기 */}
      <button
        style={{display: changeTitle?'none':'block'}}
        onClick={() => {
          setChangeTitle(true);
          const copyTitle = [...posts];
          copyTitle[currentIndex].title = <input value={postTitle} onChange={handlePostTitle}/>;
        }}>
        수정하기
      </button>
      <button
        style={{display: changeTitle?'block':'none'}}
        onClick={() => {
          setChangeTitle(false);
          // 배열이나 객체의 state 변경하는 법
          // 새로운 배열 또는 객체를 만들어서 set함수에 넣어줘야 함
          const copyPosts = [...posts]; // 배열의 복사본 만들기(새로운 배열)
          copyPosts[currentIndex].title = postTitle;
          setPosts(copyPosts);
        }}
      >
        확인
      </button>
    </div>
  );
}

export default PostDetail;

