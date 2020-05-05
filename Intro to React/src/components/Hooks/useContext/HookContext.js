import React from 'react';
import ContextComponent_A from './ContextComponent_A';

export const userContext = React.createContext();
export const profileContext = React.createContext();

function HookContext() {
  return (
    <userContext.Provider value="Roopesh">
      <profileContext.Provider value="Silver">
        <ContextComponent_A />
      </profileContext.Provider>
    </userContext.Provider>
  )
}

export default HookContext;
