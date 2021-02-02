import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import * as _type from '../../../store/action';

export function useLogin() {
  const dispatch = useDispatch();

  const onSubmit = useCallback(async ({ email, password }) => {
    dispatch({ type:_type.LOGIN_START });

    const response = await fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const { token, error } = await response.json();

    if (token) {
      dispatch({
        type:_type.LOGIN_SUCCESS,
        user:{ email },
      });
    } else {
      dispatch({
        type:_type.LOGIN_ERROR,
        error,
      });
    }

    dispatch({ type:_type.SAVE_SESSION, payload:'login' })
  },[ dispatch ]);

  return {
    onSubmit
  };
}