import React, {useState, useEffect} from 'react';

function HookCounterSix() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Doc title is updated");
    document.title = `clicked ${count} times`;
  }, [count])

  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => setCount(prevCount => prevCount + 1)}>click {count} times</button>
    </div>
  )
}

export default HookCounterSix;
