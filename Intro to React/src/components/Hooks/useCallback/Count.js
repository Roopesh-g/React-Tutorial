import React from 'react';

function Count(props) {
  return (
    <div>
      {console.log("Rendering - " + props.type)}
      <div>{props.type} is {props.count}</div>
    </div>
  )
}

export default React.memo(Count);
