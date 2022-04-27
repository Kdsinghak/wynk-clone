const initialState = [];
const RecentlyPlayed = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case 'SHOW_DATA':
      // console.log('payload', payload);
      let i = state.some(item => item.id == payload.id);
      console.log('state', state);
      // console.log('i', i);
      if (!i) return [...state, payload];
      else return [...state];

    default:
      return [...state];
  }
};

export default RecentlyPlayed;
