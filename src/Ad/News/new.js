import React from 'react';
import Header from './../../Header/header'
import {Tabs,Button} from 'antd'
import {Link} from 'react-router-dom'
const TabPane=Tabs.TabPane;
var NewsCss=require('./new.css')
export default class News extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <div className={NewsCss.impart}>
                <Link to="/homepage"> <Button Icon="double-right" type="link">首页</Button></Link>
                    <Tabs defaultActiveKey="1" size='large' className={NewsCss.Tabs}>
                        <TabPane tab="建模" key="1">
                            <div className={NewsCss.article}>
                            <Link type="link" className={NewsCss.title}>邀请函：第二届国际数学建模挑战赛（IMMC 2016）  </Link>
                        <hr></hr>
                        <p align="left" className={NewsCss.p}>  
                          我们热诚邀请来自中国大陆、台湾、香港及澳门的中学，参加将于2016年3月17日－5月9日
                        期间举行的第二届国际数学建模挑战赛（IMMC 2016）。国际数学建模挑战赛（IMMC或者IM2C）是一项面向中学生的国际性新型数学建模竞赛，其创办机构
                        是美国数学及其应用联合会及香港儒莲教科文机构，竞赛宗旨在于鼓励参赛者应用数学建模探索和解决</p>
                        <div  className={NewsCss.time}>发布时间：2016年2月12日</div>
                        <div  className={NewsCss.author}>作者：无名王者</div>
                        
                        </div>
                        <div className={NewsCss.article}>
                            <Link type="link"  className={NewsCss.title}>  首届（中学生）国际数学建模挑战赛举行 </Link>
                        <hr></hr>
                        <p align="left"  className={NewsCss.p}>  
                        过去20多年以来，大学生数学建模教学与竞赛活动在世界许多国家和地区受到越来越多的关注，它对学生创新能力的培养和综合素质的提高产生了非常积极的作用。数学建模的训练体现了应用驱动数学发展的理念，而这种理念应当适时向中学教育延伸。荷兰、丹麦、德国、俄罗斯、美国和新加坡等许多国家有各种形式的探索，国内北京和上海等地区也有中学生数学建模竞赛等活动。</p>
                        <div  className={NewsCss.time}>发布时间：2016年2月12日</div>
                        <div  className={NewsCss.author}>作者：无名王者</div>
                        </div>
                        <div className={NewsCss.article}>
                            <Link type="link"  className={NewsCss.title}> 推荐：数学模型中的甲型H1N1流感  </Link>
                        <hr></hr>
                        <p align="left"  className={NewsCss.p}>  
                        科学松鼠会发表了一篇关于甲型H1N1流感与数学模型的文章：数学模型中的甲型H1N1流感。文章介绍了美国印第安纳大学信息学院的一个研究团队关于“全球疾病传播模型”（GLEaM，Global Epidemic and Mobility Modeler）的研究，以及模型应用于此次甲型H1N1流感的结果，有兴趣的朋友可以去看看。</p>
                        <div  className={NewsCss.time}>发布时间：2016年2月12日</div>
                        <div  className={NewsCss.author}>作者：无名王者</div>
                        
                        </div>
                        </TabPane>
                        
                        <TabPane tab="头条" key="2">
                            <div className={NewsCss.article}>
                            <Link type="link" className={NewsCss.title}>邀请函：第二届国际数学建模挑战赛（IMMC 2016）  </Link>
                        <hr></hr>
                        <p align="left" className={NewsCss.p}>  
                          我们热诚邀请来自中国大陆、台湾、香港及澳门的中学，参加将于2016年3月17日－5月9日
                        期间举行的第二届国际数学建模挑战赛（IMMC 2016）。国际数学建模挑战赛（IMMC或者IM2C）是一项面向中学生的国际性新型数学建模竞赛，其创办机构
                        是美国数学及其应用联合会及香港儒莲教科文机构，竞赛宗旨在于鼓励参赛者应用数学建模探索和解决</p>
                        <div  className={NewsCss.time}>发布时间：2016年2月12日</div>
                        <div  className={NewsCss.author}>作者：无名王者</div>
                        
                        </div>
                        <div className={NewsCss.article}>
                            <Link type="link"  className={NewsCss.title}>  首届（中学生）国际数学建模挑战赛举行 </Link>
                        <hr></hr>
                        <p align="left"  className={NewsCss.p}>  
                        过去20多年以来，大学生数学建模教学与竞赛活动在世界许多国家和地区受到越来越多的关注，它对学生创新能力的培养和综合素质的提高产生了非常积极的作用。数学建模的训练体现了应用驱动数学发展的理念，而这种理念应当适时向中学教育延伸。荷兰、丹麦、德国、俄罗斯、美国和新加坡等许多国家有各种形式的探索，国内北京和上海等地区也有中学生数学建模竞赛等活动。</p>
                        <div  className={NewsCss.time}>发布时间：2016年2月12日</div>
                        <div  className={NewsCss.author}>作者：无名王者</div>
                        </div>
                        <div className={NewsCss.article}>
                            <Link type="link"  className={NewsCss.title}> 推荐：数学模型中的甲型H1N1流感  </Link>
                        <hr></hr>
                        <p align="left"  className={NewsCss.p}>  
                        科学松鼠会发表了一篇关于甲型H1N1流感与数学模型的文章：数学模型中的甲型H1N1流感。文章介绍了美国印第安纳大学信息学院的一个研究团队关于“全球疾病传播模型”（GLEaM，Global Epidemic and Mobility Modeler）的研究，以及模型应用于此次甲型H1N1流感的结果，有兴趣的朋友可以去看看。</p>
                        <div  className={NewsCss.time}>发布时间：2016年2月12日</div>
                        <div  className={NewsCss.author}>作者：无名王者</div>
                        
                        </div>
                        </TabPane>
                        <TabPane tab="学术要闻" key="3">
                            <div className={NewsCss.article}>
                            <Link type="link" className={NewsCss.title}>邀请函：第二届国际数学建模挑战赛（IMMC 2016）  </Link>
                        <hr></hr>
                        <p align="left" className={NewsCss.p}>  
                          我们热诚邀请来自中国大陆、台湾、香港及澳门的中学，参加将于2016年3月17日－5月9日
                        期间举行的第二届国际数学建模挑战赛（IMMC 2016）。国际数学建模挑战赛（IMMC或者IM2C）是一项面向中学生的国际性新型数学建模竞赛，其创办机构
                        是美国数学及其应用联合会及香港儒莲教科文机构，竞赛宗旨在于鼓励参赛者应用数学建模探索和解决</p>
                        <div  className={NewsCss.time}>发布时间：2016年2月12日</div>
                        <div  className={NewsCss.author}>作者：无名王者</div>
                        
                        </div>
                        <div className={NewsCss.article}>
                            <Link type="link"  className={NewsCss.title}>  首届（中学生）国际数学建模挑战赛举行 </Link>
                        <hr></hr>
                        <p align="left"  className={NewsCss.p}>  
                        过去20多年以来，大学生数学建模教学与竞赛活动在世界许多国家和地区受到越来越多的关注，它对学生创新能力的培养和综合素质的提高产生了非常积极的作用。数学建模的训练体现了应用驱动数学发展的理念，而这种理念应当适时向中学教育延伸。荷兰、丹麦、德国、俄罗斯、美国和新加坡等许多国家有各种形式的探索，国内北京和上海等地区也有中学生数学建模竞赛等活动。</p>
                        <div  className={NewsCss.time}>发布时间：2016年2月12日</div>
                        <div  className={NewsCss.author}>作者：无名王者</div>
                        </div>
                        <div className={NewsCss.article}>
                            <Link type="link"  className={NewsCss.title}> 推荐：数学模型中的甲型H1N1流感  </Link>
                        <hr></hr>
                        <p align="left"  className={NewsCss.p}>  
                        科学松鼠会发表了一篇关于甲型H1N1流感与数学模型的文章：数学模型中的甲型H1N1流感。文章介绍了美国印第安纳大学信息学院的一个研究团队关于“全球疾病传播模型”（GLEaM，Global Epidemic and Mobility Modeler）的研究，以及模型应用于此次甲型H1N1流感的结果，有兴趣的朋友可以去看看。</p>
                        <div  className={NewsCss.time}>发布时间：2016年2月12日</div>
                        <div  className={NewsCss.author}>作者：无名王者</div>
                       
                        </div>
                        </TabPane>
                        </Tabs>
                </div>
            </div>
        )
    }
}

