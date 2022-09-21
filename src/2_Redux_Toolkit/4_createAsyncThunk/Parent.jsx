import React from 'react';
// Redux
import { Provider } from 'react-redux';
import store from './store';
// Components
import Component from './Component';

function Parent() {
  return (
    <Provider store={store}><Component /></Provider>
  );
}

export default Parent;
