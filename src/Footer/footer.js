import React from 'react';
var FooterCss=require('./footer.css')
export default class Footer extends React.Component{
    render(){
        return(
        <div className={FooterCss.footer}>
            这是一个脚部
        </div>
         )

    }
}