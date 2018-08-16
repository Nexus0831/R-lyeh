import * as actions from './../actions/app';

import { handleActions } from 'redux-actions';

import App from '../models/app';

const reducer = handleActions({
  [actions.toggleDrawer](state, action) {
    return state.toggleDrawer(state, action.payload);
  }
}, new App());

export default reducer;
