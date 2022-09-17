import React from 'react';
// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
// Components
import Component from './Child';

function Parent() {
  const store = createStore(reducer);

  return (
    <Provider store={store}>
      <Component />
    </Provider>
  );
}

export default Parent;
