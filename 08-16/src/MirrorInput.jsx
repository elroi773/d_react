import { useState } from "react";

export default function MirrorInput(){
    const[text,setText] = useState("")
    //setText 가 제어 컴포넌트 
    const handleChange = (e) => {
        setText(e.target.value);
    }
    //리렌더링

    const handleReset=()=>{
        setText("")
    }

    return (
        <div>
            <h2>입력한 값이 그대로 나와용</h2>
            <input value={text} onChange={handleChange} placeholder="여기에 입력 ㄱㄱ" />

            <button onClick={handleReset}>초기화</button>
            <p>당신이 입력한 값은 <strong>{text}</strong>입니다.</p>
        </div>
    )
}