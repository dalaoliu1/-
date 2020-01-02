import React from 'react';
import { Button,Icon,Radio, List } from 'antd';
import Axios from 'axios';
var  RegisterCss=require('./register.css') ;

const listitem=List.item
export default class Register extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    changValue=(e)=>{
        this.setState({
            [e.targat.name]:e.target.value
        })  
    }
    upload=()=>{
        var data={
            "username":this.state.username,
            "password":this.state.password,
            "sex":this.state.sex,
        }
        
    
        Axios.post({
            url:"/user/register",
            date:JSON.stringify(data),
        })//判断
    }
    render(



    ){
        return(
            //注册页面
            <div className={RegisterCss.yes}>
            <div className={RegisterCss.login}>
            <header>
            <h1 className={RegisterCss.title}>JM</h1>
            <h2 className={RegisterCss.title}>建模变得更加简单</h2>
            </header>
            <div><Icon type="user"/><input  type="text"  placeholder="用户名:"  className={RegisterCss.one} size="40" name="username" value={this.state.username}  onChange={e=>this.changValue(e)}></input></div>
            <div><Icon type="lock"/><input type="text"  placeholder="密码:"  className={RegisterCss.one} size="40" value={this.state.password} name="password" onChange={e=>this.changValue(e)}></input></div>
            <div>  <Icon  type="phone"/> <input type="text"  placeholder="电话:"   className={RegisterCss.one} size="40" value={this.state.phone} name="phone" onChange={e=>this.changValue(e)}></input></div>
            <listitem>
            <span>用户性别：</span>
            <Radio>男</Radio>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Radio>女</Radio>
            </listitem>
            
            <div><input type="text" placeholder="请输入验证码" className={RegisterCss.one}></input>
            <Button type="default"  >获取短信验证码</Button>
            </div>            
            <div>
            若没有收到短信，点击<Button type="link" size="large">这里</Button>
            </div>
            <Button onClick={this.upload}>注&nbsp;&nbsp;册</Button>
            </div>
            </div>
 
        )
    }
}
