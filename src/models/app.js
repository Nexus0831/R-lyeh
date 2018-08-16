import {
  Record,
  List
} from 'immutable';

const AppState = Record({
  isOpen: false
});

class App extends AppState {
  drawerOpen(state, payload) {
    const newState = state.update(
      'isOpen',
      () => {
        return payload.isOpen;
      }
    );
    return newState;
  }

  drawerClose(state, payload) {
    const newState = state.update(
      'isOpen',
      () => {
        return payload.isOpen;
      }
    );
    return newState;
  }
}

export default App;
