import { useState } from "react";

function useInput() {
  // use 접두사 -> custom hook이구나
  const [input, setInput] = useState("");
  const onChange = (e) => {
    setInput(e.target.value);
  };

  return [input, onChange];
}

export default useInput;
