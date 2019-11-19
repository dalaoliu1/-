import React from 'react';
import { Button,Icon } from 'antd';
var  RegisterCss=require('./register.css') ;


export default class Register extends React.Component{
    render(){
        return(
            //注册页面
            <div className={RegisterCss.yes}>
            <div className={RegisterCss.login}>
            <header>
            <h1 className={RegisterCss.title}>JM</h1>
            <h2 className={RegisterCss.title}>建模变得更加简单</h2>
            </header>
            <div><Icon type="user"/><input  type="text"  placeholder="用户名:"  className={RegisterCss.one} size="40" ></input></div>
            <div><Icon type="lock"/><input type="text"  placeholder="密码:"  className={RegisterCss.one} size="40" ></input></div>
            <div>  <Icon  type="phone"/> <input type="text"  placeholder="电话:"   className={RegisterCss.one} size="40" ></input></div>
            <div><input type="text" placeholder="请输入验证码" className={RegisterCss.one}></input>
            <Button type="default"  >获取短信验证码</Button>
            </div>            
            <div>
            若没有收到短信，点击<Button type="link" size="large">这里</Button>
            </div>
            <Button className={RegisterCss.Button}>注册</Button>
            </div>
            </div>
 
        )
    }
}
