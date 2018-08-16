import * as actions from './../actions/app';

import {
  handleActions
} from 'redux-actions';

import App from '../models/app';

const reducer = handleActions({
  [actions.drawerOpen](state, action) {
    return state.drawerOpen(state, action.payload);
  },
  [actions.drawerClose](state, action) {
    return state.drawerClose(state, action.payload);
  }
}, new App());

export default reducer;
