import { Route, Routes } from "react-router-dom";
import NewsList from "./components/NewsList";
import NewsPage from "./pages/NewsPage";

function App() {
  return (
    // <>
    //   <NewsList/>
    // </>
    <Routes>
      {/* ?는 category 값이 선택적이라는 의미.
        즉, 있을 수도 있고, 없을 수도 있다는 뜻
      */}
      <Route path="/:category?" element={<NewsPage/>} />
    </Routes>
  );
}

export default App;
