
import './App.css'
// ES모듈 시스템으로 불러옴
import Header from "./components/Header.jsx"; // Header컴포넌트를 불러옴, .jsx는 안써도 됨
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Button";

// App 컴포넌트 (부모 컴포넌트) (Root 컴포넌트 => 조상인 느낌)
function App() {

  const buttonProps = {
    text: "메일",
    const: "red",
    a: 1,
    b: 2,
    c: 3,
  }

  return (
    <>
      {/* <Button text={"메일"} color={"red"} a={1} b={2} c={3} /> */}
      <Button {...buttonProps} />
      <Button text={"카페"}/>
      {/* HTML 요소도 가능 */}
      <Button text={"블로그"}>
        {/* <div>자식 요소</div> */}
        <Header/>
      </Button>
      </>
  );
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
