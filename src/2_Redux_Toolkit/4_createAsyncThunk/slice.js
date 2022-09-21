/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const STATUS = {
  pending: 'pending',
  fulfilled: 'fulfilled',
  rejected: 'rejected',
};

export const fnFetchTodos = createAsyncThunk(
  'todos/fetch',
  async (_, rejectWithValue) => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos?_limit=10',
      );

      if (!response.ok) {
        throw new Error('Error');
      }

      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const slice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    status: null,
    error: null,
  },
  reducers: {
    toggleTodo(state, action) {
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload.id,
      );
      toggledTodo.completed = !toggledTodo.completed;
    },
    addTodo(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        title: action.payload.title,
        completed: false,
      });
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fnFetchTodos.pending, (state) => {
      state.status = STATUS.pending;
    });
    builder.addCase(fnFetchTodos.fulfilled, (state, action) => {
      state.status = STATUS.fulfilled;
      state.todos = action.payload;
    });
    builder.addCase(fnFetchTodos.rejected, (state) => {
      state.status = STATUS.rejected;
    });
  },
});

export const { toggleTodo, addTodo, deleteTodo } = slice.actions;

export const fnToggleTodo = createAsyncThunk(
  'todos/toggle',
  async (id, { rejectWithValue, dispatch, getState }) => {
    const activeTodo = getState().todos.find((todo) => todo.id === id);

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            completed: !activeTodo.completed,
          }),
        },
      );

      if (!response.ok) {
        throw new Error('Error');
      }

      dispatch(toggleTodo({ id }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fnAddTodo = createAsyncThunk(
  'todos/add',
  async (title, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title, userId: 1, completed: false }),
        },
      );

      if (!response.ok) {
        throw new Error('Error');
      }

      const data = await response.json();

      dispatch(addTodo(data));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fnDeleteTodo = createAsyncThunk(
  'todos/delete',
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
          method: 'DELETE',
        },
      );

      if (!response.ok) {
        throw new Error('Error');
      }

      dispatch(deleteTodo({ id }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export default slice.reducer;
