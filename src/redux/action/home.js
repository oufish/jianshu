import * as actionTypes  from './../constants';
import axios from 'axios';
import { fromJS } from 'immutable';
const changeHomeData = (data) =>({
    type:actionTypes.CHANGE_HOME_DATA,
    data
});
const addHomeList = (data,nextPage) => ({
    type:actionTypes.ADD_HOME_LIST,
    data:fromJS(data),
    nextPage
})
export const  getHomeInfo = ()=>{
    return (dispatch) =>{
        axios.get("/json/home.json").then(res=>{
            const response = res.data.data;
            dispatch(changeHomeData(response))
        })
    }
}
export const loadMore = (page)=>{
    return (dispatch) =>{
        console.log(page)
        axios.get(`/json/homeList.json?page=${page}`).then(res=>{
            const response = res.data.data;
            dispatch(addHomeList(response,page+1))
        })
    }
}
