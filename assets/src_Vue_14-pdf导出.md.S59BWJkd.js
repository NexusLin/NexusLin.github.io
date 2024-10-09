import{_ as a,c as s,o as n,a4 as p}from"./chunks/framework.DvHWMJgD.js";const f=JSON.parse('{"title":"❤vue3之中pdf导出的实现和使用（Vue3系统篇七）","description":"","frontmatter":{},"headers":[],"relativePath":"src/Vue/14-pdf导出.md","filePath":"src/Vue/14-pdf导出.md"}'),e={name:"src/Vue/14-pdf导出.md"},l=p(`<h1 id="❤vue3之中pdf导出的实现和使用-vue3系统篇七" tabindex="-1">❤vue3之中pdf导出的实现和使用（Vue3系统篇七） <a class="header-anchor" href="#❤vue3之中pdf导出的实现和使用-vue3系统篇七" aria-label="Permalink to &quot;❤vue3之中pdf导出的实现和使用（Vue3系统篇七）&quot;">​</a></h1><h2 id="_1、pdf的认识" tabindex="-1">1、pdf的认识 <a class="header-anchor" href="#_1、pdf的认识" aria-label="Permalink to &quot;1、pdf的认识&quot;">​</a></h2><p>在前端生成pdf的过程之中，有很多插件都为我们提供了类似的功能，接下来我们简单看看具体有哪些部分可以帮助我们呢实现。</p><p>前端 PDF 生成与浏览器的 API 调用有关，JavaScript有很多相关库可以使用这些 API 来完成。</p><p>这里我们可以简单看看这个清单：</p><p><code>生成pdf的方式</code>:</p><ul><li>jsPDF</li><li>html2pdf</li><li>pdfmake</li><li>PDFsKit</li><li>ReLaXed</li><li>nodeice</li><li>Electron</li><li>PDFObject</li><li>pdf2json</li></ul><p>转化pdf文件我们需要用到两个东西<code>html2canvas</code>和<code>jspdf</code>，先来看看这个工具都分别用来做什么的</p><p><code>html2canvas</code>和<code>jspdf</code>都是用于处理网页截图和生成 PDF 文件的工具库。</p><h3 id="_1-html2canvas" tabindex="-1">（1）<strong>html2canvas</strong>: <a class="header-anchor" href="#_1-html2canvas" aria-label="Permalink to &quot;（1）**html2canvas**:&quot;">​</a></h3><h4 id="作用" tabindex="-1"><strong>作用</strong>: <a class="header-anchor" href="#作用" aria-label="Permalink to &quot;**作用**:&quot;">​</a></h4><ul><li><code>html2canvas</code> 是一个 JavaScript 库，用处就是将当前页面的 DOM 元素转换为 Canvas。它可以捕获整个页面或特定的 DOM 元素，并生成一个 Canvas 元素，之后我们可以将其导出为图像文件（如 PNG 或 JPEG）或者直接插入到 PDF 文件中以便后续导出成pdf（注意，这里是只能生成图片，而不能生成pdf文件的）。</li></ul><p><strong>根据它的这个特性，我们也可以发现他的一些用途：</strong>:</p><ul><li><strong>截图</strong>: 实现网页截图功能，将网页内容保存为图片。</li><li><strong>导出图像</strong>:将 Canvas 导出为图片文件。</li><li><strong>PDF 生成</strong>:将Canvas 直接用于 PDF 文件的生成，也就是把网页内容变成一个 PDF 文档。</li></ul><h3 id="_2-jspdf" tabindex="-1">（2） <strong>jspdf</strong> <a class="header-anchor" href="#_2-jspdf" aria-label="Permalink to &quot;（2） **jspdf**&quot;">​</a></h3><p><strong>作用</strong>:</p><p><code>jspdf</code> 是一个 JavaScript 库，用于在客户端生成 PDF 文件。这个库为我们提供了一组 API 来创建和操作 PDF 文件，包括添加文本、图像、表格等内容到 PDF 页面中。</p><h4 id="主要用途" tabindex="-1"><strong>主要用途</strong>: <a class="header-anchor" href="#主要用途" aria-label="Permalink to &quot;**主要用途**:&quot;">​</a></h4><ul><li><strong>PDF 生成</strong>: 主要用于在客户端动态生成 PDF 文档。通过 JavaScript 代码生成包含动态内容的 PDF 文件，例如报表、文档或者将网页内容转换为 PDF。</li><li><strong>打印</strong>: 可以将生成的 PDF 文件直接打印出来，或者在浏览器中下载保存。</li></ul><p>通过上面的介绍我们可以发现，他们最主要的作用，其实就是帮助我们生成pdf文件或者图片</p><ul><li><code>html2canvas</code> 用于将网页内容截图并转换为 Canvas，方便导出为图片或者用于 PDF 生成。</li><li><code>jspdf</code> 用于在客户端生成和操作 PDF 文件，通过 JavaScript 动态生成 PDF，添加多种元素和格式化内容。</li></ul><p>接下来我们就看看具体在vue3的项目之中我们应该如何使用他们</p><h2 id="_2、pdf导出的安装和使用" tabindex="-1">2、pdf导出的安装和使用 <a class="header-anchor" href="#_2、pdf导出的安装和使用" aria-label="Permalink to &quot;2、pdf导出的安装和使用&quot;">​</a></h2><p>接下来我们在我们的项目之中进行安装、导入和引入</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码yarn add html2canvas</span></span>
<span class="line"><span>yarn add jspdf</span></span></code></pre></div><p>安装成功以后可以看看砸门的版本号，我这里版本号是</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码&quot;html2canvas&quot;: &quot;^1.4.1&quot;,</span></span>
<span class="line"><span>&quot;js-cookie&quot;: &quot;^3.0.5&quot;,</span></span></code></pre></div><p>然后我们搭建一下我们的pdf界面，这里我们就随便找个文件，然后搭建一下</p><p>👉 接下来我们简单使用一下pdf</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码// 写个导出按钮部分</span></span>
<span class="line"><span>&lt;div class=&quot;btn&quot; @click=&quot;getPdf&quot;&gt;导出pdf&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>//先把结构写一个给定宽高</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;div class=&quot;resume_detail_box page_common_padding&quot; id=&quot;pdfDom&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 然后我们在其中导入要使用的部分</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 页面导出为pdf格式</span></span>
<span class="line"><span>import html2Canvas from &#39;html2canvas&#39;;</span></span>
<span class="line"><span>import jsPDF from &#39;jspdf&#39;;</span></span>
<span class="line"><span>import { ref, onMounted } from &quot;vue&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 这里我们简单写个导出方法</span></span>
<span class="line"><span>const getPdf= () =&gt; {</span></span>
<span class="line"><span>		let ele = document.querySelector(&#39;#pdfDom&#39;);</span></span>
<span class="line"><span>	    let eleWidth = ele.offsetWidth;</span></span>
<span class="line"><span>	    let eleHeight = ele.offsetHeight;</span></span>
<span class="line"><span>	    const canvas = html2Canvas(ele, {</span></span>
<span class="line"><span>	      allowTaint: true,</span></span>
<span class="line"><span>	      useCORS: true,</span></span>
<span class="line"><span>	      scale: 2, // 提升画面质量，但是会增加文件大小</span></span>
<span class="line"><span>	    }).then((canvas)=&gt;{</span></span>
<span class="line"><span>	    	 let pdf</span></span>
<span class="line"><span>		    let pdfWidth</span></span>
<span class="line"><span>		    let pdfHeight</span></span>
<span class="line"><span>		    // 判断横版 || 竖版</span></span>
<span class="line"><span>		    if (eleWidth &gt; eleHeight) {</span></span>
<span class="line"><span>		      pdf = new jsPDF(&quot;l&quot;, &quot;pt&quot;, &quot;a4&quot;);</span></span>
<span class="line"><span>		      pdfWidth = 841.89;</span></span>
<span class="line"><span>		      pdfHeight = 595.28;</span></span>
<span class="line"><span>		    } else {</span></span>
<span class="line"><span>		      pdf = new jsPDF(&quot;0&quot;, &quot;pt&quot;, &quot;a4&quot;);</span></span>
<span class="line"><span>		      //pdf页面偏移</span></span>
<span class="line"><span>		      pdfWidth = 595.28;</span></span>
<span class="line"><span>		      pdfHeight = 841.89;</span></span>
<span class="line"><span>		    }</span></span>
<span class="line"><span>		    let position = 0;</span></span>
<span class="line"><span>		    const imgData = canvas.toDataURL(&quot;image/jpeg&quot;, 1.0);</span></span>
<span class="line"><span>		    pdf.addImage(imgData, &quot;JPEG&quot;, 0, position, pdfWidth, pdfHeight);</span></span>
<span class="line"><span>		    pdf.save(&quot;报告&quot;+&quot;.pdf&quot;);</span></span>
<span class="line"><span>	    });</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>点击导出，这个时候我们发现，已经可以完美进行导出了！查看一下我们导出的效果！</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1727258769960-2e15ef0c-27b6-4a83-89e0-a6f1d3b58c08.webp" alt=""></p><h2 id="_3、pdf详细使用" tabindex="-1">3、pdf详细使用 <a class="header-anchor" href="#_3、pdf详细使用" aria-label="Permalink to &quot;3、pdf详细使用&quot;">​</a></h2><p>添加分页，多页导出切换</p><h2 id="_4、在html网页导出成为pdf文件的过程之中遇到的问题" tabindex="-1">4、在HTMl网页导出成为PDF文件的过程之中遇到的问题 <a class="header-anchor" href="#_4、在html网页导出成为pdf文件的过程之中遇到的问题" aria-label="Permalink to &quot;4、在HTMl网页导出成为PDF文件的过程之中遇到的问题&quot;">​</a></h2><h3 id="_1-渐变色背景处理" tabindex="-1">（1） 渐变色背景处理 <a class="header-anchor" href="#_1-渐变色背景处理" aria-label="Permalink to &quot;（1） 渐变色背景处理&quot;">​</a></h3><p>首先要知道，在我们的处理pdf的过程之中，pdf渐变色是完全不生效的，所以这个过程之中很容易就导致出现这种问题。</p><h3 id="_2-排列布局的样式写法不生效" tabindex="-1">（2）排列布局的样式写法不生效 <a class="header-anchor" href="#_2-排列布局的样式写法不生效" aria-label="Permalink to &quot;（2）排列布局的样式写法不生效&quot;">​</a></h3><p>我们写的格局是这样子的：</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1727258770006-9ab0828a-f383-495f-99fc-212fb7687e43.webp" alt=""></p><p>样式写法导致的问题</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码// 刚刚开始采用的是上面的这种写法，但是导出一直不显示文字，这个时候我有点懵，一度以为是宽度问题 </span></span>
<span class="line"><span>display:incline-block;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>后来发现：被迫只能将写法=改成以下这种：</span></span>
<span class="line"><span>父：display:flex;</span></span>
<span class="line"><span>子：flex:1</span></span></code></pre></div><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1727258770044-12858347-c4d6-4a7b-a0a7-eb6951a7a308.webp" alt=""></p><h3 id="_3-echarts雷达图大小问题" tabindex="-1">（3）echarts雷达图大小问题 <a class="header-anchor" href="#_3-echarts雷达图大小问题" aria-label="Permalink to &quot;（3）echarts雷达图大小问题&quot;">​</a></h3><p>图表上面是遮掩这样子的 <img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1727258770083-6cffdafa-757e-4aff-8cfb-f4d2ebeba727.webp" alt=""></p><p>实际上导出以后存在的样式问题，字体变得非常大 <img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1727258770151-4dbbf59e-5487-49a8-b6d6-ecaa03c592ad.webp" alt=""></p><ul><li>解决圆圈大小问题</li></ul><p>首先就是调整： option =&gt; radar=&gt; radius 大小，这个直接解决了我大小圆圈问题</p><ul><li>解决文字大小问题</li></ul><p>👉 采用官方给我们提供的文字默认大小是非常大的，这里应该自定义文字大小</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码name: {</span></span>
<span class="line"><span>    textStyle: {</span></span>
<span class="line"><span>        fontSize: 13,  // 设置外圈文字的字体大小</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>},</span></span></code></pre></div><p>解决效果：</p><p>👉导出的时候依然存在文字遮挡，这里换个思路，就是我给外层容器加padding来进行解决，让文字在padding之中</p><p>👉 echarts雷达图遮挡问题进一步处理</p><p>调整雷达图文字距离雷达图的距离</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码nameGap: 2,</span></span></code></pre></div><p>👉调整雷达图大小</p><p>这里最后成功解决！</p><h3 id="_4-echarts折线图大小处理" tabindex="-1">（4） echarts折线图大小处理 <a class="header-anchor" href="#_4-echarts折线图大小处理" aria-label="Permalink to &quot;（4） echarts折线图大小处理&quot;">​</a></h3><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1727258772406-d3ac1589-2db2-4456-9c9a-74804a7eab5a.webp" alt=""></p><p>这里折现正常，但是打印出之后，我们可以发现</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1727258772509-73b5ab7b-de58-4107-a332-8171d0cb105d.webp" alt=""></p><p>字体变得特别特别大,这里我们设置一下折线图得legend文字大小</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码  legend: {</span></span>
<span class="line"><span>    data: [&#39;Email&#39;, &#39;Union Ads&#39;, &#39;Video Ads&#39;, &#39;Direct&#39;, &#39;Search Engine&#39;],</span></span>
<span class="line"><span>    textStyle: {</span></span>
<span class="line"><span>            fontSize: 13 // 设置图例文字的字体大小</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>  },</span></span></code></pre></div><h3 id="_5-echarts折线图文字遮挡问题" tabindex="-1">（5）echarts折线图文字遮挡问题 <a class="header-anchor" href="#_5-echarts折线图文字遮挡问题" aria-label="Permalink to &quot;（5）echarts折线图文字遮挡问题&quot;">​</a></h3><p>我们正常是这样子 <img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1727258772393-399850a9-d4fe-46ab-bb10-e50b7a7a717b.webp" alt=""></p><p>转为pdf之后出现了文字遮挡的情况</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1727258772469-fec34250-e590-433a-bf88-d9d11d5838e3.webp" alt=""></p><p>最好的解决办法就是调整底部</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码grid: {</span></span>
<span class="line"><span>  top: &#39;8%&#39;,</span></span>
<span class="line"><span>  left: &#39;3%&#39;,</span></span>
<span class="line"><span>  right: &#39;3%&#39;,</span></span>
<span class="line"><span>  bottom: &#39;18%&#39;,</span></span>
<span class="line"><span>  containLabel: true</span></span>
<span class="line"><span>},</span></span></code></pre></div><h3 id="_6-echarts折线图文字过长" tabindex="-1">（6）echarts折线图文字过长 <a class="header-anchor" href="#_6-echarts折线图文字过长" aria-label="Permalink to &quot;（6）echarts折线图文字过长&quot;">​</a></h3><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码// 调整文字</span></span>
<span class="line"><span>axisLabel: {</span></span>
<span class="line"><span>    //展示角度</span></span>
<span class="line"><span>    rotate: 0,</span></span>
<span class="line"><span>    show: true,</span></span>
<span class="line"><span>    textStyle: { color: &#39;#385C8B&#39; },</span></span>
<span class="line"><span>    fontSize: 12,</span></span>
<span class="line"><span>    formatter: function (value) {</span></span>
<span class="line"><span>        if (value.length &gt; 3) {</span></span>
<span class="line"><span>            // 如果文字长度超过三个字，进行换行处理</span></span>
<span class="line"><span>            return value.substring(0, 3) + dataunit + &#39;\\n&#39; + value.substring(3)+ dataunit;</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            return value + dataunit;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>// 调整距离</span></span>
<span class="line"><span>// 设置上下左右边距</span></span>
<span class="line"><span>grid: {</span></span>
<span class="line"><span>  top: &#39;5%&#39;,</span></span>
<span class="line"><span>  left: &#39;14%&#39;,</span></span>
<span class="line"><span>  right: &#39;4%&#39;,</span></span>
<span class="line"><span>  bottom: &#39;16%&#39;,</span></span>
<span class="line"><span>  containLabel: true</span></span>
<span class="line"><span>},</span></span></code></pre></div>`,72),t=[l];function i(c,d,o,r,h,u){return n(),s("div",null,t)}const g=a(e,[["render",i]]);export{f as __pageData,g as default};
