import { useState } from "react";

export default function MoodInput() {
  const [mood, setMood] = useState("");

  const handleChange = (e) => {
    setMood(e.target.value.toLowerCase().trim()); // 소문자 변환 + 공백 제거
  };

  const handleReset = () => {
    setMood("");
  };

  // 조건부 렌더링
  let emoji = "";
  if (mood === "happy") {
    emoji = "😊";
  } else if (mood === "sad") {
    emoji = "😢";
  } else if (mood === "angry") {
    emoji = "😡";
  }

  return (
    <div>
      <h2>오늘 기분을 입력해보세요</h2>
      <input
        value={mood}
        onChange={handleChange}
        placeholder="happy, sad, angry..."
      />
      <button onClick={handleReset}>초기화</button>

      <p>
        당신의 기분은 <strong>{mood}</strong> 입니다.
      </p>

      {/* 이모지 출력 */}
      {emoji && <p style={{ fontSize: "2rem" }}>{emoji}</p>}
    </div>
  );
}
