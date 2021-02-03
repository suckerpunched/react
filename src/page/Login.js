import React, { useState } from 'react';

import LoginForm from '../container/LoginForm';

export default function Playground(props) {
  const [ modalShow, setModalShow ] = useState(true);

  return (
    <>
      <LoginForm />
    </>
  )
}
