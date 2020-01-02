import React from 'react';
import { Button,Icon,message} from 'antd';
import{Link} from 'react-router-dom';
import{axios} from 'axios';
var Login1Css =require('./login1.css')
export default class Login1 extends React.Component{
    state={
        username:'',
        password:'',
    }
    login=()=>{
        this.props.login(this.state)
    }
    handleChange=(name,val)=>{
        this.setState({
            [name]:val
        })
    }
    upload=()=>{
        var data={
            "username":this.state.username,
            "password":this.state.password,
        }
        axios.post({
            url:"/user/personal",
            data:JSON.stringify(data)
          }).then(Response=>Response.JSON())
          .then(result=>{
            if(result.state=1){
                alert("登录成功")
                message.info("用户登录成功")
            }else if(result.state==2){
                alert("登录失败，密码错误")
                message.info("密码错误")
            }else if(result.state==3){
                alert("账号错误")
              message.info("账号错误")
            }
          }).catch(e=>{
              message.error(e);
          })
        }
    

    render(){
        return(
            //登录页面
            <div className={Login1Css.login}>
                <header>
                <h1 className>JM</h1>
                <h2>建模变得更加简单</h2>
                </header>
                
                <div><Icon type="user"/><input  type="text"  placeholder="请输入用户名" className={Login1Css.one} onChange={val=>{this.changeValue('username',val)}}></input></div>
                <div><Icon type="lock"/><input type="text" placeholder="请输入密码" className={Login1Css.one} onChange={val=>{this.changeValue('password',val)}}></input></div>
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
