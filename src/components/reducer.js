const initialState = [];
const RecentlyPlayed = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case 'SHOW_DATA':
      return [...state, {payload}];

    default:
      return [...state];
  }
};

export default RecentlyPlayed;
