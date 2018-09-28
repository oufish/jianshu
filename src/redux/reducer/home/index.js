import { fromJS } from 'immutable';
import * as actionTypes  from './../../constants';
const defaultSatet = fromJS({
    topicList: [],
    articleList: [],
    RecommendList: [],
    page:1
});
export default (state = defaultSatet, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_HOME_DATA:
            return state.merge({
                "topicList":fromJS(action.data.topicList),
                "articleList":fromJS(action.data.articleList),
                "RecommendList":fromJS(action.data.RecommendList)
            });
        case actionTypes.ADD_HOME_LIST:
            return state.merge({
                "articleList":state.get('articleList').concat(action.data),
                "page":action.nextPage
            });
        default:
            return state;
    }
}