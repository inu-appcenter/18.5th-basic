import "./App.css";
import Register from "./components/Register";
import HookExam from "./components/HookExam";
function App() {
  return (
    <>
      <HookExam />
    </>
  );
}

// import "./App.css";
// import { useState } from "react";

// const Bulb = () => {
//   const [light, setLight] = useState("OFF");

//   return (
//     <div>
//       {light === "ON" ? (
//         <h1 style={{ backgroundColor: "orange" }}>ON</h1>
//       ) : (
//         <h1 style={{ backgroundColor: "gray" }}>OFF</h1>
//       )}

//       <button onClick={() => setLight(light === "OFF" ? "ON" : "OFF")}>
//         {light === "OFF" ? "켜기" : "끄기"}
//       </button>
//     </div>
//   );
// };

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(count + 1)}>+</button>
//     </div>
//   );
// };

// function App() {
//   return (
//     <>
//       <Bulb />
//       <Counter />
//     </>
//   );
// }

// export default App;
