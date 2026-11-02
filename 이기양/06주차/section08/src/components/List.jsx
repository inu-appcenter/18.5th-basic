import "./List.css";
import { useState } from "react";
import TodoItem from "./TodoItem";

const List = ({ todos, onDelete }) =>{
  const [search, setSearch] = useState("");
  const filteredTodos = todos.filter((todo) =>
    todo.content.toLowerCase().includes(search.trim().toLowerCase())
  );

  return <div className="List">
    <h4>Todo List 🌱</h4>
    <input
      placeholder="검색어를 입력하세요"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
    <div className="todos_wrapper">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
      {filteredTodos.length === 0 && <p>검색 결과가 없습니다.</p>}
    </div>
  </div>
}
export default List;
