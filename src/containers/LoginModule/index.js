import React from 'react';
import { useLogin } from '../hooks/useLogin/useLogin';
import Login from './components/Login';

export default function LoginModule() {
  const { state, onSubmit } = useLogin();

  return <Login state={state} onSubmit={onSubmit} />;
}