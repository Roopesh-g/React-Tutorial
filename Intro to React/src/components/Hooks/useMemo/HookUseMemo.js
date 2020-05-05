import React,{useState, useEffect, useMemo} from 'react';

function HookUseMemo() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const isEven = useMemo(() => {
    let i = 0;
    while(i < 2000000000) i++

    return count1 % 2 === 0 ? "Even" : "odd"
  }, [count1])

  return (
    <div>
    <button onClick={() => setCount1(prevCount => prevCount + 1)}>Count 1: {count1}</button>
    <span> {isEven}</span>
    <br />
    <button onClick={() => setCount2(prevCount => prevCount + 1)}>Count 2: {count2}</button>
    </div>
  )
}

export default HookUseMemo;
