import{_ as e,c as i,ag as s,o as t}from"./chunks/framework.wRLzwZz-.js";const k=JSON.parse('{"title":"❤初识React","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"src/react/react-认识.md","filePath":"src/react/react-认识.md"}'),n={name:"src/react/react-认识.md"};function l(r,a,h,p,c,o){return t(),i("div",null,a[0]||(a[0]=[s(`<h1 id="❤初识react" tabindex="-1">❤初识React <a class="header-anchor" href="#❤初识react" aria-label="Permalink to &quot;❤初识React&quot;">​</a></h1><h2 id="前置了解" tabindex="-1">前置了解 <a class="header-anchor" href="#前置了解" aria-label="Permalink to &quot;前置了解&quot;">​</a></h2><p>该React体系文章目标:</p><p>React基础、React Hooks、React路由、React Redux、组件库、immutable、Mobx、React+TS写法、单元测试、dva+umi</p><h2 id="_1-react-官网" tabindex="-1">1. React 官网 <a class="header-anchor" href="#_1-react-官网" aria-label="Permalink to &quot;1. React 官网&quot;">​</a></h2><p>英文官网: <a href="https://link.juejin.cn?target=https%3A%2F%2Freactjs.org%2F" target="_blank" rel="noreferrer">reactjs.org/</a></p><p>中文官网: <a href="https://link.juejin.cn?target=https%3A%2F%2Freact.docschina.org%2F" target="_blank" rel="noreferrer">react.docschina.org/</a></p><h2 id="_2-认识react" tabindex="-1">2. 认识React <a class="header-anchor" href="#_2-认识react" aria-label="Permalink to &quot;2. 认识React&quot;">​</a></h2><h3 id="👉描述" tabindex="-1">👉描述 <a class="header-anchor" href="#👉描述" aria-label="Permalink to &quot;👉描述&quot;">​</a></h3><p>React是一个用户构建用户界面的JavaScript库 从MVC思想来看，React仅仅是是视图层（v层）</p><h3 id="👉主要思想" tabindex="-1">👉主要思想 <a class="header-anchor" href="#👉主要思想" aria-label="Permalink to &quot;👉主要思想&quot;">​</a></h3><p><code>完全利用JS语言的能力创建组件</code></p><h3 id="👉react全家桶" tabindex="-1">👉React全家桶 <a class="header-anchor" href="#👉react全家桶" aria-label="Permalink to &quot;👉React全家桶&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">React语法基础</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">React</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Router</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Redux</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">React</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Hooks</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">PubSub</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Ant</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Design</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">umi</span></span></code></pre></div><h2 id="_3-react起源" tabindex="-1">3. React起源 <a class="header-anchor" href="#_3-react起源" aria-label="Permalink to &quot;3. React起源&quot;">​</a></h2><h3 id="👉简述" tabindex="-1">👉简述 <a class="header-anchor" href="#👉简述" aria-label="Permalink to &quot;👉简述&quot;">​</a></h3><p>React 起源于 Facebook 的内部项目，该公司对市场上所有 JavaScript MVC 框架都不满意，Jordan Walke就决定自己写一套，用来架Instagram 的网站。做出来以后，发现这套东西很好用，在2013年5月开源。</p><h3 id="👉创始人jordan-walke" tabindex="-1">👉创始人<strong>Jordan Walke</strong> <a class="header-anchor" href="#👉创始人jordan-walke" aria-label="Permalink to &quot;👉创始人**Jordan Walke**&quot;">​</a></h3><p>Facebook的前端工程师，还参与了许多其他前端开源项目的开发，如Flux、Jest和Flow等。他在前端技术方面的贡献得到了广泛认可，被誉为“现代前端开发的先驱</p><h3 id="👉背景" tabindex="-1">👉背景 <a class="header-anchor" href="#👉背景" aria-label="Permalink to &quot;👉背景&quot;">​</a></h3><p>Jordan Walke在开发React时，最初是为了解决Facebook内部的一些前端问题，如复杂UI组件的构建、高效的渲染以及数据管理等。他认为传统的前端开发方式过于繁琐，需要手动操作DOM，造成性能问题和代码复杂度的提高。因此，他设计了React的虚拟DOM和组件化思想，使得开发者可以更加高效地构建复杂UI组件，并且可以更加方便地管理数据。</p><h3 id="👉历史" tabindex="-1">👉历史 <a class="header-anchor" href="#👉历史" aria-label="Permalink to &quot;👉历史&quot;">​</a></h3><hr><p>2011年开始开发React，2013年，React首次发布成为了一个开源项目。在React发布后，它的影响力迅速扩大，成为了当今最流行的前端框架之一。React的成功也推动了整个前端技术的发展，使得前端开发变得更加高效和可靠。</p><h3 id="👉对比vue" tabindex="-1">👉对比Vue <a class="header-anchor" href="#👉对比vue" aria-label="Permalink to &quot;👉对比Vue&quot;">​</a></h3><p>Vue的创始人</p><p>Vue.js的创始人是尤雨溪（Evan You），他是一位中国程序员，曾在Google和Meteor工作。他在2014年创建了Vue.js，并在不到一年的时间内将其推向开发者社区。</p><hr><p>尤雨溪在创建Vue.js的时候，旨在解决现有的前端框架（如Angular和React）存在的一些问题，例如过于复杂、学习曲线陡峭等。他希望创造一种更加轻量级、易学易用的框架，同时保持足够的灵活性和可扩展性，以满足开发者的需求。</p><hr><p>Vue.js的设计理念是“渐进式框架”，即可以逐步引入到现有项目中，而不需要全面重构。这使得Vue.js非常适合中小型项目，同时也可以用于大型企业级项目。</p><hr><p>在Vue.js发布后，它迅速获得了广泛的关注和使用。尤雨溪也因此成为前端开发社区中备受尊敬的人物之一。他继续致力于Vue.js的开发和推广，同时也在全球范围内进行了许多关于Vue.js的演讲和培训。</p><hr><h3 id="👉react和vue的理念对比" tabindex="-1">👉React和vue的理念对比 <a class="header-anchor" href="#👉react和vue的理念对比" aria-label="Permalink to &quot;👉React和vue的理念对比&quot;">​</a></h3><p>React其实是作为MVC架构的V层---仅仅是UI React完全利用JS语言自身能力来编写ui，而不是造轮子增强HTML功能 Vue则是造轮子增强HTML功能</p><h3 id="👉进一步介绍" tabindex="-1">👉进一步介绍 <a class="header-anchor" href="#👉进一步介绍" aria-label="Permalink to &quot;👉进一步介绍&quot;">​</a></h3><p>虚拟DOM - React为了更高超的性能而使用虚拟DOM作为其不同的实现。 它同时也可以由服务端Node.js渲染 － 而不需要过重的浏览器DOM支持</p><p>数据流 - React实现了单向响应的数据流，从而减少了重复代码，这也是它为什么比传统数据绑定更简单。</p><p>React 的设计思想极其独特，属于革命性创新，性能出众，代码逻辑却非常简单。</p><p>项目本身也越滚越大，从最早的UI引擎变成了一整套前后端通吃的 Web App 解决方案。衍生的 React Native 项目，目标更是宏伟，希望用写 Web App 的方式去写 Native App。如果能够实现，整个互联网行业都会被颠覆，因为同一组人只需要写一次 UI ，就能同时运行在服务器、浏览器和手机。</p><h2 id="_4-react-特点和作用" tabindex="-1">4. React 特点和作用 <a class="header-anchor" href="#_4-react-特点和作用" aria-label="Permalink to &quot;4. React 特点和作用&quot;">​</a></h2><h3 id="👉特点" tabindex="-1">👉特点 <a class="header-anchor" href="#👉特点" aria-label="Permalink to &quot;👉特点&quot;">​</a></h3><ol><li>声明式设计 （声明式编码）</li><li>组件化编码（组件化模式）</li><li>高效灵活（优秀的Diffing算法），最小化页面重绘</li><li>React Native 编写原生应用</li><li>JSX 语法</li><li>单向数据绑定</li><li>虚拟 DOM（使用虚拟(virtual)DOM, 不直接操作页面真实DOM</li><li>Component</li><li>React Native 可以使用React语法进行移动端开发</li></ol><h3 id="👉作用" tabindex="-1">👉作用 <a class="header-anchor" href="#👉作用" aria-label="Permalink to &quot;👉作用&quot;">​</a></h3><pre><code>开发web应用
使用React 开发移动端原生应用React-native
VR 虚拟现实 react360
</code></pre><h2 id="_5、核心部分-函数式组件" tabindex="-1">5、核心部分（函数式组件） <a class="header-anchor" href="#_5、核心部分-函数式组件" aria-label="Permalink to &quot;5、核心部分（函数式组件）&quot;">​</a></h2><p>经过对于前面React知识的了解，想必也清楚了对于React官方来说，更加重要的是哪些</p><p>最核心的当然就是函数式组件的使用，接下来的部分大部分都会以函数式组件为主进行讲解</p><p>也就是下面这种最简单的函数式组件的编写！</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> React </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;react&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> mycomponents</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  render</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;header&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    )</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,51)]))}const u=e(n,[["render",l]]);export{k as __pageData,u as default};
