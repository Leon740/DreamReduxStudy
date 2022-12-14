import { createSlice, current } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 0,
  },
  reducers: {
    increment(state) {
      console.log('before', current(state));
      // eslint-disable-next-line no-param-reassign
      state.counter += 1;
      console.log('after', current(state));
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
