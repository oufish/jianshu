import { fromJS } from 'immutable';
import * as actionTypes  from './../../constants';
const defaultSatet = fromJS({
    topicList: [],
    articleList: [],
    RecommendList: [],
    page:1,
    showScoll:false
});
const change_home_data = (state,action) => {
    return state.merge({
        "topicList":fromJS(action.data.topicList),
        "articleList":fromJS(action.data.articleList),
        "RecommendList":fromJS(action.data.RecommendList)
    });
}
const add_home_list = (state,action) => {
    return state.merge({
        "articleList":state.get('articleList').concat(action.data),
        "page":action.nextPage
    });
}
export default (state = defaultSatet, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_HOME_DATA:
            return change_home_data(state,action);
        case actionTypes.ADD_HOME_LIST:
            return add_home_list(state,action);
        case actionTypes.TOGGLE_TOP_SHOW:
            return state.set('showScoll',action.bool);    
        default:
            return state;
    }
}