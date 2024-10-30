import{_ as a,c as e,o as t,a4 as r}from"./chunks/framework.DvHWMJgD.js";const f=JSON.parse('{"title":"「2024」高频浏览器原理篇","description":"","frontmatter":{},"headers":[],"relativePath":"src/MS/「2024」高频浏览器原理篇.md","filePath":"src/MS/「2024」高频浏览器原理篇.md"}'),n={name:"src/MS/「2024」高频浏览器原理篇.md"},o=r('<h1 id="「2024」高频浏览器原理篇" tabindex="-1">「2024」高频浏览器原理篇 <a class="header-anchor" href="#「2024」高频浏览器原理篇" aria-label="Permalink to &quot;「2024」高频浏览器原理篇&quot;">​</a></h1><h2 id="「2024」高频前端面试题汇总之浏览器原理篇" tabindex="-1">「2024」高频前端面试题汇总之浏览器原理篇 <a class="header-anchor" href="#「2024」高频前端面试题汇总之浏览器原理篇" aria-label="Permalink to &quot;「2024」高频前端面试题汇总之浏览器原理篇&quot;">​</a></h2><h3 id="_1-常见的浏览器内核有哪些" tabindex="-1">1. 常见的浏览器内核有哪些？ <a class="header-anchor" href="#_1-常见的浏览器内核有哪些" aria-label="Permalink to &quot;1. 常见的浏览器内核有哪些？&quot;">​</a></h3><p>Blink内核：新版 Chrome、新版 Opera</p><p>Webkit内核：Safari、原Chrome</p><p>Gecko内核：FireFox、Netscape6及以上版本</p><p>Trident内核（又称MSHTML内核）：IE、国产浏览器</p><p>Presto内核：原Opera7及以上</p><h3 id="_2、浏览器是怎么对html5的离线储存资源进行管理和加载的呢" tabindex="-1">2、浏览器是怎么对HTML5的离线储存资源进行管理和加载的呢？ <a class="header-anchor" href="#_2、浏览器是怎么对html5的离线储存资源进行管理和加载的呢" aria-label="Permalink to &quot;2、浏览器是怎么对HTML5的离线储存资源进行管理和加载的呢？&quot;">​</a></h3><p>在线的情况下，浏览器发现html头部有manifest属性，它会请求manifest文件，如果是第一次访问app，那么浏览器就会根据manifest文件的内容下载相应的资源并且进行离线存储。如果已经访问过app并且资源已经离线存储了，那么浏览器就会使用离线的资源加载页面，然后浏览器会对比新的manifest文件与旧的manifest文件，如果文件没有发生改变，就不做任何操作，如果文件改变了，那么就会重新下载文件中的资源并进行离线存储。</p><p>离线的情况下，浏览器就直接使用离线存储的资源。</p><h3 id="_3、介绍一下你对浏览器内核的理解" tabindex="-1">3、介绍一下你对浏览器内核的理解 <a class="header-anchor" href="#_3、介绍一下你对浏览器内核的理解" aria-label="Permalink to &quot;3、介绍一下你对浏览器内核的理解&quot;">​</a></h3><p>浏览器内核主要分为两部分：渲染引擎(layout engineer 或 Rendering Engine) 和 JS引擎</p><p>渲染引擎负责取得网页的内容进行布局计和样式渲染，然后会输出至显示器或打印机</p><p>JS引擎则负责解析和执行JS脚本来实现网页的动态效果和用户交互</p><p>最开始渲染引擎和JS引擎并没有区分的很明确，后来JS引擎越来越独立，内核就倾向于只指渲染引擎</p><h3 id="_4、-如何处理html5新标签的浏览器兼容问题" tabindex="-1">4、 如何处理HTML5新标签的浏览器兼容问题？ <a class="header-anchor" href="#_4、-如何处理html5新标签的浏览器兼容问题" aria-label="Permalink to &quot;4、 如何处理HTML5新标签的浏览器兼容问题？&quot;">​</a></h3><p>通过 document.createElement 创建新标签</p><p>使用垫片 html5shiv.js</p><p>作者：林太白<br> 链接：<a href="https://juejin.cn/post/7425871943642071092" target="_blank" rel="noreferrer">https://juejin.cn/post/7425871943642071092</a><br> 来源：稀土掘金<br> 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。</p>',20),i=[o];function p(s,h,_,l,c,d){return t(),e("div",null,i)}const u=a(n,[["render",p]]);export{f as __pageData,u as default};
