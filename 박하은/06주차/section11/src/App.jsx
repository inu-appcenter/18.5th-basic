import './App.css'
import {useState, useRef, useReducer, useCallback, createContext, useMemo} from "react";
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

//export const TodoContext = createContext();//특별한 경우 아니면 컴포넌트 외부에 선언한다. 내부에 선언한다면 계속 리렌더링 되기 때문.

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();


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

  const memoizedDispatch = useMemo(()=>{
    return {
        onCreate,
        onUpdate,
        onDelete,
      };
  },[]);

  return (
    <div className="APP">
      <Header/>
      
      <TodoStateContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={memoizedDispatch}>
      
        <Editor />
        <List /> 

        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>

    </div>
  )
}

export default App
