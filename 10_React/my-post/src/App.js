import { useState } from 'react';
import './App.css';
import PostDetail from './components/PostDetail';
import PostListItem from './components/PostListItem';

// POST앱 CRUD 만들기
// C: Create(등록)
// R: Read(목록, 상세보기)
// U: Update(수정)
// D: Delete(삭제)

const postData = [
  {
    title: '리액트를 잘 쓰려면?',
    date: '2023년 1월 20일',
    author: 'goni.kim'
  },
  {
    title: '자바스크립트 핵심 문법',
    date: '2023년 1월 1일',
    author: 'alice'
  },
  {
    title: '스타일링 가이드',
    date: '2022년 12월 20일',
    author: 'hero'
  }
];

const today = new Date();
const nowDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;

function App() {
  // 서버에서 가져온 데이터라고 가정
  // const [posts, setPosts] = useState(['리액트 잘 쓰려면?', '자바스크립트 핵심 문법', '스타일링 가이드']);
  const [posts, setPosts] = useState(postData);
  const [showPostDetail, setShowPostDetail] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [likeCount, setLikeCount] = useState([0, 0, 0]); // 배열
  const [inputAuthor, setInputAuthor] = useState(''); // 포스트 작성자
  const [inputTitle, setInputTitle] = useState(''); // 포스트 제목

  const [postInputEmpty, setPostInputEmpty] = useState(true); // 미입력 시 비활성화

  const handleChagneInputAuthor = (e) => {
    setInputAuthor(e.target.value);
  };

  const handleChagneInputTitle = (e) => {
    setInputTitle(e.target.value);
    e.target.value?
      setPostInputEmpty(false):
      setPostInputEmpty(true);
  }

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
          <p>by goni.kim</p>
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

        { posts.map((post, index) => {
          return (
            <PostListItem posts={posts} post={post} setPosts={setPosts} index={index} setShowPostDetail={setShowPostDetail} setCurrentIndex={setCurrentIndex} likeCount={likeCount} setLikeCount={setLikeCount}/>
          );
    })}

        {/* 포스트 등록하기 */}
        {/* Quiz: 제목 입력 후 등록 버튼 누르면 맨 앞에 새로운 포스트 추가 */}
        {/*
          1. 제어 컴포넌트로 만들어서 사용자가 입력한 값을 state로 저장해서 관리 
          2. 등록 버튼 클릭 시 posts 상태에 맨 앞에 새로운 데이터 추가
        */}
        <label>
          작성자
          <input
            style={{marginLeft: '10px'}} 
            type='text'
            value={inputAuthor}
            onChange={handleChagneInputAuthor}/>
        </label>
        <br/>
        <label>
          제목
          <input
            style={{marginLeft: '26px'}} 
            type='text'
            value={inputTitle}
            onChange={handleChagneInputTitle}/>
        </label>
        <button onClick={() => {
          // div 하나를 새로 생성 X
          // post state에 요소 하나 추가하면 자동으로 렌더링 O
          const copyPost = [{title: inputTitle, date: nowDate, author: inputAuthor || 'guest'},...posts];
          setPosts(copyPost);
          setInputAuthor('');
          setInputTitle('');
          setPostInputEmpty(true); // 포스트 등록하면 버튼 다시 비활성화
          
          // (버그 수정) 포스트 하나 추가 시 좋아요 카운트도 같이 추가
          const copyLikeCount = [0, ...likeCount];
          setLikeCount(copyLikeCount);
        }}
        disabled={postInputEmpty}>
          포스트 등록
        </button>

        {/* 포스트 상세보기 */}
        {/* state 상태를 통해 component 보여짐 여부*/}
        {showPostDetail && <PostDetail posts={posts} currentIndex={currentIndex} setPosts={setPosts} likeCount ={likeCount} setLikeCount={setLikeCount} />}
      </div>
    </>
  );
}

export default App;

