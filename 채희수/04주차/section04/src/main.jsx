import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx' // Es 모듈 시스템의 문법으로 앱이라는 무언가를 App.jsx로부터 임포트함

createRoot(document.getElementById('root')).render( 
  // 인수로 전달받은 HTML 요소를 리액트의 루트로, 즉 뿌리로 만들어주는 역할
  // render라는 메서드를 호출해서 루트 아래에 있는 것을 렌더링함
  <StrictMode>
    <App /> // App이라는 것을 렌더링함
  </StrictMode>,
)
