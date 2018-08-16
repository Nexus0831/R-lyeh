import {
  Record,
  List
} from 'immutable';

const AppState = Record({
  isOpen: false
});

class App extends AppState {
  toggleDrawer(state, payload) {
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
