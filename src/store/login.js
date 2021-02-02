import { persistable } from './shared';
import * as _type from "./action";

let initialState = {
  status: "idle",
  user: null,
  error: null,
};

export default function reducer(currentState = initialState, action) {
  switch (action.type) {
    case _type.LOGIN_START:
      return {
        ...currentState,
        status: 'pending',
        error: null,
      };
    case _type.LOGIN_SUCCESS:
      return {
        ...currentState,
        status: 'resolved',
        user: action.user,
        error: null,
      };
    case _type.LOGIN_ERROR:
      return {
        ...currentState,
        status: 'rejected',
        error: action.error,
      };
    default:
      return persistable(currentState, action);
  }
}
