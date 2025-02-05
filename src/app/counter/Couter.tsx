'use client'

import { useState } from "react";

export default function Counter() {

  const [counter, setCounter] = useState(0);

  return <div>
    <h1>Counter</h1>
    <p>{counter}</p>
    <button
      onClick={() => setCounter(counter + 1)}
    >
      Add
    </button>
  </div>;
}
