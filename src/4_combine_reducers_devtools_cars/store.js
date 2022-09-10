import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import carReducer from './carReducer';
import budgetReducer from './budgetReducer';

const rootReducer = combineReducers({
  carReducer,
  budgetReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
