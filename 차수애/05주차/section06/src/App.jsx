import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import Even from './components/Even';
import { useState, useEffect, useRef } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  // 마운트 여부를 기억하는 ref (값이 바뀌어도 리렌더링되지 않음)
  const isMount = useRef(false)

  //1. 마운트 : 탄생
  // 의존성 배열이 [] → 처음 화면에 나타날 때 딱 한 번만 실행
  useEffect(() => {
    console.log("mount");
  }, []);

  //2.업데이트 : 변화, 리랜더링
  // 의존성 배열이 없음 → 렌더링될 때마다 실행
  useEffect(() => {
    if(!isMount.current){
      return;
    }
    console.log("update");
  });

  //3.언마운트 : 죽음
  // Even.jsx의 useEffect 클린업(return 함수)에서 처리됨

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        {/* 입력할 때마다 input이 바뀌어 리렌더링됨 */}
        <input value={input} onChange={(e)=>{
        setInput(e.target.value)
        }} />
      </section>
      <section>
        <Viewer count={count} />
        {/* 짝수일 때만 Even 렌더링, 홀수가 되면 사라지며 언마운트 */}
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  )
}

export default App
