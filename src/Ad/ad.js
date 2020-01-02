import React from 'react'
import {Button,Icon, message} from 'antd';
import {Link} from 'react-router-dom';
import {axios} from 'axios'
var AdCss =require('./ad.css');


export default class Ad extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    changeValue=(e)=>{
        this.setState({
            [e.target.Ad]:e.target.value
        })
    }
    upload = ()=>{
        var data={
            "ad_name":this.state.ad_name,
            "ad_id":this.state.ad_id,
            "ad_contect":this.state.ad_contect,
        }
        var xhr = new XMLHttpRequest()
    
        xhr.open("get","ads/adadds")
        xhr.onreadystatechange=function (params) {
            if(xhr.readyState===4){
                if(xhr.status===200){
                    console.log(xhr.responseText)
                    var result = JSON.parse(xhr.responseText)
                    if(result.state===2){
                        message.info("更新失败")
                    }else if (result.state===1) {
                        message.info("更新")
                    }
                }else{
                    message.info(xhr.status)

                }
            }
        }
        xhr.send(JSON.stringify(data))
        axios.post({
            url:"/ads/adremove",
            data:JSON.stringify(data)
        }).then(Response=>Response.JSON())
        .then(result=>{
            if(result.state===3){
                message.info("该广告已被修改")
            }else if(result.state===4){
                message.info("没有修改成功")
            }
        }).catch(e=>{
            message.error(e);
        })
        axios.post({
            url:"ads/increase",
            data:JSON.stringify(data)
          }).then(Response=>Response.JSON())
          .then(result=>{
              if(result.state===1){
                  message.info("广告能被查寻")
              }else if(result.state===2){
                  message.info("未能查询到")
              }
          }).catch(e=>{
              message.error(e);
          })    
    
       
    }
    


    render(){
        return(
        <div className={AdCss.ad} >
            新闻公告
            <Link to="/News"><Button icon="double-right" size="default" type="dashed" name="ad1" value={this.state.ad1} onChange={e=>this.changeValue(e)} >今年5.1建模比赛已经结束，接近下是国赛</Button>
            <Button icon="double-right" size="default" type="dashed"name="ad2" value={this.state.ad2} onChange={e=>this.changeValue(e)}>今年的国赛即将在9月份开始，准备好了吗？</Button>
            <Button icon="double-right" size="default" type="dashed" name="ad3" value={this.state.ad3} onChange={e=>this.changeValue(e)}>今年国赛的培训会在开学之前提前培训哟！</Button></Link>
            <Link to="/News"><div className={AdCss.icon}> <Button  shape="round" size="middle" >
               更多
                <Icon type="double-right"></Icon>
                <Button onClick={this.upload}>  修改</Button>
            </Button></div></Link>     
        </div>
         )

    }}
