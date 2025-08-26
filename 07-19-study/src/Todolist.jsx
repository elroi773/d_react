import { useState } from "react";

export default function Todolist() {
  const [text, setText] = useState(""); //1. 입력 상태 
  //text : input 을 입력한 내용 저장
  //setText :  text 를 바꾸는 함수 상태를 바꾼드아
  //useState" " 인 이유는 처음에는 아무것도 안쓰기 때문에 빈 문자열로 줌

  const[todos, setTodos] = useState([]) //2. 목록 상태 
  // 할일 배열들
  //빈 배열로 시작

  //생각 정리
  // 사용자가 입력창에 글씨를 쓴다 - useState
  // 입력한 글씨를 기억한다
  // 기억하고 있다가 추가 버튼을 누른다
  // 입력한 글씨가 목록에 쌓인다 -useState 의 배열 상태
  // 쌓인 글씨 목록를 화면에 보여준다

  const handleAdd = ()=>{ //3. 추가 버튼 눌렀을때 실행 되는거 
    setTodos([...todos,text])//...todos 원래 있던 내용 뒤에 추가하겟다 
    //4. 목록에 새 항목 추가 
    setText("") //입력창 비우는거 
    //5. 입력창 비우기 
  }
  const handleRemove = (index) => {
    const removeRodo = todos.filter((_,i)=> i != index);
    setTodos(removeTodo);
  };
  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)} //입력할때마다 상태 값을 바꿈
        //6. 입력창 연결 
        placeholder="할 일을 입력하세요"
      />
      <button onClick={handleAdd}>추가</button>
      {/* 7. 버튼 연결  */}
      <p>입력한 내용 : {text}</p>
      <ul>
        {todos.map((todo,index)=>( //8. 목록 출력 
            <li key = {index}> {todo} 
              <button onClick = {()=>handleRemove(index)}>삭제</button>
            </li> 
        ))}
      </ul>
    </div>
  );
}
