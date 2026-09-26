import {useState} from "react";

// 커스텀 훅
function useInput(){
  const [input, setInput] = useState("");

  const onchange = (e)=>{
    setInput(e.target.value);
  };

  return [input, onchange];
}

export default useInput;