import "./TodoItem.css";
import {memo} from "react";

const TodoItem = ({ todo, onDelete, onToggle })=>{
  return <div className="TodoItem">
    <input
      type="checkbox"
      checked={todo.isDone}
      onChange={() => onToggle(todo.id)}
    />
    <div className="content">{todo.content}</div>
    <div className="date">{new Date(todo.date).toLocaleDateString()}</div>
    <button onClick={() => onDelete(todo.id)}>삭제</button>
  </div>
}

export default memo(
  
);