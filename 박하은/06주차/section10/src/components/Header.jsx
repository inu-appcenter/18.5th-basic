import './Header.css';
import {memo} from "react";

const Header=()=>{
  return (
    <div className="Header">
      <h3>오늘은 🗓️</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  
  );
};

//const memoizedHeader = memo(Header); //props가 바뀌지 않는다면 리렌더링 안 하도록 최적값 반환

//export default memoizedHeader; //최적화가 이루어진 Header 컴포넌트 내보냄. 

export default memo(Header);