import './App.css'
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from './components/Even'
import {useState, useEffect, useRef} from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  // 1. 마운트 : 탄생
  useEffect(()=>{
    console.log("mount");
  },[]); // deps엔 빈 배열

  // 2. 업데이트 : 변화, 리렌더링
  useEffect(()=>{
    if(!isMount.current){ // ???
      isMount.current = true;
      return;
    }
    console.log("update");
  }) // 리렌더링 될때마다 실행됨

  // 3. 언마운트 : 죽음
  // Even.jsx

  // 7.2 useEffect
  // useEffect(()=>{
  //   console.log(`count: ${count}`);
  // }, [count, input]);
  // // [count] : 의존성 배열
  // // dependency array
  // // deps

  // 이벤트 헨들러
  const onClickButton = (value)=>{
    setCount(count + value);
    // console.log(count); // concole.log로 바로 출력하면 안됨?
    // -> setCount는 비동기로 동작 -> 카운트스테이트 값은 아직 변경X
  }

  return (
    <div className="App">
    <h1>Simple Counter</h1>
    <section>
      <input value={input} onChange={(e)=>{
        setInput(e.target.value)
      }} />
    </section>
    {/* section을 하는 이유 : 컴포넌트들 마다의 백그라운드와 이 내부 여백을 적용해주기 위함 */}
    <section>
      <Viewer count={count}/>
      {count % 2 === 0 ? <Even /> : null}
    </section>
    <section>
      <Controller onClickButton={onClickButton}/>
    </section>
    </div>
  )
}

export default App
