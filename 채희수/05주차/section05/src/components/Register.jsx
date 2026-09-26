import {useState} from "react";
// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = ()=>{
  // const [name, setName] = useState("이름");
  // const [birth, setBirth] = useState("");
  // const [country, setCountry] = useState("");
  // const [bio, setBio] = useState("");

  const [input, setInput] = useState({
    name :"",
    birth : "",
    country : "",
    bio : "",
  });

  // console.log(input);

const onChange = (e)=>{
  console.log(e.target.name, e.target.value);
  setInput({
    ...input, // input의 값을 다 나열해줌
    // [e.target.name]은 프로퍼티 키로 설정
    // e.target는 만약 bio로 설정하면 textarea가 이벤트 타겟
    // name은 bio => bio : e.target.value;
    [e.target.name]: e.target.value, 
  });
};

  // const onChangeName = (e)=>{
  //   setName(e.target.value);
  // };

  // const onChangeBirth = (e)=>{
  //   setBirth(e.target.value);
  // };

  // const onChangeCountry = (e)=>{
  //   setCountry(e.target.value);
  // };

  // const onChangeBio = (e)=>{
  //   setBio(e.target.value);
  // }

  // const onChangeName = (e)=>{
  //   setInput({
  //     // spred를 사용하지 않으면 기존에 립력한 Birth나 Country나 Bio 같은 프로퍼티는 사라짐
  //     ...input,
  //     name : e.target.value
  //   });
  // };

  // const onChangeBirth = (e)=>{
  //   setInput({
  //     ...input,
  //     birth : e.target.value
  //   });
  // };

  // const onChangeCountry = (e)=>{
  //   setInput({
  //     ...input,
  //     country : e.target.value
  //   });
  // };

  // const onChangeBio = (e)=>{
  //   setInput({
  //     ...input,
  //     bio : e.target.value
  //   });
  // }

  return (
    <div>
      <div>
        <input 
          name="name"
          // value={name}
          value={input.name}
          // onChange={onChangeName} 
          onChange={onChange} 
          placeholder={"이름"} 
        />
      </div>

      <div>
        <input 
          name="birth"
          // value={birth} 
          value={input.birth}
          // onChange={onChangeBirth}
          onChange={onChange} 
          type="date" 
        />
      </div>

      <div>
        <select 
          name="country"
          // value={country} 
          value={input.country}
          // onChange={onChangeCountry}
          onChange={onChange} 
        >
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>

      <div>
        <textarea 
          name="bio"
          // value={bio} 
          value={input.bio}
          // onChange={onChangeBio}
          onChange={onChange} 
          />
      </div>
    </div>
  );
};

export default Register;