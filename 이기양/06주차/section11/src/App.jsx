
import './App.css';
import { useRef, useReducer, useCallback,createContext } from "react";
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'

  const mockData= [
    {
      id: 0,
      isDone: false,
      content : "React 공부하기",
      date : new Date().getTime(),

    },
    {
      id: 1,
      isDone: false,
      content : "빨래하기",
      date : new Date().getTime(),

    },
    {
      id: 2,
      isDone: false,
      content : "노래 연습하기",
      date : new Date().getTime(),

    },
  ]
  
function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "DELETE":
      return state.filter((todo) => todo.id !== action.targetId);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.targetId
          ? { ...todo, isDone: !todo.isDone }
          : todo
      );
    default:
      return state;
  }
}

export const TodoContext = createContext();


function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  }, []);

  const onToggle = useCallback((targetId) => {
    dispatch({
      type: "TOGGLE",
      targetId,
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <TodoContext.Provider value={{
        todos, onCreate, onUpdate, onDelete,
      }}
      >
      <Editor  />
      <List todos={todos} onDelete={onDelete} onToggle={onToggle} />
      </TodoContext.Provider>
    </div>
  )
}

export default App;
