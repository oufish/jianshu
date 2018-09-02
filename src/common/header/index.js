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
        const {focused,list,page,mouseIn,totalPage,actions} = this.props;
        const jsList = list.toJS();//将immutable对象转化为js对象
        const pageList = [];
        if(jsList.length){
            for(let i = ( page - 1) * 10;i< page * 10;i++){
                pageList.push(
                    <SearchItem key={jsList[i]}>{jsList[i]}</SearchItem>
                )
            }
        }
        if(focused || mouseIn){
            return(
                <SearchInfo 
                    onMouseEnter={actions.mouseEnter}
                    onMouseLeave={actions.mouseLeave}
                >
                <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSWitch onClick={()=>this.changePage(page,totalPage)}>换一批</SearchInfoSWitch>
                </SearchInfoTitle>
                <SearchInfoList>
                    {pageList}
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
    changePage(page,totalPage){
        if(page < totalPage){
            this.props.actions.changePage(page + 1);
        }else{
            this.props.actions.changePage(1);
        }
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
const mapStateToProps = (state) =>{
   return{
       focused:state.getIn(['headerReducer','focused']),
       list:state.getIn(['headerReducer','list']),
       page:state.getIn(['headerReducer','page']),
       mouseIn:state.getIn(['headerReducer','mouseIn']),
       totalPage:state.getIn(['headerReducer','totalPage'])
    }
}

const mapDispathToProps = (dispatch) => ({actions:bindActionCreators(actions, dispatch)})

export default connect(mapStateToProps,mapDispathToProps)(Header);