import{_ as p,D as h,c as e,I as n,w as l,j as a,a as s,a4 as t,o as k}from"./chunks/framework.DvHWMJgD.js";const B=JSON.parse('{"title":"3、简易题14- 最长公共前缀","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"src/LeetCode/leetcode14-最长公共前缀.md","filePath":"src/LeetCode/leetcode14-最长公共前缀.md"}'),r={name:"src/LeetCode/leetcode14-最长公共前缀.md"},E=a("h1",{id:"_3、简易题14-最长公共前缀",tabindex:"-1"},[s("3、简易题14- 最长公共前缀 "),a("a",{class:"header-anchor",href:"#_3、简易题14-最长公共前缀","aria-label":'Permalink to "3、简易题14- 最长公共前缀"'},"​")],-1),d=a("h2",{id:"_1-题目要求",tabindex:"-1"},[s("① 题目要求 "),a("a",{class:"header-anchor",href:"#_1-题目要求","aria-label":'Permalink to "① 题目要求"'},"​")],-1),o=t("",9),g={id:"_3-解题方法",tabindex:"-1"},c=a("a",{class:"header-anchor",href:"#_3-解题方法","aria-label":'Permalink to "<font style="color:rgb(79, 79, 79);">③ 解题方法</font>"'},"​",-1),y={id:"方式一",tabindex:"-1"},_=a("a",{class:"header-anchor",href:"#方式一","aria-label":'Permalink to "<font style="color:rgb(79, 79, 79);">方式一：</font>"'},"​",-1),F=t("",3),u=t("",5);function C(f,b,m,A,v,q){const i=h("font");return k(),e("div",null,[E,d,n(i,{style:{color:"rgb(77, 77, 77)"}},{default:l(()=>[s("题目如下：")]),_:1}),o,a("h3",g,[n(i,{style:{color:"rgb(79, 79, 79)"}},{default:l(()=>[s("③ 解题方法")]),_:1}),s(),c]),a("h3",y,[n(i,{style:{color:"rgb(79, 79, 79)"}},{default:l(()=>[s("方式一：")]),_:1}),s(),_]),F,n(i,{style:{color:"rgb(77, 77, 77)"}},{default:l(()=>[s("重新分析我们的逻辑可以发现")]),_:1}),n(i,{style:{color:"rgb(85, 86, 102)","background-color":"rgb(238, 240, 244)"}},{default:l(()=>[s("我依次使用了循环第一个数据字符串长度 ⇒ 整个数组的长度= > 当第一次能满足条件的时候，我把值塞进了allstring里面，但是这个时候返回的第一个字母l 实在我循环外层数组的时候（也就是重新循环了2次），所以返回的ll ，所以我的allstring 其实应该放到外层循环的外头即可，取循环第一次的其中相同的字符串即可。")]),_:1}),u])}const T=p(r,[["render",C]]);export{B as __pageData,T as default};
