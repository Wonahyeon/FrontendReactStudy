import React, { useState } from 'react';

function PostListItem(props) {
  const {posts} = props;
  const [likeCount, setLikeCount] = useState([0, 0, 0]); // 배열
  const [inputValue, setInputValue] = useState('');

  console.log(props);
  return (
    // map()을 이용하여 post 반복 출력
    posts.map((post, index) => {
      return (
        <div key={index} className='list'
          onClick={() => {

          }}
        >
          <h4>{post}</h4>
          <p>2023년 6월 1일</p>
          <p>by wonah</p>

          <hr/>

          <div className='toolbar'>
            {/* 좋아요 기능 */}
            <span onClick={(e) => {
                  // (버그 수정) 현재는 좋아요 버튼 누를때 글 상세보기까지 같이 클릭됨!!
                  // 부모-자식 관계에 있을 때 이벤트 버블링이 일어남
                  e.stopPropagation(); // 상위 요소로 퍼지는 이벤트 버블링을 막음

                  const copyLikeCount = [...likeCount]; // 배열의 복사본 만들기(새로운 배열)
                  copyLikeCount[index]++;
                  setLikeCount(copyLikeCount);
                }}>
                  ❤️ {likeCount[index]}</span>

            {/* 포스트 삭제 */}
            <span style={{fontSize: 25}}
                  onClick={(e) => {
                    // div를 직접 제거하는 것 X
                    // state에서 제거하면 알아서 자동으로 렌더링 O
                    e.stopPropagation();

                    // const copyPost = [...posts];
                    // copyPost.splice(index,1);
                    // setPosts(copyPost);
                    // 또는 배열의 filter() 함수 사용
                    const filteredPosts = posts.filter((value, idx) => {
                      return idx !== index;
                    });
                    // setPosts(filteredPosts);


                    // (버그 수정) 포스트 삭제 시 좋아요 카운트도 같이 삭제
                    const copyLikeCount = [...likeCount];
                    copyLikeCount.splice(index,1);
                    setLikeCount(copyLikeCount);
                  }}
                >🗑️</span>
          </div>
        </div>
      );
    })
  );
}

export default PostListItem;