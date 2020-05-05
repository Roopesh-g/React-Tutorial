import React, {useState} from 'react';

function HookCounterFour() {
  const [item, setItems] = useState([]);
  const addItem = () => {
    setItems([...item, {
      id: item.length,
      value: Math.floor(Math.random() * 10) + 1
    }])
  }

  return (
    <div>
      <button onClick={addItem}>Add new item</button>
      <ul>
      {
        item.map(el => (
          <li key={el.id}>{el.value}</li>
        ))
      }
      </ul>
    </div>
  )
}

export default HookCounterFour;
