// import { useState } from 'react';
// import { useRef } from 'react';
import { useState, useRef } from "react";


// 간단한 회원가입 폼
//1. 이름
//2. 생년월일
//3. 국적
//4. 자기소개

let count = 0;

const Register = () => {

  //여러개의 state를 객체 형태로 하나의 state로 관리
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: ""
  });
  const countRef = useRef(0);
  const inputRef = useRef();



  //하나의 이벤트 핸들러로 통합
  const onChange = (e) => {
    // countRef.current++;
    count++;
    console.log(count);

    setInput({
      ...input,
      [e.target.name]: e.target.value,  // ex) e.target.name = name, e.target.value = 최유경
    });
  }


  const onSubmit = () => {
    if (input.name === "") {
      //이름을 입력하는 DOM 요소 포커스(선택된 상태로 만들기)
      inputRef.current.focus();

    }
  }


  return (
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
          onChange={onChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>


      <div>
        <textarea
          name="bio"
          value={input.bio}
          onChange={onChange} />
      </div>

      <button onClick={onSubmit}>제출</button>
    </div>
  )
}

export default Register;