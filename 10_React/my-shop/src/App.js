import { createGlobalStyle } from "styled-components";

import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap css 추가
import Header from "./pages/Header";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import ProductDetail from "./pages/ProductDetail";

// 글로벌(공통) 스타일 설정
const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
  }

  #root {
    text-align: center;
  }

  * {
    box-sizing: inherit;
  }

  .cursor-pointer {
    cursor: pointer;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle/>
      {/* 기본/라우팅 설정 */}
      <Routes>
        <Route path="/" element={<Header/>}>
          <Route index element={<Main/>} />
          {/* 상품별 상세페이지 여러 개를 라우팅 */}
          <Route path="/detail/:productId" element={<ProductDetail/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;