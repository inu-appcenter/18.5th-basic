import "./Editor.css";
import {useState, useRef} from "react";

const Editor=({onCreate})=>{

  const [content,setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e)=>{
    setContent(e.target.value);
  }

  const onKeydown = (e)=>{
    if(e.keyCode===13){
      onSubmit();
    }
  }

  const onSubmit=()=>{
    if(content===""){
      contentRef.current.focus(); //빈 입력 들어올 때 포커스 줌.(입력하라는 의미)
      return;
    }
    onCreate(content)
    setContent(""); //새로운 데이터 추가 후 input 값 ""로 초기화.
  }

  return <div className="Editor">
    <input 
    ref={contentRef}
    value={content} 
    onKeyDown={onKeydown} //사용자가 키보드를 누를 때 발생하는 이벤트
    onChange ={onChangeContent} 
    placeholder="새로운 Todo..."/>
    <button onClick={onSubmit}>추가</button>
  </div>;
};

export default Editor;