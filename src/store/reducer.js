import { combineReducers } from 'redux';

import playgroundReducer from './playground';
import loginReducer from './login';

const rootReducers = combineReducers({
  playground: playgroundReducer,
  login: loginReducer,
});

export default rootReducers;