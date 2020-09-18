import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(1);
  return (
    <div>
      <button onClick={(_) => setCount((c) => c - 1)}>Less</button>
      <h1>{count}</h1>
      <button onClick={(_) => setCount((c) => c + 1)}>More</button>
    </div>
  );
}

export default Counter;
