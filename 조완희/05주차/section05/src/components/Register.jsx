import { useState, useRef } from "react";

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3, 국적
// 4, 자기소개

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const countRef = useRef(0);
  const inputRef = useRef();
  //   console.log("레지스터 렌더링"); //refObj.current 현재 값 출력, 컴포넌트와 달리 값을 변경 시켜도 리렌더링 시키지 않음

  const onChange = (e) => {
    countRef.current++;
    console.log(countRef.current);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  //   const [name, setName] = useState("이름");
  //   const [birth, setBirth] = useState("");
  //   const [country, setCountry] = useState("");
  //   const [bio, setBio] = useState("");

  const onSubmit = () => {
    if (input.name === "") {
      // 이름을 입력하는 DOM 요소 포커스
      inputRef.current.focus();
    }
  };

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
        <select name="country" value={input.country} onChange={onChange}>
          <option></option>
          <option value="KR">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
        <div>
          <textarea name="bio" value={input.bio} onChange={onChange} />
        </div>
      </div>
      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register;
