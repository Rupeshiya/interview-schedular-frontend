import { combineReducers } from 'redux';
import scheduleReducer from './scheduleReducers';

const rootReducer = combineReducers({
  schedule: scheduleReducer
});

export default rootReducer;