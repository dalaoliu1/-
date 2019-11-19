import React from 'react'
import { Menu, Dropdown, Icon} from 'antd'
import img from './img/1.jpg'
import {Link} from 'react-router-dom'
var ComboBoxCss = require('./combobox.css')

export default class ComboBox extends React.Component{
    render(){
          const menu=(
              <link></link>
          )
          const menu1=(
            <Menu>
            <Link to="/forest"><Menu.Item key="1">1.森林资源</Menu.Item></Link>
            <Link to="/afforest"><Menu.Item key="2">2.造林面积</Menu.Item></Link>
            <Link to="/city"><Menu.Item key="3">3.城市生活垃圾清运和处理情况</Menu.Item></Link>
            <Link><Menu.Item key="4">4.其他</Menu.Item></Link>
            
        </Menu>
          )
          const menu2=(
            <Menu>
            <Link to="/forest"><Menu.Item key="1">1.国内生产总值</Menu.Item></Link>
            <Link to="/afforest"><Menu.Item key="2">2.居民消费水平</Menu.Item></Link>
            <Link to="/city"><Menu.Item key="3">3.国际支出平衡</Menu.Item></Link>
            <Link><Menu.Item key="4">4.其他</Menu.Item></Link>
            
        </Menu>
          )
          const menu3=(
            <Menu>
            <Link to="/forest"><Menu.Item key="1">1.人口年龄结构和抚养比</Menu.Item></Link>
            <Link to="/afforest"><Menu.Item key="2">2.人口平均预期寿命</Menu.Item></Link>
            <Link to="/city"><Menu.Item key="3">3.各层次的人员平均收入</Menu.Item></Link>
            <Link><Menu.Item key="4">4.其他</Menu.Item></Link>
            
        </Menu>
          )
          const menu4=(
            <Menu>
            <Link to="/forest"><Menu.Item key="1">1.工业产品产量</Menu.Item></Link>
            <Link to="/afforest"><Menu.Item key="2">2.工业流动资产合计</Menu.Item></Link>
            <Link to="/city"><Menu.Item key="3">3.固定资产合计</Menu.Item></Link>
            <Link><Menu.Item key="4">4.其他</Menu.Item></Link>
            
        </Menu>
          )
          const menu5=(
            <Menu>
            <Link to="/forest"><Menu.Item key="1">1.住宿和餐饮业营业额</Menu.Item></Link>
            <Link to="/afforest"><Menu.Item key="2">2.住宿和餐饮业餐饮营业面积</Menu.Item></Link>
            <Link to="/city"><Menu.Item key="3">3.住宿和餐饮业年末从业人数</Menu.Item></Link>
            <Link><Menu.Item key="4">4.其他</Menu.Item></Link>
            
        </Menu>
          )
          const menu6=(
            <Menu>
            <Link to="/forest"><Menu.Item key="1">1.旅游业发展情况</Menu.Item></Link>
            <Link to="/afforest"><Menu.Item key="2">2.国内旅游人均花费</Menu.Item></Link>
            <Link to="/city"><Menu.Item key="3">3.国内游客(百万人次)</Menu.Item></Link>
            <Link><Menu.Item key="4">4.其他</Menu.Item></Link>
            
        </Menu>
          )
          const menu7=(
            <Menu>
            <Link><Menu.Item key="1">1.文化</Menu.Item></Link>
            <Link><Menu.Item key="2">2.科学</Menu.Item></Link>
            <Link><Menu.Item key="3">3.教育</Menu.Item></Link>
            <Link><Menu.Item key="4">4.其他</Menu.Item></Link>
            
        </Menu>
          )
        return(
          
            <div className={ComboBoxCss.all}>
                 <Dropdown overlay={menu} className={ComboBoxCss.Button}>
                <a  href>
                <img src={img} alt="" width="20px" height="20px"></img>
                数据
                 </a>
                 </Dropdown>
                <Dropdown overlay={menu1} className={ComboBoxCss.Button}>
                <a href>
                <img src={img} alt="" width="20px" height="20px"></img>
                 环境问题 
                 <Icon type="down" />
                 </a>
                 </Dropdown>
                 <Dropdown overlay={menu2} className={ComboBoxCss.Button}>
                <a href>
                <img src={img} alt="" width="20px" height="20px"></img>
                 GDP 
                 <Icon type="down" />
                 </a>
                 </Dropdown>
                 
                 <Dropdown overlay={menu3} className={ComboBoxCss.Button}>
                <a href>
                <img src={img} alt="" width="20px" height="20px"></img>
                 人均 
                 <Icon type="down" />
                 </a>
                 </Dropdown>
                 <Dropdown overlay={menu4} className={ComboBoxCss.Button}>
                <a href>
                <img src={img} alt="" width="20px" height="20px"></img>
                工业
                 <Icon type="down" />
                 </a>
                 </Dropdown>
                 <Dropdown overlay={menu5} className={ComboBoxCss.Button}>
                <a href>
                <img src={img} alt="" width="20px" height="20px"></img>
                住宿和饮食产业
                 <Icon type="down" />
                 </a>
                 </Dropdown>
                 <Dropdown overlay={menu6} className={ComboBoxCss.Button}>
                <a href>
                <img src={img} alt="" width="20px" height="20px"></img>
                旅游业
                 <Icon type="down" />
                 </a>
                 </Dropdown>
                 <Dropdown overlay={menu7} className={ComboBoxCss.Button}>
                <a href>
                <img src={img} alt="" width="20px" height="20px"></img>
                其余
                 <Icon type="down" />
                 </a>
                 </Dropdown>
                 
            </div>
        )
    }
}