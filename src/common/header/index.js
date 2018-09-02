import React,{Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import { CSSTransition } from 'react-transition-group';
import * as actions  from './../../redux/action/header';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoList,
    SearchInfoSWitch,
    SearchItem,
    NavSearch,
    Addition,
    Button
} from './style'
class Header extends Component{
    getListArea(){
        const {focused,list} = this.props;
        if(focused){
            return(
                <SearchInfo>
                <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSWitch>换一批</SearchInfoSWitch>
                </SearchInfoTitle>
                <SearchInfoList>
                    {list.map((item,index)=>{
                        return  <SearchItem key={index}>{item}</SearchItem>
                    })}
                   
                </SearchInfoList>
            </SearchInfo>
            )
        }else{
            return null
        }
    }
    focus(){
        this.props.actions.getAsyncList()
        this.props.actions.searchFocus()
    }
    render(){
        const { focused,actions} = this.props;
        return (
            <HeaderWrapper>
                <Logo href="/" />
                <Nav>
                <NavItem className="left active">首页</NavItem>
                <NavItem className="left">下载App</NavItem>
                <NavItem className="right">登陆</NavItem>
                <NavItem className="right">
                    <i className="iconfont">&#xe636;</i>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in={focused}
                        timeout={200}
                        classNames="slide"
                    >
                        <NavSearch 
                            placeholder="搜索"
                            className={focused?'focused':''}
                            onFocus={()=>this.focus()}
                            onBlur={actions.searchBlur}
                        ></NavSearch>
                    </CSSTransition>
                    <i className={focused?'focused iconfont':'iconfont'}>&#xe614;</i>
                    {this.getListArea()}
                </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className="writting">
                    <i className="iconfont">&#xe615;</i>
                        写文章</Button>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}
// const mapStateToProps = (state) =>({focused:state.get('headerReducer').get('focused')})
const mapStateToProps = (state) =>({focused:state.getIn(['headerReducer','focused']),list:state.getIn(['headerReducer','list'])})

const mapDispathToProps = (dispatch) => ({actions:bindActionCreators(actions, dispatch)})

export default connect(mapStateToProps,mapDispathToProps)(Header);