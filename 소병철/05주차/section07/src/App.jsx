import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";
import { useState, useEffect, useRef } from "react";

function App() {
  // 부모 자식 간 state 공유를 위해 App 컴포넌트에 useState를 사용
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  // 마운트를 useEffect로 제어하기
  // deps로 빈 배열을 넣는다. 콜백 함수는 처음 mount될 때만 실행.
  useEffect(() => {
    console.log("mount");
  }, []);

  // 업데이트 제어하기
  // deps 자체를 생략한다. 리렌더링 될때마다 콜백 함수가 실행.
  // 마운트되고 나서 업데이트되는 순간에만 실행하고 싶다면 useRef을 사용하여 마운트 여부를 체크하는 변수를 만든다.
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });

  // 언마운트 제어하기

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
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
}

export default App;
