import React from 'react';
import {Button} from 'antd';
var EducateCss=require('./educate.css');

export default class Educate extends React.Component{
    render(){
        return(
            <div>
                 <div className={EducateCss.out}>
            <div className={EducateCss.educate}>
               <div className={EducateCss.title}>0基础教学写作框架</div>
               <hr></hr>
               <div><Button size="large">摘要:</Button><p>1、写作主要内容有:问题、方法、模型名称、算法、结果、评价，问题背景的描述写个两到三排，解决问题写个两到三排，
               以及优缺点、创新、评价，关键词</p>
               <p>2、摘要注意事项:第一篇幅A4纸的3/4,第二不能出现数学式子、图、表,第三关键词(3-5个)</p></div>
               <hr></hr>
               <div><Button size="large">问题重述:</Button><p>用自己的语言重述问题</p></div>
               <hr></hr>
               <div><Button size="large">问题分析:</Button><p>问题，拟使用方法，拟建立模型，拟使用算法。或者是将每个问题分开进行分类讨论如何解决，将其写上去，组织优美语言</p></div>
               <hr></hr>
               /<div><Button size="large">问题假设:</Button><p>(合理)基于两个方面，一个是简化模型，二个是简化运算，注意前呼后应、且3-5个</p></div>
               <hr></hr>
               <div><Button size="large">符号说明:</Button><p>尽量使用常规符号，下表不能使用中文，用表格的形式写出符号以及意义</p></div>
               <hr></hr>
               <div><Button size="large">模型建立与求解:</Button><p>根据问题的实际问题，进行选择框架建模，有3种基本框架，一种是评价，一种是优化，一种是微分方程模型，寻其格式进行数学建模，主要是需要有模型。</p></div>
               <hr></hr>
               <div><Button size="large">评价与推广:</Button><p>写出一些数学建模过程的优点与缺点，然后可以写一些如何做弥补这些缺陷，或者是足以可以推广的优点等。</p></div>
               <hr></hr>
               <div><Button>参考文献:</Button><p>当你进行数学建模论文写作，或者是数学建模模型建立的时候，参考的一些方法书或者是建模书或者是一些文献，这些需要标注。</p></div>
               <hr></hr>
               <div><Button>附录:</Button>放一些计算代码和一些需要的表格，文章中是不允许出现很多的表格，但是可以放部分，所以多出的全都放在附录，所以附录一般放程序和表格。</div>





               
               </div>
            </div>
            </div>
        )
    }
}

