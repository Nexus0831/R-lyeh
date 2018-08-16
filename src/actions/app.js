// node_modules
import { createAction } from 'redux-actions';

import * as actionName from './actionNames/app';

export const drawerOpen = createAction(
  actionName.DRAWER_OPEN,
  async () => {
    const payload = {
      isOpen: false
    };
    try {
      payload.isOpen = true;
      return payload;
    } catch (error) {
      return payload;
    }
  }
);

export const drawerClose = createAction(
  actionName.DRAWER_OPEN,
  async () => {
    const payload = {
      isOpen: true
    };
    try {
      payload.isOpen = false;
      return payload;
    } catch (error) {
      return payload;
    }
  }
);
