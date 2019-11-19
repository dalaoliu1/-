import React from 'react';
import Header from './../Header/header';
import Ad from './../Ad/ad';
import Slider from './../Slider/slider';
import Login from './../Login/login';
import ComboBox from './../ComboBox/combobox';
import Data from './../Data/data';
import Thesis from './../Thesis/thesis';
import Films from './../Films/films';
import Interflow from './../Interflow/interflow';
import Footer from './../Footer/footer';
var HomePageCss=require('./homePage.css')


export default class HomePage extends React.Component{
    render(){
        return(
            <div>
            <div className={HomePageCss.img}>hello world
            <Header/>
               <Ad/>
               <Slider/>
               <Login/>
               <ComboBox/>
               <Data/>
               <Thesis/>
               <Films/>
               <Interflow/>
               <Footer/>

            </div>
            </div>
        )
    }
}