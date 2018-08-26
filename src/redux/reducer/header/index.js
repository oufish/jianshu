import * as actionTypes from './../../constants';
import { fromJS } from 'immutable';
const defaultSatet = fromJS({
    focused: false
});
//immurable对象的set方法,会结合之前的immutable对象的值和设置的值返回一个新的对象
export default (state = defaultSatet, action) => {
    if (action.type === actionTypes.SEARCH_FOCUS) { return state.set("focused",true)}
    if (action.type === actionTypes.SEARCH_BLUR) { return state.set("focused",false)}
    return state
}