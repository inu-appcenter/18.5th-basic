import "./TodoItem.css";


const TodoItem = ({ todo, onDelete })=>{
  return <div className="TodoItem">
    <input type="checkbox"/>
    <div className="content">{todo.content}</div>
    <div className="date">{new Date(todo.date).toLocaleDateString()}</div>
    <button onClick={() => onDelete(todo.id)}>삭제</button>
  </div>
}

export default TodoItem;