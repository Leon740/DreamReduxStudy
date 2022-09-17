import { createReducer } from '@reduxjs/toolkit';
import { increment, decrement, incrementByAmount } from './actions';

const initialState = { counter: 0 };

// === Concept
// === addCase
// Adds a case reducer to handle a single exact action type.
// All calls to builder.addCase must come before any calls to builder.addMatcher or builder.addDefaultCase.
// === addDefaultCase
// Adds a "default case" reducer that is executed if no case reducer and no matcher reducer was executed for this action.
// === addMatcher
// Allows you to match your incoming actions against your own filter function instead of only the action.type property.

const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state) => {
      // eslint-disable-next-line no-param-reassign
      state.counter += 1;
    })
    .addCase(decrement, (state) => {
      // eslint-disable-next-line no-param-reassign
      state.counter -= 1;
    })
    .addCase(incrementByAmount, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.counter += action.payload;
    })
    .addMatcher(
      (action) => action.type.includes('multiply'),
      (state, action) => {
        // eslint-disable-next-line no-param-reassign
        state.counter *= action.payload;
      },
    )
    .addDefaultCase((state) => {
      // eslint-disable-next-line no-unused-expressions
      state;
    });
});

export default counterReducer;
