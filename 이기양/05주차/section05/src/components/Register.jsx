import {userState,useRef} from "react";

const Register=() => {
  const [name, setName] = useState("이름");
  const [birth, setBirth] = useState("");

  const onChangeName = (e)=>{
    setName(e.target.value);

  };
  const refObj = useRef(0);
  console.log("Register 렌더링");

  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  return <div>

    <button
      onClick={() => {
      refObj.current++;
      console.log(refObj.current);
    }}
    >ref +1
    </button>

    <input value={name}
    onChange={onChangeName}
    placeholder={"이름"} 
  />
    <input type="date" />
  </div>
};

export default Register;