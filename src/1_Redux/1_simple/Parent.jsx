import React from 'react';
// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// Components
import Child from './Child';

function Parent() {
  // Steps:
  // 1) create default state
  // 2) create reducer function = modify state
  // 3) create store object = hold state
  // 4) use Provider component = enable state
  const defaultState = { counter: 0 };

  // eslint-disable-next-line default-param-last
  function reducer(state = defaultState, action) {
    switch (action.type) {
      // state is immutable = always copy previos, set new
      case 'PLUS': return { ...state, counter: state.counter + 1 };
      case 'MINUS': return { ...state, counter: state.counter - 1 };
      default: return state;
    }
  }

  const store = createStore(reducer);

  // get state
  console.log(store.getState());

  // subscribe to state updates
  store.subscribe(() => {
    console.log(store.getState());
  });

  return (
    <Provider store={store}>
      <Child />
    </Provider>
  );
}

export default Parent;
