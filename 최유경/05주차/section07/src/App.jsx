import './App.css'
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import { useState, useEffect, useRef } from 'react';
import Even from './components/Even';

//useEffect를 이용하면 count값이 바꼈을 때 원하는 동작을 하도록 만들어 줄 수 있다.
function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);
  //1. 마운트 : 탄생 
  useEffect(() => {
    console.log("mount");
  }, []) //deps로 빈 배열 전달 

  //2. 업데이트 : 변화, 리렌더링
  // useEffect(() => {
  //   console.log("update")
  // }) // deps 생략

  //업데이트가 됐을 때만 실행시키고 싶다면
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update")
  }) // deps 생략

  //3. 언마운트 : 죽음


  //이벤트 핸들러를 만들어서 controller컴퍼넌트에 props로 전달
  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={input} onChange={(e) => {
          setInput(e.target.value)
        }} />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>

      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
};

export default App;
