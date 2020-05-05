import React, {useReducer} from 'react';

const initialState = {
  firstCounter: 0,
  SecondCounter: 10
};

const reducer = ((state, action) => {

  switch (action.type) {
    case 'Increment':
      return {...state, firstCounter: state.firstCounter + action.value};

    case 'Decrement':
      return {...state, firstCounter: state.firstCounter - action.value};

    case 'Increment 5':
      return {...state, SecondCounter: state.SecondCounter + action.value};

    case 'Decrement 5':
      return {...state, SecondCounter: state.SecondCounter - action.value};

    case 'Reset':
      return initialState;

    default: return state;
  }
})

function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h3>Counter 1: {count.firstCounter}</h3>
      <h3>Counter 2: {count.SecondCounter}</h3>
      <button onClick={() => {dispatch({type:'Increment', value: 1})}}>Increment</button>
      <button onClick={() => {dispatch({type:'Decrement', value: 1})}}>Decrement</button>
      <button onClick={() => {dispatch({type:'Increment 5', value: 5})}}>Increment 2nd Counter</button>
      <button onClick={() => {dispatch({type:'Decrement 5', value: 5})}}>Decrement 2nd Counter</button>
      <button onClick={() => {dispatch({type: 'Reset'})}}>Reset</button>
    </div>
  )
}

export default CounterTwo;
