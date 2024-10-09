import{_ as a,c as s,o as n,a4 as p}from"./chunks/framework.DvHWMJgD.js";const u=JSON.parse('{"title":"echarts柱状图的使用及详细配置（折线图你可能会了，渐变柱状图呢？）","description":"","frontmatter":{},"headers":[],"relativePath":"src/Echarts/echarts柱状图.md","filePath":"src/Echarts/echarts柱状图.md"}'),e={name:"src/Echarts/echarts柱状图.md"},l=p(`<h1 id="echarts柱状图的使用及详细配置-折线图你可能会了-渐变柱状图呢" tabindex="-1"><strong>echarts柱状图的使用及详细配置（折线图你可能会了，渐变柱状图呢？）</strong> <a class="header-anchor" href="#echarts柱状图的使用及详细配置-折线图你可能会了-渐变柱状图呢" aria-label="Permalink to &quot;**echarts柱状图的使用及详细配置（折线图你可能会了，渐变柱状图呢？）**&quot;">​</a></h1><h2 id="_1、认识、引入和使用" tabindex="-1"><strong>1、认识、引入和使用</strong> <a class="header-anchor" href="#_1、认识、引入和使用" aria-label="Permalink to &quot;**1、认识、引入和使用**&quot;">​</a></h2><p><strong>先来看看我们柱状图是什么样子：</strong><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1724649688812-146cd8d4-d726-4566-893a-43d03d1197bd.webp#averageHue=%23f5f5f5&amp;clientId=u835c89ad-c1da-4&amp;from=paste&amp;id=uf006bd80&amp;originHeight=455&amp;originWidth=1675&amp;originalType=url&amp;ratio=0.8999999761581421&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;taskId=u5468139e-d24c-46b0-bff1-4fb225f097d&amp;title=" alt=""><strong>柱状图的使用跟我们的echarts折线图差不多，只不过我们在echarts折线图文章之中进行了大量的铺垫，习惯了echarts折线图的使用以后，使用我们柱状图就轻而易举了。</strong> 👉** 引入** <strong>这里我们依然是采用echarts5 之中的写法，echarts4可以看看我关于echarts的折线图的文章部分</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  import * as echarts from &#39;echarts&#39;;// 5.4区别4引入方式</span></span></code></pre></div><p>👉** 使用** <strong>这里使用部分也是跟我们折线图的部分差不多，甚至不想看的可以直接跳过就可以了！</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   &lt;div ref=&quot;chartRef&quot; style=&quot;width: 100%; height: 400px;&quot;&gt;&lt;/div&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &lt;template&gt;</span></span>
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
<span class="line"><span>  const  option = {</span></span>
<span class="line"><span>  xAxis: {</span></span>
<span class="line"><span>    type: &#39;category&#39;,</span></span>
<span class="line"><span>    data: [&#39;Mon&#39;, &#39;Tue&#39;, &#39;Wed&#39;, &#39;Thu&#39;, &#39;Fri&#39;, &#39;Sat&#39;, &#39;Sun&#39;]</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  yAxis: {</span></span>
<span class="line"><span>    type: &#39;value&#39;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  series: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      data: [120, 200, 150, 80, 70, 110, 130],</span></span>
<span class="line"><span>      type: &#39;bar&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 使用配置项和数据显示图表</span></span>
<span class="line"><span>  chart.setOption(option);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>/* 可以根据需要添加样式 */</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div><p><strong>然后我们看看我们的效果</strong><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1724649689074-262aba28-32f2-4321-a84a-a6936bc5fdda.webp#averageHue=%23f1f3f0&amp;clientId=u835c89ad-c1da-4&amp;from=paste&amp;id=ufe658d40&amp;originHeight=357&amp;originWidth=607&amp;originalType=url&amp;ratio=0.8999999761581421&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;taskId=u069efc74-4fdd-4000-bba2-87ea6af6e0b&amp;title=" alt=""><strong>这里可以看到我们已经基本把柱状图写好了，接下来就可以调整细节了</strong></p><h2 id="_2、详细调整和使用" tabindex="-1"><strong>2、详细调整和使用</strong> <a class="header-anchor" href="#_2、详细调整和使用" aria-label="Permalink to &quot;**2、详细调整和使用**&quot;">​</a></h2><h3 id="👉控制柱状图颜色" tabindex="-1">👉<strong>控制柱状图颜色</strong> <a class="header-anchor" href="#👉控制柱状图颜色" aria-label="Permalink to &quot;👉**控制柱状图颜色**&quot;">​</a></h3><ul><li><strong>柱子渐变 series -&gt; color 通过series中的color进行更改</strong></li></ul><p><strong>官网之中我们可以详细看到这个配置项</strong><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1724649688957-4df1e934-102d-4d09-9525-7824dfceeb45.webp#averageHue=%23fdfcfc&amp;clientId=u835c89ad-c1da-4&amp;from=paste&amp;id=uff7210c1&amp;originHeight=600&amp;originWidth=346&amp;originalType=url&amp;ratio=0.8999999761581421&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;taskId=uae2ca018-8d0a-489e-9d1e-2bc017b71b8&amp;title=" alt=""></p><h4 id="更改柱子为渐变色" tabindex="-1"><strong>更改柱子为渐变色</strong> <a class="header-anchor" href="#更改柱子为渐变色" aria-label="Permalink to &quot;**更改柱子为渐变色**&quot;">​</a></h4><p><strong>这边我们尝试一下更改</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 \`true\`，则该四个值是绝对的像素位置</span></span>
<span class="line"><span> color: {</span></span>
<span class="line"><span>        type: &#39;linear&#39;,</span></span>
<span class="line"><span>        x: 0,</span></span>
<span class="line"><span>        y: 0,</span></span>
<span class="line"><span>        x2: 0,</span></span>
<span class="line"><span>        y2: 1,</span></span>
<span class="line"><span>        colorStops: [</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            offset: 0,</span></span>
<span class="line"><span>            color: &#39;red&#39; // 0% 处的颜色</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            offset: 1,</span></span>
<span class="line"><span>            color: &#39;blue&#39; // 100% 处的颜色</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        ],</span></span>
<span class="line"><span>   global: false // 缺省为 false</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>然后看看我们更改以后的效果</strong><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1724649688890-b2fb536c-42e0-450c-84a3-b1e2036b399b.webp#averageHue=%23fafdfa&amp;clientId=u835c89ad-c1da-4&amp;from=paste&amp;id=u89720d90&amp;originHeight=481&amp;originWidth=742&amp;originalType=url&amp;ratio=0.8999999761581421&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;taskId=u8283caca-0cfa-48d6-8c77-1cad8967f95&amp;title=" alt=""></p><h4 id="五个柱子分别显示不同颜色" tabindex="-1"><strong>五个柱子分别显示不同颜色</strong> <a class="header-anchor" href="#五个柱子分别显示不同颜色" aria-label="Permalink to &quot;**五个柱子分别显示不同颜色**&quot;">​</a></h4><p><strong>上面我们写的柱子里面都是同一种渐变色，现在有个需求，就是需要五个柱子分别展示不同的五种渐变色，那么这个时候我们应该如何写呢</strong><code>**在series**</code><strong>中有</strong><code>**itemStyle**</code><strong>属性，该属性支持使用回调函数，使用echarts中自带的渐变色对象返回相关对象 利用series中的itemStyle参数</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>markdown</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &gt; LinearGradient中的参数前四个参数分别代表</span></span>
<span class="line"><span>x : 从左向右 1 ——&gt; 0</span></span>
<span class="line"><span>y：从上向下 1 ——&gt; 0</span></span>
<span class="line"><span>x2：从右向左 1 ——&gt; 0</span></span>
<span class="line"><span>y2：从下向上 1 ——&gt; 0</span></span>
<span class="line"><span>如果想要左右效果的渐变，那么只需修改x-&gt;x2即可</span></span></code></pre></div><p>👉** 然后我们进行一下相对应的更改尝试一下：**</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return new echarts.graphic.LinearGradient(0, 0, 1, 0, [{ // x-&gt;x2</span></span>
<span class="line"><span>      offset: 0,</span></span>
<span class="line"><span>            color: colorItem[0]</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            offset: 1,</span></span>
<span class="line"><span>            color: colorItem[1]</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>   ], false);</span></span></code></pre></div><p><strong>具体就是这里这个参数</strong><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1724649688898-872f71e3-8a33-472b-b453-aa92b8153943.webp#averageHue=%23fbfaf9&amp;clientId=u835c89ad-c1da-4&amp;from=paste&amp;id=u9dcf8268&amp;originHeight=183&amp;originWidth=515&amp;originalType=url&amp;ratio=0.8999999761581421&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;taskId=u6d44a92d-964f-48e1-8a35-6e6dc281baf&amp;title=" alt=""></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  itemStyle: {</span></span>
<span class="line"><span>    normal: {</span></span>
<span class="line"><span>      color: function (params) {</span></span>
<span class="line"><span>        let colorList = [</span></span>
<span class="line"><span>          &#39;#FA897B&#39;,</span></span>
<span class="line"><span>          &#39;#FFDD94&#39;,</span></span>
<span class="line"><span>          &#39;#D0E6A5&#39;,</span></span>
<span class="line"><span>          &#39;#FFDD94&#39;,</span></span>
<span class="line"><span>          &#39;#4675C0&#39;,</span></span>
<span class="line"><span>          &#39;#B8BFD6&#39;,</span></span>
<span class="line"><span>          &#39;#FFA876&#39;</span></span>
<span class="line"><span>        ];</span></span>
<span class="line"><span>        let colorItem = colorList[params.dataIndex];</span></span>
<span class="line"><span>        return colorItem;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>这里我们可以看看最后的效果</strong><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1724649690484-674125e9-e707-4499-8131-f92bc4c2befa.webp#averageHue=%23faead5&amp;clientId=u835c89ad-c1da-4&amp;from=paste&amp;id=u047c1807&amp;originHeight=509&amp;originWidth=711&amp;originalType=url&amp;ratio=0.8999999761581421&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;taskId=u24d0b4b9-1b15-42a3-871f-397fac8d5d4&amp;title=" alt=""></p><h4 id="分别显示不同的渐变色柱子" tabindex="-1"><strong>分别显示不同的渐变色柱子</strong> <a class="header-anchor" href="#分别显示不同的渐变色柱子" aria-label="Permalink to &quot;**分别显示不同的渐变色柱子**&quot;">​</a></h4><p><strong>利用itemStyle中的normal color回调函数返回一个渐变色</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   itemStyle: {</span></span>
<span class="line"><span>        normal: {</span></span>
<span class="line"><span>          color: function (params) {</span></span>
<span class="line"><span>            let colorList = [</span></span>
<span class="line"><span>              [&#39;#FA897B&#39;, &#39;#FFDD94&#39;],</span></span>
<span class="line"><span>              [&#39;#D0E6A5&#39;, &#39;#FFDD94&#39;],</span></span>
<span class="line"><span>              [&#39;#4675C0&#39;, &#39;#B8BFD6&#39;],</span></span>
<span class="line"><span>              [&#39;#86E3CE&#39;, &#39;#CCABD8&#39;],</span></span>
<span class="line"><span>              [&#39;#64A4D6&#39;, &#39;#C782C2&#39;],</span></span>
<span class="line"><span>              [&#39;#bdc2e8&#39;, &#39;#e6dee9&#39;],</span></span>
<span class="line"><span>              [&#39;#FFA876&#39;, &#39;#FF5B00&#39;]</span></span>
<span class="line"><span>            ];</span></span>
<span class="line"><span>            let colorItem = colorList[params.dataIndex];</span></span>
<span class="line"><span>            return new echarts.graphic.LinearGradient(0,0,0,1, //y-&gt;y2</span></span>
<span class="line"><span>              [</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                  offset: 0,</span></span>
<span class="line"><span>                  color: colorItem[0]</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                  offset: 1,</span></span>
<span class="line"><span>                  color: colorItem[1]</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>              ],</span></span>
<span class="line"><span>              false</span></span>
<span class="line"><span>            );</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span></code></pre></div><p><strong>更改以后的效果</strong><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1724649690501-e31de71c-a484-4eb0-ba93-f378cf61982d.webp#averageHue=%23f2c68e&amp;clientId=u835c89ad-c1da-4&amp;from=paste&amp;id=u1a79e0e6&amp;originHeight=491&amp;originWidth=684&amp;originalType=url&amp;ratio=0.8999999761581421&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;taskId=u412a0eff-4825-4eee-ba0f-447b7e9d756&amp;title=" alt=""></p><h3 id="👉改变分类类型" tabindex="-1">👉<strong>改变分类类型</strong> <a class="header-anchor" href="#👉改变分类类型" aria-label="Permalink to &quot;👉**改变分类类型**&quot;">​</a></h3><p><strong>需要更改雷达图的分类，就更改data数据</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  yAxis: [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            type: &#39;category&#39;,</span></span>
<span class="line"><span>            axisTick: {</span></span>
<span class="line"><span>                show: false</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            data: [&#39;周一&#39;, &#39;周二&#39;, &#39;周三&#39;, &#39;周四&#39;, &#39;周五&#39;, &#39;周六&#39;, &#39;周日&#39;],</span></span>
<span class="line"><span>            axisLabel:{</span></span>
<span class="line"><span>                fontSize: 100,  //控制字体大小 </span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    ],</span></span></code></pre></div><h3 id="👉设置四个圆角的半径" tabindex="-1">👉<strong>设置四个圆角的半径</strong> <a class="header-anchor" href="#👉设置四个圆角的半径" aria-label="Permalink to &quot;👉**设置四个圆角的半径**&quot;">​</a></h3><p><strong>设置 barBorderRadius 属性，可以分别设置四个圆角的半径。</strong><strong>在数组中，依次表示左上角、右上角、右下角、左下角的圆角半径。通过调整这些数值，可以达到自定义圆角样式的效果。</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  option = {</span></span>
<span class="line"><span>    // 其他配置项...</span></span>
<span class="line"><span>    series: [{</span></span>
<span class="line"><span>        type: &#39;bar&#39;,</span></span>
<span class="line"><span>        data: [10, 20, 30, 40, 50],</span></span>
<span class="line"><span>        itemStyle: {</span></span>
<span class="line"><span>            borderRadius: [5, 5, 0, 0] // 设置四个圆角的半径，顺序为左上、右上、右下、左下</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }]</span></span>
<span class="line"><span>};</span></span></code></pre></div><p><strong>更改以后的效果</strong><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1724649690506-2431394c-0cc9-458f-99bb-88602d88212e.webp#averageHue=%23fbc379&amp;clientId=u835c89ad-c1da-4&amp;from=paste&amp;id=ufa271c56&amp;originHeight=381&amp;originWidth=353&amp;originalType=url&amp;ratio=0.8999999761581421&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;taskId=u9d7ee89c-0055-4e0b-a8e3-8ee4bf01e82&amp;title=" alt=""><strong>设置柱状图顶部显示数字</strong><strong>通过设置 label 属性来实现柱状图内部显示数值的效果</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  option = {</span></span>
<span class="line"><span>    // 其他配置项...</span></span>
<span class="line"><span>    series: [{</span></span>
<span class="line"><span>        type: &#39;bar&#39;,</span></span>
<span class="line"><span>        data: [10, 20, 30, 40, 50],</span></span>
<span class="line"><span>        label: {</span></span>
<span class="line"><span>            show: true, // 显示数值</span></span>
<span class="line"><span>            position: &#39;inside&#39; // 设置显示位置为柱状图内部</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }]</span></span>
<span class="line"><span>};</span></span></code></pre></div><h3 id="👉-设置柱状图顶部显示数字位置" tabindex="-1">👉** 设置柱状图顶部显示数字位置** <a class="header-anchor" href="#👉-设置柱状图顶部显示数字位置" aria-label="Permalink to &quot;👉** 设置柱状图顶部显示数字位置**&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  支持：top / left / right / bottom / inside / insideLeft / insideRight / insideTop / insideBottom / insideTopLeft / insideBottomLeft / insideTopRight / insideBottomRight</span></span></code></pre></div><p><strong>也可以用一个数组表示相对的百分比或者绝对像素值表示标签相对于图形包围盒左上角的位置</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 绝对的像素值</span></span>
<span class="line"><span>  position: [10, 10],</span></span>
<span class="line"><span>  // 相对的百分比</span></span>
<span class="line"><span>  position: [&#39;50%&#39;, &#39;50%&#39;]</span></span></code></pre></div><h3 id="👉-设置柱状图顶部提示tooltip" tabindex="-1">👉** 设置柱状图顶部提示tooltip** <a class="header-anchor" href="#👉-设置柱状图顶部提示tooltip" aria-label="Permalink to &quot;👉** 设置柱状图顶部提示tooltip**&quot;">​</a></h3><h4 id="自定义提示tooltip样式" tabindex="-1"><strong>自定义提示tooltip样式</strong> <a class="header-anchor" href="#自定义提示tooltip样式" aria-label="Permalink to &quot;**自定义提示tooltip样式**&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    tooltip: {</span></span>
<span class="line"><span>        trigger: &#39;axis&#39;,</span></span>
<span class="line"><span>        axisPointer: {</span></span>
<span class="line"><span>            type: &#39;shadow&#39;</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        // 自定义tooltip样式</span></span>
<span class="line"><span>        formatter: function (params) {</span></span>
<span class="line"><span>            var tooltipHtml = &#39;&#39;;</span></span>
<span class="line"><span>            tooltipHtml += &#39;&lt;div style=&quot;background-color:rgba(255,255,255,0.8);border:1px solid #aaa;padding:10px;&quot;&gt;&#39;;</span></span>
<span class="line"><span>            tooltipHtml += &#39;&lt;p style=&quot;margin:0;&quot;&gt;自定义标题&lt;/p&gt;&#39;;</span></span>
<span class="line"><span>            tooltipHtml += &#39;&lt;hr style=&quot;border:0.5px solid #aaa;margin:5px 0;&quot;&gt;&#39;;</span></span>
<span class="line"><span>            tooltipHtml += &#39;&lt;p style=&quot;margin:0;&quot;&gt;&#39; + params[0].axisValue + &#39;&lt;/p&gt;&#39;;</span></span>
<span class="line"><span>            tooltipHtml += &#39;&lt;p style=&quot;margin:0;&quot;&gt;系列名称：&#39; + params[0].seriesName + &#39;&lt;/p&gt;&#39;;</span></span>
<span class="line"><span>            tooltipHtml += &#39;&lt;p style=&quot;margin:0;&quot;&gt;数值：&#39; + params[0].value + &#39;&lt;/p&gt;&#39;;</span></span>
<span class="line"><span>            tooltipHtml += &#39;&lt;/div&gt;&#39;;</span></span>
<span class="line"><span>            return tooltipHtml;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span></code></pre></div><p><strong>定义完成以后看看我们最后的效果：</strong><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1724649690697-a181a8e2-7a9b-4574-a5e4-639bd8ef382c.webp#averageHue=%23f4f7f4&amp;clientId=u835c89ad-c1da-4&amp;from=paste&amp;id=u3b2f0010&amp;originHeight=333&amp;originWidth=412&amp;originalType=url&amp;ratio=0.8999999761581421&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;taskId=u8a06821a-4baa-4d2a-82b5-4dab111a1c8&amp;title=" alt=""></p><h4 id="自定义提示tooltip多类型柱子显示" tabindex="-1"><strong>自定义提示tooltip多类型柱子显示</strong> <a class="header-anchor" href="#自定义提示tooltip多类型柱子显示" aria-label="Permalink to &quot;**自定义提示tooltip多类型柱子显示**&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  tooltip: {</span></span>
<span class="line"><span>        trigger: &#39;axis&#39;,</span></span>
<span class="line"><span>        axisPointer: {</span></span>
<span class="line"><span>            type: &#39;shadow&#39;</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        // 自定义tooltip样式</span></span>
<span class="line"><span>        formatter: function (params) {</span></span>
<span class="line"><span>            var tooltipHtml = &#39;&#39;;</span></span>
<span class="line"><span>            tooltipHtml += &#39;&lt;div style=&quot;background-color:rgba(255,255,255,0.8);border:1px solid #aaa;padding:10px;&quot;&gt;&#39;;</span></span>
<span class="line"><span>            tooltipHtml += &#39;&lt;p style=&quot;margin:0;&quot;&gt;自定义标题&lt;/p&gt;&#39;;</span></span>
<span class="line"><span>            tooltipHtml += &#39;&lt;hr style=&quot;border:0.5px solid #aaa;margin:5px 0;&quot;&gt;&#39;;</span></span>
<span class="line"><span>            for (var i = 0; i &lt; params.length; i++) {</span></span>
<span class="line"><span>                tooltipHtml += &#39;&lt;p style=&quot;margin:0;&quot;&gt;&#39; + params[i].name + &#39;：&#39; + params[i].value + &#39;&lt;/p&gt;&#39;;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            tooltipHtml += &#39;&lt;/div&gt;&#39;;</span></span>
<span class="line"><span>            return tooltipHtml;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>},</span></span></code></pre></div><h3 id="👉左侧label为内部的时候如何去除数字为0" tabindex="-1">👉<strong>左侧label为内部的时候如何去除数字为0</strong> <a class="header-anchor" href="#👉左侧label为内部的时候如何去除数字为0" aria-label="Permalink to &quot;👉**左侧label为内部的时候如何去除数字为0**&quot;">​</a></h3><p><strong>先来看看我们最后完成效果以后的缺陷：</strong><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1724649690678-203a7a91-5f89-426a-85e9-b94e540581a9.webp#averageHue=%23fefdfb&amp;clientId=u835c89ad-c1da-4&amp;from=paste&amp;id=ub64c411e&amp;originHeight=127&amp;originWidth=520&amp;originalType=url&amp;ratio=0.8999999761581421&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;taskId=u6deee8c6-4e85-4a65-a572-7ea82bc3f44&amp;title=" alt=""><strong>这里我们重新用一下自定义数据就可以</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  label: {</span></span>
<span class="line"><span>  show: true,</span></span>
<span class="line"><span>    position: &#39;insideRight&#39;,</span></span>
<span class="line"><span>    formatter: function(params) {</span></span>
<span class="line"><span>        return params.value !== 0 ? params.value : &#39;&#39;;//这是关键，在需要的地方加上就行了</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span></code></pre></div><h2 id="_3、-横向柱状图数据配置" tabindex="-1"><strong>3、 横向柱状图数据配置</strong> <a class="header-anchor" href="#_3、-横向柱状图数据配置" aria-label="Permalink to &quot;**3、 横向柱状图数据配置**&quot;">​</a></h2><p><strong>柱状图我也可以调成横躺之类的，我们可以先看看画面</strong><strong>效果图</strong><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1724649691087-29d5aa2f-4f59-4b8c-ab62-502c6125a643.webp#averageHue=%23f7efdb&amp;clientId=u835c89ad-c1da-4&amp;from=paste&amp;id=u97f6cb2a&amp;originHeight=300&amp;originWidth=695&amp;originalType=url&amp;ratio=0.8999999761581421&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;taskId=u9c2f8e32-c54e-47d1-8353-0e0a09c32d1&amp;title=" alt=""><strong>完整使用和配置，这里我们就直接上代码了！</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>\`\`\`js</span></span>
<span class="line"><span>option = {</span></span>
<span class="line"><span>  color: [&#39;#1890FF&#39;],</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  textStyle: {</span></span>
<span class="line"><span>    fontSize: 14,</span></span>
<span class="line"><span>    fontStyle: &#39;normal&#39;,</span></span>
<span class="line"><span>    fontWeight: &#39;bold&#39;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  grid: {</span></span>
<span class="line"><span>    top: &#39;5%&#39;,</span></span>
<span class="line"><span>    left: &#39;20%&#39;,</span></span>
<span class="line"><span>    right: &#39;4%&#39;,</span></span>
<span class="line"><span>    bottom: &#39;16%&#39;,</span></span>
<span class="line"><span>    containLabel: true,</span></span>
<span class="line"><span>    borderWidth: 0,</span></span>
<span class="line"><span>    y: 80,</span></span>
<span class="line"><span>    y2: 60</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  xAxis: {</span></span>
<span class="line"><span>    type: &#39;value&#39;,</span></span>
<span class="line"><span>    // max:50,</span></span>
<span class="line"><span>    axisLine:{</span></span>
<span class="line"><span>      show:true,</span></span>
<span class="line"><span>      lineStyle: {</span></span>
<span class="line"><span>       color: &#39;#fefef&#39;,</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    axisLabel: {</span></span>
<span class="line"><span>      show: true,</span></span>
<span class="line"><span>      interval: 0,</span></span>
<span class="line"><span>      formatter: &#39;{value} %&#39; // 给每个数值添加%</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  yAxis: {</span></span>
<span class="line"><span>     axisLine:{</span></span>
<span class="line"><span>      show:true,</span></span>
<span class="line"><span>      lineStyle: {</span></span>
<span class="line"><span>       color: &#39;#fefef&#39;,</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    type: &#39;category&#39;,</span></span>
<span class="line"><span>    data: [</span></span>
<span class="line"><span>      &#39;A、价格过高&#39;,</span></span>
<span class="line"><span>      &#39;B、品牌不了解&#39;,</span></span>
<span class="line"><span>      &#39;B、品牌不了解品牌不了解&#39;,</span></span>
<span class="line"><span>      &#39;B、品牌不了解&#39;,</span></span>
<span class="line"><span>      &#39;B、品牌不了解&#39;,</span></span>
<span class="line"><span>      &#39;B、品牌不了解&#39;,</span></span>
<span class="line"><span>      &#39;B、品牌不了解&#39;</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  series: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      itemStyle: {</span></span>
<span class="line"><span>        normal: {</span></span>
<span class="line"><span>          color: function (params) {</span></span>
<span class="line"><span>            // build a color map as your need.</span></span>
<span class="line"><span>            var colorList = [</span></span>
<span class="line"><span>              &#39;#C1232B&#39;,</span></span>
<span class="line"><span>              &#39;#B5C334&#39;,</span></span>
<span class="line"><span>              &#39;#FCCE10&#39;,</span></span>
<span class="line"><span>              &#39;#E87C25&#39;,</span></span>
<span class="line"><span>              &#39;#27727B&#39;,</span></span>
<span class="line"><span>              &#39;#FE8463&#39;,</span></span>
<span class="line"><span>              &#39;#9BCA63&#39;,</span></span>
<span class="line"><span>              &#39;#FAD860&#39;,</span></span>
<span class="line"><span>              &#39;#F3A43B&#39;,</span></span>
<span class="line"><span>              &#39;#60C0DD&#39;,</span></span>
<span class="line"><span>              &#39;#D7504B&#39;,</span></span>
<span class="line"><span>              &#39;#C6E579&#39;,</span></span>
<span class="line"><span>              &#39;#F4E001&#39;,</span></span>
<span class="line"><span>              &#39;#F0805A&#39;,</span></span>
<span class="line"><span>              &#39;#26C0C0&#39;</span></span>
<span class="line"><span>            ];</span></span>
<span class="line"><span>            return colorList[params.dataIndex];</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          label: {</span></span>
<span class="line"><span>            show: true,</span></span>
<span class="line"><span>            position: &#39;right&#39;,</span></span>
<span class="line"><span>            formatter: &#39;{c}%&#39; //这是关键，在需要的地方加上就行了</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          //设置柱子圆角</span></span>
<span class="line"><span>          barBorderRadius: [0, 20, 20, 0]</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        backgroundStyle: {</span></span>
<span class="line"><span>          color: &#39;#EBEEF5&#39;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      data: [20, 200, 150, 80, 70, 110, 130],</span></span>
<span class="line"><span>      type: &#39;bar&#39;,</span></span>
<span class="line"><span>      barWidth: 30 //柱图宽度</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>};</span></span></code></pre></div><h3 id="👉左侧文字y轴距离y轴数字之间得距离" tabindex="-1">👉左侧文字y轴距离y轴数字之间得距离 <a class="header-anchor" href="#👉左侧文字y轴距离y轴数字之间得距离" aria-label="Permalink to &quot;👉左侧文字y轴距离y轴数字之间得距离&quot;">​</a></h3><p><img src="https://cdn.nlark.com/yuque/0/2024/png/22435914/1724649829000-73d0fe83-f7ed-412a-9648-72c897b9d57b.png#averageHue=%23fefdfd&amp;clientId=u835c89ad-c1da-4&amp;from=paste&amp;height=271&amp;id=ucc27dc55&amp;originHeight=244&amp;originWidth=284&amp;originalType=binary&amp;ratio=0.8999999761581421&amp;rotation=0&amp;showTitle=false&amp;size=4592&amp;status=done&amp;style=none&amp;taskId=u1e87ee49-1f07-4aa9-81f4-a1dfe1cadd3&amp;title=&amp;width=315.55556391492325" alt="image.png"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>yAxis=&gt; axisLabel 部分</span></span>
<span class="line"><span></span></span>
<span class="line"><span>axisLabel: {</span></span>
<span class="line"><span>      margin: 20  // 如果需要，也可以调整 Y 轴标签与柱子之间的距离</span></span>
<span class="line"><span>},</span></span></code></pre></div>`,55),t=[l];function i(c,o,r,d,g,m){return n(),s("div",null,t)}const b=a(e,[["render",i]]);export{u as __pageData,b as default};
