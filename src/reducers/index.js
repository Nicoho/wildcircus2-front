import { combineReducers } from 'redux';
import showsReducer from './shows';

const allreducers = combineReducers({
 shows:showsReducer,
})

export default allreducers;
