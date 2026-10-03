import './App.css'
import {useState, useRef, useReducer} from 'react'
import Header from './components/Header.jsx'
import Editor from './components/Editor.jsx'
import List from './components/List.jsx'
// import Exam from './components/Exam.jsx'

const mockData= [
  {
    id: 0,
    isDone: false,
    content : "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content : "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content : "노래 연습하기",
    date: new Date().getTime(),
  },
];

function reducer(state, action){
  switch(action.type){
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item)=>
        item.id === action.targetId
          ? {...item, isDone: !item.isDone}
          : item
      );
    case "DELETE":
      return state.filter((item)=> item.id !== action.targetId);
    default:
      return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3); // 새로운 할일의 id값을 위한 ref

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current,
        isDone: false,
        content,
        date: new Date().getTime(),
      }
    });
  };

  // 투두리스트 수정
  const onUpdate = (targetId)=>{
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    })
  };

  // 투두리스트 삭제
  const onDelete = (targetId)=>{
    dispatch({
      type: "DELETE",
      targetId: targetId,
    })
  };

  return (
    <div className="App">
      {/* <Exam /> */}
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App
