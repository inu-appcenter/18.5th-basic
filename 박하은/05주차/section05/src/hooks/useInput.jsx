import {useState} from "react";

function useInput(){ //함수이름 앞에 use 붙이면 커스텀 훅으로 판단.
  const [input, setInput] = useState("");

  const onChange =(e)=>{
    setInput(e.target.value);
  };

  return [input, onChange];
}

export default useInput;