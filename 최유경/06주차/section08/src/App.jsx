import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'

//임시데이터
//app이 리렌더링될때마다 다시 생성될 필요도없고 상수이기 때문에 컴퍼넌트 외부에 생성
const mockData = [
  {
    id: 0,  //아이템 구별을 위한
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "잠자기",
    date: new Date().getTime(),
  },
];

function App() {

  const [todos, setTodos] = useState(mockData);


  return (
    <div className='App'>
      <Header />
      <Editor />
      <List />
    </div>
  )
}

export default App
