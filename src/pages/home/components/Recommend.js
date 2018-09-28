import React, { Component } from 'react';
import {connect} from 'react-redux';
import {RecommenWrapper,RecommenItem} from '../style';
class Recommend extends Component {
    render() {
        const {RecommendList}  = this.props;
        const List = RecommendList.toJS();
        return (
            <RecommenWrapper>
                {List.map(item=>( <RecommenItem key={item.id} imgUrl={item.imgUrl}/>))}
            </RecommenWrapper>
        )
    }
}
const mapState = (state) =>({
    RecommendList:state.getIn(["homeReducer","RecommendList"])
})
export default connect(mapState)(Recommend);