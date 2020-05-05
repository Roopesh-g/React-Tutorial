import React, {useReducer} from 'react';

const initialState = 0;
const reducer = ((state, action) => {
  switch (action) {
    case 'Increment':
      return state + 5;

    case 'Decrement':
      return state - 5;

    case 'Reset':
      return initialState;

    default: return state;
  }
})

function CounterThree() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div>
      <div>
        <h3>Count 1: <h2>{count}</h2></h3>
        <button onClick={() => {dispatch('Increment')}}>Increment</button>
        <button onClick={() => {dispatch('Decrement')}}>Decrement</button>
        <button onClick={() => {dispatch('Reset')}}>Reset</button>
      </div>
      <div>
        <h3>Count 2: <h2>{countTwo}</h2></h3>
        <button onClick={() => {dispatchTwo('Increment')}}>Increment</button>
        <button onClick={() => {dispatchTwo('Decrement')}}>Decrement</button>
        <button onClick={() => {dispatchTwo('Reset')}}>Reset</button>
      </div>
    </div>
  )
}

export default CounterThree;
