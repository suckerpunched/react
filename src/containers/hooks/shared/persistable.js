import * as _type from '../';

export default function persistable(state, action) {

  switch (action.type) {
    case _type.CLEAR_SESSION:
      sessionStorage.removeItem(parseInt(action.payload, 36));
      return state;
    case _type.SAVE_SESSION:
      sessionStorage.removeItem(action.payload);
      sessionStorage.setItem(parseInt(action.payload, 36), Buffer.from(JSON.stringify(state)).toString('base64'))
      return state;
    case _type.LOAD_SESSION:
      const serialisedState = sessionStorage.getItem(parseInt(action.payload, 36));
      if (serialisedState === null) return state;
      return {...state, ...JSON.parse(Buffer.from(serialisedState, 'base64').toString())};
    
    /* istanbul ignore next */
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
  
}