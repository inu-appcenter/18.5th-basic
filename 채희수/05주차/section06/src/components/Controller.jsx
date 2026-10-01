// Controller을 state로 할 때
//import {useState} from "react";

const Controller= ({onClickButton}) => {
  // count를 Viewer.jsx로 보낼수 없음
  //const [count, setCount] = useState(0);
  return (
    <div>
      <button
        onClick={()=>{
          onClickButton(-1);
        }}
      >
        -1
      </button>
      <button
        onClick={()=>{
          onClickButton(-10);
        }}
      >-10</button>
      <button
        onClick={()=>{
          onClickButton(-100);
        }}
      >-100</button>
      <button
        onClick={()=>{
          onClickButton(100);
        }}
      >+100</button>
      <button
        onClick={()=>{
          onClickButton(10);
        }}
      >+10</button>
      <button
        onClick={()=>{
          onClickButton(1);
        }}
      >+1</button>
    </div>
  );
};
export default Controller;