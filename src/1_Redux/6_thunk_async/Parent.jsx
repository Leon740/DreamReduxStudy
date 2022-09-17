import React from 'react';
// Redux
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import { reducer } from './reducer';
// Components
import Child from './Child';

function Component() {
  const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, logger)));

  return (
    <Provider store={store}>
      <Child />
    </Provider>
  );
}

export default Component;
