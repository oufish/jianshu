import styled from 'styled-components';
export const HomeWrapper = styled.div`
    width:960px;
    margin:0 auto;
    overflow:hidden;
`;
export const HomeLeft = styled.div`
    float:left;
    margin-left:15px;
    padding-top:30px;
    width:625px;
    .banner-img{
        width:100%;
        height:270px;
    }
`;
export const HomeRight = styled.div`
    float:right;
    width:240px;
`;
export const TopicWrapper = styled.div`
    padding:20px 0 10px;
    overflow:hidden;
    margin-left:-18px;
`;
export const TopicItem = styled.div`
    float:left;
    height:32px;
    padding-right:10px;
    margin-left:18px;
    margin-bottom:18px;
    line-height:32px;
    font-size:14px;
    color:#000;
    border:1px solid #dcdcdc;
    background:#f7f7f7;
    border-radius:4px;
    .topic-pic{
        float:left;
        width:32px;
        height:32px;
        margin-right:10px;
    }
`;