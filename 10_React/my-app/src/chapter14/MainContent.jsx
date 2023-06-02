import React from 'react';
import { useContext } from 'react';
import ThemeContext from './ThemeContext';

function MainContent(props) {
  // 필요한 곳에서 useContext() Hook을 사용해 데이터 가져오기
  const { theme, themeList,toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        padding: '1.5rem',
        // backgroundColor: theme === 'light' ? 'white' : 'black',
        // color: theme === 'light' ? 'black' : 'white'
        // 개선 작업
        backgroundColor: themeList[theme].background,
        color: themeList[theme].foreground
      }}
    >
      <p>테마 변경이 가능한 웹사이트 입니다.</p>
      <button type='button' onClick={toggleTheme}>테마 변경</button>
    </div>
  );
}

export default MainContent;