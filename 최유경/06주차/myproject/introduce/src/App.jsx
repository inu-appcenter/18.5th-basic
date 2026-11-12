import './App.css'
import Today from './components/Today'
import Count from './components/Count'
import Content from './components/Content'
import NewTarget from './components/NewTarget'
import { useRef, useReducer, useCallback } from 'react'

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "한 입 크기로 잘라 먹는 리액트(React.js) : 기초부터 실전까지 ",
    date: new Date().getTime(),
  },
]

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE': return [...state, action.data];
    case 'UPDATE':
      return state.map((item) =>
        item.id === action.targetId
          ? { ...item, isDone: !item.isDone }
          : item
      )
    case 'DELETE':
      return state.filter((item) =>
        item.id !== action.targetId
      );
    case 'CHANGE':
      return state + action.data;

    default: return state;
  }
}

function App() {
  const [target, dispatch] = useReducer(reducer, mockData);
  const [count, countdispatch] = useReducer(reducer, 8)

  const idRef = useRef(1);

  // dispatch 함수는 항상 같으므로 deps를 []로 두어 함수를 한 번만 생성
  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      }
    })
  }, [])

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    })
  }, [])

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    })
  }, [])

  const onClickButton = useCallback((value) => {
    countdispatch({
      type: "CHANGE",
      data: value,
    })
  }, [])


  return (
    <div className='App'>
      <Today />
      <div className='Profile'>
        <img src='/profile.jpg' alt='최유경' />
        <Count count={count} onClickButton={onClickButton} />
      </div>
      <Content />
      <NewTarget
        target={target}
        onCreate={onCreate}
        onUpdate={onUpdate}
        onDelete={onDelete}
      />
    </div>
  )
}

export default App
