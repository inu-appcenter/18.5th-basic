import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


const Hello = () => {
  return <div>hello</div>;
};

// App 컴포넌트를 렌더링 해줌
createRoot(document.getElementById('root')).render(
    <App />
    //<Hello/> // Hello 컴포넌트를 렌더링함
)
