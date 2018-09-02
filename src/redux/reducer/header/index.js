import * as actionTypes from './../../constants';
import { fromJS } from 'immutable';
const defaultSatet = fromJS({
    focused: false,
    list:[]
});
//immurable对象的set方法,会结合之前的immutable对象的值和设置的值返回一个新的对象
export default (state = defaultSatet, action) => {
    switch(action.type) {
        case actionTypes.SEARCH_FOCUS:
            return state.set("focused",true);
        case actionTypes.SEARCH_BLUR:
            return state.set("focused",false);
        case actionTypes.CHANGE_LIST:
            return state.set("list",action.data);
        default:
        return state;
    }
}