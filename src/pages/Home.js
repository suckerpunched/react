import React, { useContext, useEffect } from 'react';
import * as _type from '../containers/hooks';

import { LoginContext } from '../containers/hooks/useLogin/useLogin';

export default function Home(props) {
  const {state, dispatch} = useContext(LoginContext);

  useEffect(() => {
    dispatch({ type:_type.LOAD_SESSION, payload:'login' });
  });

  return (
    <pre>{JSON.stringify(state, null, 2)}</pre>
  )
}