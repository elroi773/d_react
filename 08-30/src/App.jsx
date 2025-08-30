//목표 
//제어 컴포넌트 (검색 입력, 추가 입력) 을 이해하고 쓸 수 있다 
//콜백으로 자식->부모 통신을 연습한다 (폼 제출로 할 일 추가)


//1. 검색 입력으로 search 바꾸고 
//2. todos + search + statusFilter 조합해서 보이는 목록 계산 
//3. 추가 폼으로 새 할일을 부모 콜백 호출로 등록 

import { useState,useMemo } from "react"

function App() {

  const[todos, setTodos] = useState([
    {id:1, title:"리액트 설치하기", done:false},
    {id:2, title:"컴포넌트 구조 복습", done:true}
  ]);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all")

  const visibleTodos = useMemo(()=>{
    const keyword = search.trim().toLowerCase()
    return todos.filter((t)=>{
      const matchKeyword = keyword === "" || t.title.toLowerCase().includes(keyword)
    })
  },[todos, search,statusFilter])
  return (
    <>
      
    </>
  )
}

export default App
