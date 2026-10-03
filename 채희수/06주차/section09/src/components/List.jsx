import "./List.css";
import TodoItem from "./TodoItem.jsx";
import { useState } from "react";

const List = ({todos, onUpdate, onDelete}) => {
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

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <input 
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요" 
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo)=>{
          return (
            <TodoItem key={todo.id} 
              {...todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
            );
          })}
      </div>
    </div>
  );
};

export default List;