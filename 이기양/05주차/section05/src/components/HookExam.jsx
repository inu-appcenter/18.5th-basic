import {useState} from 'react';


const HookExam = () => {




  const [count, setCount] = useState("");
  const onChange = (e) => {
    setInput(e.target.value);
  }

  return (
    <div>
    <input value={input} onChange={onChange} />
    </div>
  );
};

export default HookExam;