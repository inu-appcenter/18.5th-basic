import "./List.css";
import TodoItem from "./TodoItem.jsx";
import { useState, useMemo, useContext } from "react";
// import { TodoContext } from "../App.jsx";
import {TodoStateContext} from "../App";

const List = () => {
  // const {todos} = useContext(TodoContext);
  const todos = useContext(TodoStateContext); // todos는 더 이상 객체가 아님
  // 변수에다가 객체가 아닌 배열을 담은걸로 생각
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = ()=>{
    if(search === "") {
      return todos;
    }
    // content에는 React 공부하기 등 문자열이 들어감
    // includes : 문자열이 포함되어 있는지 확인
    // search에서 있으면 T 없으면 F 반환
    // toLowerCase : 대소문자 구분 없이 검색하기 위해 소문자로 변환
    return todos.filter((todo)=>
      todo.content
      .toLowerCase()
      .includes(search.toLowerCase())
    );
  }

  const filteredTodos = getFilteredData();

  // const getAnalyzedData = () =>{
  //   console.log("getAnalyzedData 호출");
  //   const totalCount = todos.length;
  //   const doneCount = todos.filter((todo)=>todo.isDone).length;
  //   const notDoneCount = totalCount - doneCount;
  //   return {totalCount, doneCount, notDoneCount};
  // };

  // useMemo : 특정 값이 바뀌었을 때만 함수를 호출하고, 그렇지 않으면 이전에 호출한 값을 반환
  const {totalCount, doneCount, notDoneCount} = 
    useMemo(()=>{
      console.log("getAnalyzedData 호출");
      const totalCount = todos.length;
      const doneCount = todos.filter((todo)=>todo.isDone).length;
      const notDoneCount = totalCount - doneCount;
      return {totalCount, doneCount, notDoneCount};
    },[todos]); 
  //todos가 바뀌었을 때만 호출, 의존성배열(deps) : useMemo의 두번째 인자
  //의존성배열 : deps

  // const {totalCount, doneCount, notDoneCount} = getAnalyzedData();

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <div>
        <div>total: {totalCount}</div>
        <div>done: {doneCount}</div>
        <div>not done: {notDoneCount}</div>
      </div>
      <input 
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요" 
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo)=>{
          return <TodoItem key={todo.id} {...todo}/>
        })}
      </div>
    </div>
  );
};

export default List;