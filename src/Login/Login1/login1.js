import React from 'react';
import { Button,Icon } from 'antd';
import{Link} from 'react-router-dom';
var Login1Css =require('./login1.css')

export default class Login1 extends React.Component{
    constructor(props){
        super(props)
       this.state={
        username:'',
        password:''
       }
    }
    changeValue=e=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    login=e=>{
        //去访问服务器，登录成功
        if(this.state.username==='123'&&this.state.password==='123'){
         alert('登录成功');
         //存放
         window.localStorage.setItem("username","123");
         window.localStorage.setItem("token","11111");
         //跳转页面
         this.props.history.push('/homepage')
         

        }else{
            alert('登录失败');
        }
       //取出
        console.log(window.localStorage.getItem("username"))
      

    }
    render(){
       
        return(
            //登录页面
            <div className={Login1Css.login}>
                <header>
                <h1 className>JM</h1>
                <h2>建模变得更加简单</h2>
                </header>
                
                <div><Icon type="user"/><input  type="text"  placeholder="请输入用户名" name="username" value={this.state.username}  className={Login1Css.one} onChange={this.changeValue}></input></div>
                <div><Icon type="lock"/><input type="text" placeholder="请输入密码" name="password"  value={this.state.password}  className={Login1Css.one} onChange={this.changeValue}></input></div>
                <Button className={Login1Css.two} size="large" onClick={this.login}>登录</Button>
                <Link to="/Register"><Button className={Login1Css.two} size="large" >注册</Button></Link>
                <div>
                    
                  <a href className={Login1Css.number}>社交账号登录 </a> 
                  <a href className={Login1Css.number}>忘记密码?</a>
                  
 
                  </div>
                  </div>
 
        )
    }
}