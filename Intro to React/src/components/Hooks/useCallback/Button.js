import React from 'react';

function Button(props) {
  return (
    <div>
      {console.log("Rendering - " + props.text)}
      <button onClick={() => {props.handleClick()}}>{props.text}</button>
    </div>
  )
}

export default React.memo(Button);
