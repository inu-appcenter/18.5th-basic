import { useState, useRef } from "react";

// 간단한 회원가입 폼 만들기
// 이름 / 생년월일 / 국적 / 자기소개 정보 수집하기.

const Register = () => {
  // useState의 초기값으로 객체를 넣는다.
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  // 새로운 레퍼런스 객체 생성, 수정 횟수 카운트
  const countRef = useRef(0);
  const inputRef = useRef();

  const onChange = (e) => {
    console.log(++countRef.current);

    setInput({
      // 나머지 상태를 변경하지 않도록 하기 위한 설정
      // 이게 없으면 그냥 객체 자체가 변경된다.
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  // 제출 시 이벤트 핸들러
  const onSubmit = (e) => {
    // 이름 칸이 비었다면
    if (input.name === "") {
      // 이름을 입력하는 DOM 요소에 포커스
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
          placeholder="이름"
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
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>

      <div>
        <textarea name="bio" value={input.bio} onChange={onChange}></textarea>
      </div>

      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register;
