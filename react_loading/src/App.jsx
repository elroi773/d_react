import React from "react";
import Vote from "./components/Vote";

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>🗳️ 실시간 투표</h2>
      <Vote question="치킨 vs 피자, 어느 것이 더 좋나요?" />
      <Vote question="주 4일 근무제에 찬성하시나요?" />
    </div>
  );
}

export default App;
