import React from 'react';
import {Button} from 'antd';
import{Link} from 'react-router-dom'
import img from './Video/pic/1.jpg'
var FilmsCss=require('./films.css')
export default class Films extends React.Component{
    render(){
        return(
            <div className={FilmsCss.films}>
                <h1 className={FilmsCss.title}>基础建模教学</h1>
                <div className={FilmsCss.border}> 
                <Link to="/Educate"><img src={img} alt="" width="100%" height="150px" ></img>
                <Button type="link" size="large">0基础论文框架</Button></Link>
                    <p>主要内容有:摘要、问题分析、问题重述、问题假设、模型的建立与求解、评价与推广、文献参考、附录等写作方法。</p>
                    
    
                </div>
                <div className={FilmsCss.border}> 
                <Link to="/Video"><img src={img} alt="" width="100%" height="150px" ></img><Button type="link" size="large">数据开放课程</Button></Link>
                    
                    
                    <p>主要内容有:已经上线的与数学建模有关的的中国大学开放课程，内含国防科技大学吴孟达教授、东南大学刘继军教授、电子科技大学徐全智教授等讲解。</p>
                    
    
                </div>
                <div className={FilmsCss.border}> 
                <Link to="/Match"><img src={img} alt="" width="100%" height="150px" ></img>
                    <Button type="link" size="large">数模比赛简介</Button></Link>
                    <p>主要内容有:五一数学建模、全国大学生数学建模、研究生数学建模、美国大学生数学建模等数模比赛的简单介绍。</p>
                  
                </div>
                
            </div>
             )

    }
}
