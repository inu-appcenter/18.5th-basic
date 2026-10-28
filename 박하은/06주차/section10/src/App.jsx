import './App.css'
import {useState, useRef, useReducer, useCallback} from "react";
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
// import Exam from './components/Exam';

const mockData=[
    {
      id:0,
      isDone: false,
      content : "React 공부하기",
      date: new Date().getTime(),
    },
    {
      id:1,
      isDone: false,
      content : "빨래하기",
      date: new Date().getTime(),
    },
    {
      id:2,
      isDone: false,
      content : "노래 연습하기",
      date: new Date().getTime(),
    },
  ];

function reducer(state, action){ //todos의 상태변화 담당
  switch(action.type){
    case 'CREATE' : 
      return [action.data, ...state];
    case 'UPDATE' : 
      return state.map((item)=>item.id === action.targetId? {...item, isDone : !item.isDone} : item);
    case 'DELETE':
      return state.filter((item)=>item.id !== action.targetId);
    default:
      return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  //const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3); //user마다 id값 다르게 하기 위해서 초기값에 있는 0, 1, 2 제외 3부터 시작. 

  const onCreate =useCallback((content)=>{
    dispatch({
      type: "CREATE",
      data:{
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime()
      }
    });
  },[]);

  const onUpdate = useCallback((targetId)=>{
    dispatch({
      type: "UPDATE",
      targetId : targetId,
    });
  }, []);



  const onDelete = useCallback((targetId)=>{
    dispatch({
      type:"DELETE",
      targetId: targetId,
    });
  }, []); //마운트 될 때만 한 번 생성이 되고, onDelete함수를 다시는 생성하지 않도록 최적화함.

  return (
    <div className="APP">
       <Header/>
      <Editor onCreate={onCreate}/>
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/> 
    </div>
  )
}

export default App
