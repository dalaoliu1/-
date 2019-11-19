import React from 'react'
import Header from './../../Header/header'
import {Link} from 'react-router-dom'
import ComboBox from './../combobox'
import img1 from './../img/2.png'
import img2 from './../img/3.png'
import img3 from './../img/4.png'
import img4 from './../img/5.png'
var ForestCss=require('./forest.css')
export default class Forest extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Link to="/HomePage" className={ForestCss.reture}>首页</Link>
                <ComboBox/>
                <div className={ForestCss.midden}>
                    <h1 className={ForestCss.title}>森林资源全国的数据整合</h1>
                    <div>
                        <h2 className={ForestCss.title}>数据表</h2>
                        <img src={img1} alt=""></img>
                    </div>
                    <hr width='80%' className={ForestCss.gap}></hr>
                    <div>
                        <h2 className={ForestCss.title}>数据条形图</h2>
                        <img src={img2} alt=""></img>
                        <img src={img3} alt=""></img>
                    </div>
                    <hr width="80%" className={ForestCss.gap}></hr>
                    <div>
                        <h2 className={ForestCss.title}>数据圆型图</h2>
                        <img src={img4} alt=""></img>
                    </div>
                </div>
            </div>
        )
    }

}