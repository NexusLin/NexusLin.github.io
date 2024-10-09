import{_ as a,c as s,o as n,a4 as p}from"./chunks/framework.DvHWMJgD.js";const g=JSON.parse('{"title":"echarts南丁格尔玫瑰图（使用以及南丁格尔玫瑰图详细配置）","description":"","frontmatter":{},"headers":[],"relativePath":"src/Echarts/echarts南丁格尔玫瑰图.md","filePath":"src/Echarts/echarts南丁格尔玫瑰图.md"}'),e={name:"src/Echarts/echarts南丁格尔玫瑰图.md"},l=p(`<h1 id="echarts南丁格尔玫瑰图-使用以及南丁格尔玫瑰图详细配置" tabindex="-1">echarts南丁格尔玫瑰图（使用以及南丁格尔玫瑰图详细配置） <a class="header-anchor" href="#echarts南丁格尔玫瑰图-使用以及南丁格尔玫瑰图详细配置" aria-label="Permalink to &quot;echarts南丁格尔玫瑰图（使用以及南丁格尔玫瑰图详细配置）&quot;">​</a></h1><h2 id="_1、认识安装和使用" tabindex="-1">1、认识安装和使用 <a class="header-anchor" href="#_1、认识安装和使用" aria-label="Permalink to &quot;1、认识安装和使用&quot;">​</a></h2><p>先来看看我们南丁格尔玫瑰图是什么样子：</p><p>🍉安装可以参考之前文章，会使用直接跳过</p><h3 id="官网效果" tabindex="-1">官网效果 <a class="header-anchor" href="#官网效果" aria-label="Permalink to &quot;官网效果&quot;">​</a></h3><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1727575665758-3e999548-6bc0-4519-89b3-462822d39ff9.webp" alt=""></p><h2 id="_2、🍉-简单安装使用" tabindex="-1">2、🍉 简单安装使用 <a class="header-anchor" href="#_2、🍉-简单安装使用" aria-label="Permalink to &quot;2、🍉 简单安装使用&quot;">​</a></h2><p>先确保你安装的是Echarts5，否则的化安装一下</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码yarn add echarts</span></span></code></pre></div><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码// 结构部分</span></span>
<span class="line"><span>&lt;div ref=&quot;echartradarRef1&quot; style=&quot;width: 50%; height: 400px;&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 引入部分</span></span>
<span class="line"><span>import * as echarts from &#39;echarts&#39;;// 5.4区别4引入方式</span></span>
<span class="line"><span>const echartradarRef1 = ref(null);</span></span>
<span class="line"><span>onMounted(() =&gt; {</span></span>
<span class="line"><span>    initChartradar(); </span></span>
<span class="line"><span>});</span></span></code></pre></div><p>展示一下官方给我们的默认设置</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码// 雷达图</span></span>
<span class="line"><span>const initChartradar=()=&gt;{</span></span>
<span class="line"><span>  // 在 DOM 挂载后初始化 ECharts</span></span>
<span class="line"><span>    let chart = echarts.init(echartradarRef1.value);</span></span>
<span class="line"><span>    // 设置图表的配置项和数据</span></span>
<span class="line"><span>    let option = {</span></span>
<span class="line"><span>  title: {</span></span>
<span class="line"><span>    text: &#39;Nightingale Chart&#39;,</span></span>
<span class="line"><span>    subtext: &#39;Fake Data&#39;,</span></span>
<span class="line"><span>    left: &#39;center&#39;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  tooltip: {</span></span>
<span class="line"><span>    trigger: &#39;item&#39;,</span></span>
<span class="line"><span>    formatter: &#39;{a} &lt;br/&gt;{b} : {c} ({d}%)&#39;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  legend: {</span></span>
<span class="line"><span>    left: &#39;center&#39;,</span></span>
<span class="line"><span>    top: &#39;bottom&#39;,</span></span>
<span class="line"><span>    data: [</span></span>
<span class="line"><span>      &#39;rose1&#39;,</span></span>
<span class="line"><span>      &#39;rose2&#39;,</span></span>
<span class="line"><span>      &#39;rose3&#39;,</span></span>
<span class="line"><span>      &#39;rose4&#39;,</span></span>
<span class="line"><span>      &#39;rose5&#39;,</span></span>
<span class="line"><span>      &#39;rose6&#39;,</span></span>
<span class="line"><span>      &#39;rose7&#39;,</span></span>
<span class="line"><span>      &#39;rose8&#39;</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  toolbox: {</span></span>
<span class="line"><span>    show: true,</span></span>
<span class="line"><span>    feature: {</span></span>
<span class="line"><span>      mark: { show: true },</span></span>
<span class="line"><span>      dataView: { show: true, readOnly: false },</span></span>
<span class="line"><span>      restore: { show: true },</span></span>
<span class="line"><span>      saveAsImage: { show: true }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  series: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      name: &#39;Area Mode&#39;,</span></span>
<span class="line"><span>      type: &#39;pie&#39;,</span></span>
<span class="line"><span>      radius: [20, 140],</span></span>
<span class="line"><span>      center: [&#39;75%&#39;, &#39;50%&#39;],</span></span>
<span class="line"><span>      roseType: &#39;area&#39;,</span></span>
<span class="line"><span>      itemStyle: {</span></span>
<span class="line"><span>        borderRadius: 5</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      data: [</span></span>
<span class="line"><span>        { value: 30, name: &#39;rose 1&#39; },</span></span>
<span class="line"><span>        { value: 28, name: &#39;rose 2&#39; },</span></span>
<span class="line"><span>        { value: 26, name: &#39;rose 3&#39; },</span></span>
<span class="line"><span>        { value: 24, name: &#39;rose 4&#39; },</span></span>
<span class="line"><span>        { value: 22, name: &#39;rose 5&#39; },</span></span>
<span class="line"><span>        { value: 20, name: &#39;rose 6&#39; },</span></span>
<span class="line"><span>        { value: 18, name: &#39;rose 7&#39; },</span></span>
<span class="line"><span>        { value: 16, name: &#39;rose 8&#39; }</span></span>
<span class="line"><span>      ]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 使用配置项和数据显示图表</span></span>
<span class="line"><span>    chart.setOption(option);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>然后我们看看效果 <img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1727575665566-16f5192b-3560-4df4-b90c-40b005a97c6f.webp" alt=""></p><h3 id="使用函数配置分为三个部分-初始化-设置配置-地图使用参数" tabindex="-1">使用函数配置分为三个部分：初始化=&gt; 设置配置=&gt; 地图使用参数 <a class="header-anchor" href="#使用函数配置分为三个部分-初始化-设置配置-地图使用参数" aria-label="Permalink to &quot;使用函数配置分为三个部分：初始化=&gt; 设置配置=&gt; 地图使用参数&quot;">​</a></h3><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1727575665590-dcad01f2-e97d-4bdd-975f-8e49f7af098e.webp" alt=""></p><h3 id="配置代码如下" tabindex="-1">配置代码如下 <a class="header-anchor" href="#配置代码如下" aria-label="Permalink to &quot;配置代码如下&quot;">​</a></h3><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码option = {</span></span>
<span class="line"><span>  legend: {</span></span>
<span class="line"><span>    top: &#39;bottom&#39;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  toolbox: {</span></span>
<span class="line"><span>    show: true,</span></span>
<span class="line"><span>    feature: {</span></span>
<span class="line"><span>      mark: { show: true },</span></span>
<span class="line"><span>      dataView: { show: true, readOnly: false },</span></span>
<span class="line"><span>      restore: { show: true },</span></span>
<span class="line"><span>      saveAsImage: { show: true }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  series: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      name: &#39;Nightingale Chart&#39;,</span></span>
<span class="line"><span>      type: &#39;pie&#39;,</span></span>
<span class="line"><span>      radius: [50, 250],</span></span>
<span class="line"><span>      center: [&#39;50%&#39;, &#39;50%&#39;],</span></span>
<span class="line"><span>      roseType: &#39;area&#39;,</span></span>
<span class="line"><span>      itemStyle: {</span></span>
<span class="line"><span>        borderRadius: 8</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      data: [</span></span>
<span class="line"><span>        { value: 40, name: &#39;rose 1&#39; },</span></span>
<span class="line"><span>        { value: 38, name: &#39;rose 2&#39; },</span></span>
<span class="line"><span>        { value: 32, name: &#39;rose 3&#39; },</span></span>
<span class="line"><span>        { value: 30, name: &#39;rose 4&#39; },</span></span>
<span class="line"><span>        { value: 28, name: &#39;rose 5&#39; },</span></span>
<span class="line"><span>        { value: 26, name: &#39;rose 6&#39; },</span></span>
<span class="line"><span>        { value: 22, name: &#39;rose 7&#39; },</span></span>
<span class="line"><span>        { value: 18, name: &#39;rose 8&#39; }</span></span>
<span class="line"><span>      ]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>};</span></span></code></pre></div><h2 id="_3、🍉详细参数使用南丁格尔玫瑰图配置" tabindex="-1">3、🍉详细参数使用南丁格尔玫瑰图配置 <a class="header-anchor" href="#_3、🍉详细参数使用南丁格尔玫瑰图配置" aria-label="Permalink to &quot;3、🍉详细参数使用南丁格尔玫瑰图配置&quot;">​</a></h2><h3 id="🍓-1-给每个圈配置自定义颜色" tabindex="-1">🍓 ① 给每个圈配置自定义颜色 <a class="header-anchor" href="#🍓-1-给每个圈配置自定义颜色" aria-label="Permalink to &quot;🍓 ① 给每个圈配置自定义颜色&quot;">​</a></h3><p>option =&gt; color</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码颜色设置在option 对象里面外层直接写一个数组</span></span>
<span class="line"><span>color: [&#39;#1A83FF&#39;, &#39;#5DA0FF&#39;, &#39;#8AB7FF&#39;, &#39;#AFCEFF&#39;, &#39;#D1E3FF&#39;],</span></span></code></pre></div><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1727575665855-186fc532-3a39-422d-9294-aa479ebb72ce.webp" alt=""></p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1727575665704-c2649bd8-5560-433d-81bd-46c50cdce589.webp" alt=""></p><h3 id="_2-更改圈的大小" tabindex="-1">② 更改圈的大小 <a class="header-anchor" href="#_2-更改圈的大小" aria-label="Permalink to &quot;② 更改圈的大小&quot;">​</a></h3><p>调整option下series里面的redius【也可以借这个参数实现不同的内圈外圈和负向向里】 <img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1727575666282-43006004-a3e3-4951-b99d-07e5bdfefc48.webp" alt=""></p><h3 id="_3-更改提示文字展示的位置" tabindex="-1">③ 更改提示文字展示的位置 <a class="header-anchor" href="#_3-更改提示文字展示的位置" aria-label="Permalink to &quot;③ 更改提示文字展示的位置&quot;">​</a></h3><p>在option下series下label 对位置进行设置</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码 label:{</span></span>
<span class="line"><span>   show:true,</span></span>
<span class="line"><span>   position:&#39;inside&#39;, //inside 扇形图上 ，center 扇形图中间 ,  outside  扇形图外面</span></span>
<span class="line"><span>},</span></span></code></pre></div><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1727575666153-dffc366f-f8fa-4cd6-bc55-e0f9f4a2a5cb.webp" alt=""></p><p>然后我们看看效果</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1727575666154-19af9213-6596-4a86-b17e-3673b1accffc.webp" alt=""></p><h3 id="_4-更改文字大小和颜色" tabindex="-1">④ 更改文字大小和颜色 <a class="header-anchor" href="#_4-更改文字大小和颜色" aria-label="Permalink to &quot;④ 更改文字大小和颜色&quot;">​</a></h3><p>在option下series下label 里面添加一些具体参数</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码  position: &#39;center&#39;, // 数值显示在内部</span></span>
<span class="line"><span>  fontSize: 18,</span></span>
<span class="line"><span>  color: &#39;#1890FF&#39;,</span></span>
<span class="line"><span>  fontWeight: 600, </span></span>
<span class="line"><span>  backgroundColor:&#39;#fff&#39;, //</span></span>
<span class="line"><span>  width:68,</span></span></code></pre></div><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1727575666410-dd46679d-cb61-422b-91f6-9f65deb1f7ff.webp" alt=""></p><p>⑤ 修改提示文字的格式</p><p>在option下series下label 里面修改参数formatter</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码  formatter: &#39;{d}%&#39;, // 格式化数值百分比输出</span></span></code></pre></div><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1727575666215-6742c7b2-639a-432a-8c4f-ca49ce938919.webp" alt=""></p><h3 id="_6-❤-更改文字大小和颜色-过程出现文字重复并且遮盖不全的问题" tabindex="-1">⑥ ❤ 更改文字大小和颜色 过程出现文字重复并且遮盖不全的问题 <a class="header-anchor" href="#_6-❤-更改文字大小和颜色-过程出现文字重复并且遮盖不全的问题" aria-label="Permalink to &quot;⑥ ❤ 更改文字大小和颜色 过程出现文字重复并且遮盖不全的问题&quot;">​</a></h3><p>在option下series下label 里面添加背景色和宽度 【解决文字重复并且遮盖不全问题】</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码  </span></span>
<span class="line"><span>  backgroundColor:&#39;#fff&#39;, //</span></span>
<span class="line"><span>  width:68,</span></span></code></pre></div><h3 id="_7-更改legend图例想关信息" tabindex="-1">⑦ 更改legend图例想关信息 <a class="header-anchor" href="#_7-更改legend图例想关信息" aria-label="Permalink to &quot;⑦ 更改legend图例想关信息&quot;">​</a></h3><p>在option 下的legend 进行修改</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1727575666658-a5c42416-14a1-4e1c-a96e-ab482e60eaea.webp" alt=""></p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>css</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码 legend: {</span></span>
<span class="line"><span>      itemWidth: 6,</span></span>
<span class="line"><span>      itemHeight: 14,</span></span>
<span class="line"><span>      textStyle: {</span></span>
<span class="line"><span>        color: &quot;#1890FF&quot;,</span></span>
<span class="line"><span>        fontSize: &quot;14&quot;</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      width:100,</span></span>
<span class="line"><span>      x:&#39;right&#39;,</span></span>
<span class="line"><span>      y:&#39;center&#39;,</span></span>
<span class="line"><span>      right:&quot;20%&quot;,</span></span>
<span class="line"><span>    },</span></span></code></pre></div><p>其中参数如下：</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1727575666685-64ab9ca4-8153-4159-83b8-0368324b5b9f.webp" alt=""></p><h3 id="_7-❤-更改提示文本格式和其他相关信息" tabindex="-1">⑦ ❤ 更改提示文本格式和其他相关信息 <a class="header-anchor" href="#_7-❤-更改提示文本格式和其他相关信息" aria-label="Permalink to &quot;⑦ ❤ 更改提示文本格式和其他相关信息&quot;">​</a></h3><p>更改option下tooltip 相关信息，利用formatter 重构格式</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1727575666864-2a6d5f4c-c7ee-40a4-96ea-6a7b9ee64db6.webp" alt=""></p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>css</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码  tooltip: {</span></span>
<span class="line"><span>    trigger: &#39;item&#39;,</span></span>
<span class="line"><span>    formatter: &#39;{a} &lt;br/&gt;{b} : {c} ({d}%)&#39;</span></span>
<span class="line"><span>  },</span></span></code></pre></div>`,52),i=[l];function t(c,o,r,d,h,u){return n(),s("div",null,i)}const m=a(e,[["render",t]]);export{g as __pageData,m as default};
