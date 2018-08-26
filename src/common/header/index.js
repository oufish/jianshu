import React,{Component} from 'react';
import { CSSTransition } from 'react-transition-group';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    Addition,
    Button
} from './style'
class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            focused:false
        }
        this.inputFocus = this.inputFocus.bind(this)
        this.inputBlur = this.inputBlur.bind(this)
    }
    inputFocus(){
        this.setState({focused:true})
    }
    inputBlur(){
        this.setState({focused:false})
    }
    render(){
        return(
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
                        in={this.state.focused}
                        timeout={200}
                        classNames="slide"
                    >
                        <NavSearch 
                            placeholder="搜索"
                            className={this.state.focused?'focused':''}
                            onFocus={this.inputFocus}
                            onBlur={this.inputBlur}
                        ></NavSearch>
                    </CSSTransition>
                    <i className={this.state.focused?'focused iconfont':'iconfont'}>&#xe614;</i>
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
export default Header;