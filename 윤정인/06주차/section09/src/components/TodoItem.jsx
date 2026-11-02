import './TodoItem.css';

const TodoItem = ({ content, date }) => {
  return (
    <div className="TodoItem">
      <input type="checkbox" />
      <div className="content">{content}</div>
      <div className="date">{date}</div>
      <button>삭제</button>
    </div>
  );
};

export default TodoItem;
