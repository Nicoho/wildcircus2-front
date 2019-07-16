import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import showsReducer from './shows';
import showReducer from './show';

const allreducers = combineReducers({
 shows:showsReducer,
 show:showReducer,
 form:formReducer,
})

export default allreducers;
