const initialState = [
  {
    img: require('../../assests/images/profileimg.png'),
    email: '',
    name: '',
    number: '',
  },
];

const profileReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case 'LOGIN':
      return [{...state, ...payload}];
    case 'LOGOUT':
      return [{undefined, initialState}];
    default:
      return [...state];
  }
};

export default profileReducer;
