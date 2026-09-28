import './App.css'
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import {useState} from "react";

function App() {
  const [count, setCount] = useState(0);
  // 이벤트 헨들러

  const onClickButton = (value)=>{
    setCount(count + value);
  }

  return (
    <div className="App">
    <h1>Simple Counter</h1>
    {/* section을 하는 이유 : 컴포넌트들 마다의 백그라운드와 이 내부 여백을 적용해주기 위함 */}
    <section>
      <Viewer count={count}/>
    </section>
    <section>
      <Controller onClickButton={onClickButton}/>
    </section>
    </div>
  )
}

export default App
