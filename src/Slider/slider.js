import React from 'react';
import {Carousel} from 'antd';
import picture1 from './pic/1.jpg'
import picture2 from './pic/2.jpg'
import picture3 from './pic/3.jpg'
import picture4 from './pic/4.jpg'

var SliderCss =require('./slider.css')

export default class Slider extends React.Component{
    render(){
       
        return(
        <div className={SliderCss.slider}>
         <Carousel autoplay>
          <div className={SliderCss.pic}>
         <img src={picture1} alt="" width="1200px"></img>
         </div>
         <div className={SliderCss.pic}>
         <img src={picture2} alt="" width="1200px"></img>
        </div>
        <div className={SliderCss.pic}>
        <img src={picture3} alt="" width="1200px"></img>
        </div>
        <div className={SliderCss.pic}>
        <img src={picture4} alt="" width="1200px"></img>
       </div>
       </Carousel>
      </div>
      )
    }
}