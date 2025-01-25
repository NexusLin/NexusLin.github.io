import{_ as i,c as a,ag as n,o as t}from"./chunks/framework.wRLzwZz-.js";const o=JSON.parse('{"title":"❤vue Router路由使用","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"src/Note/vue路由.md","filePath":"src/Note/vue路由.md"}'),e={name:"src/Note/vue路由.md"};function h(p,s,l,k,r,E){return t(),a("div",null,s[0]||(s[0]=[n(`<h1 id="❤vue-router路由使用" tabindex="-1">❤vue Router路由使用 <a class="header-anchor" href="#❤vue-router路由使用" aria-label="Permalink to &quot;❤vue Router路由使用&quot;">​</a></h1><p>🍓 vue Router官网</p><p><a href="https://router.vuejs.org/zh/" target="_blank" rel="noreferrer">vueRouter中文官网</a></p><h4 id="功能一览" tabindex="-1">功能一览 <a class="header-anchor" href="#功能一览" aria-label="Permalink to &quot;功能一览&quot;">​</a></h4><div class="language-JS vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JS</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">嵌套路由映射</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">动态路由选择</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">模块化、基于组件的路由配置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">路由参数、查询、通配符</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">展示由 Vue.js 的过渡系统提供的过渡效果</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">细致的导航控制</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">自动激活 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">CSS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 类的链接</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">HTML5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> history 模式或 hash 模式</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">可定制的滚动行为</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">URL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 的正确编码</span></span></code></pre></div><h2 id="_1、安装" tabindex="-1">1、安装 <a class="header-anchor" href="#_1、安装" aria-label="Permalink to &quot;1、安装&quot;">​</a></h2><p>vue3之中我们使用的是版本4,所以我们需要安装vue-router@4的版本</p><div class="language-JS vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JS</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">yarn add vue</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">router@</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span></span></code></pre></div><h2 id="_2、项目之中使用" tabindex="-1">2、项目之中使用 <a class="header-anchor" href="#_2、项目之中使用" aria-label="Permalink to &quot;2、项目之中使用&quot;">​</a></h2><p>☞ 新建文件router=&gt; index.js</p><p>主要步骤</p><div class="language-JS vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JS</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">、导入路由</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">、配置路由页面</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">、返回router 实列，为函数，配置 history 路由模式</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">、导出路由   去 main.ts 注册 router.ts</span></span></code></pre></div><p>☞ 代码实现</p><div class="language-JS vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JS</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { createRouter, createWebHistory, RouteRecordRaw ,createWebHashHistory} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;vue-router&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 导入路由</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> routes</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        path: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 默认路由 home页面</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@/pages/index.vue&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> router</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> createRouter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    history: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createWebHistory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//createWebHashHistory</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    routes,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> router</span></span></code></pre></div>`,14)]))}const g=i(e,[["render",h]]);export{o as __pageData,g as default};
