import './Todoitem.css'

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  const onChangeCheckbox = () => {
    onUpdate(id);
  }
  const onClickDelete = () => {
    onDelete(id)
  }
  return (
    <div className="TodoItem">
      <input
        onChange={onChangeCheckbox} //체크박스의 체크가 변경되는 이벤트이기 때문에 onChange를 씀
        checked={isDone}
        type="checkbox"
      />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDelete}>삭제</button>
    </div>
  );
};

export default TodoItem;