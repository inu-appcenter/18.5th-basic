import { useState } from "react";

// 함수의 이름 앞에 use라는 키워드만 붙으면 그게 커스텀 훅
function useInput() {
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return [input, onChange];
}

export default useInput;
