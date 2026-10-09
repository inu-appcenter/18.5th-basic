import useInput from "./../hooks/useInput";

// 3가지 hook 관련된 팁
// 1. 함수 컴포넌트, 커스텀 푹 내부에서만 호출 가능
// 2. 조건부로 호출될 수 없다
// 3. 나만의 훅(Custom Hook) 직접 만들 수 있다.


const HookExam = ()=>{
  // 불편해서 새로운 나만의 훅 만들기
  // const [input, setInput] = useState("");

  // const onchange = (e)=>{
  //   setInput(e.target.value);
  // };

  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();

  // 조건부로 호출 불가능
  // if (true) {
  //   const state = useState();
  // }

  // for(;;){
  //   const state = useState();
  // }

  // const state = useState();

  return (
    <div>
      <input value={input} onChange={onChange} />
      <input value={input2} onChange={onChange2} />
    </div>
  )
}

export default HookExam;