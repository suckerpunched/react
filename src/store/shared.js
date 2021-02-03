import * as _type from './action';

export function persistable(currentState, action) {

  switch (action.type) {
    case _type.CLEAR_SESSION:
      sessionStorage.removeItem(parseInt(action.payload, 36));
      return currentState;
    case _type.SAVE_SESSION:
      sessionStorage.removeItem(action.payload);
      sessionStorage.setItem(parseInt(action.payload, 36), Buffer.from(JSON.stringify(currentState)).toString('base64'))
      return currentState;
    case _type.LOAD_SESSION:
      const serialisedState = sessionStorage.getItem(parseInt(action.payload, 36));
      if (serialisedState === null) return currentState;
      return {...currentState, ...JSON.parse(Buffer.from(serialisedState, 'base64').toString())};
    default: return currentState
  }
  
}

// export function drop(currentState, initalState, )