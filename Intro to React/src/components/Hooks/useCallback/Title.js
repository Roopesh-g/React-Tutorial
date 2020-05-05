import React from 'react';

function Title() {
  return (
    <div>
    {console.log("Rendering - Title")}
    <h3>useCallback in React</h3>
    </div>
  )
}

export default React.memo(Title);
