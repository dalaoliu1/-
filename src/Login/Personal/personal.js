import React from 'react';
import {Menu,Icon,Button,Input} from 'antd';
import img from './../../Header/pic/tig.jpg'
var PersonalCss =require('./personal.css');
const{SubMenu}=Menu;
export default class Personal extends React.Component{
    handleClick = e => {
        console.log('click ', e);
      };
    render(){
        return(
            <div>
                <div className={PersonalCss.personal}>个人中心</div>
                <div className={PersonalCss.bq}>
                <Menu
        onClick={this.handleClick}
        style={{ width: 400, height:800 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="mail" />
              <span>Navigation One</span>
            </span>
          }
        >
          <Menu.ItemGroup key="g1" title="Item 1" >
            <Menu.Item key="1"className={PersonalCss.leftword}>个人资料</Menu.Item>
            <Menu.Item key="2" className={PersonalCss.leftword}>收藏</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title="Item 2">
            <Menu.Item key="3">消息</Menu.Item>
            <Menu.Item key="4">浏览记录</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="appstore" />
              <span>Navigation Two</span>
            </span>
          }
        >
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu
          key="sub4"
          title={
            <span>
              <Icon type="setting" />
              <span>Navigation Three</span>
            </span>
          }
        >
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
       </div>
           <div className={PersonalCss.kown}>昵称:<Input id="" ></Input>
            头像上传:
            <img src={img} alt="" className={PersonalCss.pic}></img>
            <Button>
            <Icon type="upload" /> Click to Upload
           </Button>
           <div className={PersonalCss.font}>
               电话号码:<Input id="" width="10px"></Input> 
               </div>
            <div className={PersonalCss.font}>
               邮箱:<Input id="" ></Input>
               </div>
               <div className={PersonalCss.font}>
               个人签名:<Input id="" ></Input>
               </div>
           </div>
          
           
       
       </div>      
         
    
           
        )
    }
}