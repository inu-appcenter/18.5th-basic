import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import { useState } from 'react'

function App() {
  // count: 현재 숫자 상태, setCount: 상태를 바꾸는 함수 (초기값 0)
  // useState는 배열을 반환하므로 대괄호 []로 구조 분해해야 함
  const [count, setCount] = useState(0);

  // Controller의 버튼이 눌릴 때 호출됨. value만큼 count를 더함 (예: -1, +10)
  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        {/* 현재 count 값을 props로 전달해서 화면에 보여줌 */}
        <Viewer count={count} />
      </section>
      <section>
        {/* 버튼 클릭 시 실행할 함수를 props로 전달 */}
        <Controller onClickButton={onClickButton} />
        {/* Viewer와 Controller는 형제 관계라 서로 직접 데이터를 주고받을 수 없음.
            그래서 공통 부모인 App이 state를 갖고, 각각에게 props로 내려줌 */}
      </section>
    </div>
  )
}

export default App
