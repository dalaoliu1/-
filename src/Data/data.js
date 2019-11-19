import React from 'react';
import {Descriptions} from 'antd';
var DataCss=require('./data.css');
export default class Data extends React.Component{
    render(){
        return(
            //数据类
            <div  className={DataCss.data}>
              <div className={DataCss.title}> 模型的类型与算法</div>
            <br />
            <br />
            <Descriptions bordered title="" border >
              <Descriptions.Item label="评价类问题"><a href>评价框架</a></Descriptions.Item>
              <Descriptions.Item label="优化类问题"><a href>优化框架</a></Descriptions.Item>
              <Descriptions.Item label="微分方程问题"><a href>微分框架</a></Descriptions.Item>
              <Descriptions.Item label="预测类模型"><a href>预测框架</a></Descriptions.Item>
              <Descriptions.Item label="图论算法"><a href>数据暂无</a></Descriptions.Item>
              <Descriptions.Item label="动态规划"><a href>数据暂无</a></Descriptions.Item>
              <Descriptions.Item label="其他类型">
              <a href>数据拟合</a>
               <br />
               <a href>最优理论三大算法</a>
                <br />
                <a href>网格算法与穷举法</a>
                <br />
                <a href>连续离散法</a>
                <br />
                <a href>数值分析法</a>
                <br />
                <a href>图像处理法</a>
                <br />
              </Descriptions.Item>
            </Descriptions>
          </div>
        );
      }
    }
    
 