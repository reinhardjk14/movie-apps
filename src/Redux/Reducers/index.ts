import {combineReducers} from 'redux';

import auth from './auth';
import theme from './theme';

const appReducers = combineReducers({
  auth,
  theme,
});

export type RootState = ReturnType<typeof appReducers>;

export default appReducers;
