import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>곽도겸</h1>

      <h2>기본 정보</h2>
      <ul>
        <li><strong>학과 :</strong> 컴퓨터공학부</li>
        <li><strong>학번 :</strong> 25학번</li>
        <li><strong>나이 :</strong> 21세 (2006년생)</li>
        <li><strong>생일 :</strong> 1월 31일</li>
        <li><strong>MBTI :</strong> INTP</li>
      </ul>

      <h2>나의 취미</h2>
      <ul>
        <li><strong>야구 :</strong> 교내 야구동아리 활동 및 SSG 랜더스 응원</li>
        <li><strong>게임 :</strong> 스타듀밸리 등 잔잔한 분위기의 게임</li>
        <li><strong>운동 :</strong> 헬스와 러닝</li>
      </ul>
    </>
  )
}

export default App
