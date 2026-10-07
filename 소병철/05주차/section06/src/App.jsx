import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useState } from "react";

function App() {
  // 부모 자식 간 state 공유를 위해 App 컴포넌트에 useState를 사용
  const [count, setCount] = useState(0);

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
