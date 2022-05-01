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
    case 'ADD':
      return [{...state, ...payload}];
    // case 'SHOW_DATA':
    //   return [...state, payload];
    default:
      return [...state];
  }
};

export default profileReducer;
