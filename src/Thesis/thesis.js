import React from 'react';
import { Tabs,Button,Icon} from 'antd';
const TabPane = Tabs.TabPane;


var ThesisCss=require('./thesis.css');
export default class Thesis extends React.Component{
    render(){ 
        return(
            //优秀论文模块
        <div className={ThesisCss.thesis}>
               优秀论文
             <Tabs defaultActiveKey="1" size="large">
                <TabPane tab="五一数学建模优秀论文"  key="1"> 
                <Button className={ThesisCss.Button} href="http://51mcm.cumt.edu.cn/18/03/c14143a530435/page.htm"><Icon type="upload" />2019优秀论文</Button>
                <tr></tr>
                <Button className={ThesisCss.Button} href="http://51mcm.cumt.edu.cn/13/52/c14055a463698/page.htm"><Icon type="upload" />2018优秀论文</Button>
                <tr></tr>
                <Button className={ThesisCss.Button}  href="http://51mcm.cumt.edu.cn/c9/4a/c14066a444746/page.htm" ><Icon type="upload" />2017优秀论文</Button></TabPane>
                <TabPane tab="全国大学生数学建模优秀论文" key="2">
                <Button className={ThesisCss.Button}  href=""><Icon type="upload" />2019优秀论文</Button>
                <tr></tr>
                <Button className={ThesisCss.Button}  href=""><Icon type="upload" />2018优秀论文</Button>
                <tr></tr>
                <Button className={ThesisCss.Button }  href=""><Icon type="upload" />2017优秀论文</Button></TabPane>
                <TabPane tab="美国大学生数学建模优秀论文" key="3">
                <Button className={ThesisCss.Button}  href=""><Icon type="upload" />2019优秀论文</Button>
                <tr></tr>
                <Button className={ThesisCss.Button}  href=""><Icon type="upload" />2018优秀论文</Button>
                <tr></tr>
                <Button className={ThesisCss.Button}  href=""><Icon type="upload" />2017优秀论文</Button></TabPane>

            </Tabs>

           
          
       </div>
         )

    }
}
