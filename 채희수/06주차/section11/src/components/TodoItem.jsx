import './TodoItem.css';
import {memo, useContext} from 'react'
// import { TodoContext } from "../App";
import { TodoDispatchContext } from '../App';

const TodoItem = ({id, isDone, content, date}) => {
  // const {onUpdate, onDelete} = useContext(TodoContext);
  const {onUpdate, onDelete} = useContext(TodoDispatchContext);

  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      {/* readOnly : 지금 당장은 수정 불가 */}
      <input 
        onChange={onChangeCheckbox} 
        readOnly 
        checked={isDone} 
        type="checkbox"  
      />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

// memo : props가 바뀌지 않으면 리렌더링하지 않음, props가 바뀌면 리렌더링
// 현재 props와 과거 props를 비교해서 바뀌었으면 리렌더링, 바뀌지 않았으면 리렌더링하지 않음
// 얕은 비교

// 고차 컴포넌트 (HOC)
// export default memo(TodoItem, (prevProps, nextProps)=>{
//   // 반관값에 따라, props가 바뀌었는지 안바뀌었는지 판단
//   // T -> props 바뀌지 않음 -> 리렌더링하지 않음
//   // F -> props 바뀜 -> 리렌더링

//   if(prevProps.id !== nextProps.id) return false;
//   if(prevProps.isDone !== nextProps.isDone) return false;
//   if(prevProps.content !== nextProps.content) return false;
//   if(prevProps.date !== nextProps.date) return false;

//   return true;
// });

// useCallback을 사용해서 가능
export default memo(TodoItem);

// 최적화는 언제하는가?
// 1. 기능구현 완료 -> 2. 최적화
// 최적화는 거의 마지막에 한다