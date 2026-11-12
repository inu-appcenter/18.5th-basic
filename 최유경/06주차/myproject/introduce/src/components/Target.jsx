import './Target.css'
import { memo } from 'react';

const Target = ({ id, isDone, content, date, onDelete, onUpdate }) => {
  const onChagneCheckbox = () => {
    onUpdate(id)
  }
  const onClickDelete = () => {
    onDelete(id)
  }


  return (
    <div className="Target">
      <input
        onChange={onChagneCheckbox}
        checked={isDone}
        type="checkbox"
      />
      <div className='content'>{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDelete}>삭제</button>

    </div>
  )
}

export default memo(Target);