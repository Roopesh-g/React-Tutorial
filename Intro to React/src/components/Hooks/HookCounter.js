//Example for useState

import React, {useState} from 'react';

function HookCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click!</button>
      <h3>Counter is: {count}</h3>
    </div>
  )
}

export default HookCounter;
