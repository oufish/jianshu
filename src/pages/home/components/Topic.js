import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TopicWrapper, TopicItem } from '../style';
import * as actions from './../../../redux/action/header';
class Topic extends Component {
    render() {
        const { list } = this.props;
        const jsList = list.toJS();
        return (
            <TopicWrapper>
                {
                    jsList.map(item => (
                            <TopicItem key={item.id}>
                                <img
                                    className="topic-pic"
                                    src={item.imgUrl}
                                />
                                {item.title}
                            </TopicItem>
                        ))
                }
            </TopicWrapper>
        )
    }
}
const mapState = (state) => ({
    list: state.getIn(['homeReducer', 'topicList']),
});
const mapDispathToProps = (dispatch) => ({ actions: bindActionCreators(actions, dispatch) })

export default connect(mapState, null)(Topic);