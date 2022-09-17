import React from 'react';
// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// Components
import Child from './Child';

function Parent() {
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
      <Child />
    </Provider>
  );
}

export default Parent;
