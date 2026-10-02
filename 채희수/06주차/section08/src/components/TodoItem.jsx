import './TodoItem.css';

const TodoItem = ({id, isDone, content, date}) => {
  return (
    <div className="TodoItem">
      {/* readOnly : 지금 당장은 수정 불가 */}
      <input readOnly checked={isDone} type="checkbox" />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button>삭제</button>
    </div>
  );
};

export default TodoItem;