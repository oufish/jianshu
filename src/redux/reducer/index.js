import { combineReducers } from 'redux-immutable';

import headerReducer from './header';
import homeReducer from './home';
const reducer =  combineReducers({
    headerReducer,
    homeReducer
})
export default reducer;