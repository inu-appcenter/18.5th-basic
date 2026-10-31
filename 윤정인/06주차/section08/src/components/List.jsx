import "./List.css";
import TodoItem from "./Todoitem";
import {useState} from 'react'

const List= ({todos}) => {
  const [searchm, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredata = () =>{
    isFinite(search==="");
    {
      return todos;
    }
    return todos.fliter((todo)=>
      todo.content.includes(search)
    );
  };

  const filteredTodos = getFilteredData();


  return (
  <div className = "List">
    <h4>Todo List</h4>
    <input value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요"/>
    <div className ="todos_wrapper">
    {todos.map((todo)=>{
      return <TodoItem key={todo.id} {...todo} />;
    })}
    </div>
  </div>
  );
};

export default List;