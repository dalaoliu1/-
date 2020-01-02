import React from 'react';
import { Button,Icon, message } from 'antd';
var  RegisterCss=require('./register.css') ;

export default class Register extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    changeValue=(e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    upload = ()=>{
        var  xhr=new XMLHttpRequest()
        var data={
            "username":this.state.username,
            "password":this.state.password,
            "name":this.state.name,
            "age":this.state.age,
            "gender":this.state.gender
        }
//xhr
        xhr.open("post","/user/register")
        xhr.onreadystatechange=function(){
            if(xhr.readyState===4){
                if(xhr.status===200){
                    console.log(xhr.responseText)
                    var result =JSON.parse (xhr.responseText)
                    if(result.state===2){

                        message.info("用户名已存在")
                    }else if(result.state===1){
                        message.info("注册成功手动返回登陆")
                        
                    }
                }else{
                    message.info(xhr.status)
                }
            }
        }  
        console.log(data)
        xhr.setRequestHeader('content-type','application/json')
        xhr.send(JSON.stringify(data))

        //axios
        // Axios.post({
        //     url:"/user/register",
        //     data:JSON.stringify(data)
        // }).then(result =>{
        //     if(result.state===2){
        //         message.info("用户名已存在")
        //     }else if(result.state===1){
        //         message.info("注册成功")
        //     }
        // })
    }

    render(){
        return(
            //注册页面
            <div className={RegisterCss.yes}>
            <div className={RegisterCss.login}>
            <header>
            <h1 className={RegisterCss.title}>JM</h1>
            <h2 className={RegisterCss.title}>建模变得更加简单</h2>
            </header>
<<<<<<< HEAD
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
=======
            <div><Icon type="user"/><input  type="text"  placeholder="用户名:" 
            name="username" value={this.state.username} onChange={e=>this.changeValue(e)}
            className={RegisterCss.one} size="40" ></input></div>
           <div><Icon type="lock"/><input type="text"  placeholder="密码:" 
            name="password" value={this.state.password} onChange={e=>this.changeValue(e)}
            className={RegisterCss.one} size="40" ></input></div>
            <div>  <Icon  type="name"/> <input type="text"  placeholder="姓名:"
            name="name" value={this.state.name} onChange={e=>this.changeValue(e)}
            className={RegisterCss.one} size="40" ></input></div>
            <div>  <Icon  type="age"/> <input type="text"  placeholder="年龄:"
            name="age" value={this.state.age} onChange={e=>this.changeValue(e)}
            className={RegisterCss.one} size="40" ></input></div>
            <div>  <Icon  type="gender"/> <input type="text"  placeholder="性别:"
            name="gender" value={this.state.gender} onChange={e=>this.changeValue(e)}
            className={RegisterCss.one} size="40" ></input></div> 
            <Button  onClick={this.upload} className={RegisterCss.Button}>注册</Button>
>>>>>>> f1944424101a9780fd735cebc856b1a7da94239b
            </div>
            </div>
 
        )
    }
}
