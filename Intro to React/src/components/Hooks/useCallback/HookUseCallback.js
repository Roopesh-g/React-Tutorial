import React, {useState, useEffect, useCallback} from 'react';

import Title from './Title';
import Count from './Count';
import Button from './Button';

function HookUseCallback() {
  const [age,setAge] = useState(10);
  const [salary, setSalary] = useState(10000);

  const handleAge = useCallback(() => {
    setAge(age + 1);
  }, [age])
  const handleSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary])

  return (
    <div>
      <Title />
      <Count type="Age" count={age} />
      <Button handleClick={handleAge} text="Increment Age"/>
      <Count type="Salary" count={salary} />
      <Button handleClick={handleSalary} text="Increment Salary"/>
    </div>
  )
}

export default HookUseCallback;
