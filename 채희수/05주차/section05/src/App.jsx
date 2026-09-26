
import './App.css'
// import { useState } from "react";

import Register from './components/Register'

// import Bulb from "./components/Bulb";
// import Counter from "./components/Counter";

// ES모듈 시스템으로 불러옴
// import Header from "./components/Header.jsx"; // Header컴포넌트를 불러옴, .jsx는 안써도 됨
// import Main from "./components/Main";
// import Footer from "./components/Footer";
// import Button from "./components/Button";

// 리액트 컴포넌트는 3가지 경우 리렌더링 됨
// 1. state 값이 변경
// 2, props 값이 변경
// 3. 부모 컨포넌트가 리렌더링 되면 자식도 리렌더링


// App 컴포넌트 (부모 컴포넌트) (Root 컴포넌트 => 조상인 느낌)
function App() {
  return (
    <>
      <Register />
    </>
  )

// return (
//   <>
//   <Bulb />
//   <Counter />
//   </>
// )

  // 함수 컴퍼넌트를 리렌더링
  // const [count, setCount] = useState(0); // state는 값, setState는 함수
  // const [light, setLight] = useState("OFF");
  // const 변수로 만들어서 사용하면 안되는 이유
  // let light = "OFF";

  // 컴퍼넌트의 스테이트 값이 바뀌면 이 컴퍼넌트가 리턴을 다시함
  // return (
  //   <>
  //   <div>
  //     <h1>{light}</h1> 
  //     <Bulb light={light} />

  //     <button 
  //       onClick={()=>{
  //         setLight(light === "ON"?"OFF" : "ON");
  //         // light라는 변수의 값은 버튼이 클릭될 때마다 변경되지만 컴퍼넌트가 리렌더링 되지 않음
  //         // light = light === "ON"?"OFF" : "ON";
  //       }}
  //     >
  //       {light === "ON"?"끄기" : "켜기"}
  //     </button>
  //   </div>
  
  //     <div>
  //       <h1>{count}</h1>
  //       <button 
  //         onClick={()=>{
  //           setCount(count + 1);
  //         }}
  //       >
  //         +
  //       </button>
  //     </div>
  //   </>
  // );

  // const buttonProps = {
  //   text: "메일",
  //   const: "red",
  //   a: 1,
  //   b: 2,
  //   c: 3,
  // }

  // return (
  //   <>
  //     {/* <Button text={"메일"} color={"red"} a={1} b={2} c={3} /> */}
  //     <Button {...buttonProps} />
  //     <Button text={"카페"}/>
  //     {/* HTML 요소도 가능 */}
  //     <Button text={"블로그"}>
  //       {/* <div>자식 요소</div> */}
  //       <Header/>
  //     </Button>
  //     </>
  // );
  // return (
  //   <>
  //   <Header/> {/* Header 컴포넌트에서 반환한 것을 가져와 App 컴포넌트에서 렌더링 */}
  //   <Main/>
  //   <Footer/>
  //     <h1>안녕 리액트!</h1> 
  //   </>
  // )
}

export default App
