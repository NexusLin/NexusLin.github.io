import{_ as s,c as a,o as n,a4 as p}from"./chunks/framework.DvHWMJgD.js";const v=JSON.parse('{"title":"❤ Vue3+vite配置（Vue3系统篇五）","description":"","frontmatter":{},"headers":[],"relativePath":"src/vue/06-Vue3项目配置.md","filePath":"src/vue/06-Vue3项目配置.md"}'),e={name:"src/vue/06-Vue3项目配置.md"},l=p(`<h1 id="❤-vue3-vite配置-vue3系统篇五" tabindex="-1">❤ Vue3+vite配置（Vue3系统篇五） <a class="header-anchor" href="#❤-vue3-vite配置-vue3系统篇五" aria-label="Permalink to &quot;❤ Vue3+vite配置（Vue3系统篇五）&quot;">​</a></h1><h2 id="_1、配置环境变量-开发环境和生产环境" tabindex="-1">1、配置环境变量（开发环境和生产环境） <a class="header-anchor" href="#_1、配置环境变量-开发环境和生产环境" aria-label="Permalink to &quot;1、配置环境变量（开发环境和生产环境）&quot;">​</a></h2><h3 id="_1-配置" tabindex="-1">（1） 配置 <a class="header-anchor" href="#_1-配置" aria-label="Permalink to &quot;（1） 配置&quot;">​</a></h3><p>通常来说，不同的环境会有不同的请求api接口，这就需要修改配置，才能满足对应的环境。所以这里就使用了环境变量。环境变量就是在不同的环境中使用不同的变量值</p><p>环境变量文件(.env) 在项目根目录（和src同级）中创建三个文件：</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1727057906873-7293a58e-87b2-43b7-b832-3a9c2a88786b.webp" alt=""></p><p>注意：在vite构建工具下配置,就得使用VITE的前缀名</p><p>.env.development</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码#【开发环境】</span></span>
<span class="line"><span>NODE_ENV = &#39;development&#39;</span></span>
<span class="line"><span>VITE_APP_BASE_API = &#39;你的地址&#39;</span></span></code></pre></div><p>.env.staging</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码# 【测试环境】</span></span>
<span class="line"><span>NODE_ENV = &#39;staging&#39;</span></span>
<span class="line"><span>VITE_APP_BASE_API = &#39;你的地址&#39;</span></span></code></pre></div><p>.env.production</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码# 【生产环境】</span></span>
<span class="line"><span>NODE_ENV = &#39;production&#39; //李敏啊</span></span>
<span class="line"><span>VITE_API_BASE_URL = &#39;你的地址&#39;</span></span></code></pre></div><h3 id="_2-环境变量定义与获取" tabindex="-1">（2）环境变量定义与获取 <a class="header-anchor" href="#_2-环境变量定义与获取" aria-label="Permalink to &quot;（2）环境变量定义与获取&quot;">​</a></h3><p>webpack下环境获取是这样子：</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码process.env.VUE_APP_API_BASE_URL</span></span></code></pre></div><p>vite下更改为</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码import.meta.env.VITE_API_BASE_URL</span></span></code></pre></div><p>接下来我们去vite.config.js中自定义环境变量前缀及获取环境变量的配置</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码import { defineConfig, loadEnv } from &quot;vite&quot;;</span></span>
<span class="line"><span>import vue from &quot;@vitejs/plugin-vue&quot;;</span></span>
<span class="line"><span>const { resolve } = require(&quot;path&quot;);</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>export default defineConfig(({command, mode }) =&gt; {</span></span>
<span class="line"><span>    const env = loadEnv(mode, process.cwd())</span></span>
<span class="line"><span>    console.log(env.VITE_APP_BASE_API) // 获取环境变量</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>        plugins: [vue()],</span></span>
<span class="line"><span>        envPrefix:  [&#39;VITE&#39;, &#39;VUE&#39;],   </span></span>
<span class="line"><span>        // 环境变量前缀,默认只会暴露VITE开头变量，定义后可暴露VUE开头变量</span></span>
<span class="line"><span>        define: {</span></span>
<span class="line"><span>            &#39;process.env.VITE_APP_BASE_API&#39;:JSON.stringify(env.VITE_APP_BASE_API),</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>package.json多环境配置，这部分我们在<code>package.json</code>进行配置即可</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码  &quot;scripts&quot;: { </span></span>
<span class="line"><span>       &quot;dev&quot;: &quot;vite&quot;,            // 开发环境</span></span>
<span class="line"><span>       &quot;serve&quot;: &quot;vite preview&quot;,  // 本地预览</span></span>
<span class="line"><span>       &quot;staging&quot;: &quot;vite build --mode staging&quot;,  // 测试环境打包</span></span>
<span class="line"><span>       &quot;build&quot;: &quot;vite build&quot;,    // 生产环境打包</span></span>
<span class="line"><span>   },</span></span></code></pre></div><h2 id="_2、vite配置公共引用路径" tabindex="-1">2、Vite配置公共引用路径@ <a class="header-anchor" href="#_2、vite配置公共引用路径" aria-label="Permalink to &quot;2、Vite配置公共引用路径@&quot;">​</a></h2><h3 id="_1-引入路径和定位跟目录" tabindex="-1">（1）引入路径和定位跟目录 <a class="header-anchor" href="#_1-引入路径和定位跟目录" aria-label="Permalink to &quot;（1）引入路径和定位跟目录&quot;">​</a></h3><p>打开vite.config.ts配置</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码import path from &#39;path&#39;</span></span>
<span class="line"><span>resolve: {</span></span>
<span class="line"><span>        alias: {</span></span>
<span class="line"><span>            &#39;@&#39;: path.resolve(__dirname, &#39;src&#39;)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>  },</span></span></code></pre></div><h3 id="_2-vite-config-ts完整如下" tabindex="-1">（2）vite.config.ts完整如下 <a class="header-anchor" href="#_2-vite-config-ts完整如下" aria-label="Permalink to &quot;（2）vite.config.ts完整如下&quot;">​</a></h3><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码import { defineConfig } from &#39;vite&#39;</span></span>
<span class="line"><span>import vue from &#39;@vitejs/plugin-vue&#39;</span></span>
<span class="line"><span>import path from &#39;path&#39;</span></span>
<span class="line"><span>// https://vitejs.dev/config/</span></span>
<span class="line"><span>export default defineConfig({</span></span>
<span class="line"><span>  plugins: [vue()],</span></span>
<span class="line"><span>  resolve: {</span></span>
<span class="line"><span>        alias: {</span></span>
<span class="line"><span>            &#39;@&#39;: path.resolve(__dirname, &#39;src&#39;)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>})</span></span></code></pre></div><h2 id="_3、配置vite跨域以及接口" tabindex="-1">3、配置Vite跨域以及接口 <a class="header-anchor" href="#_3、配置vite跨域以及接口" aria-label="Permalink to &quot;3、配置Vite跨域以及接口&quot;">​</a></h2><p>Vite 配置代理 Proxy，解决跨域</p><p>首先我们先把接口的全局给放入一个公告的文件夹下面进行使用 在utils下面新建一个文件config.js，接下来公共参数放入这个里面 <code>config.js</code> 然后更改一下我们的<code> vite.config.js</code> 这个文件</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码// vite.config.js</span></span>
<span class="line"><span> </span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { defineConfig } from &#39;vite&#39;</span></span>
<span class="line"><span>import vue from &#39;@vitejs/plugin-vue&#39;</span></span>
<span class="line"><span>import path from &#39;path&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// vite 相关配置</span></span>
<span class="line"><span>export default defineConfig({</span></span>
<span class="line"><span>    server: {</span></span>
<span class="line"><span>        host: true, //host设置为true才可以使用network的形式，以ip访问项目</span></span>
<span class="line"><span>        port: 8808, // 端口号</span></span>
<span class="line"><span>        https: false,</span></span>
<span class="line"><span>        open: false, //  true 自动打开浏览器自动打开浏览器</span></span>
<span class="line"><span>        cors: true, // 跨域设置允许</span></span>
<span class="line"><span>        strictPort: true,  // 如果端口已占用直接退出</span></span>
<span class="line"><span>        proxy: {</span></span>
<span class="line"><span>            &#39;/edu-pc&#39;: {</span></span>
<span class="line"><span>                target: &#39;http://要链接的后台地址&#39;, //线上版本</span></span>
<span class="line"><span>                changeOrigin: true,</span></span>
<span class="line"><span>                rewrite: (path) =&gt; path.replace(/^\\/接口统一前缀/, &#39;/接口统一前缀c&#39;)</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    plugins: [</span></span>
<span class="line"><span>        vue(),</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    resolve: {</span></span>
<span class="line"><span>        alias: {</span></span>
<span class="line"><span>            &#39;@&#39;: path.resolve(__dirname, &#39;src&#39;)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>})</span></span></code></pre></div><h2 id="_4、打包以及发布" tabindex="-1">4、打包以及发布 <a class="header-anchor" href="#_4、打包以及发布" aria-label="Permalink to &quot;4、打包以及发布&quot;">​</a></h2><p>配置打包发布 <img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1727057906815-c09d75b2-3389-4c26-b141-c898f2aabec6.webp" alt=""></p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码打包</span></span>
<span class="line"><span>yarn build</span></span>
<span class="line"><span></span></span>
<span class="line"><span>预览</span></span>
<span class="line"><span>yarn run preview</span></span></code></pre></div><p>修改提交内容包含打包好的文件 在 .gitignore文件中把dist删掉或者注释掉，才能上传dist文件（打包好的文件）到远程仓库</p><p>选择部署的分支dist <img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1727057906840-4c8018cb-4c96-408a-938d-8f7a762cc69e.webp" alt=""> 已开启 Gitee Pages 服务，网站地址： <a href="https://link.juejin.cn?target=http%3A%2F%2Flourance.gitee.io%2Fltbvue" target="_blank" rel="noreferrer">lourance.gitee.io/ltbvue</a></p><p>进行中...</p><h2 id="_5、生产环境打包上线的时候去掉console-log" tabindex="-1">5、生产环境打包上线的时候去掉console.log() <a class="header-anchor" href="#_5、生产环境打包上线的时候去掉console-log" aria-label="Permalink to &quot;5、生产环境打包上线的时候去掉console.log()&quot;">​</a></h2><p>有时候我们需要在上线的时候去掉自己写的console.log()，这里非常简单，在src=&gt; main.js里面配置一下即可</p><h3 id="之前的vue2里面我们采用的方式如下" tabindex="-1">之前的vue2里面我们采用的方式如下： <a class="header-anchor" href="#之前的vue2里面我们采用的方式如下" aria-label="Permalink to &quot;之前的vue2里面我们采用的方式如下：&quot;">​</a></h3><p>直接上我们手写的部分</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码// 生产环境production  去除console.log()</span></span>
<span class="line"><span>if (process.env.NODE_ENV === &#39;production&#39;) {</span></span>
<span class="line"><span>  console.log = () =&gt; {}</span></span>
<span class="line"><span>  console.warn = () =&gt; {}</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_6、-其他-项目非必需" tabindex="-1">6、（其他 ）项目非必需 <a class="header-anchor" href="#_6、-其他-项目非必需" aria-label="Permalink to &quot;6、（其他 ）项目非必需&quot;">​</a></h2><h3 id="添加husky" tabindex="-1">添加husky <a class="header-anchor" href="#添加husky" aria-label="Permalink to &quot;添加husky&quot;">​</a></h3><p>husky 是一个 Git Hook 工具。主要实现提交前 eslint 校验和 commit 信息的规范校验，也可以避免多人合作时代码格式化不统一造成的冲突；</p><p>1.安装 husky，lint-staged</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码npm i -D husky lint-staged</span></span></code></pre></div><p>2.在package.json中新增如下配置</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码{</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>  &quot;scripts&quot;: {</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;husky&quot;: {</span></span>
<span class="line"><span>    &quot;hooks&quot;: {</span></span>
<span class="line"><span>      &quot;pre-commit&quot;: &quot;lint-staged&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;lint-staged&quot;: {</span></span>
<span class="line"><span>    &quot;*.{js,json,md}&quot;: [</span></span>
<span class="line"><span>      &quot;prettier --write&quot;,</span></span>
<span class="line"><span>      &quot;git add&quot;</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;dependencies&quot;: {</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;devDependencies&quot;: {</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;engines&quot;: {</span></span>
<span class="line"><span>    &quot;node&quot;: &quot;&gt;=8.9&quot;,</span></span>
<span class="line"><span>    &quot;npm&quot;: &quot;&gt;= 3.0.0&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;browserslist&quot;: [</span></span>
<span class="line"><span>    &quot;&gt; 1%&quot;,</span></span>
<span class="line"><span>    &quot;last 2 versions&quot;</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_7、vue中嵌入html页面并相互通信" tabindex="-1">7、Vue中嵌入html页面并相互通信 <a class="header-anchor" href="#_7、vue中嵌入html页面并相互通信" aria-label="Permalink to &quot;7、Vue中嵌入html页面并相互通信&quot;">​</a></h2><p>在之前我们的项目之中有一个需求，这里我们也简单给介绍一下如何进行使用，就是在不同的html界面或者iframe界面之间进行通讯。</p><p>html的页面是单独的一个服务，有自己独立的端口地址 可以通过将src中修改需要展示的页面地址，这样做的好处是vue与iframe之间不需要通信，与后端的通信可以直接通过js发请求与后端进行交互</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码（1）</span></span>
<span class="line"><span>&lt;iframe src=&quot;http://127.0.0.1:8081/demo31.html&quot;  width=&quot;100%&quot; height=&quot;800px&quot; scrolling=&quot;auto&quot;&gt;&lt;/iframe&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>（2）</span></span>
<span class="line"><span> &lt;iframe src=&quot;/static/gantt/test.html&quot; ref=&quot;iframe&quot; width=&quot;100%&quot; height=&quot;900px&quot; scrolling=&quot;no&quot;&gt;&lt;/iframe&gt;</span></span></code></pre></div>`,54),i=[l];function t(c,o,u,r,d,h){return n(),a("div",null,i)}const b=s(e,[["render",t]]);export{v as __pageData,b as default};
