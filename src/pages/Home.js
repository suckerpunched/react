import React, { useContext } from 'react';
import * as _type from '../containers/hooks';

import { LoginContext } from '../containers/hooks/useLogin/useLogin';

export default function Home(props) {
  const {state, dispatch} = useContext(LoginContext);

  return (
    <pre>{JSON.stringify(state, null, 2)}</pre>
  )
}