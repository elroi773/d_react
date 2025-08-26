//배열을 map() 으로 화면에 뿌린다. 
//React 에서 배열을 map() 을 써서 jsx 로 바꿈 --> key 가 꼭 필요하다 
//어떤 항목이 어떤 dom 인지를 추적하려면 항목의 정체성이 있어야 한다. 

//dom 이란 정확히 html 를 js 가 다룰 수 있게 만든 구조 

import { useState } from "react";

export default function StudnetList(){
    const [studnets, setStudents] = useState([
        {id : "s1", name : "추다율", present: true},
        {id : "s2", name : "전유림", present: true},
        {id : "s3", name : "이재훈", present: true}
    ])
    const toggle = (id) => {
        setStudents((prev)=>
        prev.map((s)=>(s.id === id?{...s, present: !s.present}:s)))
    }
    const [search,setSearch] = useState("");
    const filtered = studnets.filter((s)=>s.name.includes(search));
    return(
        <div>
            <h1>학생리스트</h1>
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholde ="검색 ... " />
            <ul style = {{ paddingLeft: 16 }}>
                {filtered.map((s)=>(
                    <li key = {s.id}>{s.name}</li>
                ))}
                {/* {studnets.map((s)=>(
                    <li key = {s.id} style = {{marginBottom : 8}}>
                        {s.name} - {s.present ? "출석" : "결석"}
                        <button onClick={()=>toggle(s.id)} style={{marginLeft: 8}}>
                            {s.present ? "결석처리" : "출석처리"}
                        </button>
                    </li> //key 가 중요하다..
                    //리엑트가 list 를 그릴때 key 로 이게 무엇인지 확인해야 함 
                    //고유한 아이디를 써줌 
                    //안써주면 리엑트가 어? 이새기 누구지?
                ))} */}
            </ul>
        </div>
    )
}
// 상태 업데이트는 불변성 유지 
// -배열/객체는 복사 후 수정 toggle (배열 복사)
// 원본을 직접 바꿀 경우 React 가 변경을 못알아챌 수 있다 
