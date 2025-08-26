//JSX 문법 

//태그는 꼭 닫기 <br/>
//class 대신에 className 사용 
//JavaScript 값은 중괄호 안에 {} 넣기 

import Hello from "./Hello"

function App(){
  // 파스칼 케이스 규칙 컴포넌트 이름은 반드시 대문자로 시작 해야 함 
  // 헉! html 태그와의 구분을 위해~ 
  const name = "다연"
  return(
    <div>
      <h1>리엑트 스터디 출석부</h1>
      <Hello name="이레" emoji="❤️" color="greensk 
      "/>
      <Hello name="이레"/>
      <Hello name="이레"/>
      <Hello name="이레"/>
      <Hello name="이레"/>
      <Hello name="이레"/>
      <Hello name="이레"/>
      <Hello name="이레"/>
      <Hello name="이레"/>
      <Hello name="이레"/>
      <Hello />
    </div>
    //jsx 특 하나의 최상위 태그만 return 이 가능 == div 하나만 ~ 
  )
}

export default App
// 이거슬 내보내겟다는 뜻 
//import App from "./App" 이렇게 됨 
