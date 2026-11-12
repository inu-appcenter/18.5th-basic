import {useState, useRef} from "react";

//간단한 회원가입 폼
//1.이름 //input : 입력받는 캐그
// placeholder : 아무것도 입력 안 했을 시 나타나는 가이드 문구
//2.생년월일 //date : 날짜 입력받는 태그
//3.국적 //select : 선택받는 태그
//4.자기소개 //textarea:여러줄입력받음
//사용자가 입력한 걸 state로 받음.

const Register=()=>{
  //state를 객체로 만들어서 관리
  const [input,setInput] = useState({
    name : "",
    birth : "",
    country : "",
    bio : "",
  });

  const countRef = useRef(0); //새로운 레퍼런스 오브젝트 생성.
  const inputRef = useRef(); 

  //통합 이벤트 핸들러
  const onChange = (e)=>{
    countRef.current ++;
    console.log(countRef.current); 
    setInput({
      ...input,
      [e.target.name] : e.target.value,
    })
  }

  const onSubmit = ()=>{
    if(input.name === ""){
      //이름을 입력하는 DOM 요소에 포커스(선택된 상태로 만드는 것)
      inputRef.current.focus();
    }
  };

  return(
  <div>
    <div>
      <input 
        ref={inputRef}
        name="name"
        value={input.name}
        onChange={onChange} 
        placeholder={"이름"}
      />
    </div>

    <div>
      <input
      name="birth"
        value={input.birth}
        onChange={onChange}
        type="date"
      />
    </div>
    <div>
      <select
        name="country"
        value={input.country}
        onChange={onChange}
      >
        <option value=""></option>
        <option value="kr" >한국</option>
        <option value="us">미국</option>
        <option value="uk">영국</option>
      </select>
      
    </div>

    <div>
      <textarea 
      name="bio"
      value={input.bio}
      onChange={onChange}
      />
    </div>

    <button onClick={onSubmit}>
      제출
    </button>
  </div>
  );
};

export default Register;