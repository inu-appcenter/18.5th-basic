// 5.1 실습 준비하기

// import './App.css'

// function App() {
//   return (
//     <>
//       <h1>안녕 리액트</h1>
//     </>
//   );
// }

// export default App;

//--------------------------------------------

// 5.2 React 컴포넌트 

// import './App.css'
// ES모듈 시스템으로 불러옴
// import Header from "./components/Header.jsx"; // Header컴포넌트를 불러옴, .jsx는 안써도 됨
// import Main from "./components/Main";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <>
//       <Header/> {/* Header 컴포넌트에서 반환한 것을 가져와 App 컴포넌트에서 렌더링 */}
//       <Main/>
//       <Footer/>
//     </>
//   );
// };

// export default App;

//-----------------------------------------------

// 5.4 Props로 데이터 전달하기

// import './App.css'
// import Header from "./components/Header.jsx"; // Header컴포넌트를 불러옴, .jsx는 안써도 됨
// import Main from "./components/Main";
// import Footer from "./components/Footer";
// import Button from "./components/Button";

// function App() {
//   const buttonProps = {
//     text: "메일",
//     const: "red",
//     a: 1,
//     b: 2,
//     c: 3,
//   };

//   return (
//     <>
//       {/* <Button text={"메일"} color={"red"} a={1} b={2} c={3} /> */}
//       <Button {...buttonProps} />
//       <Button text={"카페"}/>
//        {/* HTML 요소도 가능 */}
//       <Button text={"블로그"}>
//         {/* <div>자식 요소</div> */}
//         <Header/>
//       </Button>
//     </>
//   );
// }



// export default App;

//-------------------------------------------

// 5.6 State로 상태관리하기

// import './App.css'
// import { useState } from "react";

// function App() {
//   // 함수 컴퍼넌트를 리렌더링
//   const [count, setCount] = useState(0); // state는 값, setState는 함수
//   const [light, setLight] = useState("OFF");
//   // const 변수로 만들어서 사용하면 안되는 이유
//   // let light = "OFF";
//   return (
//     <>
//       <div>
//         <h1>{light}</h1> 
//          {/* <Bulb light={light} />  */}

//         <button 
//           onClick={()=>{
//             setLight(light === "ON"?"OFF" : "ON");
//            // light라는 변수의 값은 버튼이 클릭될 때마다 변경되지만 컴퍼넌트가 리렌더링 되지 않음
//            // light = light === "ON"?"OFF" : "ON";
//           }}
//         >
//           {light === "ON"?"끄기" : "켜기"}
//         </button>
//       </div>
  
//         <div>
//           <h1>{count}</h1>
//           <button 
//             onClick={()=>{
//               setCount(count + 1);
//             }}
//           >
//             +
//           </button>
//         </div>
//     </>
//   );
// }

// export default App;

//-------------------------------------------

// 5.7 State와 Props

// import './App.css'
// import { useState } from "react";

// import Bulb from "./components/Bulb";
// import Counter from "./components/Counter";

// function App() {
//   return (
//     <>
//       <Bulb />
//       <Counter />
//     </>
//   );
// }

// export default App;

//--------------------------------------------

// 5.8~5.9 State로 사용자 입력 관리하기
// 5.10

// import './App.css'
// import Register from './components/Register'

// import Bulb from "./components/Bulb";
// import Counter from "./components/Counter";

// function App() {
//   return (
//     <>
//       <Register />
//     </>
//   );
// }

// export default App;

//------------------------------------------

// 5.11 React Hooks

import './App.css'
import Register from './components/Register'
import HookExam from "./components/HookExam";

function App() {
  return (
    <>
      <HookExam />
    </>
  );
}

export default App;

//------------------------------------
