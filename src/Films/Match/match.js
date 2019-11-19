import React from 'react';
var MatchCss=require('./match.css');

export default class Match extends React.Component{
    render(){
        return(
         <div className={MatchCss.out}>
            <div className={MatchCss.match}>
               <div className={MatchCss.title}>数模比赛简介</div>
               <hr></hr>
                   <div>
                       <h2>全国大学生数学建模竞赛</h2>
                       <p className={MatchCss.size}>
                       　　全国大学生数学建模竞赛（China Undergraduate Mathematical Contest in Modeling）是国家教委高教司和中国工业与应用数学学会共同主办的面向全国大学生的群众性科技活动，目的在于激励学生学习数学的积极性，提高学生建立数学模型和运用计算机技术解决实际问题的综合能力，鼓励广大学生踊跃参加课外科技活动，开拓知识面，培养 创造精神及合作意识，推动大学数学教学体系、教学内容和方法的改革。</p>
                       <hr></hr>
                       <h2>全国研究生数学建模竞赛</h2>
                       <p  className={MatchCss.size}>
                       　　全国研究生数学建模竞赛（National Post-Graduate Mathematical Contest in Modeling）是全国部分高校共同发起的面向全国在校研究生的群众性科技竞赛活动，目的在于激发研究生群体的活力和广大研究生学习的兴趣，提高研究生建立数学模型和运用计算机解决实际问题的综合能力，拓宽知识面，培养创新精神及团队合作意识，推动研究生教学改革，增进各高校之间的交流与合作。
                           竞赛题目一般来自工程技术和管理科学等方面的实际问题并经过适当简化加工。它不要求参赛者预先掌握深入的专门知识，适合我国多数专业研究生的水平，使参赛者（三名研究生为一队）在三天或再长一点的时间内有充分发挥聪明才智和创造精神的余地，而且要先建立数学模型并用计算机求解，但不要求在此期间内一定能完全解决问题。参赛者应根据题目要求，完成一篇包括模型的假设、建立、计算，结果的分析和检验、模型的改进等方面的论文（即答卷）。竞赛评奖以假设的合理性、建模的创造性、结果的正确性和文字表述的清晰程度为主要标准，并特别重视创造性与实用性。竞赛命题向各高校广泛征集并由竞赛评审委员会讨论拟定.
                       </p>
                       <hr></hr>
                       <h2>美国大学生数学建模竞赛</h2>
                       <p  className={MatchCss.size}>　　MCM/ICM 是 Mathematical Contest in Modeling 和 Interdisciplinary Contest in Modeling 的缩写，即“数学建模竞赛”和“交叉学科建模竞赛”。MCM 始于 1985 年，ICM 始于 2000 年，由 COMAP（the Consortium for Mathematics and Its Application，美国数学及其应用联合会）主办，得到了 SIAM，NSA，INFORMS 等多个组织的赞助。MCM/ICM 与其他著名数学竞赛（如 Putnam 数学竞赛）的区别在于其着重强调研究问题、解决方案的原创性、团队合作、交流以及结果的合理性。
　　                   竞赛以三人（本科生）为一组，在四天时间内，就指定的问题完成从建立模型、求解、验证到论文撰写的全部工作。竞赛每年都吸引大量著名高校参赛。2008 年 MCM/ICM 有超过 2000 个队伍参加，遍及五大洲。MCM/ICM 已经成为最著名的国际大学生竞赛之一。</p>
                       <hr></hr>

             
                 </div>
            </div>
        </div>
        )
    }
}

