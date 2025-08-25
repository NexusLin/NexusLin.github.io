import{_ as n,c as p,o as t,ag as e}from"./chunks/framework.DnwzncJk.js";const s="/images/canvas-01.png",l="/images/canvas-02.png",u=JSON.parse('{"title":"canvas篇","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"src/note/graphic/canvas篇.md","filePath":"src/note/graphic/canvas篇.md","lastUpdated":1750672388000}'),c={name:"src/note/graphic/canvas篇.md"};function i(o,a,d,h,r,g){return t(),p("div",null,a[0]||(a[0]=[e('<h1 id="canvas篇" tabindex="-1">canvas篇 <a class="header-anchor" href="#canvas篇" aria-label="Permalink to &quot;canvas篇&quot;">​</a></h1><h2 id="_1、canvas认识" tabindex="-1">1、canvas认识 <a class="header-anchor" href="#_1、canvas认识" aria-label="Permalink to &quot;1、canvas认识&quot;">​</a></h2><p>canvas（画布）是什么，<code>&lt;canvas&gt;</code>是HTML5新增的元素，用于通过JavaScript绘制图形的元素。</p><p>允许开发者使用JavaScript（但是不仅限制于js）中的脚本来绘制图像，在页面上绘制图形、动画、游戏等多媒体元素，而无需依赖插件（如Flash）。</p><p>Canvas本身是一个矩形区域，可以通过HTML <code>&lt;canvas&gt;</code> 元素在页面中定义，然后通过JavaScript来控制其绘图内容。</p><p><code>&lt;canvas&gt;</code>最早由Apple引入Webkit,使用<code>&lt;canvas&gt;</code>标签时，建议要成对出现，不要使用自闭合形式。</p><h2 id="_2、主要特点和用途包括" tabindex="-1">2、主要特点和用途包括： <a class="header-anchor" href="#_2、主要特点和用途包括" aria-label="Permalink to &quot;2、主要特点和用途包括：&quot;">​</a></h2><p>canvas凭借强大的绘图API和灵活性，成为了Web开发中动态和交互式图形内容重要工具</p><p>如果说画笔是美术师手中最好的工具，那么canvas就是前端画家手中的画笔。</p><ol><li><strong>绘图功能</strong>：Canvas最主要的功能就是绘图，它为我们提供了绘制路径、填充颜色、渐变、图像、文本等的API，可以用于创建各种复杂的图形和动画效果。</li><li><strong>动态图形</strong>：Canvas是基于脚本控制的，因此能够实现各种动态、交互式的图形和动画，比如实时更新的数据可视化、动态图表等。</li><li><strong>游戏开发</strong>：Canvas在游戏开发中有广泛的应用，通过绘制图形和实现交互逻辑，可以创建简单到复杂的2D游戏。</li><li><strong>图形编辑</strong>：用于图像处理和编辑，如绘制工具、简单的图像滤镜等。</li><li><strong>跨平台支持</strong>：Canvas基于HTML5标准的，因此能够在支持HTML5的各种现代浏览器中运行，而不受特定操作系统或设备的限制。</li></ol><p>日常使用</p><p><img src="'+s+`" alt="image.png" loading="lazy"></p><h2 id="_3、简单使用" tabindex="-1">3、简单使用： <a class="header-anchor" href="#_3、简单使用" aria-label="Permalink to &quot;3、简单使用：&quot;">​</a></h2><p>接下来我们就写一个简单的Canvas示例，在页面上绘制一个简单的矩形：</p><p>思路：</p><p>写一个canvas元素，然背后定义宽高</p><p>获取元素，绘制红色矩形</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;title&gt;Canvas Example&lt;/title&gt;</span></span>
<span class="line"><span>    &lt;style&gt;</span></span>
<span class="line"><span>        canvas {</span></span>
<span class="line"><span>            border: 1px solid #000;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    &lt;/style&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;canvas id=&quot;myCanvas&quot; width=&quot;200&quot; height=&quot;100&quot;&gt;&lt;/canvas&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        // 获取Canvas元素</span></span>
<span class="line"><span>        var canvas = document.getElementById(&#39;myCanvas&#39;);</span></span>
<span class="line"><span>        // 获取绘图上下文</span></span>
<span class="line"><span>        var ctx = canvas.getContext(&#39;2d&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 绘制一个红色矩形</span></span>
<span class="line"><span>        ctx.fillStyle = &#39;red&#39;;</span></span>
<span class="line"><span>        ctx.fillRect(10, 10, 150, 80);</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><p>效果就是上面的红色矩形。</p><h2 id="_4、canvas的基本用法" tabindex="-1">4、canvas的基本用法 <a class="header-anchor" href="#_4、canvas的基本用法" aria-label="Permalink to &quot;4、canvas的基本用法&quot;">​</a></h2><h4 id="默认宽高-canvas默认属性" tabindex="-1">默认宽高（canvas默认属性） <a class="header-anchor" href="#默认宽高-canvas默认属性" aria-label="Permalink to &quot;默认宽高（canvas默认属性）&quot;">​</a></h4><p>我们没有设置canvas的宽度和高度属性的时候，canvas会给我们一个默认宽高</p><p><code>默认width：300px；默认height：150px；</code></p><h4 id="默认背景颜色" tabindex="-1">默认背景颜色 <a class="header-anchor" href="#默认背景颜色" aria-label="Permalink to &quot;默认背景颜色&quot;">​</a></h4><p>没有设置canvas的默认背景颜色时候，canvas继承body的背景颜色。</p><h4 id="画布的内容位置" tabindex="-1">画布的内容位置 <a class="header-anchor" href="#画布的内容位置" aria-label="Permalink to &quot;画布的内容位置&quot;">​</a></h4><p>canvas画布的内容在canvas标签的上面，而不是在两个标签里面。</p><h4 id="支持和不支持显示" tabindex="-1">支持和不支持显示 <a class="header-anchor" href="#支持和不支持显示" aria-label="Permalink to &quot;支持和不支持显示&quot;">​</a></h4><p>不支持canvas的浏览器会显示canvas标签里面的内容 支持canvas的浏览器不会显示标签里面的内容</p><p>也就是说如果我们在不兼容canvas的浏览器之中要写一个提示应该写成下面这样子</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;canvas id=&quot;test&quot;&gt;</span></span>
<span class="line"><span>   &lt;span&gt;您的浏览器不支持画布元素 请您换成萌萌的谷歌&lt;/span&gt;</span></span>
<span class="line"><span>&lt;/canvas&gt;</span></span></code></pre></div><h4 id="标签的两个属性" tabindex="-1">标签的两个属性 <a class="header-anchor" href="#标签的两个属性" aria-label="Permalink to &quot;标签的两个属性&quot;">​</a></h4><p>canvas跟img标签很像有width和height两个属性。 设置width和height不要通过css来设置，而是在canvas标签里面进行设置</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;canvas id=&quot;test&quot; width=&quot;300&quot; height=&quot;300&quot;&gt;</span></span>
<span class="line"><span>   &lt;span&gt;您的浏览器不支持画布元素 请您换成萌萌的谷歌&lt;/span&gt;</span></span>
<span class="line"><span>&lt;/canvas&gt;</span></span></code></pre></div><h4 id="渲染上下文-getcontext-方法" tabindex="-1">渲染上下文：getContext()方法 <a class="header-anchor" href="#渲染上下文-getcontext-方法" aria-label="Permalink to &quot;渲染上下文：getContext()方法&quot;">​</a></h4><p><code>&lt;canvas&gt;</code>元素只是创造了一个固定大小的画布，要想在它上面去绘制内容，我们需要找到他的渲染上下文；</p><p><code>getContext()</code> <code>&lt;canvas&gt;</code>元素有一个getContext()的方法，这个方法是用来获得渲染上下文和它的绘画功能。</p><p>getContext()只有一个参数，上下文的格式 获取方式：</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var canvas = document.getElementById(&#39;box&#39;);</span></span>
<span class="line"><span>var ctx = canvas.getContext(&#39;2d&#39;);</span></span></code></pre></div><h4 id="检查支持性-思路就是通过支撑性直接去看是否有canvas-getcontext这个属性" tabindex="-1">检查支持性：（思路就是通过支撑性直接去看是否有canvas.getContext这个属性） <a class="header-anchor" href="#检查支持性-思路就是通过支撑性直接去看是否有canvas-getcontext这个属性" aria-label="Permalink to &quot;检查支持性：（思路就是通过支撑性直接去看是否有canvas.getContext这个属性）&quot;">​</a></h4><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var canvas = document.getElementById(&#39;box&#39;);</span></span>
<span class="line"><span>    if(canvas.getContext){</span></span>
<span class="line"><span>    var ctx = canvas.getContext(&#39;2d&#39;);</span></span>
<span class="line"><span>  }</span></span></code></pre></div><h4 id="判断浏览器是否支持canvas" tabindex="-1">判断浏览器是否支持canvas <a class="header-anchor" href="#判断浏览器是否支持canvas" aria-label="Permalink to &quot;判断浏览器是否支持canvas&quot;">​</a></h4><p>完整使用 ：检测浏览器对于canvas的支撑性</p><p>设置canvas宽高，并获取canvas对象，判断是否支持canvas</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;title&gt;canvas&lt;/title&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>&lt;canvas id=&quot;canvas&quot; height=&quot;400&quot; width=&quot;400&quot; style=&quot;border:1px solid #ccc&quot;&gt;&lt;/canvas&gt;</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>    const canvas = document.getElementById(&#39;canvas&#39;);</span></span>
<span class="line"><span>    if(canvas.getContext){</span></span>
<span class="line"><span>        console.log(&#39;支持&#39;);</span></span>
<span class="line"><span>    }else{</span></span>
<span class="line"><span>       console.log(&#39;不支持&#39;);</span></span>
<span class="line"><span>       alert(&#39;不支持canvas&#39;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><p>实际效果 我们打开以后发现什么都没有，别着急，这是因为我们基本所有浏览器都开始支持canvas画布，但是有一些是不支持的，比如预览</p><p>这里我们通过预览的方式查看，就可以看到我们写的兼容文本。</p><p><img src="`+l+`" alt="image.png" loading="lazy"></p><h2 id="_5、canvas实战使用" tabindex="-1">5、canvas实战使用 <a class="header-anchor" href="#_5、canvas实战使用" aria-label="Permalink to &quot;5、canvas实战使用&quot;">​</a></h2><p>接下来我们就开始写一些小案例，然后尝试对于canvas的使用</p><h4 id="canvas粉月亮" tabindex="-1">canvas粉月亮 <a class="header-anchor" href="#canvas粉月亮" aria-label="Permalink to &quot;canvas粉月亮&quot;">​</a></h4><p>接下来我们就完善一下上面我们之前绘制的矩形，把他改造成一个渐变圆</p><p>使用 <code>&lt;canvas id=&quot;canvas&quot;&gt;&lt;/canvas&gt;</code> 结构</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;canvas id=&quot;myCanvas&quot; width=&quot;600&quot; height=&quot;400&quot;&gt;&lt;span&gt;您的浏览器不支持画布元素 请您换成的谷歌&lt;/span&gt;&lt;/canvas&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        const canvas = document.getElementById(&#39;myCanvas&#39;);</span></span>
<span class="line"><span>        const ctx = canvas.getContext(&#39;2d&#39;); //返回一个canvas渲染的上下文，如果不支持返回null</span></span>
<span class="line"><span>        ctx.beginPath(); // 开一条新路</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        var grd = ctx.createLinearGradient(0, 0, 0, 170); // (x,y,x1,y1) - 创建线条渐变</span></span>
<span class="line"><span>        grd.addColorStop(&quot;0&quot;, &quot;pink&quot;);</span></span>
<span class="line"><span>        grd.addColorStop(&quot;0.5&quot;, &quot;white&quot;);</span></span>
<span class="line"><span>        grd.addColorStop(1, &quot;pink&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ctx.fillStyle = grd;</span></span>
<span class="line"><span>        ctx.arc(200, 200, 100, 0, Math.PI * 2);</span></span>
<span class="line"><span>        ctx.fill(); // 画圆</span></span>
<span class="line"><span>        ctx.closePath();</span></span>
<span class="line"><span> &lt;/script&gt;</span></span></code></pre></div><p>然后我们看看效果，简单的几下就好像月上眉梢一样，是不是很好看。</p><p><img src="`+s+`" alt="image.png" loading="lazy"></p><h4 id="canvas绘制验证码" tabindex="-1">canvas绘制验证码 <a class="header-anchor" href="#canvas绘制验证码" aria-label="Permalink to &quot;canvas绘制验证码&quot;">​</a></h4><p>接下来我们用canvas绘制一个验证码，来熟悉canvas的特性和功能</p><p>先来分析一下验证码思路：</p><ul><li>通过RGB值判断颜色深浅</li><li>把 RGB 的值求和，然后取一个值，当和大于等于此值就为浅色</li><li>和越小，颜色越深</li></ul><p>过程之中发现的问题：</p><ul><li>效果不理想，特别是在 B 较大的时候，估计是眼睛对 RGB 各种颜色的敏感度都不一样</li></ul><p>解决方式</p><p>通过把 RGB 模式转换成 YUV 模式，而 Y 是明亮度（灰阶），因此只需要获得 Y 的值而判断他是否足够亮就可以了</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const g = $R * 0.299 + $G * 0.587 + $B * 0.114;</span></span>
<span class="line"><span>if (g &gt;= 192) {</span></span>
<span class="line"><span>  // add shadow</span></span>
<span class="line"><span>  // 浅色模式</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>g越小，颜色越深，可以按照你自己的需要定一个阀值</p><p>这部分内容写成了一个自己的npm组件从0到发布一文，需要的小伙伴可以查看。</p>`,67)]))}const b=n(c,[["render",i]]);export{u as __pageData,b as default};
