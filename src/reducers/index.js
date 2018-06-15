import { combineReducers } from 'redux';

import {
  reducer as fromReducer
} from 'redux-form';

import app from './app';

export default combineReducers({
  form: fromReducer,
  app
});
