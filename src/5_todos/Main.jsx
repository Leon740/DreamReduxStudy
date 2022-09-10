import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Component from './Component';

function Main() {
  const defaultState = {
    all: [],
    completed: [],
  };

  // eslint-disable-next-line default-param-last
  function reducer(state = defaultState, action) {
    switch (action.type) {
      case 'ADD': return { ...state, all: [...state.all, action.payload] };
      case 'COMPLETE': return { ...state, completed: [...state.completed, action.payload] };
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
