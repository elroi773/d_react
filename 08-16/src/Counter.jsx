import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0); //초기값 0

  const handlePlus = () => {
    setCount(count+1);
  };
  const handleMinus = () => {
    setCount(count-1);
  };
  return (
    <div>
        <h2>카운터</h2>
        <p>현재값 : {count} </p>
        <button onClick={handlePlus}>+1</button>
        <button onClick={handleMinus}>-1</button>
    </div>
  )
  //이벤트 : 사용자가 화면과 상호작용할 ㄸㅐ 발생하는 사건 
  //버튼 클릭, 입력창에 글자 입력, 마우스 움직였을때, 키보드 눌렀을때 
  //이 사건 이 일이 생기면 이 함수를 실행해 ! -> 이벤트 처리 
  //함수 핸들러를 연결 
  //문자열이 아니라서 중괄호 안에 넣어줘야 함 ~ html 과 다름 
  //onClick 클릭 을 감지 해서 리엑트가 지정된 함수를 실행해줌
  
}
