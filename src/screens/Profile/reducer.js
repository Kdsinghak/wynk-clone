initialState = {
  profile: [],
};

const profileReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case 'ADD':
      return {...state, ...payload};
    case 'SHOW_DATA':
      return {...state};
    default:
      return {...state};
  }
};
