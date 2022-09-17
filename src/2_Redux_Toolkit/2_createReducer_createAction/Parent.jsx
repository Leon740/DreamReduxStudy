import React from 'react';
// Redux
import { Provider } from 'react-redux';
import store from './store';
// Component
import Child from './Child';

function Parent() {
  return (
    <Provider store={store}>
      <Child />
    </Provider>
  );
}

export default Parent;
