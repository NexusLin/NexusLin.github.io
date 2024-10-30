import{_ as a,c as n,o as s,a4 as t}from"./chunks/framework.DvHWMJgD.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"src/MS/「2024」高频HTML篇.md","filePath":"src/MS/「2024」高频HTML篇.md"}'),e={name:"src/MS/「2024」高频HTML篇.md"},p=t(`<h2 id="「2024」高频前端面试题汇总之html篇-含答案" tabindex="-1">「2024」高频前端面试题汇总之HTML篇（含答案） <a class="header-anchor" href="#「2024」高频前端面试题汇总之html篇-含答案" aria-label="Permalink to &quot;「2024」高频前端面试题汇总之HTML篇（含答案）&quot;">​</a></h2><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>css</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码什么是 DOCTYPE，有何作用</span></span>
<span class="line"><span>对HTML语义化的理解</span></span>
<span class="line"><span>title与h1的区别、b与strong的区别、i与em的区别</span></span>
<span class="line"><span>页面导入样式时，使用 link 和 @import 有什么区别</span></span>
<span class="line"><span>H5有哪些新元素和新特性</span></span>
<span class="line"><span>cookie、sessionStorage 和 localStorage 的区别和用途</span></span>
<span class="line"><span>DOM查询以及操作</span></span></code></pre></div><h3 id="_1、什么是-doctype-文档类型-有何作用" tabindex="-1">1、什么是 DOCTYPE(⽂档类型)，有何作用 <a class="header-anchor" href="#_1、什么是-doctype-文档类型-有何作用" aria-label="Permalink to &quot;1、什么是 DOCTYPE(⽂档类型)，有何作用&quot;">​</a></h3><h4 id="_1-解释-是什么" tabindex="-1">（1） 解释（是什么） <a class="header-anchor" href="#_1-解释-是什么" aria-label="Permalink to &quot;（1） 解释（是什么）&quot;">​</a></h4><p>DOCTYPE是是HTML5的文档声明,一种标准<code>通用标记语言</code>的<code>文档类型声明</code>。</p><p><code>必须声明在HTML⽂档的第⼀⾏，比如我们常见的一般是以下这样子 </code></p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;!-- 页面内容 --&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><h4 id="_2-doctype的作用包括" tabindex="-1">（2）DOCTYPE的作用包括： <a class="header-anchor" href="#_2-doctype的作用包括" aria-label="Permalink to &quot;（2）DOCTYPE的作用包括：&quot;">​</a></h4><ol><li><strong>告知浏览器使用哪个HTML版本</strong>：定义和声明HTML文档的类型和版本,<strong>告诉浏览器（解析器）应该以什么样（html或xhtml）的文档类型定义来解析文档</strong>，例如，<code>&lt;!DOCTYPE html&gt;</code> 声明表示文档是基于HTML5的。不同的HTML版本可能具有不同的语法和功能支持，因此DOCTYPE有助于浏览器正确地解析和渲染页面，就类似我们解析语言时候的UTF-8 语言。</li><li><strong>确保文档以标准模式呈现</strong>：没有DOCTYPE声明的情况下，一些旧版本的浏览器会进入“怪异模式”或“兼容模式”，可能导致页面的渲染和布局问题。DOCTYPE可以确保确保浏览器按照标准规范解析和渲染页面，从而提升页面的可访问性和一致性。以获得一致的展示效果。不同的渲染模式也会影响浏览器对 CSS 和 JavaScript 脚本的解析。</li><li><strong>提供文档验证</strong>：DOCTYPE声明是HTML文档的一部分，也用于验证文档的合法性。在HTML文档中正确声明DOCTYPE有助于确保页面符合W3C（World Wide Web Consortium）的标准。</li></ol><p>浏览器渲染页面的两种模式</p><p>渲染模式可通过document.compatMode获取(例如：语雀官网的文档类型是<strong>CSS1Compat</strong>)）：</p><ul><li><strong>CSS1Compat：标准模式（Strick mode）</strong>,默认采用这种模式，浏览器使用W3C的标准解析渲染页面。在标准模式中，浏览器以其支持的最高标准呈现页面。</li><li><strong>BackCompat：怪异模式(混杂模式)(Quick mode)</strong> ，浏览器使用自己的怪异模式解析渲染页面。这种模式中，页面以一种比较宽松的向后兼容的方式显示。</li></ul><h3 id="_2、对html语义化的理解" tabindex="-1">2、对HTML语义化的理解 <a class="header-anchor" href="#_2、对html语义化的理解" aria-label="Permalink to &quot;2、对HTML语义化的理解&quot;">​</a></h3><p><strong>语义化是指根据内容的结构化（内容语义化），选择合适的标签（代码语义化）</strong></p><p>通俗来讲就是用正确的标签做正确的事情，依据内容结构选择合适的标签元素然后去生成代码。</p><p>🧲 语义化的优点如下：</p><ul><li>对机器友好，带有语义的文字表现力丰富，更适合搜索引擎的爬虫爬取有效信息，有利于SEO。除此之外，语义类还支持读屏软件，根据文章可以自动生成目录；</li><li>对开发者友好，使用语义类标签增强了可读性，结构更加清晰，开发者能清晰的看出网页的结构，便于团队的开发与维护。</li></ul><p><strong>常见的语义化标签有：</strong></p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码&lt;header&gt;&lt;/header&gt;  头部</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;nav&gt;&lt;/nav&gt;  导航栏</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;section&gt;&lt;/section&gt;  区块（有语义化的div）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;main&gt;&lt;/main&gt;  主要区域</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;article&gt;&lt;/article&gt;  主要内容</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;aside&gt;&lt;/aside&gt;  侧边栏</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;footer&gt;&lt;/footer&gt;  底部</span></span></code></pre></div><p>这里我们可以尝试写一些语义化标签，然后对于语义化标签预览一下</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span>    &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;header&gt;</span></span>
<span class="line"><span>        &lt;div&gt;头部&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/header&gt;</span></span>
<span class="line"><span>    &lt;nav&gt;</span></span>
<span class="line"><span>        &lt;div&gt;导航栏&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/nav&gt;</span></span>
<span class="line"><span>    &lt;section&gt;</span></span>
<span class="line"><span>        &lt;div&gt;区块（有语义化的div）&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/section&gt;</span></span>
<span class="line"><span>    &lt;main&gt;</span></span>
<span class="line"><span>        &lt;div&gt;主要区域&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/main&gt;</span></span>
<span class="line"><span>    &lt;article&gt;</span></span>
<span class="line"><span>        &lt;div&gt;主要内容&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/article&gt;</span></span>
<span class="line"><span>    &lt;aside&gt;</span></span>
<span class="line"><span>        &lt;div&gt;侧边栏&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/aside&gt;</span></span>
<span class="line"><span>    &lt;footer&gt;</span></span>
<span class="line"><span>        &lt;div&gt;</span></span>
<span class="line"><span>            底部</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/footer&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><p>最后看一下我们的结果！</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1729065230259-5520dcab-5049-40bc-aed4-cce2a7eac84f.webp" alt=""></p><h3 id="_3、title与h1的区别、b与strong的区别、i与em的区别" tabindex="-1">3、title与h1的区别、b与strong的区别、i与em的区别 <a class="header-anchor" href="#_3、title与h1的区别、b与strong的区别、i与em的区别" aria-label="Permalink to &quot;3、title与h1的区别、b与strong的区别、i与em的区别&quot;">​</a></h3><p>title属性没有明确意义只表示是个标题，H1则表示层次明确的标题，对页面信息的抓取也有很大的影响</p><p>strong是标明重点内容，有语气加强的含义，使用阅读设备阅读网络时：会重读，而是展示强调内容</p><p>i内容展示为斜体，em表示强调的文本</p><h3 id="_4、页面导入样式时-使用-link-和-import-有什么区别" tabindex="-1">4、页面导入样式时，使用 link 和 @import 有什么区别 <a class="header-anchor" href="#_4、页面导入样式时-使用-link-和-import-有什么区别" aria-label="Permalink to &quot;4、页面导入样式时，使用 link 和 @import 有什么区别&quot;">​</a></h3><p>link 属于HTML标签，除了加载CSS外，还能用于定 RSS等；@import 只能用于加载CSS</p><p>页面加载的时，link 会同时被加载，而 @import 引用的 CSS 会等到页面被加载完再加载</p><p>@import 只在 IE5 以上才能被识别，而 link 是HTML标签，无兼容问题</p><h3 id="_5、h5有哪些新元素和新特性" tabindex="-1">5、H5有哪些新元素和新特性 <a class="header-anchor" href="#_5、h5有哪些新元素和新特性" aria-label="Permalink to &quot;5、H5有哪些新元素和新特性&quot;">​</a></h3><p>h5新增的新元素和新特性有：</p><h4 id="新元素" tabindex="-1">新元素： <a class="header-anchor" href="#新元素" aria-label="Permalink to &quot;新元素：&quot;">​</a></h4><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>markdown</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码1.  **&lt;header&gt; ：定义文档或节的页眉。</span></span>
<span class="line"><span>1.  **&lt;footer&gt;** ：定义文档或节的页脚。</span></span>
<span class="line"><span>1.  **&lt;nav&gt;** ：定义导航链接的部分。</span></span>
<span class="line"><span>1.  **&lt;article&gt;** ：定义页面中独立的内容区域，如博客文章、新闻故事等。</span></span>
<span class="line"><span>1.  **&lt;section&gt;** ：定义文档中的节（section），如章节、页眉、页脚或文档中的其他部分。</span></span>
<span class="line"><span>1.  **&lt;aside&gt;** ：定义页面内容之外的内容，通常表示侧边栏或相关内容。</span></span>
<span class="line"><span>1.  **&lt;main&gt;** ：定义文档的主要内容区域。</span></span>
<span class="line"><span>1.  **&lt;figure&gt;** 和 **&lt;figcaption&gt;** ：&lt;figure&gt;用于包裹一组相关的元素，如图像和其标题；&lt;figcaption&gt;用于定义&lt;figure&gt;元素的标题。</span></span></code></pre></div><h4 id="新特性" tabindex="-1">新特性： <a class="header-anchor" href="#新特性" aria-label="Permalink to &quot;新特性：&quot;">​</a></h4><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>markdown</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码1.  **多媒体支持**：新增了&lt;audio&gt;和&lt;video&gt;元素，使得在网页上嵌入音频和视频内容更为简便。</span></span>
<span class="line"><span>1.  **画布（Canvas）** ：通过&lt;canvas&gt;元素，可以使用JavaScript来绘制图形、动画等复杂的图形和视觉效果。</span></span>
<span class="line"><span>1.  **本地存储**：引入了localStorage和sessionStorage，用于在客户端存储数据，使得网页可以更快速地访问本地存储的数据。</span></span>
<span class="line"><span>1.  **表单控件**：新增了多种新的表单输入类型，如日期、时间、邮箱等，还包括输入验证和自动完成功能的增强。</span></span>
<span class="line"><span>1.  **地理位置**：通过Geolocation API，允许网页应用获取用户的地理位置信息。</span></span>
<span class="line"><span>1.  **Web Workers**：允许在后台运行脚本以提高多线程处理能力，从而改善网页性能。</span></span>
<span class="line"><span>1.  **WebSocket**：提供了一种在单个 TCP 连接上进行全双工通信的协议，使得实时数据传输更为高效。</span></span>
<span class="line"><span>1.  **SVG** 和 **MathML**：HTML5原生支持了SVG（可缩放矢量图形）和MathML（数学标记语言），使得网页可以更容易地集成复杂的图形和数学公式。</span></span></code></pre></div><h3 id="_6、cookie、sessionstorage-和-localstorage-的区别和用途" tabindex="-1">6、cookie、sessionStorage 和 localStorage 的区别和用途 <a class="header-anchor" href="#_6、cookie、sessionstorage-和-localstorage-的区别和用途" aria-label="Permalink to &quot;6、cookie、sessionStorage 和 localStorage 的区别和用途&quot;">​</a></h3><p>cookie、sessionStorage和localStorage 三种客户端存储选项的主要区别和用途</p><table tabindex="0"><thead><tr><th>特性</th><th>Cookie</th><th>sessionStorage</th><th>localStorage</th></tr></thead><tbody><tr><td>存储容量</td><td>4KB</td><td>5MB</td><td>5MB</td></tr><tr><td>存储位置</td><td>存储在客户端和服务器之间，会随着每个HTTP请求发送到服务器</td><td>仅在当前会话中有效，在页面会话结束后清除</td><td>永久存储，除非被显式清除或者网站清除</td></tr><tr><td>数据传输</td><td>每次HTTP请求时都会发送到服务器</td><td>不会发送到服务器</td><td>不会发送到服务器</td></tr><tr><td>过期时间</td><td>可设置过期时间</td><td>仅在当前会话有效，关闭标签页或浏览器后清除</td><td>永久有效，除非被显式删除</td></tr><tr><td>访问权限</td><td>可以通过设置cookie的路径和域进行访问控制</td><td>仅在设置了相同协议、相同主机和相同端口的页面之间共享</td><td>同源策略：只允许同源页面访问</td></tr><tr><td>用途</td><td>跟踪会话状态、个性化设置等</td><td>临时存储会话级别的数据</td><td>永久存储的数据</td></tr><tr><td>API</td><td>Document.cookie</td><td>sessionStorage</td><td>localStorage</td></tr><tr><td>安全性</td><td>可设置为HttpOnly，防止被JavaScript访问</td><td>相对较高，因为数据仅存储在客户端</td><td>相对较高，因为数据仅存储在客户端</td></tr></tbody></table><h3 id="_7、dom查询以及操作" tabindex="-1">7、DOM查询以及操作 <a class="header-anchor" href="#_7、dom查询以及操作" aria-label="Permalink to &quot;7、DOM查询以及操作&quot;">​</a></h3><table tabindex="0"><thead><tr><th>方法</th><th>描述</th><th>返回类型</th><th>示例</th></tr></thead><tbody><tr><td><code>getElementById</code></td><td>根据元素 ID 获取单个元素</td><td><code>Element</code></td><td><code>document.getElementById(&#39;myId&#39;)</code></td></tr><tr><td><code>getElementsByClassName</code></td><td>根据类名获取一组元素</td><td><code>HTMLCollection</code></td><td><code>document.getElementsByClassName(&#39;myClass&#39;)</code></td></tr><tr><td><code>getElementsByTagName</code></td><td>根据标签名获取一组元素</td><td><code>HTMLCollection</code></td><td><code>document.getElementsByTagName(&#39;div&#39;)</code></td></tr><tr><td><code>querySelector</code></td><td>使用 CSS 选择器获取单个元素</td><td><code>Element</code></td><td><code>document.querySelector(&#39;.myClass&#39;)</code></td></tr><tr><td><code>querySelectorAll</code></td><td>使用 CSS 选择器获取所有匹配元素</td><td><code>NodeList</code></td><td><code>document.querySelectorAll(&#39;div&#39;)</code></td></tr><tr><td><code>getElementByName</code></td><td>根据 name 属性获取一组元素（通常用于表单）</td><td><code>NodeList</code></td><td><code>document.getElementsByName(&#39;myName&#39;)</code></td></tr><tr><td><code>parentElement</code></td><td>获取元素的父元素</td><td><code>Element</code></td><td><code>element.parentElement</code></td></tr><tr><td><code>children</code></td><td>获取元素的所有子元素</td><td><code>HTMLCollection</code></td><td><code>element.children</code></td></tr><tr><td><code>nextSibling</code></td><td>获取元素的下一个兄弟节点</td><td><code>Node</code></td><td><code>element.nextSibling</code></td></tr><tr><td><code>previousSibling</code></td><td>获取元素的前一个兄弟节点</td><td><code>Node</code></td><td><code>element.previousSibling</code></td></tr><tr><td><code>parentNode</code></td><td>获取元素的父节点</td><td><code>Node</code></td><td><code>element.parentNode</code></td></tr></tbody></table><p>作者：林太白<br> 链接：<a href="https://juejin.cn/post/7394789388142428169" target="_blank" rel="noreferrer">https://juejin.cn/post/7394789388142428169</a><br> 来源：稀土掘金<br> 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。</p>`,43),l=[p];function d(i,o,c,r,g,h){return s(),n("div",null,l)}const b=a(e,[["render",d]]);export{u as __pageData,b as default};
