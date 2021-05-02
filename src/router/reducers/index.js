import { combineReducers } from 'redux';
import Reducers from './reducer';

export default combineReducers({
  allLaunches: Reducers,
  filteredYear: Reducers,
});