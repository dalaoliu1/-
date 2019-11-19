import React from 'react';
import picture from './pic/tig.jpg'
import {Link} from  'react-router-dom'
import{Comment,Icon,Button} from 'antd';
var InterflowCss=require('./interflow.css')
export default class Interflow extends React.Component{
    render(){
        return(
        <div className={InterflowCss.interflow}>
            用户交流区(评论请打开更多进行评论)
            <Comment content="好评！" datetime="7月1日" avatar={picture} author="张鸿" >
                这个网站是真的好啊！！！</Comment>
            <Comment content="好评！" datetime="6月30日" avatar={picture} author="刘金龙" >    
                这个网站哎哟不错哦！！！</Comment>	
            <Comment content="好评！" datetime="6月29日" avatar={picture} author="蔡京" >            
                这个网站的资料着实可以！！！</Comment>
           <Link to="/Communicate"> <Button  shape="round" size="large"  className={InterflowCss.icon}>
               更多
            <Icon type="double-right"  ></Icon>
            </Button></Link>                	
        </div>
         )

    }
}