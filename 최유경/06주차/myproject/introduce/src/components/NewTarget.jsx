import './NewTarget.css'
import Target from "./Target";
import { useState, useRef, memo } from 'react';




const NewTarget = ({ target, onCreate, onUpdate, onDelete }) => {
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangetContent = (e) => {
    setContent(e.target.value)
  }
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  }

  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content)
    setContent("");
  }


  return (
    <div className="targets_wrapper">
      {target.map((item) => (
        <Target key={item.id} {...item} onUpdate={onUpdate} onDelete={onDelete} />
      ))}
      <div className="Target new_target">
        <input type="checkbox" disabled />
        <input
          ref={contentRef}
          value={content}
          onKeyDown={onKeyDown}
          onChange={onChangetContent}
          className="new_input"
          placeholder="새로운 목표..."
        />
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  )
}

export default memo(NewTarget);
