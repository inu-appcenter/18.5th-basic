import './App.css'
import {useState, useRef, useReducer} from "react";
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

  const onCreate =(content)=>{
    dispatch({
      type: "CREATE",
      data:{
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime()
      }
    })
  }

/*const newTodo = { //새로운 TodoItem을 객체 형태로 만들어줌.
      id: idRef.current++, //id 달라야 되니까 추가 할 때마다 +1씩 해줌.
      isDone: false,
      content:content,
      date: new Date().getTime()
    }
    
    setTodos([newTodo, ...todos]); //todos에 push로 넣으면 안 됨. setTodos 사용해야 되니, apread 연산자 활용. 
*/


  const onUpdate = (targetId)=>{
    dispatch({
      type: "UPDATE",
      targetId : targetId,
    })
  }


/*//todos state의 값들 중에
    //targetId와 일치하는 id를 갖는 todo 아이템의 isDone 변경

    //인수: todos 배열에서 targerId와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 새로운 배열
    setTodos(todos.map((todo)=>todo.id===targetId?{...todo, isDone: !todo.isDone} : todo));
 */

  const onDelete = (targetId)=>{
    dispatch({
      type:"DELETE",
      targetId: targetId,
    })
  }

/*
//인수: todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열
    setTodos(todos.filter((todo)=> todo.id !== targetId));
 */


  return (
    <div className="APP">
       <Header/>
      <Editor onCreate={onCreate}/>
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/> 
    </div>
  )
}

export default App
