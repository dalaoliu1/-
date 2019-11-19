import React from 'react';
var VideoCss=require("./video.css");

export default class Video extends React.Component{
    render(){
        return(
            <div className={VideoCss.out}>
            <div className={VideoCss.video}>
               <div className={VideoCss.title}>数模开放课程</div>
               <hr></hr>
               <div>以下是已经上线的与数学建模有关的中国大学开放课程，欢迎大家访问，如有遗漏，或有任何问题，可以在本站留言。</div>
               <div>视频公开课:数学建模————从自然走向理性之路</div>
               <ul>
                   <li>主讲人：国防科技大学吴孟达教授</li>
                   <li>爱课程：<a href="http://www.icourses.edu.cn/details/90002V001">http://www.icourses.edu.cn/details/90002V001</a></li>
                   <li>网易镜像：<a href="http://v.163.com/special/cuvocw/shuxuejianmo.html">http://v.163.com/special/cuvocw/shuxuejianmo.html</a></li>
                   </ul>
                <div>资源共享课：数学建模与数学实验</div>
                <ul>
                    <li>主讲人：国防科技大学吴孟达教授</li>
                    <li>爱课程：<a href="http://www.icourses.cn/coursestatic/course_3271.html">http://www.icourses.cn/coursestatic/course_3271.html</a></li>
                    </ul>
                <div>资源共享课：数学建模与数学实验</div>
                <ul> 
                    <li>主讲人：东南大学刘继军教授</li>
                    <li>爱课程：<a href="http://www.icourses.cn/coursestatic/course_3256.html">http://www.icourses.cn/coursestatic/course_3256.html</a></li>
                    </ul>
                <div>资源共享课：数学建模</div>

                <ul> 
                    <li>主讲人：电子科技大学徐全智教授</li>
                    <li>爱课程：<a href="http://www.icourses.cn/coursestatic/course_4137.html">http://www.icourses.cn/coursestatic/course_4137.html</a></li>
                    </ul>
                 </div>
            </div>
        )
    }
}