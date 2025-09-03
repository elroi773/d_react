//목표
//제어 컴포넌트 (검색 입력, 추가 입력) 을 이해하고 쓸 수 있다
//콜백으로 자식->부모 통신을 연습한다 (폼 제출로 할 일 추가)

//1. 검색 입력으로 search 바꾸고
//2. todos + search + statusFilter 조합해서 보이는 목록 계산
//3. 추가 폼으로 새 할일을 부모 콜백 호출로 등록

import { useState, useMemo } from "react";

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "리액트 설치하기", done: false },
    { id: 2, title: "쇼핑몰 기획서 수정하기", done: false },
    { id: 3, title: "집에 가기", done: true }
  ])

  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("all")
  const [inputValue, setInputValue] = useState("")

  // 보이는 목록 계산
  const visibleTodos = useMemo(() => {
    const word = search.trim().toLowerCase()

    return todos.filter(t => {
      const ok1 = word === "" || t.title.toLowerCase().includes(word)
      const ok2 = filter === "all" ? true :
                  filter === "active" ? !t.done : t.done
      return ok1 && ok2
    })
  }, [todos, search, filter])

  // 새 할 일 추가
  const addTodo = (text) => {
    const t = text.trim()
    if (t === "") return
    const newTodo = { id: Date.now(), title: t, done: false }
    setTodos(prev => [newTodo, ...prev]) // 불변성 지키려고 ...
    setInputValue("") 
  }

  const toggleTodo = (id) => {
    setTodos(prev => prev.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  const clearDone = () => {
    setTodos(prev => prev.filter(todo => !todo.done))
  }

  return (
    <div>
      <h1>Todo 앱</h1>

      <div>
        <input
          placeholder="검색어 입력"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">전체</option>
          <option value="active">미완료</option>
          <option value="done">완료</option>
        </select>
      </div>

      <form onSubmit={(e) => {
        e.preventDefault()  // 새로고침 막기
        addTodo(inputValue)
      }}>
        <input
          placeholder="할 일을 입력하세요"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" disabled={inputValue.trim() === ""}>추가</button>
      </form>

      <TodoList list={visibleTodos} onToggle={toggleTodo} onDelete={deleteTodo} />

      <p>전체 {todos.length}개 / 미완료 {todos.filter(t => !t.done).length}개</p>
      <button onClick={clearDone}>완료 항목 모두 삭제</button>
    </div>
  )
}

function TodoList({ list, onToggle, onDelete }) {
  if (list.length === 0) return <p>조건에 맞는 항목이 없습니다.</p>

  return (
    <ul>
      {list.map(todo => (
        <li key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => onToggle(todo.id)}
            />
            <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
              {todo.title}
            </span>
          </label>
          <button onClick={() => onDelete(todo.id)}>삭제</button>
        </li>
      ))}
    </ul>
  )
}
