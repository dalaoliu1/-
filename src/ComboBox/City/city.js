import React from 'react'
import Header from './../../Header/header'
import ComboBox from './../combobox'
import {Link} from 'react-router-dom'
import img1 from './../img/10.png'
import img2 from './../img/11.png'
import img3 from './../img/12.png'
import img4 from './../img/13.png'
var CityCss=require('./city.css')
export default class City extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Link to="/HomePage" className={CityCss.reture}>首页</Link>
                <ComboBox/>
                <div className={CityCss.midden}>
                    <h1 className={CityCss.title}>城市生活垃圾清运和处理情况资源全国的数据整合</h1>
                    <div>
                        <h2 className={CityCss.title}>数据表</h2>
                        <img src={img1} alt=""></img>
                    </div>
                    <hr width='80%' className={CityCss.gap}></hr>
                    <div>
                        <h2 className={CityCss.title}>数据条形图</h2>
                        <img src={img2} alt=""></img>
                        <img src={img3} alt=""></img>
                    </div>
                    <hr width="80%" className={CityCss.gap}></hr>
                    <div>
                        <h2 className={CityCss.title}>数据圆型图</h2>
                        <img src={img4 } alt=""></img>
                    </div>
                </div>
            </div>
        )
    }

}