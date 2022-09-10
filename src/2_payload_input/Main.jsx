import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Component from './Component';

function Main() {
  const defaultState = {
    counter: 0,
  };

  // eslint-disable-next-line default-param-last
  function reducer(state = defaultState, action) {
    switch (action.type) {
      case 'PLUS': return { ...state, counter: state.counter + Number(action.payload) };
      case 'MINUS': return { ...state, counter: state.counter - Number(action.payload) };
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
