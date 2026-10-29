import './Count.css'
import { memo } from 'react';

const Count = ({ count, onClickButton }) => {
  return (
    <div className="Count">
      <h2>{count}</h2>
      <button onClick={() => {
        onClickButton(1);
      }}>좋아요</button>
    </div>
  )
}

export default memo(Count);