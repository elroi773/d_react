//목표
//제어 컴포넌트 (검색 입력, 추가 입력) 을 이해하고 쓸 수 있다
//콜백으로 자식->부모 통신을 연습한다 (폼 제출로 할 일 추가)

//1. 검색 입력으로 search 바꾸고
//2. todos + search + statusFilter 조합해서 보이는 목록 계산
//3. 추가 폼으로 새 할일을 부모 콜백 호출로 등록

import { useState, useMemo } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "리액트 설치하기", done: false },
    { id: 2, title: "컴포넌트 구조 복습", done: true },
  ]);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const visibleTodos = useMemo(() => {
    const keyword = search.trim().toLowerCase();
    return todos.filter((t) => {
      const matchKeyword =
        keyword === "" || t.title.toLowerCase().includes(keyword);
      const matchStatus =
        statusFilter === "all"
          ? true
          : statusFilter === "active"
          ? !t.done
          : t.done;
      return matchKeyword && matchStatus;
    });
  }, [todos, search, statusFilter]);
  
  const addTodo =(title)=>{
    const trimmed = title.trim();
    if(!trimmed) return;
    const newItem = {id:Date.now(),title:trimmed,done:false}
    setTodos((prev)=>[newItem, ...prev])
  }

  return (
    <>
      <div>
        <h1>폼관리 : 검색  + 필터 + 추가</h1>
        <div>
          <input
            value={search}
            placeholder="검색어 입력"
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">전체</option>
            <option value="active">미완료</option>
            <option value="done">완료</option>
          </select>
        </div>
        <form onSubmit={(e) => {
          e.preventDefault()
          addTodo(newTitle)
          }}
        >
          <label htmlFor="newTodo">새할일</label>
          <input id = "newTodo" placeholder="할 일을 입력하세요" value={newTitle} onChange={(e)=>setNewTitle(e.target.value)} />
          <button type="submit" disabled={newTitle.trim().length < 1}>추가</button>
        </form>
      </div>
    
    </>
  );
}

export default App;
