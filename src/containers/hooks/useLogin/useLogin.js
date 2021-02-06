import { useReducer, useCallback, createContext, useContext } from "react";
import persistable from '../shared/persistable';
import * as _type from "../";

function reducer(state, action) {
  switch (action.type) {
    case _type.LOGIN_ERROR:
      return {
        ...state,
        status: "rejected",
        error: action.error,
      };

    case _type.LOGIN_SUCCESS:
      return {
        ...state,
        status: "resolved",
        user: action.user,
        error: null,
      };

    case _type.LOGIN_START:
      return {
        ...state,
        status: "pending",
        error: null,
      };

    default: return persistable(state, action);
  }
}


export const LoginContext = createContext(null);
export const LoginProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, {
    status: 'idle',
    user: null,
    error: null,
  });
  return (
    <LoginContext.Provider value={{state,dispatch}}>{props.children}</LoginContext.Provider>
  );
};

export function useLogin() {
  const {state, dispatch} = useContext(LoginContext);

  const onSubmit = useCallback(async ({ email, password }) => {
    dispatch({ type:_type.LOGIN_START });

    const response = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
        user: { email },
      });
      dispatch({ type:_type.SAVE_SESSION, payload:'login' });
    } else {
      dispatch({
        type:_type.LOGIN_ERROR,
        error,
      });
    }
  },[ dispatch ]);

  return {
    onSubmit,
    state,
  };
}
