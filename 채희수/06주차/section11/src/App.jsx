import './App.css'
import {useState, useRef, useReducer, useCallback, createContext, useMemo} from 'react'
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

// Context
// export const TodoContext = createContext();
// console.log(TodoContext);

// Context 분리하기
export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3); // 새로운 할일의 id값을 위한 ref

  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current,
        isDone: false,
        content,
        date: new Date().getTime(),
      }
    });
  }, []);

  const onUpdate = useCallback((targetId)=>{
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    })
  },[]);

  // use callback : 특정 값이 바뀌었을 때만 함수를 호출하고, 그렇지 않으면 이전에 호출한 값을 반환
  // const func = useCallback(() => {}, []);
  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  },[]);

  // useMemo 사용한 이유
  // useMemo을 사용해서 변하지 않은 객체들을 다시 생성하지 않게 함
  const memoizedDispatch = useMemo(()=>{
    return {onCreate, onUpdate, onDelete};
  }, []);

  return (
    <div className="App">
      {/* <Exam /> */}
      <Header />
      {/* TodoContext에 데이터 공급 받을 수 있음 */}
      {/* <TodoContext.Provider
        value={{
          todos,
          onCreate,
          onUpdate,
          onDelete,
        }}
      >
        <Editor />
        <List/>
      </TodoContext.Provider> */}

      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider
          value={memoizedDispatch}
        >
          <Editor/>
          <List/>
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>

    </div>
  );
}

export default App
