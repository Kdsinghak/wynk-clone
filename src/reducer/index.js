import {combineReducers} from 'redux';
import HomeReducer from '../screens/homef/reducer';
import RecentlyPlayed from '../components/reducer';
const rootReducer = combineReducers({
  HomeReducer,
  RecentlyPlayed,
});

export default rootReducer;
