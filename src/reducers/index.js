import { combineReducers } from 'redux';
import showsReducer from './shows';
import showReducer from './show';

const allreducers = combineReducers({
 shows:showsReducer,
 show:showReducer,
})

export default allreducers;
