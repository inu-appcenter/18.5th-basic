import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div className='profile'>
          <img
            src="images/profile.jpg"
            alt="최유경 증명사진"
            title="최유경"
            width="200">
          </img>
        </div>
        <main>
          <p>최유경</p>
          <p>출생연도: 2006.08.23</p>
          <p>학번: 202501411</p>
          <p>학과: 컴퓨터공학부</p>
          <p>mbti: ISFP</p>
          <p>관심분야: 풀스택(프론트엔드, 백엔드)</p>
          <p>목표: 베이직 수료 완료하기!!</p>
          <p>
            TMI <br />
            좋아하는 음식: 마라탕 <br />
          </p>
        </main>
      </div>
    </>
  )
}

export default App
