import React from 'react';
// Redux
import { Provider } from 'react-redux';
import store from './store';
// Components
import Budget from './Budget';
import Car from './Car';

function Main() {
  return (
    <Provider store={store}>
      <Car type="favorite" />
      <Car type="dream" />
      <Car type="now" />
      <Budget />
    </Provider>
  );
}

export default Main;
