// React의 개발 검사 기능인 StrictMode를 가져옴
import { StrictMode } from 'react';
// React 컴포넌트를 실제 HTML에 표시하는 createRoot를 가져옴
import { createRoot } from 'react-dom/client';
// App.jsx에서 내보낸  App 컴포넌트를 가져옴
import App from './App.jsx';
// css 파일을 가져와 전체 페이지에 적용
import './style.css';

// index.html에서 id가 root인 요소를 찾고 React 앱이 표시될 시작점으로 설정
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* App 컴포넌트를 화면에 표시 */}
    <App />
  </StrictMode>,
);
