// node_modules
import { createAction } from 'redux-actions';

import * as actionName from './actionNames/app';

export const toggleDrawer = createAction(
  actionName.TOGGLE_DRAWER,
  async (isOpen) => {
    const payload = {
      isOpen: false
    };
    try {
      payload.isOpen = isOpen;
      return payload;
    } catch (error) {
      return payload;
    }
  }
);
