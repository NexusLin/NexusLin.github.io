import{_ as h,C as e,c as k,o as E,ag as t,j as i,a,G as p,w as l}from"./chunks/framework.CqxIsSM8.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"src/note/echarts/echarts折线图.md","filePath":"src/note/echarts/echarts折线图.md","lastUpdated":1753351027000}'),r={name:"src/note/echarts/echarts折线图.md"},d={id:"👉-坐标轴主线颜色-font-style-color-rgb-36-41-47-background-color-rgb-244-246-248-axisline-font",tabindex:"-1"},c={id:"👉-网格分割线颜色-font-style-color-rgb-36-41-47-background-color-rgb-244-246-248-splitline-font",tabindex:"-1"},g={id:"👉-网格分割线颜色-font-style-color-rgb-36-41-47-background-color-rgb-244-246-248-splitline-font-1",tabindex:"-1"};function y(o,s,F,C,u,b){const n=e("font");return E(),k("div",null,[s[18]||(s[18]=t(`<h2 id="echarts折线图" tabindex="-1">echarts折线图 <a class="header-anchor" href="#echarts折线图" aria-label="Permalink to &quot;echarts折线图&quot;">​</a></h2><h3 id="_1、介绍和安装" tabindex="-1">1、介绍和安装 <a class="header-anchor" href="#_1、介绍和安装" aria-label="Permalink to &quot;1、介绍和安装&quot;">​</a></h3><p>首先来看看官网的地址，我们可以进入echarts官网查看案例并且在线调试，这个功能真的非常的方便。</p><div class="language-JS vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JS</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">https</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//echarts.apache.org/zh/index.html</span></span></code></pre></div><p>👉 安装</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>yarn add echarts</span></span></code></pre></div><p>这里需要注意echarts4和echarts5 之间的一些配置还是不一样的</p><p>我本地的echarts版本是5</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;echarts&quot;: &quot;^5.5.0&quot;,</span></span></code></pre></div><h3 id="_2、引入和使用" tabindex="-1">2、引入和使用 <a class="header-anchor" href="#_2、引入和使用" aria-label="Permalink to &quot;2、引入和使用&quot;">​</a></h3><h4 id="版本区别-引入方式不同" tabindex="-1">版本区别（引入方式不同） <a class="header-anchor" href="#版本区别-引入方式不同" aria-label="Permalink to &quot;版本区别（引入方式不同）&quot;">​</a></h4><p>这里需要注意的就是echarts版本4升级版本5，所采用的引入方式不同</p><p>❤版本4</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import echarts from &#39;echarts&#39;;</span></span></code></pre></div><p>❤版本5</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>import * as echarts from &#39;echarts&#39;;</span></span></code></pre></div><p>这里只需要更改一下引入的方式就可以了</p><p>👉 按照官方的案例我们看看在vue3之中使用echarts版本5的方式：</p><p>引入</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span> </span></span>
<span class="line"><span>👉 引入我们的echarts</span></span>
<span class="line"><span>import { onMounted, ref } from &#39;vue&#39;;</span></span>
<span class="line"><span>import * as echarts from &#39;echarts&#39;;</span></span></code></pre></div><p>👉结构部分一定要记得写个宽高</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>&lt;div ref=&quot;chartRef&quot; style=&quot;width: 100%; height: 400px;&quot;&gt;&lt;/div&gt;</span></span></code></pre></div><p>👉 挂载的时候渲染方法</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { onMounted, ref } from &#39;vue&#39;;</span></span>
<span class="line"><span>import * as echarts from &#39;echarts&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建对 DOM 元素的引用</span></span>
<span class="line"><span>const chartRef = ref(null);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>onMounted(() =&gt; {</span></span>
<span class="line"><span>  // 在 DOM 挂载后初始化 ECharts</span></span>
<span class="line"><span>  const chart = echarts.init(chartRef.value);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 设置图表的配置项和数据</span></span>
<span class="line"><span>  const option = {</span></span>
<span class="line"><span>    title: {</span></span>
<span class="line"><span>      text: &#39;ECharts 示例&#39;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    tooltip: {},</span></span>
<span class="line"><span>    xAxis: {</span></span>
<span class="line"><span>      data: [&#39;A&#39;, &#39;B&#39;, &#39;C&#39;, &#39;D&#39;, &#39;E&#39;, &#39;F&#39;, &#39;G&#39;]</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    yAxis: {},</span></span>
<span class="line"><span>    series: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        name: &#39;销量&#39;,</span></span>
<span class="line"><span>        type: &#39;bar&#39;,</span></span>
<span class="line"><span>        data: [5, 20, 36, 10, 10, 20, 30]</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 使用配置项和数据显示图表</span></span>
<span class="line"><span>  chart.setOption(option);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><p>这里我们直接放上所有代码</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> </span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div ref=&quot;chartRef&quot; style=&quot;width: 100%; height: 400px;&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { onMounted, ref } from &#39;vue&#39;;</span></span>
<span class="line"><span>import * as echarts from &#39;echarts&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建对 DOM 元素的引用</span></span>
<span class="line"><span>const chartRef = ref(null);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>onMounted(() =&gt; {</span></span>
<span class="line"><span>  // 在 DOM 挂载后初始化 ECharts</span></span>
<span class="line"><span>  const chart = echarts.init(chartRef.value);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 设置图表的配置项和数据</span></span>
<span class="line"><span>  const option = {</span></span>
<span class="line"><span>    title: {</span></span>
<span class="line"><span>      text: &#39;ECharts 示例&#39;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    tooltip: {},</span></span>
<span class="line"><span>    xAxis: {</span></span>
<span class="line"><span>      data: [&#39;A&#39;, &#39;B&#39;, &#39;C&#39;, &#39;D&#39;, &#39;E&#39;, &#39;F&#39;, &#39;G&#39;]</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    yAxis: {},</span></span>
<span class="line"><span>    series: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        name: &#39;销量&#39;,</span></span>
<span class="line"><span>        type: &#39;bar&#39;,</span></span>
<span class="line"><span>        data: [5, 20, 36, 10, 10, 20, 30]</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 使用配置项和数据显示图表</span></span>
<span class="line"><span>  chart.setOption(option);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>/* 可以根据需要添加样式 */</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div><p>预览一下我们的效果</p><p><img src="https://cdn.nlark.com/yuque/0/2025/png/22435914/1753248584676-3f191ebf-a7ba-4b1c-8f66-f9dcbe206c5e.png" alt=""></p><h3 id="_3、详细使用-基本参数" tabindex="-1">3、详细使用（基本参数） <a class="header-anchor" href="#_3、详细使用-基本参数" aria-label="Permalink to &quot;3、详细使用（基本参数）&quot;">​</a></h3><p>介绍完了echarts图的基本使用，接下来我们详细说说一些echarts图的一些详细的参数和使用</p><h4 id="👉折线图推拽datazoom" tabindex="-1">👉折线图推拽dataZoom <a class="header-anchor" href="#👉折线图推拽datazoom" aria-label="Permalink to &quot;👉折线图推拽dataZoom&quot;">​</a></h4><p>dataZoom 拖动滑动x轴，为我们提供了巨大的帮助，层级与xAxis平级，有时候我们需要拖动滑动x轴底部缩放 。</p><p>日常使用</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>dataZoom: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      type: &#39;inside&#39;,</span></span>
<span class="line"><span>      start: 40,</span></span>
<span class="line"><span>      end: 100</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      start: 40,</span></span>
<span class="line"><span>      end: 100</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span> ],</span></span></code></pre></div><p>我们自己自定义使用</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>dataZoom: [{</span></span>
<span class="line"><span>      type: &#39;inside&#39;, //1平移 缩放</span></span>
<span class="line"><span>      throttle: &#39;50&#39;, //设置触发视图刷新的频率。单位为毫秒（ms）。</span></span>
<span class="line"><span>      minValueSpan: 6, //用于限制窗口大小的最小值,在类目轴上可以设置为 5 表示 5 个类目</span></span>
<span class="line"><span>      start: 1, //数据窗口范围的起始百分比 范围是：0 ~ 100。表示 0% ~ 100%。</span></span>
<span class="line"><span>      end: 50, //数据窗口范围的结束百分比。范围是：0 ~ 100。</span></span>
<span class="line"><span>      zoomLock: true, //如果设置为 true 则锁定选择区域的大小，也就是说，只能平移，不能缩放。</span></span>
<span class="line"><span>}],</span></span></code></pre></div><p><img src="https://cdn.nlark.com/yuque/0/2025/png/22435914/1753248598150-eca1fe41-1fbd-49ce-b43e-1dc6ab4aa78c.png" alt=""></p><h4 id="👉折线图平滑属性smooth" tabindex="-1">👉折线图平滑属性smooth <a class="header-anchor" href="#👉折线图平滑属性smooth" aria-label="Permalink to &quot;👉折线图平滑属性smooth&quot;">​</a></h4><p>有时候我们想要让折线图平滑一些，这就需要用到smooth这个属性</p><p>🍎smooth 决定了线段的类型，直线或者曲线，层级与series下的data平级</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>series: [</span></span>
<span class="line"><span>    // 折线图--人数</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      data: [150, 230, 224, 218, 135, 147, 260],</span></span>
<span class="line"><span>      type: &#39;line&#39;,</span></span>
<span class="line"><span>      smooth: true,</span></span>
<span class="line"><span>      // areaStyle: {}</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>smooth: true，// true为平滑线段  false为折线，默认为false</span></span></code></pre></div><h4 id="👉-折线图legend属性" tabindex="-1">👉 折线图legend属性 <a class="header-anchor" href="#👉-折线图legend属性" aria-label="Permalink to &quot;👉 折线图legend属性&quot;">​</a></h4><p>有时候我们需要使用legend这部分自定义，这里需要注意legend上面和下面的数据的name得对应上才能正确显示！</p><p><img src="https://cdn.nlark.com/yuque/0/2025/png/22435914/1753248607683-73376f23-7665-49a5-b5df-afd633a97b76.png" alt=""></p><h5 id="自定义legend宽高" tabindex="-1">自定义legend宽高 <a class="header-anchor" href="#自定义legend宽高" aria-label="Permalink to &quot;自定义legend宽高&quot;">​</a></h5><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>legend: {</span></span>
<span class="line"><span>   // 自定义 Legend 的显示内容</span></span>
<span class="line"><span>     data: [&#39;数据1&#39;, &#39;数据2&#39;],</span></span>
<span class="line"><span>     // 自定义 Legend 的宽度和高度</span></span>
<span class="line"><span>     width: 300,</span></span>
<span class="line"><span>     height: 50</span></span>
<span class="line"><span> },</span></span></code></pre></div><h5 id="自定义-legend图例样式" tabindex="-1">自定义 Legend图例样式 <a class="header-anchor" href="#自定义-legend图例样式" aria-label="Permalink to &quot;自定义 Legend图例样式&quot;">​</a></h5><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//自定义 Legend 中每个图例项的样式</span></span>
<span class="line"><span>legend: {</span></span>
<span class="line"><span>    // 自定义 Legend 的显示内容</span></span>
<span class="line"><span>    data: [&#39;数据1&#39;, &#39;数据2&#39;],</span></span>
<span class="line"><span>    color: [&#39;#000&#39;, &#39;#1890FF&#39;, &#39;#1890FF&#39;],</span></span>
<span class="line"><span>    // 自定义 Legend 的宽度和高度</span></span>
<span class="line"><span>    itemWidth: 10,// 设置每个小块的宽度和高度</span></span>
<span class="line"><span>    itemheight: 18,// 设置每个小块的宽度和高度</span></span>
<span class="line"><span>    itemStyle: { }</span></span>
<span class="line"><span>  },</span></span></code></pre></div><h4 id="👉折线图面积图形式" tabindex="-1">👉折线图面积图形式 <a class="header-anchor" href="#👉折线图面积图形式" aria-label="Permalink to &quot;👉折线图面积图形式&quot;">​</a></h4><p>有时候我们需要让echarts折线图变成面积图</p><p>🍎areaStyle: {} 决定了你的图形是否是面积图 ，层级与series下的data平级</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>areaStyle: {}</span></span></code></pre></div><h4 id="👉更改鼠标悬浮框效果tooltip" tabindex="-1">👉更改鼠标悬浮框效果tooltip <a class="header-anchor" href="#👉更改鼠标悬浮框效果tooltip" aria-label="Permalink to &quot;👉更改鼠标悬浮框效果tooltip&quot;">​</a></h4><p>有时候我们需要更改鼠标悬浮上去以后的效果</p><h5 id="鼠标悬浮框显示调整" tabindex="-1">鼠标悬浮框显示调整 <a class="header-anchor" href="#鼠标悬浮框显示调整" aria-label="Permalink to &quot;鼠标悬浮框显示调整&quot;">​</a></h5><p>🍎 tooltip 可以帮助我们实现 echarts 鼠标悬浮上去的效果，层级与xAxis平级</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>tooltip: { trigger: &#39;axis&#39;},</span></span></code></pre></div><h5 id="鼠标悬浮框辅助线" tabindex="-1">鼠标悬浮框辅助线 <a class="header-anchor" href="#鼠标悬浮框辅助线" aria-label="Permalink to &quot;鼠标悬浮框辅助线&quot;">​</a></h5><p>axisPointer</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>tooltip: {</span></span>
<span class="line"><span>    trigger: &#39;axis&#39;,</span></span>
<span class="line"><span>    // 辅助线</span></span>
<span class="line"><span>    axisPointer: {</span></span>
<span class="line"><span>      type: &#39;line&#39;, // 辅助线类型，可选为：&#39;line&#39; | &#39;shadow&#39; | &#39;cross&#39;</span></span>
<span class="line"><span>      lineStyle: {</span></span>
<span class="line"><span>        color: &#39;#1890FF&#39;, // 辅助线颜色</span></span>
<span class="line"><span>        type: &#39;dashed&#39;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span></code></pre></div><h4 id="👉鼠标悬浮提示框formatter" tabindex="-1">👉鼠标悬浮提示框formatter <a class="header-anchor" href="#👉鼠标悬浮提示框formatter" aria-label="Permalink to &quot;👉鼠标悬浮提示框formatter&quot;">​</a></h4><p>有时候我们需要在鼠标移动上去以后，更改鼠标的提示框数据以及子自定义鼠标的提示框样式，这个时候我们就需要用到<code>formatter</code> 这个属性。</p><ul><li><code>formatter</code> 基础使用和更改</li></ul><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>tooltip: {</span></span>
<span class="line"><span>    trigger: &#39;axis&#39;,</span></span>
<span class="line"><span>    // 悬浮框提示</span></span>
<span class="line"><span>    formatter: &#39;{b} &lt;br&gt; 检测趋势：{c}&#39;,</span></span>
<span class="line"><span>  },</span></span></code></pre></div><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>（1）{a}：系列名，series.name。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（2）{b}：数据名，xAxis.data。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（3）{c}：数据值，yAxis.data。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（5）{@xxx}：数据中名为&#39;xxx&#39;的维度的值，如{@product}表示名为&#39;product&#39;\` 的维度的值。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（6）{@[n]}：数据中维度n的值，如{@[3]}\` 表示维度 3 的值，从 0 开始计数。</span></span>
<span class="line"><span>————————————————</span></span>
<span class="line"><span>换行添加 &lt;br/&gt;</span></span></code></pre></div><ul><li>多个属性</li></ul><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>formatter:&quot;{b0}:{c0}&lt;br/&gt;{b1}:{c1}&quot;</span></span></code></pre></div><h5 id="自定义格式" tabindex="-1">自定义格式 <a class="header-anchor" href="#自定义格式" aria-label="Permalink to &quot;自定义格式&quot;">​</a></h5><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>formatter(params) {</span></span>
<span class="line"><span>    return \`</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>      &lt;div style=&quot;font-size:12px;color:#000&quot;&gt;(这里有个美元符号){params[0].name}&lt;/div&gt;</span></span>
<span class="line"><span>         &lt;div style=&quot;font-size:12px;color:#1AB5AF&quot;&gt;&lt;span  style=&quot;font-size:12px;color:#000&quot;&gt;(这里有个美元符号){params[0].value}%&lt;/span&gt;&lt;/div&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;\`;</span></span>
<span class="line"><span>  },</span></span></code></pre></div><h5 id="自定义提示数据的类型" tabindex="-1">自定义提示数据的类型 <a class="header-anchor" href="#自定义提示数据的类型" aria-label="Permalink to &quot;自定义提示数据的类型&quot;">​</a></h5><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>formatter:function(v){</span></span>
<span class="line"><span>         vartext=v.name;</span></span>
<span class="line"><span>         returntext.length&gt;10?text.substr(0,10)+&quot;...&quot;:text;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="👉鼠标悬浮鼠标悬浮框样式更改" tabindex="-1">👉鼠标悬浮鼠标悬浮框样式更改 <a class="header-anchor" href="#👉鼠标悬浮鼠标悬浮框样式更改" aria-label="Permalink to &quot;👉鼠标悬浮鼠标悬浮框样式更改&quot;">​</a></h4><p>悬浮框上我们还可以操作其他其他详细显示参数</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>tooltip: {</span></span>
<span class="line"><span>        show: true,                  // 是否显示提示框，默认为 true</span></span>
<span class="line"><span>        trigger: &#39;item&#39;,             // 触发类型，可选值: &#39;item&#39;（数据项触发），&#39;axis&#39;（坐标轴触发），&#39;none&#39;（不触发）</span></span>
<span class="line"><span>        axisPointer: {               // 坐标轴指示器配置项</span></span>
<span class="line"><span>            type: &#39;line&#39;,            // 指示器类型，可选值: &#39;line&#39;（直线指示器），&#39;shadow&#39;（阴影指示器），&#39;cross&#39;（十字准星指示器）</span></span>
<span class="line"><span>            lineStyle: {             // 直线指示器样式设置</span></span>
<span class="line"><span>                color: &#39;#aaa&#39;        // 线条颜色</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            crossStyle: {            // 十字准星指示器样式设置</span></span>
<span class="line"><span>                color: &#39;#aaa&#39;        // 线条颜色</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            shadowStyle: {           // 阴影指示器样式设置</span></span>
<span class="line"><span>                color: &#39;rgba(150,150,150,0.3)&#39;  // 阴影颜色</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        backgroundColor: &#39;rgba(0,0,0,0.7)&#39;,  // 提示框背景色</span></span>
<span class="line"><span>        padding: [5, 10],                     // 内边距</span></span>
<span class="line"><span>        textStyle: {                           // 文本样式</span></span>
<span class="line"><span>            color: &#39;#fff&#39;,                     // 文本颜色</span></span>
<span class="line"><span>            fontSize: 12                       // 文本字号</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        formatter: &#39;{b}: {c}&#39;,                  // 提示框浮层内容格式器，支持字符串模板和回调函数两种形式</span></span>
<span class="line"><span>        // 更多配置项...</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    \`\`\`</span></span></code></pre></div><h4 id="👉调整折线图的边距和位置" tabindex="-1">👉调整折线图的边距和位置 <a class="header-anchor" href="#👉调整折线图的边距和位置" aria-label="Permalink to &quot;👉调整折线图的边距和位置&quot;">​</a></h4><p>有时候我们需要调整图表位置，以进行兼容</p><p>🍎 grid 可以帮助我们实现 echarts 鼠标悬浮上去的效果，层级与xAxis平级</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>grid: {</span></span>
<span class="line"><span>    left: &#39;5%&#39;, //距离左侧边距</span></span>
<span class="line"><span>    right: &#39;4%&#39;,</span></span>
<span class="line"><span>    bottom: &#39;3%&#39;,</span></span>
<span class="line"><span>    containLabel: true</span></span>
<span class="line"><span>  },</span></span></code></pre></div><p>🍌 当然gaid还有另外一种写法，哪种需要就用哪种</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>grid: { </span></span>
<span class="line"><span>    x: &quot;10%&quot;, //x 偏移量 </span></span>
<span class="line"><span>    y: &quot;7%&quot;, // y 偏移量 </span></span>
<span class="line"><span>    width: &quot;85%&quot;, // 宽度 </span></span>
<span class="line"><span>    height: &quot;55%&quot;, // 高度 </span></span>
<span class="line"><span>    right: &quot;15%&quot;, </span></span>
<span class="line"><span>  },</span></span></code></pre></div><h4 id="👉-echarts动画" tabindex="-1">👉 echarts动画 <a class="header-anchor" href="#👉-echarts动画" aria-label="Permalink to &quot;👉 echarts动画&quot;">​</a></h4><p>有时候我们的echarts显示显得略微僵硬，这个时候我们就需要用到动画。</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>animation: true,//动画 </span></span>
<span class="line"><span>// animationEasing:&#39;cubicOut&#39;,//动画的缓动方式</span></span>
<span class="line"><span>animationDuration:15000,//持续时间</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">series</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> animation</span></span></code></pre></div><h4 id="👉折线图拐点markpoint属性" tabindex="-1">👉折线图拐点markPoint属性 <a class="header-anchor" href="#👉折线图拐点markpoint属性" aria-label="Permalink to &quot;👉折线图拐点markPoint属性&quot;">​</a></h4><p>有时候拐点也需要我们自己进行处理，以防止于视图风格不符合。</p><h5 id="拐点markpoint属性使用" tabindex="-1">拐点markPoint属性使用 <a class="header-anchor" href="#拐点markpoint属性使用" aria-label="Permalink to &quot;拐点markPoint属性使用&quot;">​</a></h5><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>option = {  </span></span>
<span class="line"><span>    series: [{  </span></span>
<span class="line"><span>        type: &#39;line&#39;,  </span></span>
<span class="line"><span>        data: [/* 数据 */],  </span></span>
<span class="line"><span>        markPoint: {  </span></span>
<span class="line"><span>            symbol: &#39;circle&#39;, // 设置拐点小圆点  </span></span>
<span class="line"><span>            // 其他配置项...  </span></span>
<span class="line"><span>        }, </span></span>
<span class="line"><span>        symbolSize:8, // 设置拐点小圆点大小</span></span>
<span class="line"><span>        // 其他配置项...  </span></span>
<span class="line"><span>    }],  </span></span>
<span class="line"><span>    // 其他配置项...  </span></span>
<span class="line"><span>};</span></span></code></pre></div><p>&#39;circle&#39;: 圆形标记。 &#39;rect&#39;: 矩形标记。 &#39;roundRect&#39;: 带圆角的矩形标记。 &#39;triangle&#39;: 三角形标记。 &#39;diamond&#39;: 菱形标记。 &#39;pin&#39;: 标记形状为图钉，这种类型主要用于地图上的标记。 &#39;arrow&#39;: 标记形状为箭头，这种类型主要用于地图上的标记。</p><h5 id="设置拐点小圆点大小" tabindex="-1">设置拐点小圆点大小 <a class="header-anchor" href="#设置拐点小圆点大小" aria-label="Permalink to &quot;设置拐点小圆点大小&quot;">​</a></h5><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>option = {</span></span>
<span class="line"><span>    series: [{  </span></span>
<span class="line"><span>        type: &#39;line&#39;,  </span></span>
<span class="line"><span>        data: [/* 数据 */],  </span></span>
<span class="line"><span>        markPoint: {  </span></span>
<span class="line"><span>            symbol: &#39;circle&#39;, // 设置拐点小圆点  </span></span>
<span class="line"><span>        }, </span></span>
<span class="line"><span>        symbolSize:8, // 设置拐点小圆点大小</span></span>
<span class="line"><span>        // 其他配置项...  </span></span>
<span class="line"><span>    }],  </span></span>
<span class="line"><span>    // 其他配置项...  </span></span>
<span class="line"><span>};</span></span></code></pre></div><h5 id="拐点自定义图片" tabindex="-1">拐点自定义图片 <a class="header-anchor" href="#拐点自定义图片" aria-label="Permalink to &quot;拐点自定义图片&quot;">​</a></h5><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 设置标记点的图片链接</span></span>
<span class="line"><span> var markPointImage = &#39;https://echarts.apache.org/examples/data/asset/img/echarts-logo.png&#39;;</span></span>
<span class="line"><span>	series: [{</span></span>
<span class="line"><span>         type: &#39;line&#39;,</span></span>
<span class="line"><span>             data: data,</span></span>
<span class="line"><span>             markPoint: {</span></span>
<span class="line"><span>                 symbol: \`image://(这里有个美元符号){markPointImage}\`, // 设置标记点的形状为图片</span></span>
<span class="line"><span>                 symbolSize: 40, // 设置标记点的大小</span></span>
<span class="line"><span>                 data: [</span></span>
<span class="line"><span>                     { type: &#39;max&#39;, name: &#39;最大值&#39; }, // 添加最大值的标记点</span></span>
<span class="line"><span>                     { type: &#39;min&#39;, name: &#39;最小值&#39; }  // 添加最小值的标记点</span></span>
<span class="line"><span>                 ]</span></span>
<span class="line"><span>             }</span></span>
<span class="line"><span>	 }]</span></span></code></pre></div><p>最后我们看到的就是这个样子</p><p><img src="https://cdn.nlark.com/yuque/0/2025/png/22435914/1753248648156-1de2437e-ae41-4326-8cd4-6ed844471756.png" alt=""></p><h4 id="👉折线图跳过空白" tabindex="-1">👉折线图跳过空白 <a class="header-anchor" href="#👉折线图跳过空白" aria-label="Permalink to &quot;👉折线图跳过空白&quot;">​</a></h4><p>有时候也许，我们不需要数据，但是也需要让他没有，这个时候我们就必须调节</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>option = {</span></span>
<span class="line"><span>    xAxis: {</span></span>
<span class="line"><span>        type: &#39;category&#39;,</span></span>
<span class="line"><span>        data: [&#39;Mon&#39;, &#39;Tue&#39;, &#39;Wed&#39;, &#39;Thu&#39;, &#39;Fri&#39;, &#39;Sat&#39;, &#39;Sun&#39;]</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    yAxis: {</span></span>
<span class="line"><span>        type: &#39;value&#39;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    series: [{</span></span>
<span class="line"><span>        data: [820, 932, 901, , 1290, 1330, 1320],</span></span>
<span class="line"><span>        type: &#39;line&#39;,</span></span>
<span class="line"><span>        smooth: true</span></span>
<span class="line"><span>    }]</span></span>
<span class="line"><span>};</span></span></code></pre></div><p><img src="https://cdn.nlark.com/yuque/0/2025/png/22435914/1753248654278-ba43334b-7b94-44e2-9f9d-afb7c7a94634.png" alt=""></p><h4 id="👉折线图不同颜色" tabindex="-1">👉折线图不同颜色 <a class="header-anchor" href="#👉折线图不同颜色" aria-label="Permalink to &quot;👉折线图不同颜色&quot;">​</a></h4><p><img src="https://cdn.nlark.com/yuque/0/2025/png/22435914/1753248660552-34e11844-9454-4bf6-b237-3ed3dda6ab00.png" alt=""></p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 定义折线图的配置</span></span>
<span class="line"><span>var option = {</span></span>
<span class="line"><span>  xAxis: {</span></span>
<span class="line"><span>    type: &#39;category&#39;,</span></span>
<span class="line"><span>    data: [&#39;Point 1&#39;, &#39;Point 2&#39;, &#39;Point 3&#39;, &#39;Point 4&#39;, &#39;Point 5&#39;]</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  yAxis: {</span></span>
<span class="line"><span>    type: &#39;value&#39;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  series: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      name: &#39;Part 1&#39;,</span></span>
<span class="line"><span>      type: &#39;line&#39;,</span></span>
<span class="line"><span>      data: [10, 20, null, null, null],</span></span>
<span class="line"><span>      lineStyle: {</span></span>
<span class="line"><span>        color: &#39;#FF0000&#39; // 红色</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      name: &#39;Part 2&#39;,</span></span>
<span class="line"><span>      type: &#39;line&#39;,</span></span>
<span class="line"><span>      data: [null, 20, 15, 25, null],</span></span>
<span class="line"><span>      lineStyle: {</span></span>
<span class="line"><span>        color: &#39;#00FF00&#39; // 绿色</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      name: &#39;Part 3&#39;,</span></span>
<span class="line"><span>      type: &#39;line&#39;,</span></span>
<span class="line"><span>      data: [null, null, null, 25, 30],</span></span>
<span class="line"><span>      lineStyle: {</span></span>
<span class="line"><span>        color: &#39;#0000FF&#39; // 蓝色</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>};</span></span></code></pre></div><h3 id="_4、详细使用-x轴" tabindex="-1">4、详细使用（x轴） <a class="header-anchor" href="#_4、详细使用-x轴" aria-label="Permalink to &quot;4、详细使用（x轴）&quot;">​</a></h3>`,103)),i("h4",d,[s[2]||(s[2]=a("👉 ")),p(n,{style:{color:"rgb(36, 41, 47)","background-color":"rgb(244, 246, 248)"}},{default:l(()=>s[0]||(s[0]=[a("坐标轴主线颜色（")])),_:1,__:[0]}),s[3]||(s[3]=i("code",null,'<font style="color:rgb(36, 41, 47);background-color:rgb(244, 246, 248);">axisLine</font>',-1)),p(n,{style:{color:"rgb(36, 41, 47)","background-color":"rgb(244, 246, 248)"}},{default:l(()=>s[1]||(s[1]=[a("）")])),_:1,__:[1]}),s[4]||(s[4]=a()),s[5]||(s[5]=i("a",{class:"header-anchor",href:"#👉-坐标轴主线颜色-font-style-color-rgb-36-41-47-background-color-rgb-244-246-248-axisline-font","aria-label":'Permalink to "👉 <font style="color:rgb(36, 41, 47);background-color:rgb(244, 246, 248);">坐标轴主线颜色（</font>`<font style="color:rgb(36, 41, 47);background-color:rgb(244, 246, 248);">axisLine</font>`<font style="color:rgb(36, 41, 47);background-color:rgb(244, 246, 248);">）</font>"'},"​",-1))]),s[19]||(s[19]=t(`<div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">option</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> xAxis</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> axisLine</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">axisLine</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  lineStyle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#85C2FC&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//X 轴主线的颜色</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span></code></pre></div>`,1)),i("h4",c,[s[8]||(s[8]=a("👉")),p(n,{style:{color:"rgb(36, 41, 47)","background-color":"rgb(244, 246, 248)"}},{default:l(()=>s[6]||(s[6]=[a(" 网格分割线颜色（")])),_:1,__:[6]}),s[9]||(s[9]=i("code",null,'<font style="color:rgb(36, 41, 47);background-color:rgb(244, 246, 248);">splitLine</font>',-1)),p(n,{style:{color:"rgb(36, 41, 47)","background-color":"rgb(244, 246, 248)"}},{default:l(()=>s[7]||(s[7]=[a("）")])),_:1,__:[7]}),s[10]||(s[10]=a()),s[11]||(s[11]=i("a",{class:"header-anchor",href:"#👉-网格分割线颜色-font-style-color-rgb-36-41-47-background-color-rgb-244-246-248-splitline-font","aria-label":'Permalink to "👉<font style="color:rgb(36, 41, 47);background-color:rgb(244, 246, 248);"> 网格分割线颜色（</font>`<font style="color:rgb(36, 41, 47);background-color:rgb(244, 246, 248);">splitLine</font>`<font style="color:rgb(36, 41, 47);background-color:rgb(244, 246, 248);">）</font>"'},"​",-1))]),s[20]||(s[20]=t(`<div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">option</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> xAxis</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> splitLine</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">splitLine</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  lineStyle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#85C2FC&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 设置 X 轴的分割线颜色为浅灰色</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="👉-x轴设置间隔个数显示" tabindex="-1">👉 x轴设置间隔个数显示 <a class="header-anchor" href="#👉-x轴设置间隔个数显示" aria-label="Permalink to &quot;👉 x轴设置间隔个数显示&quot;">​</a></h4><p>主要是调整xAxis里面的interval这个属性，显示x轴的间隔个数</p><p><img src="https://cdn.nlark.com/yuque/0/2025/png/22435914/1753248667907-3ca8a549-f3c1-4ad1-a4c2-67cded638beb.png" alt=""></p><p>👉这里我们还可以单独设置只是显示奇数个数</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>axisLabel:{ interval:间隔数量 }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 只是显示奇数个数</span></span>
<span class="line"><span>axisLabel:{ interval:0 }</span></span></code></pre></div><h4 id="👉-调整x轴分割线" tabindex="-1">👉 调整x轴分割线 <a class="header-anchor" href="#👉-调整x轴分割线" aria-label="Permalink to &quot;👉 调整x轴分割线&quot;">​</a></h4><p>主要是调整xAxis里面的splitLine这个属性</p><p><img src="https://cdn.nlark.com/yuque/0/2025/png/22435914/1753248673371-e75503b5-9197-425c-8382-476264e085c6.png" alt=""></p><p>这里我们简单调整一下</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> </span></span>
<span class="line"><span>splitLine: {</span></span>
<span class="line"><span>            show: true,</span></span>
<span class="line"><span>            lineStyle: {</span></span>
<span class="line"><span>              color: &#39;rgba(133, 194, 252, 0.2)&#39;,</span></span>
<span class="line"><span>              type: &#39;solid&#39;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span> }</span></span></code></pre></div><p>最后结果如下：</p><p><img src="https://cdn.nlark.com/yuque/0/2025/png/22435914/1753248679466-fbd6c097-ce54-4b99-98ed-edee6b0db4b5.png" alt=""></p><h4 id="👉-x轴数据过多无法显示" tabindex="-1">👉 x轴数据过多无法显示 <a class="header-anchor" href="#👉-x轴数据过多无法显示" aria-label="Permalink to &quot;👉 x轴数据过多无法显示&quot;">​</a></h4><p>🍎<code>dataZoom </code> 拖动滑动x轴，为我们提供了巨大的帮助，层级与xAxis平级。</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> </span></span>
<span class="line"><span>dataZoom: [{</span></span>
<span class="line"><span>  type: &#39;inside&#39;, //1平移 缩放</span></span>
<span class="line"><span>  throttle: &#39;50&#39;, //设置触发视图刷新的频率。单位为毫秒（ms）。</span></span>
<span class="line"><span>  minValueSpan: 6, //用于限制窗口大小的最小值,在类目轴上可以设置为 5 表示 5 个类目</span></span>
<span class="line"><span>  start: 1, //数据窗口范围的起始百分比 范围是：0 ~ 100。表示 0% ~ 100%。</span></span>
<span class="line"><span>  end: 50, //数据窗口范围的结束百分比。范围是：0 ~ 100。</span></span>
<span class="line"><span>  zoomLock: true, //如果设置为 true 则锁定选择区域的大小，也就是说，只能平移，不能缩放。</span></span>
<span class="line"><span>}],</span></span></code></pre></div><p>最后我们鼠标放上去的时候就可以进行拖拽</p><h4 id="👉-x轴数据格式自定义" tabindex="-1">👉 x轴数据格式自定义 <a class="header-anchor" href="#👉-x轴数据格式自定义" aria-label="Permalink to &quot;👉 x轴数据格式自定义&quot;">​</a></h4><p>重新定义x轴数据</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> </span></span>
<span class="line"><span>axisLabel: {</span></span>
<span class="line"><span>formatter: function (value, index) {</span></span>
<span class="line"><span>    // 在这里可以编写自定义的格式化逻辑</span></span>
<span class="line"><span>    // 例如，将日期格式转换为特定格式</span></span>
<span class="line"><span>    return value.replace(/(\\d{4})-(\\d{2})-(\\d{2})/, \`(这里有个美元符号)2月&#39;(这里有个美元符号)3\`);</span></span>
<span class="line"><span>    // return value.replace(/(\\d{4})-(\\d{2})-(\\d{2})/, \`(这里有个美元符号)3/(这里有个美元符号)2/(这里有个美元符号)1\`);</span><span> // 2023年06月01 01-06-2023</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="👉-x轴数据设置横向标记线" tabindex="-1">👉 x轴数据设置横向标记线 <a class="header-anchor" href="#👉-x轴数据设置横向标记线" aria-label="Permalink to &quot;👉 x轴数据设置横向标记线&quot;">​</a></h4><p>添加进入series下的<code>[{}]</code>里面的<code>{}</code>之中</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> </span></span>
<span class="line"><span> markLine: {</span></span>
<span class="line"><span>    silent: true,</span></span>
<span class="line"><span>    lineStyle: {</span></span>
<span class="line"><span>      type: &#39;dashed&#39;, // 基准线样式为虚线</span></span>
<span class="line"><span>      color: &#39;red&#39;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    data: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        yAxis: 200, // 自定义下限值</span></span>
<span class="line"><span>        // name: &#39;最小值&#39;,</span><span> // 基准线名称</span></span>
<span class="line"><span>        label: {</span></span>
<span class="line"><span>          show: false</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  },</span></span></code></pre></div><p><code>最后我们看看效果，注意这个红色就是添加的线！！</code></p><p><img src="https://cdn.nlark.com/yuque/0/2025/png/22435914/1753248695028-76e8ca94-1ae5-495a-82a5-b0f87a00667f.png" alt=""></p><h3 id="_5、详细使用-y轴" tabindex="-1">5、详细使用（y轴） <a class="header-anchor" href="#_5、详细使用-y轴" aria-label="Permalink to &quot;5、详细使用（y轴）&quot;">​</a></h3>`,26)),i("h4",g,[s[14]||(s[14]=a("👉")),p(n,{style:{color:"rgb(36, 41, 47)","background-color":"rgb(244, 246, 248)"}},{default:l(()=>s[12]||(s[12]=[a(" 网格分割线颜色（")])),_:1,__:[12]}),s[15]||(s[15]=i("code",null,'<font style="color:rgb(36, 41, 47);background-color:rgb(244, 246, 248);">splitLine</font>',-1)),p(n,{style:{color:"rgb(36, 41, 47)","background-color":"rgb(244, 246, 248)"}},{default:l(()=>s[13]||(s[13]=[a("）")])),_:1,__:[13]}),s[16]||(s[16]=a()),s[17]||(s[17]=i("a",{class:"header-anchor",href:"#👉-网格分割线颜色-font-style-color-rgb-36-41-47-background-color-rgb-244-246-248-splitline-font-1","aria-label":'Permalink to "👉<font style="color:rgb(36, 41, 47);background-color:rgb(244, 246, 248);"> 网格分割线颜色（</font>`<font style="color:rgb(36, 41, 47);background-color:rgb(244, 246, 248);">splitLine</font>`<font style="color:rgb(36, 41, 47);background-color:rgb(244, 246, 248);">）</font>"'},"​",-1))]),s[21]||(s[21]=t(`<div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">option</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> yAxis</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> splitLine</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">splitLine</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  lineStyle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#85C2FC&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 设置 X 轴的分割线颜色为浅灰色</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="👉-y轴设置左侧顶部标题" tabindex="-1">👉 Y轴设置左侧顶部标题 <a class="header-anchor" href="#👉-y轴设置左侧顶部标题" aria-label="Permalink to &quot;👉 Y轴设置左侧顶部标题&quot;">​</a></h4><p>🍎 title 可以帮助我们实现 echarts y轴顶部的标题，层级与xAxis平级</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>title: { text: &#39;Stacked Line&#39; },</span></span></code></pre></div><p>注意这里是标题y轴上的，不是中间的legend 标题</p><p><img src="https://cdn.nlark.com/yuque/0/2025/png/22435914/1753248704319-8dd820dd-2f72-4396-ad4f-4250cbc39c52.png" alt=""></p><h4 id="👉-y轴设置左侧单位name字体大小" tabindex="-1">👉 Y轴设置左侧单位name字体大小 <a class="header-anchor" href="#👉-y轴设置左侧单位name字体大小" aria-label="Permalink to &quot;👉 Y轴设置左侧单位name字体大小&quot;">​</a></h4><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">option</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> yAxis</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> nameTextStyle</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fontSize</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nameTextStyle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#ccc&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  nameLocation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;start&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  fontSize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 设置字体大小</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span></code></pre></div><h4 id="👉y轴显示顶部数值" tabindex="-1">👉y轴显示顶部数值 <a class="header-anchor" href="#👉y轴显示顶部数值" aria-label="Permalink to &quot;👉y轴显示顶部数值&quot;">​</a></h4><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> </span></span>
<span class="line"><span> label: {</span></span>
<span class="line"><span>    show: true,</span></span>
<span class="line"><span>     position: &#39;top&#39;</span></span>
<span class="line"><span>   },</span></span></code></pre></div><p><img src="https://cdn.nlark.com/yuque/0/2025/png/22435914/1753248710210-9b5ce8b4-8f1b-425b-822d-aa4ee11f5199.png" alt=""></p><h4 id="👉y轴左边轴承数值背后添加单位" tabindex="-1">👉y轴左边轴承数值背后添加单位 <a class="header-anchor" href="#👉y轴左边轴承数值背后添加单位" aria-label="Permalink to &quot;👉y轴左边轴承数值背后添加单位&quot;">​</a></h4><p>这里添加单位其实就是y轴的数据格式重新定义</p><ul><li>设置yAxis =&gt; axisLabel =&gt; formatter</li></ul><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> </span></span>
<span class="line"><span>  yAxis: {</span></span>
<span class="line"><span>    type: &#39;value&#39;,</span></span>
<span class="line"><span>    axisLabel: {</span></span>
<span class="line"><span>      formatter: function (value, index) {</span></span>
<span class="line"><span>        return value + &#39; kg&#39;; // 将原始数值与单位字符串拼接起来</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span></code></pre></div><p>这里就是设置我们的这部分</p><p><img src="https://cdn.nlark.com/yuque/0/2025/png/22435914/1753248715985-60aa6879-8de1-422c-9a19-bcea2f12c7fb.png" alt=""></p><h4 id="👉-y轴左侧字体颜色" tabindex="-1">👉 y轴左侧字体颜色 <a class="header-anchor" href="#👉-y轴左侧字体颜色" aria-label="Permalink to &quot;👉 y轴左侧字体颜色&quot;">​</a></h4><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>yAxis=&gt; axisLabel =&gt; textStyle</span></span>
<span class="line"><span>yAxis: {</span></span>
<span class="line"><span>    type: &#39;value&#39;,</span></span>
<span class="line"><span>     axisLabel: {</span></span>
<span class="line"><span>            //y轴文字的配置</span></span>
<span class="line"><span>            textStyle: {</span></span>
<span class="line"><span>              color: &#39;red&#39; //Y轴内容文字颜色</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            fontSize: 14, // 设置字体大小</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>  },</span></span></code></pre></div><p><img src="https://cdn.nlark.com/yuque/0/2025/png/22435914/1753248721850-1e7ceaf6-c9f5-403c-bfff-1a56e3e7e325.png" alt=""></p><h4 id="👉-y轴左侧字体大小" tabindex="-1">👉 y轴左侧字体大小 <a class="header-anchor" href="#👉-y轴左侧字体大小" aria-label="Permalink to &quot;👉 y轴左侧字体大小&quot;">​</a></h4><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">yAxis</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> axisLabel</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fontSize</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yAxis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;value&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    axisLabel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          fontSize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">14</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 设置字体大小</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span></code></pre></div><h4 id="👉y轴刻度的值跟实际值不对应" tabindex="-1">👉y轴刻度的值跟实际值不对应： <a class="header-anchor" href="#👉y轴刻度的值跟实际值不对应" aria-label="Permalink to &quot;👉y轴刻度的值跟实际值不对应：&quot;">​</a></h4><p>首先就是遇到的数据值不对应问题</p><p>y轴轴线</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>axisLine: {</span></span>
<span class="line"><span>    //y轴线的配置</span></span>
<span class="line"><span>    show: true, //是否展示</span></span>
<span class="line"><span>    lineStyle: {</span></span>
<span class="line"><span>      color: &#39;rgba(133, 194, 252, 0.8)&#39;, //y轴线的颜色（若只设置了y轴线的颜色，未设置y轴文字的颜色，则y轴文字会默认跟设置的y轴线颜色一致）</span></span>
<span class="line"><span>      width: 1, //y轴线的宽度</span></span>
<span class="line"><span>      type: &#39;solid&#39; //y轴线为实线</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>},</span></span></code></pre></div><p><img src="https://cdn.nlark.com/yuque/0/2025/png/22435914/1741324486432-076e3fec-ac5a-4e5a-9daf-819788669ebf.png" alt=""></p><h4 id="👉y轴线-y-轴线" tabindex="-1">👉y轴线(Y 轴线) <a class="header-anchor" href="#👉y轴线-y-轴线" aria-label="Permalink to &quot;👉y轴线(Y 轴线)&quot;">​</a></h4><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> axisLine</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  show</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 显示 Y 轴线</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  lineStyle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#000&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Y 轴线颜色</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // Y 轴线宽度</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span></code></pre></div><h4 id="👉y轴刻度线" tabindex="-1">👉y轴刻度线 <a class="header-anchor" href="#👉y轴刻度线" aria-label="Permalink to &quot;👉y轴刻度线&quot;">​</a></h4><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">axisTick</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  show</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 显示刻度线</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  lineStyle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#000&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 刻度线颜色</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 刻度线宽度</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="_6、存在的问题处理" tabindex="-1">6、存在的问题处理 <a class="header-anchor" href="#_6、存在的问题处理" aria-label="Permalink to &quot;6、存在的问题处理&quot;">​</a></h3><p>当然了，在Echarts折线图的使用过程之中，我们也会遇到一些匪夷所思的问题，所有这里我们记录一下；</p><h4 id="👉y轴刻度的值跟实际值不对应-1" tabindex="-1">👉y轴刻度的值跟实际值不对应： <a class="header-anchor" href="#👉y轴刻度的值跟实际值不对应-1" aria-label="Permalink to &quot;👉y轴刻度的值跟实际值不对应：&quot;">​</a></h4><p>首先就是遇到的数据值不对应问题，先来看看我们图片部分</p><p><img src="https://cdn.nlark.com/yuque/0/2025/png/22435914/1753248734594-d53d302e-e929-4ba8-9e04-5e70d8ca7832.png" alt=""></p><p>代码配置如下：</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span> </span></span>
<span class="line"><span>option = {</span></span>
<span class="line"><span>  tooltip: {</span></span>
<span class="line"><span>    trigger: &#39;axis&#39;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  xAxis: {</span></span>
<span class="line"><span>    type: &#39;category&#39;,</span></span>
<span class="line"><span>    data: [&#39;Mon&#39;, &#39;Tue&#39;, &#39;Wed&#39;, &#39;Thu&#39;, &#39;Fri&#39;, &#39;Sat&#39;, &#39;Sun&#39;]</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  yAxis: {</span></span>
<span class="line"><span>    type: &#39;value&#39;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  series: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      data: [150, 250, 224, 218, 135, 147, 260],</span></span>
<span class="line"><span>      type: &#39;line&#39;,</span></span>
<span class="line"><span>      stack:&#39;Total&#39;,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      data:[15,51,150,18,25,29,59,56],</span></span>
<span class="line"><span>      type:&#39;line&#39;,</span></span>
<span class="line"><span>      stack:&#39;Total&#39;,</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>};</span></span></code></pre></div><h5 id="原因" tabindex="-1">原因： <a class="header-anchor" href="#原因" aria-label="Permalink to &quot;原因：&quot;">​</a></h5><p>series设置了<strong>stack</strong>参数，并且stack 名称是一样的</p><h5 id="官网对于stack参数属性介绍如下" tabindex="-1">官网对于stack参数属性介绍如下： <a class="header-anchor" href="#官网对于stack参数属性介绍如下" aria-label="Permalink to &quot;官网对于stack参数属性介绍如下：&quot;">​</a></h5><p>属性地址： <a href="https://link.juejin.cn?target=https%3A%2F%2Fecharts.apache.org%2Fzh%2Foption.html%23series-line.stack" target="_blank" rel="noreferrer">echarts.apache.org/zh/option.h…</a></p><p>介绍：</p><p><img src="https://cdn.nlark.com/yuque/0/2025/png/22435914/1753248742127-5fb3827c-98ed-42b4-8f22-541c3e10386a.png" alt=""></p><p>解决方案1: 将series中的”stack“属性删除 （推荐）</p><p>效果：（这里我们直接用就生效了）</p><p><img src="https://cdn.nlark.com/yuque/0/2025/png/22435914/1753248749791-0da77b07-e63c-4d16-b532-bb605515e3c2.png" alt=""></p><p>解决方案2:(这个方案也是我推荐的方法 ) 将series中的”stack“属性名称改为不一致 （不推荐）</p><h4 id="👉x轴过量数据滑动问题" tabindex="-1">👉x轴过量数据滑动问题 <a class="header-anchor" href="#👉x轴过量数据滑动问题" aria-label="Permalink to &quot;👉x轴过量数据滑动问题&quot;">​</a></h4><p>其实就是上面的我们说的x轴滑动拖拽</p><p>也就是在echarts折线图x轴数据过多的时候调整dataZoom属性就可以啦</p><p><img src="https://cdn.nlark.com/yuque/0/2025/png/22435914/1753248756839-354d6d95-111b-4e8b-b41e-c79698acdf77.png" alt=""></p><h4 id="👉-图表的清空与重新渲染" tabindex="-1">👉 图表的清空与重新渲染 <a class="header-anchor" href="#👉-图表的清空与重新渲染" aria-label="Permalink to &quot;👉 图表的清空与重新渲染&quot;">​</a></h4><p>有时候我们需要重新清除一下图表</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 清空图表</span></span>
<span class="line"><span>myChart.clear();</span></span>
<span class="line"><span>将图表清空，但不会销毁 ECharts 实例</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>销毁 ECharts 实例，可以调用 dispose 方法</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 设置初始配置项</span></span>
<span class="line"><span>myChart.setOption(option);</span></span></code></pre></div><h3 id="_7、使用案例" tabindex="-1">7、使用案例 <a class="header-anchor" href="#_7、使用案例" aria-label="Permalink to &quot;7、使用案例&quot;">​</a></h3><h4 id="基础使用" tabindex="-1">基础使用 <a class="header-anchor" href="#基础使用" aria-label="Permalink to &quot;基础使用&quot;">​</a></h4><p><img src="https://cdn.nlark.com/yuque/0/2025/png/22435914/1753249037099-ccd4ff4d-16ca-4cab-bc06-de6c6b728e15.png" alt=""></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;echartline&quot;</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">this.xselinechartin(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;echartline&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">xselinechartin(id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    //</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 折线图</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    //</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> console.log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">document.getElementById(id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">document.getElementById(id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      let</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zhexian3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> echarts.init</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">document.getElementById(id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      let</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> optionzhexian</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">         grid:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          left:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;20%&#39;,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //距离左侧边距</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          right:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;0%&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          top:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;10%&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          bottom:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;25%&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          containLabel:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        dataZoom:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;inside&#39;,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //1平移</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 缩放</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            throttle:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;50&#39;,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //设置触发视图刷新的频率。单位为毫秒（ms）。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            minValueSpan:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 5,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //用于限制窗口大小的最小值,在类目轴上可以设置为</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 表示</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 个类目</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            start:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 1,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //数据窗口范围的起始百分比</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 范围是：0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 100。表示</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 0%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 100%。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            end: 10, //数据窗口范围的结束百分比。范围是：0 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 100。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            zoomLock:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //如果设置为</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 则锁定选择区域的大小，也就是说，只能平移，不能缩放。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          }],</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        color:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;#002f36&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,//</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #002f36  008297</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        tooltip:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          trigger:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;item&#39;,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 触发类型，可选值:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;item&#39;（数据项触发），&#39;axis&#39;（坐标轴触发），&#39;none&#39;（不触发）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          axisPointer:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">              type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;line&#39;,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 设置触发提示的指示器类型</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">              //</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 可选值:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;line&#39;（直线指示器），&#39;shadow&#39;（阴影指示器），&#39;cross&#39;（十字准星指示器）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          backgroundColor:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;rgba(0,47,54,1)&#39;,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 设置背景颜色</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          textStyle:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">              color:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;#fff&#39;,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 设置文本颜色</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">              fontSize:12,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 设置文字大小</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          padding:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [5, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">10],</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 内边距</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          formatter:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">2023年</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">{b}&lt;br/&gt;US$ {c}\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">         },</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        xAxis:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">          type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;category&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          data:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;11月26日&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;11月27日&#39;,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;11月28日&#39;,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;11月29日&#39;,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;11月30日&#39;,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;12月1日&#39;,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;12月2日&#39;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        yAxis:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">          type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;value&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        series:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          data:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [0,0,0,0,20,0],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">          type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;line&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          smooth:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">,//</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      };</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      zhexian3.setOption(optionzhexian</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span></code></pre></div><h4 id="完整案例1" tabindex="-1">完整案例1 <a class="header-anchor" href="#完整案例1" aria-label="Permalink to &quot;完整案例1&quot;">​</a></h4><p><img src="https://cdn.nlark.com/yuque/0/2025/png/22435914/1753249003112-46d6f676-e099-4a04-9a88-cf97f2f0bd33.png" alt=""></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">option </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        color: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#1890FF&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#52E3A9&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//&#39;#FFB566&#39;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        tooltip: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          trigger: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;axis&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          axisPointer: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;cross&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            crossStyle: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              color: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#999&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        splitLine: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          color: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#85C2FC&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        legend: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          data: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Evaporation&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Precipitation&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;22&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        xAxis: [{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          boundaryGap: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//过长隐藏x轴文字</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          splitLine: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            show: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            lineStyle: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              color: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;rgba(133, 194, 252, 0.4)&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              width: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;solid&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          axisLine: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            lineStyle: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;solid&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">              // color: &#39;rgba(133, 194, 252, 0.4)&#39;,</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> //坐标线的颜色</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              color:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#DBD8D9&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              width: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> //坐标线的宽度</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          axisLabel: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            //x轴文字的配置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            show: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            textStyle: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              color: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#808080&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              fontSize: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;10px&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;category&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          data: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &#39;2022年6月2号&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &#39;2日&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &#39;3日&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &#39;4日&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &#39;5日&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &#39;6日&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &#39;7日&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &#39;8日&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &#39;9日&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &#39;10日&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &#39;11日&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          axisPointer: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;shadow&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        yAxis: [{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;value&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            min: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            max: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">250</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            interval: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">50</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            axisLabel: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">              //y轴文字的配置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              formatter: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;{value}&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              show: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              textStyle: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                color: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#808080&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                fontSize: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;10px&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">              // formatter: &#39;{value} %&#39;//y轴的每一个刻度值后面加上‘%’号</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            axisLine: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              lineStyle: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;solid&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                color: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;rgba(133, 194, 252, 0.4)&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//坐标线的颜色</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                width: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> //坐标线的宽度</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            splitLine: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              show: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              lineStyle: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                // color: [&#39;rgba(133, 194, 252, 0.4)&#39;],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                color:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#DBD8D9&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                width: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;solid&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;value&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            show: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            min: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            max: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">25</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            interval: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            axisLabel: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              formatter: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;{value}&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        series: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Evaporation&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;line&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            smooth: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//平滑</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            showSymbol: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            lineStyle: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">              // 阴影部分</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              width: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 线条颜色、粗细</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              color: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#FFB566&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              shadowOffsetX: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 折线的X偏移</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              shadowOffsetY: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 折线的Y偏移</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              shadowBlur: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 折线模糊</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              shadowColor: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;rgba(255, 181, 102, 0.4)&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> //折线颜色</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            color: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#FFB566&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            yAxisIndex: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            tooltip: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">              valueFormatter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> value;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            data: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20.3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">23.4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">23.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">16.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">12.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6.2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2.2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3.3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6.3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10.2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Precipitation&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;line&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            smooth: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//平滑</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            lineStyle: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">              // 阴影部分</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              width: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 线条颜色、粗细</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              color: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#1791FF&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              shadowOffsetX: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 折线的X偏移</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              shadowOffsetY: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 折线的Y偏移</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              shadowBlur: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 折线模糊</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              shadowColor: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;rgba(3,116,255,0.4)&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> //折线颜色</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            showSymbol: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            color: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#52E3A9&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            yAxisIndex: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            tooltip: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">              valueFormatter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39; °C&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            data: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2.2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3.3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6.3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10.2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20.3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">23.4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">23.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">16.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">12.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6.2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;22&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;line&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            showSymbol: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            lineStyle: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">              // 阴影部分</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              width: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 线条颜色、粗细</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              color: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#52E3A9&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              shadowOffsetX: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 折线的X偏移</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              shadowOffsetY: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 折线的Y偏移</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              shadowBlur: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 折线模糊</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              shadowColor: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;rgba(3,116,255,0.4);&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> //折线颜色</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            smooth: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            color: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#1890FF&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            yAxisIndex: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            tooltip: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">              valueFormatter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39; °C&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            data: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6.3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">12.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6.2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10.2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20.3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">23.4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      };</span></span></code></pre></div><h4 id="案例2" tabindex="-1">案例2 <a class="header-anchor" href="#案例2" aria-label="Permalink to &quot;案例2&quot;">​</a></h4><p><img src="https://cdn.nlark.com/yuque/0/2025/png/22435914/1753249126249-0bc88e1b-1787-418f-843f-78631ecae3a0.png" alt=""></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> echarts </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;echarts&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> chartDom </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;main&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> myChart </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> echarts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">init</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(chartDom);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> option;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> myChart.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setOption</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  tooltip: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    trigger: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // legend: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //   data: [&#39;Email&#39;, &#39;Union Ads&#39;]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  grid: { </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//距离各个地方的边距 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    left: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;10%&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    right: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;5%&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    bottom: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;10%&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    containLabel: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">grid: {  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//另外一种方式控制 2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        x: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;12%&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//x 偏移量</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        y: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;7%&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// y 偏移量</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        width: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;87%&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 宽度</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        height: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;79%&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 高度</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  xAxis: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;category&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    boundaryGap: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    data: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Mon&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Tue&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Wed&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Thu&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Fri&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Sat&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Sun&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  yAxis: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;value&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 隐藏y轴</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        axisLine: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          show: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   // 隐藏y轴刻度线</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        axisTick: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          show: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // y轴网格线设置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        splitLine: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;dashed&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          color: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#eeeeee&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  series: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Email&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;line&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      stack: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Total&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      data: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">120</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">132</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">101</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">134</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">90</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">230</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">210</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Union Ads&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;line&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      stack: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Total&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      data: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">220</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">182</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">191</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">234</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">290</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">330</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">310</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> });</span></span></code></pre></div><h4 id="完整3" tabindex="-1">完整3 <a class="header-anchor" href="#完整3" aria-label="Permalink to &quot;完整3&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">option</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  tooltip:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> trigger:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;axis&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  dataZoom:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;inside&#39;,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //1平移</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 缩放</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      throttle:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;50&#39;,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //设置触发视图刷新的频率。单位为毫秒（ms）。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      minValueSpan:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 12,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //用于限制窗口大小的最小值,在类目轴上可以设置为</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 表示</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 个类目</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      start:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 0,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //数据窗口范围的起始百分比</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 范围是：0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 100。表示</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 0%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 100%。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      end: 50, //数据窗口范围的结束百分比。范围是：0 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 100。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      zoomLock:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //如果设置为</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 则锁定选择区域的大小，也就是说，只能平移，不能缩放。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  grid:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    x:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;10%&#39;,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //x</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 偏移量</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    y:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;7%&#39;,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 偏移量</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    width:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;50%&#39;,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 宽度</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    height:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;55%&#39;,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 高度</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    right:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;20%&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  xAxis:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;category&#39;,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    data:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      &#39;1&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      &#39;2&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      &#39;3&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      &#39;4&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      &#39;5&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      &#39;6&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      &#39;7&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      &#39;8&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      &#39;9&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      &#39;10&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      &#39;11&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      &#39;12&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      &#39;1&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      &#39;2&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      &#39;3&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      &#39;4&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      &#39;5&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      &#39;6&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      &#39;7&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      &#39;8&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      &#39;9&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      &#39;10&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    axisLabel:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> interval:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  yAxis:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;value&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  series:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      data:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        150,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 230,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 224,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 218,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 135,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 147,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 260,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 150,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 230,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 224,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 218,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 135,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 150,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 230,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        224,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 218,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 135,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 147,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 260,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 150,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 230,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 224,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 218,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 135</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;line&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><p><img src="https://cdn.nlark.com/yuque/0/2025/png/22435914/1753249159388-11d6f5d6-f4a1-4055-9aa4-631d4b00dd69.png" alt=""></p>`,69))])}const v=h(r,[["render",y]]);export{m as __pageData,v as default};
