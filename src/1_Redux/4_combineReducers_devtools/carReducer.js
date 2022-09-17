const defaultState = {
  favorite: 'Mitsubishi Lancer Evo 9',
  dream: 'BMW M5 F90',
  now: 'Vaz 2110',
};

// eslint-disable-next-line default-param-last
function carReducer(state = defaultState, action) {
  switch (action.type) {
    case 'FAVORITE':
      return { ...state, favorite: action.payload };
    case 'DREAM':
      return { ...state, dream: action.payload };
    case 'NOW':
      return { ...state, now: action.payload };
    default:
      return state;
  }
}

export default carReducer;
