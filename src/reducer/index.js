import {combineReducers} from 'redux';
import HomeReducer from '../screens/homef/reducer';
import RecentlyPlayed from '../components/reducer';
import profileReducer from '../screens/Profile/reducer';
const rootReducer = combineReducers({
  HomeReducer,
  RecentlyPlayed,
  profileReducer,
});

export default rootReducer;
