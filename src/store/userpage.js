import { persistable } from './shared';
import * as _type from './action';

let initialState = {
  userFirstName: '',
  userLastName: '',
  userCounter: 0,
};

export default function reducer(currentState = initialState, action) {

  switch (action.type) {
    case _type.SET_USER_FIRST_NAME:
      return {
        ...currentState,
        userFirstName: action.payload
      }
    case _type.SET_USER_LAST_NAME:
      return {
        ...currentState,
        userLastName: action.payload
      }
    case _type.INCR_USER_COUNTER:
      return {
        ...currentState,
        userCounter: currentState.userCounter += 1
      }
    default: return persistable(currentState, action)
  }
  
}