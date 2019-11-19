import React from 'react'
import Header from './../../Header/header'
import {Link} from 'react-router-dom'
import ComboBox from './../combobox'
import img1 from './../img/6.png'
import img2 from './../img/7.png'
import img3 from './../img/8.png'
import img4 from './../img/9.png'
var AfforestCss=require('./afforest.css')
export default class Afforest extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Link to="/HomePage" className={AfforestCss.reture}>首页</Link>
                <ComboBox/>
                <div className={AfforestCss.midden}>
                    <h1 className={AfforestCss.title}>造林资源全国的数据整合</h1>
                    <div>
                        <h2 className={AfforestCss.title}>数据表</h2>
                        <img src={img1} alt=""></img>
                    </div>
                    <hr width='80%' className={AfforestCss.gap}></hr>
                    <div>
                        <h2 className={AfforestCss.title}>数据条形图</h2>
                        <img src={img2} alt=""></img>
                        <img src={img3} alt=""></img>
                    </div>
                    <hr width="80%" className={Afforest.gap}></hr>
                    <div>
                        <h2 className={AfforestCss.title}>数据圆型图</h2>
                        <img src={img4} alt=""></img>
                    </div>
                </div>
            </div>
        )
    }

}