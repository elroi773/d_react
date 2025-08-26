
import { useState } from "react";

export default function Password() {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow((prev) => !prev);
  };

  return (
    <div>
      <input type={show ? "text" : "password"} />
      <button onClick={toggle}>
        {show ? "숨기기" : "보이기"}
      </button>
    </div>
  );
}
