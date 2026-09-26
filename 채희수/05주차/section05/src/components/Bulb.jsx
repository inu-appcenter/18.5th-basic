import {useState} from 'react';

// 이렇게 하면 불필요한 리렌더링 발생 X
const Bulb= ()=>{

  const [light, setLight] = useState("OFF");

  console.log(light);
  return (
    <div>
      {light === "ON" ? (
        <h1 style={{backgroundColor: "orange"}}>ON</h1>
      ) : (
        <h1 style={{ backgroundColor: "gray"}}>OFF</h1>
      )}

      <button 
        onClick={()=>{
          setLight(light === "ON"?"OFF" : "ON");
          // light라는 변수의 값은 버튼이 클릭될 때마다 변경되지만 컴퍼넌트가 리렌더링 되지 않음
          // light = light === "ON"?"OFF" : "ON";
        }}
      >
        {light === "ON"?"끄기" : "켜기"}
      </button>
    </div>
  );
};

export default Bulb;