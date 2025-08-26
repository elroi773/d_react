import { useState } from "react";

export default function ToggleBox() {
  const [on, SetOn] = useState(false);

  const toggle = () => {
    SetOn((prev) => !prev);
  };

  return (
    <div>
      <h2>토글 박스</h2>
      <button onClick={toggle}>{on ? "끄기" : "켜기"}</button>
    </div>
  );
}
//삼항 연산자 조건부 렌더링 
//on ? A : B