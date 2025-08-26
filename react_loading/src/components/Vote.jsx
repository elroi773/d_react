import React, { useState } from "react";

function Vote({ question = "투표해주세요" }) {
  const [yes, setYes] = useState(0);
  const [no, setNo] = useState(0);
  const total = yes + no;

  return (
    <div>
      <h3>Q. {question}</h3>

      <p>찬성 {yes}표</p>
      <p>반대 {no}표</p>
      <p>총 {total}명 참여</p>

      <button
        onClick={() => setYes(yes + 1)}
        style={{
          backgroundColor: "#28a745", 
        }}
      >
        👍 찬성
      </button>

      <button
        onClick={() => setNo(no + 1)}
        style={{
          backgroundColor: "#dc3545",
        }}
      >
        👎 반대
      </button>
    </div>
  );
}

export default Vote;
