const defaultState = {
  budget: 0,
};

// eslint-disable-next-line default-param-last
function budgetReducer(state = defaultState, action) {
  switch (action.type) {
    case 'PLUS':
      return { ...state, budget: state.budget + Number(action.payload) };
    case 'MINUS':
      return { ...state, budget: state.budget - Number(action.payload) };
    default:
      return state;
  }
}

export default budgetReducer;
