import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Car from './Car';

function Main() {
  const defaultState = {
    favorite: 'Mitsubishi Lancer Evo 9',
    dream: 'BMW M5 F90',
    now: 'Vaz 2110',
  };

  // eslint-disable-next-line default-param-last
  function reducer(state = defaultState, action) {
    switch (action.type) {
      case 'FAVORITE': return { ...state, favorite: action.payload };
      case 'DREAM': return { ...state, dream: action.payload };
      case 'NOW': return { ...state, now: action.payload };
      default: return state;
    }
  }

  const store = createStore(reducer);

  return (
    <Provider store={store}>
      <Car type="favorite" />
      <Car type="dream" />
      <Car type="now" />
    </Provider>
  );
}

export default Main;
