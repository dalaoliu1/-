import React from 'react';
import{Comment, Avatar, Form, Button, List, Input} from 'antd';
import picture from './../pic/tig.jpg'
var CommunicateCss =require("./communicate.css");
const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <div>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Add Comment
      </Button>
    </Form.Item>
  </div>
);


export default class Communicate extends React.Component{
    state = {
        comments: [],
        submitting: false,
        value: '',
      };
    
      handleSubmit = () => {
        if (!this.state.value) {
          return;
        }
    
        this.setState({
          submitting: true,
        });
    
        setTimeout(() => {
          this.setState({
            submitting: false,
            value: '',
            comments: [
              {
                author: '帅 哥',
                avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562330964570&di=af1fe686c43483471bb3e3217bf93924&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F03%2F20180903201822_okifk.thumb.700_0.jpg',
                content: <p>{this.state.value}</p>,
              },
              ...this.state.comments,
            ],
          });
        }, 1000);
      };
    
      handleChange = e => {
        this.setState({
          value: e.target.value,
        });
      };
    
    render(){
        const { comments, submitting, value } = this.state;
        return(
          <div className={CommunicateCss.color}>
            <div className={CommunicateCss.Communicate}>
                <h1 className={CommunicateCss.title}>用户评论区</h1>
                <div className={CommunicateCss.interflow}>
                 用户交流区
            <Comment content="好评！" datetime="7月1日" avatar={picture} author="张鸿" >
                这个网站是真的好啊！！！</Comment>
            <Comment content="好评！" datetime="6月30日" avatar={picture} author="刘金龙" >    
                这个网站哎哟不错哦！！！</Comment>	
            <Comment content="好评！" datetime="6月29日" avatar={picture} author="蔡京" >            
                这个网站的资料着实可以！！！</Comment></div>
            <div>
            {comments.length > 0 && <CommentList comments={comments} />}
            <Comment
              avatar={
                <Avatar
                  src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562331279190&di=8b25ab32ee6b931b513cbb62e7c111b2&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F17%2F20180917224042_upnvp.thumb.700_0.jpg"
                  alt="帅 哥"
                />
              }
              content={
                <Editor
                  onChange={this.handleChange}
                  onSubmit={this.handleSubmit}
                  submitting={submitting}
                  value={value}
                />
              }
            />
          </div>
      </div>
      </div>


        )}
}
