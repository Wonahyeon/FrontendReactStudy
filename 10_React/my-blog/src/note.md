# 미니 블로그에 필요한 기능
- 글 목록 보기 기능(리스트 형태)
- 글 보기 기능
- 댓글 보기 기능
- 댓글 작성 기능
- 글 작성 기능

# 미니 블로그 UI

# 프로젝트 생성하기
npx create-react-app my-blog

# 필요한 패키지 설치
npm install react-router-dom styled-components@5.3.11

# 각 기능에 필요한 컴포넌트
- 글 목록 보기 기능(리스트 형태)
  - MainPage, PostList, PostListItem
- 글 보기 기능
  - PostViewPage
- 댓글 보기 기능
  - CommentList, CommentListItem
- 댓글 작성 기능
  - 추출 안함
- 글 작성 기능
  - PostWritePage

# 폴더 구성하기(폴더 구성에 정답은 없음)
src
  - component
    - list: 리스트와 관련된 컴포넌트들을 모아놓은 폴더
    - page: 라우팅 관련 페이지 컴포넌트들을 모아놓은 폴더
    - ui: 공통 UI 컴포넌트들을 모아놓은 폴더

# Production 빌드하기
- 코드와 정적 리소스(이미지, css 파일 등) 파일을 모두 모아서 패키징 하는 과정
  - npm run build
- 이렇게 최종적으로 만들어진 산출물은 build 폴더에 모이게 됨

# 생성된 빌드 파일들을 이용해 실행해보기
- serve 패키지 설치(정적 파일들을 서빙하는 역할)
  - npm install -g serve
- 빌드 폴더를 기반으로 웹 앱을 실행
  - serve -s build
# 배포하기
- 빌드를 통해 생성된 정적인 파일들을 배포하려는 서버에 올리는 과정
- 예: 빌드 산출물을 AWS S3에 올려 배포하기

#0608
* 모던 javaScript 튜토리얼
https://ko.javascript.info/

* export:
파일 1개에서 여러번 사용 가능
import시 {}로 받아와야하고 네임이 일치해야 됨

* export default:
파일 1개당 하나만 사용 가능
import시 변수명을 내가 지을 수 있다.

[ui]
* 기본값 ||

* 단순하게 글씨관련 css
컴포넌트보다 클래스 속성을 사용한 태그 사용이 좋음

[list]
* 반복 렌더링 map() 함수
리턴! 리액트 엘리먼트, 리스트 렌더링 위해서 key 속성!