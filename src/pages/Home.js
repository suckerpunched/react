import React, { useContext } from 'react';

import { LoginContext } from '../containers/hooks/useLogin/useLogin';

export default function Home(props) {
  const {state} = useContext(LoginContext);

  return (
    <pre>{JSON.stringify(state, null, 2)}</pre>
  )
}