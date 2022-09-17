import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 0,
  },
  reducers: {
    increment(state) {
      // eslint-disable-next-line no-plusplus, no-param-reassign
      state.counter += 1;
    },
    decrement: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.counter -= 1;
    },
    incrementByAmount: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.counter += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
