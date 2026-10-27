import "./List.css"
import TodoItem from "./Todoitem";
import { useState } from "react";

const List = ({ todos }) => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);

  }
  const getFilteredDate = () => {
    if (search == "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLocaleLowerCase())) //search의 값이 todo content에 있는 지 T, F 반환
  }                                                                    // 대소문자 구분없이 검색성공 -> toLowerCase()

  const filteredTodo = getFilteredDate();

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper">
        {filteredTodo.map((todo) => {
          return <TodoItem key={todo.id} {...todo} />;
        })}
      </div>
    </div>
  );
};

export default List;