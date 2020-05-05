import React, {useContext} from 'react';
import {userContext, profileContext} from './HookContext';

function ContextComponent_C() {
  const user = useContext(userContext);
  const profile = useContext(profileContext);

  return (
    <div>{user} has a {profile} profile!!!</div>
  )
}

export default ContextComponent_C;
