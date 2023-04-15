import {combineReducers} from 'redux';

import auth from './auth';
import theme from './theme';
import movies from './movies';

const appReducers = combineReducers({
  auth,
  theme,
  movies,
});

export type RootState = ReturnType<typeof appReducers>;

export default appReducers;
