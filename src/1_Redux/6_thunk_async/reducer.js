/* eslint-disable max-len */
const initialState = {
  users: [],
};

const ADD_USERS = 'ADD_USERS';

// === Concept
// === Problem:
// We need to create a fetch (side effect), but we can't do it in a reducer because reducer is a clean function, and in reducer we should only pass simple objects
// === Solution
// Use redux-thunk, redux-thunk tells to use a function

// eslint-disable-next-line default-param-last
export function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USERS:
      return { ...state, users: [...state.users, ...action.payload] };
    default:
      return state;
  }
}

function fnActionAddUsers(payload) {
  return {
    type: ADD_USERS,
    payload,
  };
}

export function fnFetchUsers() {
  // eslint-disable-next-line func-names, space-before-function-paren
  return function (dispatch) {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => dispatch(fnActionAddUsers(json)));
  };
}
