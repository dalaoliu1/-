import React from 'react'
import {Button,Icon} from 'antd';
import {Link} from 'react-router-dom';
var AdCss =require('./ad.css');


export default class Ad extends React.Component{
    render(){
        return(
        <div className={AdCss.ad} >
            新闻公告
            <Link to="/News"><Button icon="double-right" size="default" type="dashed" >今年5.1建模比赛已经结束，接近下是国赛</Button>
            <Button icon="double-right" size="default" type="dashed" >今年的国赛即将在9月份开始，准备好了吗？</Button>
            <Button icon="double-right" size="default" type="dashed" >今年国赛的培训会在开学之前提前培训哟！</Button></Link>
            <Link to="/News"><div className={AdCss.icon}> <Button  shape="round" size="middle" >
               更多
            <Icon type="double-right"></Icon>
            </Button></div></Link>     
        </div>
         )

    }
}