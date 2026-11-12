import "./List.css";
import TodoItem from "./TodoItem";
import {useState, useMemo} from "react";

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


  const {totalCount, doneCount, notDoneCount} = useMemo(()=>{
    console.log("getAnalyzedData 호출!");
    const totalCount = todos.length;//현재 저장된 전체 TodoItem의 개수 저장
    const doneCount = todos.filter((todo)=>todo.isDone).length; //실행 완료한 Todoitem 개수 저장
    const notDoneCount = totalCount - doneCount; //완료되지 않는 TodoItem 개수 저장

    return { //콜백함수가 반환하는 값
      totalCount,
      doneCount,
      notDoneCount
    };
  }, [todos])
  //의존성 배열(deps)이 2번째 인수로 들어감.
  //deps에 포함된 값이 변경되었을 때만 콜백함수 다시 실행.
  //해당 콜백함수가 반환하는 값을 useMemo가 다시 반환해줌.

  //const {totalCount, doneCount, notDoneCount} =getAnalyzedData() //구조분해할당 이용해서 받아 옴.

  return (
  <div className ="List">
    <h4>Todo List 🌱</h4>
    <div>
      <div>total: {totalCount}</div>
      <div>done: {doneCount}</div>
      <div>notDone: {notDoneCount}</div>
    </div>
    
 
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