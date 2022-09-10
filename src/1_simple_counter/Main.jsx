import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Component from './Component';

function Main() {
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

  return (
    <Provider store={store}>
      <Component />
    </Provider>
  );
}

export default Main;
