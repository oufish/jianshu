import React, { PureComponent } from 'react';
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
    HomeRight,
    BackTop
 } from './style';
class Home extends PureComponent {
    scollToTop(){
        window.scrollTo(0,0)
    }
    render() {
        const {showScoll}  = this.props;
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
                {showScoll? <BackTop onClick={this.scollToTop}>顶部</BackTop>:null}
            </HomeWrapper>
        )
    }
    componentDidMount(){
        this.props.actions.getHomeInfo();
        this.scoll();
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.actions.scoll)
    }
    scoll(){
       window.addEventListener('scroll',this.props.actions.scoll)
    }
}
const mapState = (state)=>({
    showScoll:state.getIn(['homeReducer', 'showScoll']),
})
const mapDispatch = (dispatch) =>({
    actions: bindActionCreators(action, dispatch)
});
export default connect(mapState,mapDispatch)(Home);