import { combineReducers } from 'redux';

import playgroundReducer from './playground';

const rootReducers = combineReducers({
  playground: playgroundReducer,
});

export default rootReducers;