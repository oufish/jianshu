import React from 'react';
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
const getListArea = (show) =>{
    if(show){
        return(
            <SearchInfo>
            <SearchInfoTitle>
                热门搜索
                <SearchInfoSWitch>换一批</SearchInfoSWitch>
            </SearchInfoTitle>
            <SearchInfoList>
                <SearchItem>教育</SearchItem>
                <SearchItem>教育</SearchItem>
                <SearchItem>教育</SearchItem>
                <SearchItem>教育</SearchItem>
                <SearchItem>教育</SearchItem>
                <SearchItem>教育</SearchItem>
                <SearchItem>教育</SearchItem>
                <SearchItem>教育</SearchItem>
            </SearchInfoList>
        </SearchInfo>
        )
    }else{
        return null
    }
}
const Header = (props) => {
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
                    in={props.focused}
                    timeout={200}
                    classNames="slide"
                >
                    <NavSearch 
                        placeholder="搜索"
                        className={props.focused?'focused':''}
                        onFocus={props.actions.searchFocus}
                        onBlur={props.actions.searchBlur}
                    ></NavSearch>
                </CSSTransition>
                <i className={props.focused?'focused iconfont':'iconfont'}>&#xe614;</i>
                {getListArea(props.focused)}
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
// const mapStateToProps = (state) =>({focused:state.get('headerReducer').get('focused')})
const mapStateToProps = (state) =>({focused:state.getIn(['headerReducer','focused'])})

const mapDispathToProps = (dispatch) => ({actions:bindActionCreators(actions, dispatch)})

export default connect(mapStateToProps,mapDispathToProps)(Header);