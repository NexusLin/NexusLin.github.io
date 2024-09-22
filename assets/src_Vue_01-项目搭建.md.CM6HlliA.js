import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.DvHWMJgD.js";const F=JSON.parse('{"title":"❤ 环境和项目搭建","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"src/Vue/01-项目搭建.md","filePath":"src/Vue/01-项目搭建.md"}'),t={name:"src/Vue/01-项目搭建.md"},p=n(`<h1 id="❤-环境和项目搭建" tabindex="-1">❤ 环境和项目搭建 <a class="header-anchor" href="#❤-环境和项目搭建" aria-label="Permalink to &quot;❤ 环境和项目搭建&quot;">​</a></h1><blockquote><p>项目采取方式 Vue3+Pinia+Vant3/ElementPlus+typerscript</p></blockquote><h2 id="_1、项目环境和简介" tabindex="-1">1、项目环境和简介 <a class="header-anchor" href="#_1、项目环境和简介" aria-label="Permalink to &quot;1、项目环境和简介&quot;">​</a></h2><h3 id="环境" tabindex="-1">环境 <a class="header-anchor" href="#环境" aria-label="Permalink to &quot;环境&quot;">​</a></h3><blockquote><p>使用nvm 版本 20.10.0<br> node 版本 20.10.0<br> npm版本 10.2.3</p></blockquote><ul><li>检测自己本地的环境(我本地使用的nvm,强烈建议使用nvm管理版本)</li></ul><div class="language-JS vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JS</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">node </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">v  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// v20.10.0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">v   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 10.2.3</span></span></code></pre></div><h3 id="项目简介" tabindex="-1">项目简介： <a class="header-anchor" href="#项目简介" aria-label="Permalink to &quot;项目简介：&quot;">​</a></h3><p>Vue3全家桶+vite+TS+Pinia+Vant3/ElementPlus-搭建Vue3.x项目</p><h2 id="_2、搭建开发" tabindex="-1">2、搭建开发 <a class="header-anchor" href="#_2、搭建开发" aria-label="Permalink to &quot;2、搭建开发&quot;">​</a></h2><h3 id="_1-环境准备-好了直接跳过" tabindex="-1">（1）环境准备（好了直接跳过） <a class="header-anchor" href="#_1-环境准备-好了直接跳过" aria-label="Permalink to &quot;（1）环境准备（好了直接跳过）&quot;">​</a></h3><p>建议使用nvm 管理版本：</p><p>文章：<a href="http://t.csdn.cn/osXjs" target="_blank" rel="noreferrer">window如何使用nvm管理node版本</a></p><p>了解主要的版本和体系<br><a href="http://t.csdn.cn/unAxE" target="_blank" rel="noreferrer">vue主要使用的版本和对应体系</a></p><h4 id="node环境" tabindex="-1">node环境 <a class="header-anchor" href="#node环境" aria-label="Permalink to &quot;node环境&quot;">​</a></h4><p>已安装 16.0 或更高版本的 Node.js<br> 检测 ： node -v<br><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/edeb97a681934f2d8869da0401efa8be~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=349&amp;h=52&amp;s=6524&amp;e=png&amp;b=010101" alt=""></p><h4 id="npm-环境" tabindex="-1">npm 环境 <a class="header-anchor" href="#npm-环境" aria-label="Permalink to &quot;npm 环境&quot;">​</a></h4><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3971e0273e4342e1be617821a4feb7a6~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=371&amp;h=62&amp;s=6870&amp;e=png&amp;b=000000" alt=""></p><h3 id="_2-项目新建和运行" tabindex="-1">（2）项目新建和运行 <a class="header-anchor" href="#_2-项目新建和运行" aria-label="Permalink to &quot;（2）项目新建和运行&quot;">​</a></h3><p><code>yarn搭建项目的命令：（建议1）</code></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 使用vue的模板进行创建 （这是我项目使用的和本人推荐的方式 ）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">yarn create vite </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ProjectName</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> --</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">template vue  </span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">或者采用下面这种方式 </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">yarn create vite lintaibai  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 普通使用vite创建</span></span></code></pre></div><blockquote><p>这里选择的vue+TS的组合</p></blockquote><p>创建项目名称<br> 选择主要框架Vue<br> 选择语言<br><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0274a66b5d414091a6a6945064e84710~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=832&amp;h=315&amp;s=30753&amp;e=png&amp;b=000000" alt=""><br> 项目运行成功以后提示：<br><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/add9d94405a845b6aa58eef4008ff60a~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=539&amp;h=440&amp;s=24488&amp;e=png&amp;b=000000" alt=""><br> 依次输入命令：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lintaibai</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span></span></code></pre></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9594a1772f4d41c2b69cdd68d46cd5f0~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=959&amp;h=298&amp;s=31771&amp;e=png&amp;b=000000" alt=""></p><p>成功以后的页面：<br><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/25c79d0099dd49989447cefefb341c1a~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=784&amp;h=615&amp;s=38780&amp;e=png&amp;b=ffffff" alt=""></p><h2 id="_3、安装vue-router" tabindex="-1">3、安装Vue Router <a class="header-anchor" href="#_3、安装vue-router" aria-label="Permalink to &quot;3、安装Vue Router&quot;">​</a></h2><h3 id="_3-1-安装vue-router" tabindex="-1">3-1 安装Vue Router <a class="header-anchor" href="#_3-1-安装vue-router" aria-label="Permalink to &quot;3-1 安装Vue Router&quot;">​</a></h3><h4 id="安装vue-router-路由" tabindex="-1">安装Vue Router 路由 <a class="header-anchor" href="#安装vue-router-路由" aria-label="Permalink to &quot;安装Vue Router 路由&quot;">​</a></h4><p>vue3需要安装4.0以上版本</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vue-router@4</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --save</span></span></code></pre></div><p>安装完成后，在package.json中查看vue-router是否安装成功<br><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0c9d624041e6408bb74b835ae18e8bad~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1272&amp;h=456&amp;s=58722&amp;e=png&amp;b=282923" alt=""></p><h3 id="_3-2-实现主页" tabindex="-1">3-2 实现主页 <a class="header-anchor" href="#_3-2-实现主页" aria-label="Permalink to &quot;3-2 实现主页&quot;">​</a></h3><h4 id="_1-在src文件夹下面创建-views-文件夹-下新建-lintaibai-vue" tabindex="-1">（1） 在src文件夹下面创建 =&gt; views 文件夹=&gt; 下新建 lintaibai.vue <a class="header-anchor" href="#_1-在src文件夹下面创建-views-文件夹-下新建-lintaibai-vue" aria-label="Permalink to &quot;（1） 在src文件夹下面创建 =&gt; views 文件夹=&gt; 下新建 lintaibai.vue&quot;">​</a></h4><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7569d043650943d48ce4585393bb2cef~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=245&amp;h=283&amp;s=15209&amp;e=png&amp;b=e7eaec" alt=""></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;about&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     我是林太白</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h4 id="_2-在src文件夹下面-新建router-文件夹-新建-index-ts" tabindex="-1">（2）在src文件夹下面 =&gt; 新建router 文件夹=&gt; 新建 index.ts <a class="header-anchor" href="#_2-在src文件夹下面-新建router-文件夹-新建-index-ts" aria-label="Permalink to &quot;（2）在src文件夹下面 =&gt; 新建router 文件夹=&gt; 新建 index.ts&quot;">​</a></h4><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/59db84ad59b842f99ddb783c5e38e96e~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=340&amp;h=362&amp;s=20883&amp;e=png&amp;b=e7eaec" alt=""></p><h4 id="_3-index-ts里面进行配置主页路由" tabindex="-1">（3）index.ts里面进行配置主页路由 <a class="header-anchor" href="#_3-index-ts里面进行配置主页路由" aria-label="Permalink to &quot;（3）index.ts里面进行配置主页路由&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> createRouter,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> createWebHistory,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> RouteRecordRaw</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> }</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;vue-router&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">//</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 导入路由</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">//</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 1.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 配置路由</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  lintaibai--进来时候的初始页面</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">const</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> routes=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    path:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;/&quot;,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 默认路由</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> home页面</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    component:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> import(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;../views/lintaibai.vue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">//</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 2.返回一个</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> router</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 实列，为函数，配置</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> history</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 模式</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">const</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> router</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> createRouter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  history</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> createWebHistory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  routes,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">//</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 3.导出路由</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   去</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main.ts</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 注册</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> router.ts</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> default router</span></span></code></pre></div><h4 id="_4-在main-ts中引用router下的index-ts" tabindex="-1">（4）在main.ts中引用router下的index.ts <a class="header-anchor" href="#_4-在main-ts中引用router下的index-ts" aria-label="Permalink to &quot;（4）在main.ts中引用router下的index.ts&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> createApp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> }</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> App</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./App.vue&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">//</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 挂载router</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> router</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./router/index&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 引入router</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">const</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> app</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> createApp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">app.use(router</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).mount(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;#app&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h4 id="_5-在app-vue中添加路由路径-router-view" tabindex="-1">（5）在app.vue中添加路由路径 router-view <a class="header-anchor" href="#_5-在app-vue中添加路由路径-router-view" aria-label="Permalink to &quot;（5）在app.vue中添加路由路径 router-view&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">template</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">router-view</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/router-view&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/template</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p>此时：路由的默认跳转就可以了，项目启动之后，就会跳转到第二步骤配置的默认页面</p><p>效果：<br><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/efd237d1a7194fc3b1736c084f1371bf~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=622&amp;h=201&amp;s=5780&amp;e=png&amp;b=ffffff" alt=""></p><h2 id="_4、安装pinia" tabindex="-1">4、安装pinia <a class="header-anchor" href="#_4、安装pinia" aria-label="Permalink to &quot;4、安装pinia&quot;">​</a></h2><h4 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h4><p>类似vue2的vuex状态管理，简单来说就是一个存储数据的地方，存放在Vuex中的数据在各个组件中都能访问到，它是Vue生态中重要的组成部分。</p><h4 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h4><p><strong>安装</strong></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pinia</span></span></code></pre></div><p>修改main.ts，引入pinia提供的createPinia方法，创建根存储</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> createPinia</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> }</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;pinia&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 引入pinia</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">app.use(createPinia(</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)).use(router).mount(&#39;#app&#39;) //挂载</span></span></code></pre></div><blockquote><p>你的main.ts完整代码这会应该如下</p></blockquote><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">完整这会应该如下：</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { createApp } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { createPinia } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;pinia&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> App </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./App.vue&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 挂载router</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> router </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./router/index&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 引入router</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> app</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> createApp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(App)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createPinia</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(router).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#app&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//挂载</span></span></code></pre></div><h2 id="_5、安装axios" tabindex="-1">5、安装axios <a class="header-anchor" href="#_5、安装axios" aria-label="Permalink to &quot;5、安装axios&quot;">​</a></h2><p>安装</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> axios</span></span></code></pre></div><h2 id="_6、安装和配置-element-plus-完整导入" tabindex="-1">6、安装和配置 Element Plus（完整导入） <a class="header-anchor" href="#_6、安装和配置-element-plus-完整导入" aria-label="Permalink to &quot;6、安装和配置 Element Plus（完整导入）&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> element-plus</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --save</span></span></code></pre></div><p>main.ts中引入：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">//</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 引入组件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ElementPlus</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;element-plus&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;element-plus/dist/index.css&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">const</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> app</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> createApp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">app.use(createPinia(</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)).use(ElementPlus)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">app.mount(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;#app&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>测试使用效果：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">el-button type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;primary&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Primary</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/el-button</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/983a534820564d01b2e5f8eb2aac67ad~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=620&amp;h=126&amp;s=8457&amp;e=png&amp;b=ffffff" alt=""></p><p>你的main.ts完整应该如下</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { createApp } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { createPinia } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;pinia&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> App </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./App.vue&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 挂载router</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> router </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./router/index&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 引入router</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ElementPlus </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;element-plus&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;element-plus/dist/index.css&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> app</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> createApp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(App)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createPinia</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ElementPlus).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(router).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#app&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//挂载</span></span></code></pre></div><p>到这里我们的基础环境和项目最基础的配置就已经好了...</p>`,69),h=[p];function e(l,k,r,d,g,o){return a(),i("div",null,h)}const c=s(t,[["render",e]]);export{F as __pageData,c as default};
