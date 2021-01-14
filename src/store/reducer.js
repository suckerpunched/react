import { combineReducers } from 'redux';

import userpageReducer from './userpage';

const rootReducers = combineReducers({
  userpage: userpageReducer,
});

export default rootReducers;