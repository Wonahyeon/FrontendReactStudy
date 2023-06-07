import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainPage from './MainPage';
import PlacePage from './PlacePage';
import GamePage from './GamePage';
import HotGamePage from './HotGamePage';
import NewGamePage from './NewGamePage';
import AboutPage from './AboutPage';
import NoMathchPage from './NoMatchPage';
function SimpleRouter(props) {
  return (
    <BrowserRouter>
      <Routes>
        {/* index: index route(여기서는 default child route) */}
        {/* 경로값 없이 루트로 접속하게 되면 index라는 prop을 가진 Route로 라우팅 */}
        {/* <Route index element={<MainPage/>} /> */}

        {/* /로 접속하면 MainPage 컴포넌트가 렌더링 */}
        {/* /places로 접속하면 PlacePage 컴포넌트가 렌더링 */}
        {/* /games로 접속하면 GamePage 컴포넌트가 렌더링 */}
        <Route path='/' element={<MainPage/>} />
        <Route path='/places' element={<PlacePage/>} />
        <Route path='/games' element={<GamePage/>} />
        {/* 방법1. 서브 경로 설정 */}
        {/* <Route path='/games/hot' element={<HotGamePage/>} />
        <Route path='/games/new' element={<NewGamePage/>} /> */}

        {/* 방법2. Nested(중첩) Route 방식 */}
        {/* 위 서브 경로 방식과 차이점 : 부모 엘리먼트 + 자식 엘리먼트가 보임 */}
        {/* 부모 안에 자식들을 렌더링해 보여줌(어디에 보여줄지는 부모 안에서 Outlet 컴포넌트로 지정) */}
        {/* Nested 안에 또 Nested 가능 */}
        {/* 활용 예: 헤더, 푸터 사이에 메인 영역 등 */}
        <Route path='/games' element={<GamePage/>} >
          <Route path='hot' element={<HotGamePage/>} />
          <Route path='new' element={<NewGamePage/>} />
        </Route>

        {/* 쿼리스트링*/}
        <Route path='/about' element={<AboutPage/>} />

        {/* 위에 설정한 라우팅 경로 이외에 경우 */}
        {/* 지정하지 않은 경로 입력 시 보여주는 페이지 */}
        {/* *의 의미는 match anything */}
        <Route path='*' element={<NoMathchPage/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default SimpleRouter;