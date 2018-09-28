import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import * as action from './../../redux/action/home';
import { 
    HomeWrapper,
    HomeLeft,
    HomeRight
 } from './style';
class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" alt="" src="//upload.jianshu.io/admin_banners/web_images/4477/f5397df5663c2bf03574b76eb531a9482717aec3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
            </HomeWrapper>
        )
    }
    componentDidMount(){
        this.props.actions.getHomeInfo();
    }
}
const mapDispatch = (dispatch) =>({
    actions: bindActionCreators(action, dispatch) 
});
export default connect(null,mapDispatch)(Home);