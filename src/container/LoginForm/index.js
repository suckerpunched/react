import React from 'react';
import { useLogin } from './hook/useLogin';
import { Login } from './component/Login';

export default function LoginForm() {
  const { onSubmit } = useLogin();

  return <Login onSubmit={onSubmit} />;
}