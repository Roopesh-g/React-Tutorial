// Using prevState
import React, {useState} from 'react';

function HookCounterTwo() {
  const initialCount = 0;
  const [count, setcount] = useState(initialCount);

  return (
    <div>
      count: {count}
      <button onClick={() => setcount(initialCount)}>Reset</button>
      <button onClick={() => setcount(prevCount => prevCount + 1)}>Increment</button>
      <button onClick={() => setcount(prevCount => prevCount - 1)}>Decrement</button>
    </div>
  )
}

export default HookCounterTwo;
