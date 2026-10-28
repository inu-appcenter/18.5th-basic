import "./List.css";
import TodoItem from "./TodoItem";
import {useState} from "react";

const List=({todos, onUpdate, onDelete})=>{

  const [search, setSearch]=useState(""); //search가 바뀔 때마다 List 컴퍼넌트 리렌더링.

  const onChangeSearch = (e)=>{
    setSearch(e.target.value);
  }

  const getFilteredData =()=>{
    if(search===""){
      return todos;
    }
    return todos.filter((todo)=>
      todo.content.toLowerCase().includes(search.toLocaleLowerCase()) //대소문자 구분없이 검색 가능.
    )
  }

  const filteredTodos = getFilteredData();

  return (
  <div className ="List">
    <h4>Todo List 🌱</h4>
    <input value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요"/> 
    <div className="todos_wrapper">
      {filteredTodos.map((todo)=>{
        return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate}
        onDelete={onDelete}/>; //모든 TodoItem이 전달 됨. 각각 아이템에 key 부여
      })}
    </div>
  </div>
  );
};

export default List;