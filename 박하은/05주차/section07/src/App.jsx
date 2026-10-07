import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import {useState, useEffect, useRef} from "react";
import Even from './components/Even';

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput]= useState("");

  const isMount = useRef(false);

  //1. 마운트: 탄생
  useEffect(()=>{
    console.log("mount");
  },[]);

  //2. 업데이트 : 변화, 리렌더링
  useEffect(()=>{
    if(!isMount.current){
      isMount.current=true;
      return;
    }
    console.log("update");
  }); //deps 생략->컴포넌트가 리렌더링 될떄마다 계속 실행 됨.

  //3. 언마운트 : 죽음


  // useEffect(()=>{ //원하는 값이 바꼈을 때 콜백함수 실행
  //   console.log(`count: ${count} / input: ${input}`);
  // },[count, input]); //2번째 인수인 배열에 의존
//의존성 배열
//dependency array
//deps

  const onClickButton =(value)=>{
    setCount(count + value); //리엑트의 싱태 변화 함수는 비동기로 동작함. count State의 값을 호출, 아직 변하진 않음. 그래서 이벤트 핸들러 안에서 console로 출력하면 안됨.useEffect 사용해야됨.
  }
  return (
    <div className="App">
    <h1>Simple Counter</h1>
      <section>
        <input value={input} onChange={(e)=>{
          setInput(e.target.value);
        }}/>
      </section>
      <section>
        <Viewer count={count}/>
        {count %2 ==0? <Even/> : null}
      </section>

     <section>
      <Controller onClickButton={onClickButton}/>
     </section>
     
    </div>
  )
}

export default App
