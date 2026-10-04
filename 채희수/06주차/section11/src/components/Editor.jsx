import './Editor.css'
import {useState, useRef, useContext} from 'react'
// import {TodoContext} from "../App";
import { TodoDispatchContext } from '../App';

const Editor = () => {
  // const {onCreate} = useContext(TodoContext); // Context
  const {onCreate} = useContext(TodoDispatchContext); 
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContnet = (e) => {
    setContent(e.target.value);
  };

  // Enter키 눌렀을 때 새로운 투두 추가
  const onKeyDown = (e) => {
    // Enter 키가 13번
    if(e.keyCode === 13) {
      onSubmit();
    }
  };
  const onSubmit = () => {
    // 검색 비어있는 상태에서 추가 버튼 눌러도 새로운 투두가 추가X
    if(content === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    // 새로운 투두 추가 후 input창 초기화
    setContent("");
  };

  return (
    <div className="Editor">
      <input 
        ref={contentRef}
        value={content}
        onKeyDown={onKeyDown}
        onChange={onChangeContnet}
        placeholder="새로운 Todo..." 
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  )
}

export default Editor;