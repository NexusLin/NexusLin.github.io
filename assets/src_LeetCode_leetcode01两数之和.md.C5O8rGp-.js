import{_ as t,D as i,c as o,j as e,I as a,w as p,a as s,a4 as l,o as c}from"./chunks/framework.DvHWMJgD.js";const w=JSON.parse('{"title":"","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"src/LeetCode/leetcode01两数之和.md","filePath":"src/LeetCode/leetcode01两数之和.md"}'),r={name:"src/LeetCode/leetcode01两数之和.md"},d={id:"_1、简易1-两数之和",tabindex:"-1"},_=e("a",{class:"header-anchor",href:"#_1、简易1-两数之和","aria-label":'Permalink to "<font style="color:rgb(79, 79, 79);">1、简易1-两数之和</font>"'},"​",-1),u={id:"_1-题目要求",tabindex:"-1"},g=e("a",{class:"header-anchor",href:"#_1-题目要求","aria-label":'Permalink to "<font style="color:rgb(79, 79, 79);">① 题目要求</font>"'},"​",-1),f={id:"_2-看了题解以后-第一次以双层for循环暴力破解题目【复杂度o-n2-】",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#_2-看了题解以后-第一次以双层for循环暴力破解题目【复杂度o-n2-】","aria-label":'Permalink to "<font style="color:rgb(79, 79, 79);">② 看了题解以后，第一次以双层for循环暴力破解题目【复杂度O（n²）】**</font>"'},"​",-1),b=l(`<div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var twoSum = function (nums, target) {</span></span>
<span class="line"><span>    let datas = {};</span></span>
<span class="line"><span>    for (let i = 0; i &lt; nums.length; i++) {</span></span>
<span class="line"><span>        for (let s = i + 1; s &lt; nums.length; s++) {</span></span>
<span class="line"><span>            if (target==nums[i] + nums[s]) {</span></span>
<span class="line"><span>                return[i,s];</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>var nums= [2,7,11,15];</span></span>
<span class="line"><span>var target = 9;</span></span>
<span class="line"><span>// twoSum([2,7,11,15],13); </span></span>
<span class="line"><span>输出如下：</span></span>
<span class="line"><span>console.log(twoSum([2,7,11,15],13)); //2+11  [0,2]</span></span>
<span class="line"><span>console.log(twoSum([2,7,11,15],22)); //2+11  [1,3]</span></span></code></pre></div>`,1),m=l(`<div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>简单粗暴，2遍for循环逐个遍历判断</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>  var twoSum = function (nums, target) { l</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>  et datas = {};</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>  for (let i = 0; i &lt; nums.length; i++)</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>    { for (let s = i + 1; s &lt; nums.length; s++) {</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>       if (target-nums[i] == nums[s])</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>    { return[i,s];</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>  } } } };</span></span></code></pre></div>`,1),y={id:"_3-题解二",tabindex:"-1"},k=e("a",{class:"header-anchor",href:"#_3-题解二","aria-label":'Permalink to "**<font style="color:rgb(79, 79, 79);">③ 题解二</font>**"'},"​",-1),v=l(`<p><code>&lt;font style=&quot;color:rgb(199, 37, 78);background-color:rgb(249, 242, 244);&quot;&gt;isNaN(6) true&lt;/font&gt;</code></p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var twoSum = function(nums, target) {</span></span>
<span class="line"><span>  var keys = {};</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>   for(var i = 0;i &lt; nums.length; i++) {</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>     var diff = target - nums[i];</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>      // 判断差值diff在键值对中是否存在 是则找到匹配数字 数组第二个数字为7，下标为1</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>     // keys[diff]=7,i=2 </span></span>
<span class="line"><span> </span></span>
<span class="line"><span>          if(!isNaN(keys[diff])) {</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>              // 返回减去的数字下标和差值数字的下标</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>              return [keys[diff], i];</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>         }</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>         // 未出现匹配值 将数字存入键值对中以备后续判断</span></span>
<span class="line"><span>        // 当前数字假设为第三个 nums[i]=7,keys[7]=1  i就是判断数字的下标  建立key值 方便下次使用</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>         // 若是7的差值不存在，当前数字7的下标就是1，将1记录为7的下标</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>         keys[nums[i]] = i;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  };</span></span></code></pre></div>`,2);function T(C,S,x,N,P,A){const n=i("font");return c(),o("div",null,[e("h2",d,[a(n,{style:{color:"rgb(79, 79, 79)"}},{default:p(()=>[s("1、简易1-两数之和")]),_:1}),s(),_]),e("h3",u,[a(n,{style:{color:"rgb(79, 79, 79)"}},{default:p(()=>[s("① 题目要求")]),_:1}),s(),g]),a(n,{style:{color:"rgb(77, 77, 77)"}},{default:p(()=>[s("数字")]),_:1}),s("`"),a(n,{style:{color:"rgb(199, 37, 78)","background-color":"rgb(249, 242, 244)"}},{default:p(()=>[s("A + B = target")]),_:1}),s("`"),a(n,{style:{color:"rgb(77, 77, 77)"}},{default:p(()=>[s("，以target为求和结果，找出数组中符合的A、B数字下标。")]),_:1}),a(n,{style:{color:"rgb(77, 77, 77)"}},{default:p(()=>[s("第一次做的时候完全脑子一片蒙，随后认真看了看题目发现是发现找符合target和的两个数字下标")]),_:1}),e("h3",f,[a(n,{style:{color:"rgb(79, 79, 79)"}},{default:p(()=>[s("② 看了题解以后，第一次以双层for循环暴力破解题目【复杂度O（n²）】**")]),_:1}),s(),h]),b,a(n,{style:{color:"rgb(85, 86, 102)","background-color":"rgb(238, 240, 244)"}},{default:p(()=>[s("将判断条件进行改变以后【target-nums[i]== nums[s]】 代码进行了优化")]),_:1}),m,e("h3",y,[e("strong",null,[a(n,{style:{color:"rgb(79, 79, 79)"}},{default:p(()=>[s("③ 题解二")]),_:1})]),s(),k]),a(n,{style:{color:"rgb(85, 86, 102)","background-color":"rgb(238, 240, 244)"}},{default:p(()=>[s("考虑到哈希表利用总和减去其中一个数判断另外一个数是否存在，存在：返回进去的数字下标和差值数字的下标；不存在，则记录当前减去数字的下标，方便函数下次继续判断和使用【复杂度O（n1）】**")]),_:1}),v])}const I=t(r,[["render",T]]);export{w as __pageData,I as default};
