import React from 'react';
import {Button} from 'antd'
import pic from './../Header/pic/tig.jpg';

import{Link} from 'react-router-dom';
var LoginCss =require('./login.css');

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:window.localStorage.getItem("username")
        }
    }
    logout=e=>{
        window.localStorage.removeItem("username")
        window.localStorage.removeItem("token")
        this.setState({
            username:null
        })

    }

    render(){
        let userProfile=null;
        let userlog=null;
        let userpersonal=null;
        let username=window.localStorage.getItem("username")
        if(username!=null){
         userpersonal= <Link to="/homepage/Personal"><Button type="primary">个人中心</Button></Link>
         userProfile=<Link to="/Login1"> <Button type="primary">{username}</Button></Link>
         userlog=<Button type="primary" onClick={this.logout}>登出</Button>
         
         }else{
           userProfile= <Link to="/Login1"> <Button type="primary">登陆</Button></Link>
           userlog=<Link to="/Register"><Button type="primary">注册</Button></Link>
        }
        return(
            <div className={LoginCss.login}>
                 <div className={LoginCss.title}>

                  用户使用须知
                <div className={LoginCss.picture}>
                <img src={pic} alt=""></img>
                <div>
                 {userProfile}
                 {userlog}
                 {userpersonal}
             </div> 
            </div>
            </div>   
            </div>     
       )
   }
}