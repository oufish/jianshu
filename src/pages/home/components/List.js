import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from "react-router-dom";
import { ListItem, ListInfo,LoadMore } from '../style';
import * as action from './../../../redux/action/home';
class List extends PureComponent {
    render() {
        const { titleList,actions,page} = this.props;
        const list = titleList.toJS();
        return (
            <div>
                {list.map((item,index) => (
                <Link key={index} to="/detail">
                    <ListItem >
                        <img className="pic" src={item.imgUrl} alt="" />
                        <ListInfo>
                            <h3 className="title">{item.title}</h3>
                            <p className="desc">{item.desc}</p>
                        </ListInfo>
                    </ListItem>
                </Link>
                ))
                }
                <LoadMore onClick={()=>actions.loadMore(page)}>加载更多</LoadMore>
            </div>
        )
    }
}
const mapState = (state) => ({
    titleList: state.getIn(['homeReducer', 'articleList']),
    page:state.getIn(['homeReducer', 'page'])
})
const mapDispatch = (dispatch) =>({
    actions: bindActionCreators(action, dispatch) 
})
export default connect(mapState, mapDispatch)(List);