import './App.css'
import Viewer from './components/Viewer';
import Controller from './components/Controller';

function App() {
  return (
    /* 컴포넌트에 스타일을 적용하기 위해서  App컴포넌트가 렌더링 하고 있는 요소에 css에서 classname으로 접근할 수 있어야 함*/
    <div className="App">
      <h1>Simple Counter</h1>
      {/*css 로 스타일 적용할 때 컴포넌트들마다 백그라운드와 내부 여백을 적용하기 위해 section태그로 컴포넌트를 묶음*/}
      <section>
        <Viewer />
      </section>

      <section>
        <Controller />
      </section>

    </div>
  );
};

export default App
