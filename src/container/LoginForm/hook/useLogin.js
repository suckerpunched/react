import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as _type from '../../../store/action';

export default function useLogin() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.login);

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
    console.log(token)

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
    onSubmit,
    state
  };
}