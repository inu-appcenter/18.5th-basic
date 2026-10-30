import "./List.css";
import { useState, useMemo } from "react";
import TodoItem from "./TodoItem";

const List = ({ todos, onDelete, onToggle }) =>{
  const [search, setSearch] = useState("");
  const filteredTodos = todos.filter((todo) =>
    todo.content.toLowerCase().includes(search.trim().toLowerCase())
  );


  const {totalCount, doneCount, notDoneCount} = 
  useMemo(()=>{
    console.log("getAnalyzedData 호출!");
    const totalCount = todos.length;
    const doneCount = todos.filter((todo)=>todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return{
      totalCount,
      doneCount,
      notDoneCount
    }

  }, [todos])

  // const {totalCount, doneCount, notDoneCount} = getAnalyzedData()

  return <div className="List">
    <h4>Todo List 🌱</h4>
    <div>total: {totalCount}</div>
    <div>done: {doneCount}</div>
    <div>notDone: {notDoneCount}</div>
    <input
      placeholder="검색어를 입력하세요"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
    <div className="todos_wrapper">
      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
      {filteredTodos.length === 0 && <p>검색 결과가 없습니다.</p>}
    </div>
  </div>
}
export default List;
