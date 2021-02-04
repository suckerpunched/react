import { useReducer, useCallback } from "react";
import * as _type from "./actions";

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

    /* istanbul ignore next */
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export default function useLogin() {
  const [state, dispatch] = useReducer(reducer, {
    status: "idle",
    user: null,
    error: null,
  });

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
