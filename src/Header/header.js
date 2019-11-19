import React from 'react'
import {Button} from 'antd';
import img1 from  './pic/logo.png'
import pitu from  './pic/logo1.gif'
import{Link} from 'react-router-dom';


var HeaderCss =require('./header.css')

export default class Header extends React.Component{
    render(){
        return(
            <div>
              
             <div className={HeaderCss.header} >
                 <div className={HeaderCss.title}>建模数据分享网</div>
                 <div className={HeaderCss.logo}>
                 <Link to="/"><img src={img1} alt="" ></img></Link>
                </div>
                <div className={HeaderCss.pitu}>
                 <img src={pitu} alt="" ></img>
                </div>
                <div className={HeaderCss.Button}>
                <Button type="primary" icon="search" shape="round" block="" size="large">
                <input className={HeaderCss.input} placeholder="请输入查找内容"></input>
               </Button>
                    </div>
              </div>
              
              
                
                            
             
            </div>
        )
    }
}