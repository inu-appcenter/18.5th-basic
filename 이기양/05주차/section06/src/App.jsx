import './App.css'
import Viwer from "./components/Viewer"
import Controller from "./components/Controller"
import Even from "./components/Controller"
import { useState,useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log("mount");
  }, []);

  useEffect(()=>{
    console.log("update");
  });


  // useEffect(() => {
  //   console.log('count: ${count} / input: ${input}');
  // }, [count, input]);

  const onClickButton = (value) => {
    setCount(count + value);
    console.log(count);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={input} onChange={()=>{
          setInput(e.target.value);
        }}
        />
      </section>
      <section>
        <Viwer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
