import React, { useContext } from 'react';

import { LoginContext } from '../containers/hooks/useLogin/useLogin';
import LoginModule from '../containers/LoginModule';

export default function Login(props) {
  const {state} = useContext(LoginContext);

  return (
    <>
      <LoginModule />
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </>
  )
}