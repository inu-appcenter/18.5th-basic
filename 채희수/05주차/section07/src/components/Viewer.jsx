// Viewer을 state로 할 때
//import {useState} from "react";

const Viewer= ({count})=>{
  // setCount를 Controller.jsx에 보내야 하는데 그렇게 할 수 없음
  //const [count, setCount] = useState(0);

  return (
    <div>
      <div>현재 카운트 :</div>
      <h1>{count}</h1>
    </div>
  )
};

export default Viewer;