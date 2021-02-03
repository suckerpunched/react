import React from 'react';
import useLogin from './hook/useLogin';
import { Login } from './component/Login';

export default function LoginForm() {
  const { onSubmit, state } = useLogin();

  return <Login state={state} onSubmit={onSubmit} />;
}