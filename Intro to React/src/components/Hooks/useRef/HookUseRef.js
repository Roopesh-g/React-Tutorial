import React,{useEffect, useRef} from 'react';

function HookUseRef() {

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus()
  }, [inputRef])

  return (
    <div>
      <input ref={inputRef} type="text"></input>
    </div>
  )
}

export default HookUseRef
