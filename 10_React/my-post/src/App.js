import { useState } from 'react';
import './App.css';
import PostDetail from './components/PostDetail';

// POST앱 CRUD 만들기
// C: Create(등록)
// R: Read(목록, 상세보기)
// U: Update(수정)
// D: Delete(삭제)
function App() {
  // 서버에서 가져온 데이터라고 가정
  const [posts, setPosts] = useState(['리액트 잘 쓰려면?', '자바스크립트 핵심 문법', '스타일링 가이드']);
  
  const [showPostDetail, setShowPostDetail] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [likeCount, setLikeCount] = useState([0, 0, 0]); // 배열
  const [inputValue, setInputValue] = useState('');

  const handleChagneInputValue = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      {/* 헤더 만들기 */}
      <header className='header--dark'>
        <h4>Wonahlog</h4>
        <nav>
          <ul>
            <li>트렌딩</li>
            <li>최신</li>
          </ul>
        </nav>
      </header>

      <div className='inner'>
        {/* 포스트 목록 */}
        {/* <div className='list'>
          <h4>{posts[0]}</h4>
          <p>2023년 1월 20일</p>
          <p>by wonah</p>
        </div>
        <div className='list'>
          <h4>{posts[1]}</h4>
          <p>2023년 1월 1일</p>
          <p>by alice</p>
        </div>
        <div className='list'>
          <h4>{posts[2]}</h4>
          <p>2022년 12월 20일</p>
          <p>by hero</p>
        </div> */}

        {/* map()을 이용하여 posts 반복 출력 */}
        {posts.map((post, index) => {
          return (
            <div key={index} className='list'
              onClick={() => {
                setShowPostDetail(true);
                setCurrentIndex(index);
              }}
            >
              <h4>{post}</h4>
              <p>2023년 6월 1일</p>
              <p>by wonah</p>

              <hr/>

              <div className='toolbar'>
                {/* 좋아요 기능 만들기 */}
                <span onClick={(e) => {
                  // (버그 수정) 현재는 좋아요 버튼 누를때 글 상세보기까지 같이 클릭됨!!
                  // 부모-자식 관계에 있을 때 이벤트 버블링이 일어남
                  e.stopPropagation(); // 상위 요소로 퍼지는 이벤트 버블링을 막음

                  const copyLikeCount = [...likeCount]; // 배열의 복사본 만들기(새로운 배열)
                  copyLikeCount[index]++;
                  setLikeCount(copyLikeCount);
                }}>
                  ❤️ {likeCount[index]}</span>

                {/* 포스트 삭제하기 */}
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
                    setPosts(filteredPosts);


                    // (버그 수정) 포스트 삭제 시 좋아요 카운트도 같이 삭제
                    const copyLikeCount = [...likeCount];
                    copyLikeCount.splice(index,1);
                    setLikeCount(copyLikeCount);
                  }}
                >🗑️</span>
              </div>
            </div>
          );
        })}

        {/* 포스트 등록하기 */}
        {/* Quiz: 제목 입력 후 등록 버튼 누르면 맨 앞에 새로운 포스트 추가 */}
        {/*
          1. 제어 컴포넌트로 만들어서 사용자가 입력한 값을 state로 저장해서 관리 
          2. 등록 버튼 클릭 시 posts 상태에 맨 앞에 새로운 데이터 추가
        */}
        <input type='text' value={inputValue} onChange={handleChagneInputValue} />
        <button onClick={() => {
          // div 하나를 새로 생성 X
          // post state에 요소 하나 추가하면 자동으로 렌더링 O
          const copyPost = [inputValue,...posts];
          setPosts(copyPost);
          setInputValue('');

          // (버그 수정) 포스트 하나 추가 시 좋아요 카운트도 같이 추가
          const copyLikeCount = [0, ...likeCount];
          setLikeCount(copyLikeCount);
        }}>
          포스트 등록
        </button>

        {/* 포스트 상세보기 */}
        {/* state 상태를 통해 component 보여짐 여부*/}
        {showPostDetail && <PostDetail posts={posts} currentIndex={currentIndex} setPosts={setPosts}/>}
      </div>
    </>
  );
}

export default App;

