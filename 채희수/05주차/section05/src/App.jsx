
import './App.css'
// ES모듈 시스템으로 불러옴
import Header from "./components/Header.jsx"; // Header컴포넌트를 불러옴, .jsx는 안써도 됨
import Main from "./components/Main";
import Footer from "./components/Footer";

// App 컴포넌트 (부모 컴포넌트) (Root 컴포넌트 => 조상인 느낌)
function App() {

  return (
    <>
    <Header/> {/* Header 컴포넌트에서 반환한 것을 가져와 App 컴포넌트에서 렌더링 */}
    <Main/>
    <Footer/>
      <h1>안녕 리액트!</h1> 
    </>
  )
}

export default App
