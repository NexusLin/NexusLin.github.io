import{_ as s,c as a,o as n,a4 as p}from"./chunks/framework.DvHWMJgD.js";const g=JSON.parse('{"title":"❤ axios请求和Mock使用","description":"","frontmatter":{},"headers":[],"relativePath":"src/vue/04-axios和Mock.md","filePath":"src/vue/04-axios和Mock.md"}'),e={name:"src/vue/04-axios和Mock.md"},l=p(`<h1 id="❤-axios请求和mock使用" tabindex="-1">❤ axios请求和Mock使用 <a class="header-anchor" href="#❤-axios请求和mock使用" aria-label="Permalink to &quot;❤ axios请求和Mock使用&quot;">​</a></h1><h2 id="_1、打包环境" tabindex="-1">1、打包环境 <a class="header-anchor" href="#_1、打包环境" aria-label="Permalink to &quot;1、打包环境&quot;">​</a></h2><p>直接<code>yarn build</code> 会发现给我们提示了很多报错</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1726123994465-d7c32c59-3065-403b-8eed-41b509938ae9.webp" alt=""></p><h4 id="更改tsconfig-json文件夹下compileroptions" tabindex="-1">更改tsconfig.json文件夹下compilerOptions <a class="header-anchor" href="#更改tsconfig-json文件夹下compileroptions" aria-label="Permalink to &quot;更改tsconfig.json文件夹下compilerOptions&quot;">​</a></h4><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码&quot;compilerOptions&quot;: {</span></span>
<span class="line"><span>    &quot;allowJs&quot;: true, //使用ts编译器时，项目之中存在js会报错</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="更改package-json文件夹下打包命令" tabindex="-1">更改package.json文件夹下打包命令 <a class="header-anchor" href="#更改package-json文件夹下打包命令" aria-label="Permalink to &quot;更改package.json文件夹下打包命令&quot;">​</a></h4><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码&quot;scripts&quot;: {</span></span>
<span class="line"><span>    &quot;dev&quot;: &quot;vite&quot;,</span></span>
<span class="line"><span>    &quot;build&quot;: &quot;vite build&quot;,</span></span>
<span class="line"><span>    &quot;preview&quot;: &quot;vite preview&quot;</span></span>
<span class="line"><span>},</span></span></code></pre></div><p>再次<code>yarn build </code> 已经生成了我们的打包目录。</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1726123994511-8414af51-589f-4d70-b6ff-ffd4a51aff5a.webp" alt=""></p><p>尝试将打包目录部署一下 ： 地址： <a href="https://link.juejin.cn?target=https%3A%2F%2Fnexuslinnoa.gitee.io%2F" target="_blank" rel="noreferrer">nexuslinnoa.gitee.io/</a></p><p>预览如下：</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1726123994537-bb74cec8-6037-4bff-930f-c7375979d605.webp" alt=""></p><p>完全没任何问题！ok!到这里，你已经学会了自己搭建一个网站并部署的基础过程！</p><h2 id="_2、安装使用mock" tabindex="-1">2、安装使用Mock <a class="header-anchor" href="#_2、安装使用mock" aria-label="Permalink to &quot;2、安装使用Mock&quot;">​</a></h2><p><code>(后期会抽离这个部分，进化版本是使用【Node结合Express|Node结合Koa|Node结合Egg】进行本地数据库的增删改查)</code></p><p>具体的Mock.js 的语法规范暂时就不做解释了（个人认为没必要学和了解）</p><p><a href="https://link.juejin.cn?target=https%3A%2F%2Fapifox.com%2Fapiskills%2Fmock-js-example%2F" target="_blank" rel="noreferrer">Mock.js</a> 是常用的生成随机数据，拦截 Ajax 请求的 JavaScript 库。在后端 API 接口可能还没有实现或者还没有完全实现。在这种情况下，可以用 Mock.js 模拟后端 API 供前端开发人员调用。</p><p>在 Vue 项目中使用 Mock.js 有两个思路：</p><ol><li>在客户端拦截 Ajax。用 Mock.js 拦截 Ajax 请求，返回 Mock.js 生成的随机数据。</li><li>在服务器端返回 Mock 数据。后端在 API 还没开发好前，返回 Mock.js 生成的随机数据。</li></ol><p>知识扩展：<a href="https://link.juejin.cn?target=https%3A%2F%2Fapifox.com%2Fapiskills%2Fmock-js-syntax%2F" target="_blank" rel="noreferrer"><strong>了解 Mock.js 的语法规范</strong></a></p><h2 id="方式一、-在客户端拦截-ajax-方式" tabindex="-1">方式一、(在客户端拦截 Ajax 方式) <a class="header-anchor" href="#方式一、-在客户端拦截-ajax-方式" aria-label="Permalink to &quot;方式一、(在客户端拦截 Ajax 方式)&quot;">​</a></h2><h3 id="_1-安装mock依赖" tabindex="-1">（1） 安装Mock依赖 <a class="header-anchor" href="#_1-安装mock依赖" aria-label="Permalink to &quot;（1） 安装Mock依赖&quot;">​</a></h3><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码yarn add mockjs --save</span></span></code></pre></div><p><code>Mock.mock(url, template)</code> 拦截 Ajax 请求，并返回数据。 拦截到匹配 <code>url</code> 的 Ajax 请求时，根据数据模板 <code>template</code> 生成模拟数据，并作为响应数据返回。如果未拦截到匹配，则还是走正常的接口调用。</p><h3 id="_2-创建文件" tabindex="-1">（2） 创建文件 <a class="header-anchor" href="#_2-创建文件" aria-label="Permalink to &quot;（2） 创建文件&quot;">​</a></h3><p>根目录src下面创建一个mock下index.js文件文件，mock文件夹与我们的main.ts同级</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1726123994653-25313073-7521-4574-b0b5-a7041b7cba23.webp" alt=""></p><p>下面写一个用户列表接口<code>/user/list</code> 调 API时，先返回一个假数据 mock下index.js文件里面如下</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码var Mock = require(&#39;mockjs&#39;)</span></span>
<span class="line"><span>Mock.mock(&#39;/user/list&#39;, () =&gt; {</span></span>
<span class="line"><span>    return [1, 12, 3, 5, 4, 45];</span></span>
<span class="line"><span>})</span></span></code></pre></div><h3 id="_3-在main-ts里面进行引入" tabindex="-1">（3）在main.ts里面进行引入 <a class="header-anchor" href="#_3-在main-ts里面进行引入" aria-label="Permalink to &quot;（3）在main.ts里面进行引入&quot;">​</a></h3><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码import &#39;./mock/index.js&#39; //引入mock</span></span></code></pre></div><p>这个时候先别着急，我们先启动项目看一下：</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码yarn dev</span></span></code></pre></div><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1726123994666-27c2bd96-8c36-48bd-86ce-dd7ea3b3fbcc.webp" alt=""></p><p>项目启动正常，但是打开我们发现报了个错误：</p><p><code>require is not defined</code></p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1726123994879-eee0ad1a-8f64-4c19-817a-6e3c045d3db4.webp" alt=""></p><h4 id="_1-报错原因" tabindex="-1">1.报错原因 <a class="header-anchor" href="#_1-报错原因" aria-label="Permalink to &quot;1.报错原因&quot;">​</a></h4><p>这是因为vue3使用vite打包 里面没有require方法， webpack 里面有这个方法</p><h4 id="_2-解决方案" tabindex="-1">2.解决方案 <a class="header-anchor" href="#_2-解决方案" aria-label="Permalink to &quot;2.解决方案&quot;">​</a></h4><p>使用import 代替</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码const Mock = require(&#39;mockjs&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>更改为</span></span>
<span class="line"><span>import Mock from &#39;mockjs&#39;</span></span></code></pre></div><p>报错解决！</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1726123994857-dc97c587-cc96-4b58-a1a9-86e07b68f608.webp" alt=""></p><h2 id="方式二、在服务器端返回-mock-node-js-的web-框架-express" tabindex="-1">方式二、在服务器端返回 Mock（Node.js 的Web 框架 Express） <a class="header-anchor" href="#方式二、在服务器端返回-mock-node-js-的web-框架-express" aria-label="Permalink to &quot;方式二、在服务器端返回 Mock（Node.js 的Web 框架 Express）&quot;">​</a></h2><p>已经抽离进入我们的Node系列文章里面-Express的文章里面。</p><p>基于 Node.js 的轻量级 Web 框架 <a href="https://link.juejin.cn/?target=https%3A%2F%2Fexpressjs.com%2F" target="_blank" rel="noreferrer">Express</a></p><h3 id="_1-安装express依赖和mock依赖" tabindex="-1">（1） 安装express依赖和Mock依赖 <a class="header-anchor" href="#_1-安装express依赖和mock依赖" aria-label="Permalink to &quot;（1） 安装express依赖和Mock依赖&quot;">​</a></h3><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码yarn add mockjs --save // 安装Mock依赖</span></span>
<span class="line"><span>yarn add express --save   // 安装使用express框架</span></span></code></pre></div><h3 id="_2-创建文件-1" tabindex="-1">（2） 创建文件 <a class="header-anchor" href="#_2-创建文件-1" aria-label="Permalink to &quot;（2） 创建文件&quot;">​</a></h3><p>根目录下新建app.js文件里面如下</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码console.log(&quot;Hello World林太白&quot;);</span></span></code></pre></div><h3 id="_3-使用node运行" tabindex="-1">（3）使用node运行 <a class="header-anchor" href="#_3-使用node运行" aria-label="Permalink to &quot;（3）使用node运行&quot;">​</a></h3><p>cmd进入根目录</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码node app.js</span></span></code></pre></div><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1726123994912-75ffb763-c6ff-4122-bcbd-ed4d9f38fcb4.webp" alt=""></p><p>模拟接口调用</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码console.log(&quot;Hello World林太白&quot;);</span></span>
<span class="line"><span>// 这是Express的文件夹</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// const express = require(&#39;express&#39;); //webpack使用 vite不能使用</span></span>
<span class="line"><span>import express from &#39;express&#39; // 导入 Mock.js</span></span>
<span class="line"><span>const app = express();</span></span>
<span class="line"><span>app.get(&#39;/&#39;, (req, res) =&gt; {</span></span>
<span class="line"><span>  res.send(&#39;Hello World!8888&#39;);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.listen(8888, () =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;Example app listening on port 8888!&#39;);</span></span>
<span class="line"><span>});</span></span></code></pre></div><p>重新启动</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码node app.js</span></span></code></pre></div><p>访问地址： <a href="https://link.juejin.cn?target=http%3A%2F%2Flocalhost%3A8888%2F" target="_blank" rel="noreferrer">http://localhost:8888/</a></p><p>这个时候我们发现输出结果</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1726123994990-f912460b-fc8e-4a1c-a3cd-474efa839c8c.webp" alt=""></p><p>利用Express模拟数据接口get</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码app.get(&#39;/user/list&#39;, (req, res) =&gt; {</span></span>
<span class="line"><span>    const list = [{</span></span>
<span class="line"><span>            &#39;id&#39;: 1, // id 从 1 开始自增。</span></span>
<span class="line"><span>            &#39;name&#39;: &#39;cname&#39;, // 随机中文名</span></span>
<span class="line"><span>            &#39;date&#39;: &#39;@datetime&#39;, // 随机时间戳</span></span>
<span class="line"><span>            &#39;age&#39;: 1, // 15～25 的随机数</span></span>
<span class="line"><span>            &#39;phone&#39;: &#39;8&#39;,</span></span>
<span class="line"><span>            &#39;address&#39;: &#39;true&#39; // 随机的城市</span></span>
<span class="line"><span>    }]</span></span>
<span class="line"><span>    res.send(list)</span></span>
<span class="line"><span>    return</span></span>
<span class="line"><span>});</span></span></code></pre></div><p>返回结果如下： <img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1726123995075-1a5d696c-4fd9-4dc6-a183-dddba0a7862d.webp" alt=""></p><h2 id="_3、axios使用获取接口" tabindex="-1">3、axios使用获取接口 <a class="header-anchor" href="#_3、axios使用获取接口" aria-label="Permalink to &quot;3、axios使用获取接口&quot;">​</a></h2><p>之前我们已经安装了axios</p><p>去根目录下查看我们package.json 文件是否安装：</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1726123995265-9c37ded7-9715-4060-8247-de2f9bb4f6e2.webp" alt=""></p><p>没有的先安装axios</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码yarn add axios</span></span></code></pre></div><p>添加user文件夹，下面新建index.vue文件</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码结构</span></span>
<span class="line"><span>&lt;div @click=&quot;getUserList&quot;&gt;获取用户&lt;/div&gt;</span></span></code></pre></div><p>引入我们的axios请求：</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span>import {useRouter} from &#39;vue-router&#39;</span></span>
<span class="line"><span>import axios from &#39;axios&#39;</span></span>
<span class="line"><span>const router=useRouter();</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><p>请求接口方法</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码// 获取用户</span></span>
<span class="line"><span>function getUserList(row) {</span></span>
<span class="line"><span>	axios.get(&#39;/user/list&#39;).then(res =&gt; {</span></span>
<span class="line"><span>		console.log(res,&#39;/user/list&#39;)</span></span>
<span class="line"><span>	})</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>点击获取我们的用户接口如图如下：</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1726123995216-3ffd333c-60a1-479c-bfc5-5ac026aa1ba2.webp" alt=""></p><p>我们使用Mock随机返回我们的用户列表数据：</p><h4 id="mockjs文件更改为" tabindex="-1">mockjs文件更改为： <a class="header-anchor" href="#mockjs文件更改为" aria-label="Permalink to &quot;mockjs文件更改为：&quot;">​</a></h4><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码// 用户接口</span></span>
<span class="line"><span>Mock.mock(&#39;/user/list&#39;, () =&gt; {</span></span>
<span class="line"><span>    const userList = Mock.mock({</span></span>
<span class="line"><span>        &#39;list|1-10&#39;: [{</span></span>
<span class="line"><span>          &#39;id|+1&#39;: 1, // id 从 1 开始自增。</span></span>
<span class="line"><span>          &#39;name&#39;: &#39;@cname&#39;, // 随机中文名</span></span>
<span class="line"><span>          &#39;age|15-25&#39;: 1, // 15～25 的随机数</span></span>
<span class="line"><span>          &#39;city&#39;: &#39;@county(true)&#39; // 随机的城市</span></span>
<span class="line"><span>        }]</span></span>
<span class="line"><span>    }).list; // 从生成的数据中获取 list 字段</span></span>
<span class="line"><span>   return userList; // 返回模拟的用户列表数据</span></span>
<span class="line"><span>})</span></span></code></pre></div><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1726123995283-5e46537f-0344-40da-a04b-e69705d3ff89.webp" alt=""></p><h2 id="_4、使用mock尝试实现用户的增删改查" tabindex="-1">4、使用Mock尝试实现用户的增删改查 <a class="header-anchor" href="#_4、使用mock尝试实现用户的增删改查" aria-label="Permalink to &quot;4、使用Mock尝试实现用户的增删改查&quot;">​</a></h2><p>先来搭建一下我们的结构，直接把element-plus的table表格给拉进来看看</p><p>样式部分：在styles文件夹下新建common.css管理我们的公共样式 (样式在main.ts之中引入，由index.css统一控制，这部分可以去源码去看看)</p><h3 id="结构部分" tabindex="-1">结构部分 <a class="header-anchor" href="#结构部分" aria-label="Permalink to &quot;结构部分&quot;">​</a></h3><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码&lt;div class=&quot;comback&quot;&gt;</span></span>
<span class="line"><span>        &lt;div @click=&quot;getUserList&quot;&gt;点击获取用户&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>&lt;div class=&quot;comback&quot;&gt;</span></span>
<span class="line"><span>        &lt;el-table :data=&quot;tableData&quot; stripe style=&quot;width: 100%&quot;&gt;</span></span>
<span class="line"><span>            &lt;el-table-column prop=&quot;date&quot; label=&quot;Date&quot; width=&quot;180&quot; /&gt;</span></span>
<span class="line"><span>            &lt;el-table-column prop=&quot;name&quot; label=&quot;Name&quot; width=&quot;180&quot; /&gt;</span></span>
<span class="line"><span>            &lt;el-table-column prop=&quot;address&quot; label=&quot;Address&quot; /&gt;</span></span>
<span class="line"><span>        &lt;/el-table&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><h3 id="数据和方法" tabindex="-1">数据和方法 <a class="header-anchor" href="#数据和方法" aria-label="Permalink to &quot;数据和方法&quot;">​</a></h3><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span>import {ref} from &#39;vue&#39;</span></span>
<span class="line"><span>import axios from &#39;axios&#39;</span></span>
<span class="line"><span>const router=useRouter();</span></span>
<span class="line"><span>const tableData = ref([])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 获取用户</span></span>
<span class="line"><span>function getUserList(row) {</span></span>
<span class="line"><span>	axios.get(&#39;/user/list&#39;).then(res =&gt; {</span></span>
<span class="line"><span>		console.log(res,&#39;/user/list&#39;);</span></span>
<span class="line"><span>		if(res.status==200){</span></span>
<span class="line"><span>                    tableData.value=res.data;</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	})</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h3 id="mock返回的实现效果" tabindex="-1">Mock返回的实现效果 <a class="header-anchor" href="#mock返回的实现效果" aria-label="Permalink to &quot;Mock返回的实现效果&quot;">​</a></h3><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1726123995324-7d335437-a66b-4eb9-88d3-85391058ea84.webp" alt=""></p><p>到这里我们已经掌握了axios请求和Experss的简单使用！</p><p>作者：林太白<br> 链接：<a href="https://juejin.cn/post/7372454986478239781" target="_blank" rel="noreferrer">https://juejin.cn/post/7372454986478239781</a><br> 来源：稀土掘金<br> 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。</p>`,96),t=[l];function i(c,o,r,d,u,h){return n(),a("div",null,t)}const k=s(e,[["render",i]]);export{g as __pageData,k as default};
