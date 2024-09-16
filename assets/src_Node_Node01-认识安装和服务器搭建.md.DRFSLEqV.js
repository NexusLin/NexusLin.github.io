import{_ as s,c as a,o as n,a4 as p}from"./chunks/framework.p1nTaqAP.js";const e="/NexusLin/images/node1-1.png",l="/NexusLin/images/node1-2.png",o="/NexusLin/images/node1-3.png",i="/NexusLin/images/node1-4.png",j=JSON.parse('{"title":"❤Node01-认识安装和服务器搭建","description":"","frontmatter":{},"headers":[],"relativePath":"src/Node/Node01-认识安装和服务器搭建.md","filePath":"src/Node/Node01-认识安装和服务器搭建.md"}'),t={name:"src/Node/Node01-认识安装和服务器搭建.md"},c=p('<h1 id="❤node01-认识安装和服务器搭建" tabindex="-1">❤Node01-认识安装和服务器搭建 <a class="header-anchor" href="#❤node01-认识安装和服务器搭建" aria-label="Permalink to &quot;❤Node01-认识安装和服务器搭建&quot;">​</a></h1><h2 id="_1、概述" tabindex="-1">1、概述 <a class="header-anchor" href="#_1、概述" aria-label="Permalink to &quot;1、概述&quot;">​</a></h2><p>官网链接和介绍</p><p>英文官网： <a href="https://nodejs.org/en" target="_blank" rel="noreferrer">https://nodejs.org/en</a></p><p>中文网</p><p>【中文网】 <a href="https://www.nodejs.com.cn/" target="_blank" rel="noreferrer">https://www.nodejs.com.cn/</a></p><p>【中文网p2hp】 <a href="https://nodejs.p2hp.com/" target="_blank" rel="noreferrer">https://nodejs.p2hp.com/</a></p><p>版本：<code>2024-04-09</code>统计</p><p><img src="'+e+'" alt="image.png"></p><p>版本日志历史： <a href="https://github.com/nodejs/node/blob/main/doc/changelogs/CHANGELOG_V20.md#20.11.0" target="_blank" rel="noreferrer">https://github.com/nodejs/node/blob/main/doc/changelogs/CHANGELOG_V20.md#20.11.0</a></p><h2 id="_2、介绍" tabindex="-1">2、介绍 <a class="header-anchor" href="#_2、介绍" aria-label="Permalink to &quot;2、介绍&quot;">​</a></h2><p>Node.js 是一个开源和跨平台的 JavaScript 运行时环境 官方简介：</p><p><img src="'+l+'" alt="image.png"></p><p>详细介绍</p><ol><li>nodejs 并不是<code>JavaScript</code>应用，也不是编程语言，因为编程语言使用的<code>JavaScript</code>,Nodejs是 <code>JavaScript</code>的运行时。</li></ol><p>JS是脚本语言，脚本语言都需要一个解析器才能运行。对于写在HTML页面里的JS，浏览器充当了解析器的角色。而对于需要独立运行的JS，NodeJS就是一个解析器 而运行在NodeJS中的JS的用途是操作磁盘文件或搭建HTTP服务器，NodeJS就相应提供了<code>fs</code>、<code>http</code>等内置对象</p><ol><li>Nodejs是构建在V8引擎之上的，V8引擎是由C/C++编写的，我们的JavaSCript代码实际由C/C++转化后执行</li><li>NodeJs 使用异步 I/O 和事件驱动的设计理念，可以高效地处理大量并发请求，提供了非阻塞式 I/O 接口和事件循环机制，使得开发人员可以编写高性能、可扩展的应用程序,异步I/O最终都是由libuv 事件循环库去实现的。</li><li>NodeJs 使用npm 作为包管理工具类似于python的pip，或者是java的Maven，目前npm拥有上百万个模块。 <a href="https://www.npmjs.com/" target="_blank" rel="noreferrer">https://www.npmjs.com/</a></li><li>nodejs适合干一些IO密集型应用，不适合CPU密集型应用，nodejsIO依靠libuv有很强的处理能力，而CPU因为nodejs单线程原因，容易造成CPU占用率高，如果非要做CPU密集型应用，可以使用C++插件编写 或者nodejs提供的cluster。(CPU密集型指的是图像的处理 或者音频处理需要大量数据结构 + 算法) ————————————————</li></ol><h3 id="node历史" tabindex="-1">node历史 <a class="header-anchor" href="#node历史" aria-label="Permalink to &quot;node历史&quot;">​</a></h3><p>Node.js 由 <code>Ryan Dahl</code> 于 2009 年创建用于服务器端编程，主要部署在非阻塞、事件驱动的服务器上，如传统网站和后端 API 服务。每个浏览器都有自己版本的 JS 引擎，而 node.js 就是基于 Google Chrome 浏览器的 V8 JavaScript 引擎构建的。 简单说，这意味着整个网站可以使用统一的 &quot;堆栈 &quot;运行，从而使开发和维护变得快速而简单，让您可以专注于实现项目的业务目标。</p><h2 id="_3、nodejs-架构和应用" tabindex="-1">3、nodeJs 架构和应用 <a class="header-anchor" href="#_3、nodejs-架构和应用" aria-label="Permalink to &quot;3、nodeJs 架构和应用&quot;">​</a></h2><h3 id="架构" tabindex="-1">架构 <a class="header-anchor" href="#架构" aria-label="Permalink to &quot;架构&quot;">​</a></h3><p><img src="'+o+`" alt="image.png"></p><h3 id="应用场景" tabindex="-1">应用场景 <a class="header-anchor" href="#应用场景" aria-label="Permalink to &quot;应用场景&quot;">​</a></h3><p>运行环境可配合nodejs或者依靠nodejs运行的有：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span>前端</span></span>
<span class="line"><span>Vue Angular React nuxtjs nextjs</span></span>
<span class="line"><span></span></span>
<span class="line"><span>后端</span></span>
<span class="line"><span>serverLess</span></span>
<span class="line"><span></span></span>
<span class="line"><span>web应用 epxress Nestjs koa</span></span>
<span class="line"><span></span></span>
<span class="line"><span>RPC 服务 gRPC</span></span>
<span class="line"><span></span></span>
<span class="line"><span>爬虫 Puppeteer cheerio</span></span>
<span class="line"><span></span></span>
<span class="line"><span>BFF层 网关层</span></span>
<span class="line"><span></span></span>
<span class="line"><span>及时性应用socket.io</span></span>
<span class="line"><span></span></span>
<span class="line"><span>桌前端</span></span>
<span class="line"><span>electron</span></span>
<span class="line"><span></span></span>
<span class="line"><span>tauri</span></span>
<span class="line"><span></span></span>
<span class="line"><span>NWjs</span></span>
<span class="line"><span></span></span>
<span class="line"><span>移动端</span></span>
<span class="line"><span>weex</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ionic</span></span>
<span class="line"><span></span></span>
<span class="line"><span>hybrid</span></span>
<span class="line"><span></span></span>
<span class="line"><span>React Native</span></span>
<span class="line"><span></span></span>
<span class="line"><span>基建端</span></span>
<span class="line"><span>webpack vite rollup gulp</span></span>
<span class="line"><span></span></span>
<span class="line"><span>less scss postCss</span></span>
<span class="line"><span></span></span>
<span class="line"><span>babel swc</span></span>
<span class="line"><span></span></span>
<span class="line"><span>inquire command  shelljs</span></span>
<span class="line"><span></span></span>
<span class="line"><span>嵌入式</span></span>
<span class="line"><span>Ruff js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>单元测试</span></span>
<span class="line"><span>jest vitest e2e</span></span>
<span class="line"><span></span></span>
<span class="line"><span>CICD</span></span>
<span class="line"><span>Jenkins docker  Husky   miniprogram-ci</span></span>
<span class="line"><span></span></span>
<span class="line"><span>反向代理</span></span>
<span class="line"><span>http-proxy Any-proxy</span></span></code></pre></div><h2 id="_4、建立第一个node-js的-hello-word" tabindex="-1">4、建立第一个node.js的&#39;hello word!&#39; <a class="header-anchor" href="#_4、建立第一个node-js的-hello-word" aria-label="Permalink to &quot;4、建立第一个node.js的&#39;hello word!&#39;&quot;">​</a></h2><h3 id="安装直接使用nvm建议" tabindex="-1">安装直接使用nvm建议 <a class="header-anchor" href="#安装直接使用nvm建议" aria-label="Permalink to &quot;安装直接使用nvm建议&quot;">​</a></h3><p>安装nvm nvm安装node</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>jsnvm list available</span></span>
<span class="line"><span>nvm install v20</span></span></code></pre></div><p>这里我选择的LTS长期支持偶数版本v20 新建一个index.js文件 打开cmd命令行界面 里面输出一个简单的信息</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>jsconsole.log(&quot;Hello World林太白&quot;);</span></span></code></pre></div><p><img src="`+i+'" alt="image.png"></p><p>到此，我们的第一个ndoe程序已经搭建好了</p>',33),d=[c];function r(h,m,u,_,g,b){return n(),a("div",null,d)}const k=s(t,[["render",r]]);export{j as __pageData,k as default};
