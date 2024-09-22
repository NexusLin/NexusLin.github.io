import{_ as s,c as n,o as a,a4 as p}from"./chunks/framework.DvHWMJgD.js";const b=JSON.parse('{"title":"❤ tailwindcss、登录实现（Vue3系统篇四）","description":"","frontmatter":{},"headers":[],"relativePath":"src/Vue/05-tailwindcss的使用.md","filePath":"src/Vue/05-tailwindcss的使用.md"}'),e={name:"src/Vue/05-tailwindcss的使用.md"},l=p(`<h1 id="❤-tailwindcss、登录实现-vue3系统篇四" tabindex="-1">❤ tailwindcss、登录实现（Vue3系统篇四） <a class="header-anchor" href="#❤-tailwindcss、登录实现-vue3系统篇四" aria-label="Permalink to &quot;❤ tailwindcss、登录实现（Vue3系统篇四）&quot;">​</a></h1><h2 id="_1、tailwindcss的使用" tabindex="-1">1、tailwindcss的使用 <a class="header-anchor" href="#_1、tailwindcss的使用" aria-label="Permalink to &quot;1、tailwindcss的使用&quot;">​</a></h2><p>❤React体系13-tailwindcss的安装和使用 <a href="https://juejin.cn/post/7366848656615243811" target="_blank" rel="noreferrer">juejin.cn/post/736684…</a></p><h3 id="vue之中使用" tabindex="-1">vue之中使用 <a class="header-anchor" href="#vue之中使用" aria-label="Permalink to &quot;vue之中使用&quot;">​</a></h3><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码yarn add tailwindcss</span></span>
<span class="line"><span>npx tailwindcss init</span></span>
<span class="line"><span>yarn add postcss</span></span>
<span class="line"><span>yarn add autoprefixer</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>add -D tailwindcss postcss autoprefixer</span></span></code></pre></div><h3 id="配置tailwind-config-js" tabindex="-1">配置tailwind.config.js <a class="header-anchor" href="#配置tailwind-config-js" aria-label="Permalink to &quot;配置tailwind.config.js&quot;">​</a></h3><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码/** @type {import(&#39;tailwindcss&#39;).Config} */</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  content: [&#39;./index.html&#39;, &#39;./src/**/*.{vue,js,ts,jsx,tsx}&#39;],</span></span>
<span class="line"><span>  theme: {</span></span>
<span class="line"><span>    extend: {},</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  plugins: [],</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="配置postcss-config-js" tabindex="-1">配置<code>postcss.config.js</code> <a class="header-anchor" href="#配置postcss-config-js" aria-label="Permalink to &quot;配置\`postcss.config.js\`&quot;">​</a></h3><p>在项目根目录下创建或编辑 <code>postcss.config.js</code> 文件，并添加 Tailwind CSS 插件</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码module.exports = {</span></span>
<span class="line"><span>  plugins: [</span></span>
<span class="line"><span>    require(&#39;tailwindcss&#39;),</span></span>
<span class="line"><span>    require(&#39;autoprefixer&#39;),</span></span>
<span class="line"><span>    // 其他 PostCSS 插件</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="踩坑一" tabindex="-1"><strong>踩坑一：</strong> <a class="header-anchor" href="#踩坑一" aria-label="Permalink to &quot;**踩坑一：**&quot;">​</a></h3><p>如果项目中单独引入了全局样式文件，那么上面创建的tailwind.css文件在引入时务必放在全局样式文件上面，否者Tailwindcss不会生效。如下： <img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1726124050332-c98a9f39-6a1f-46d1-9dbb-52f345c71d94.webp" alt=""></p><h3 id="踩坑二-vite-config-ts增加配置" tabindex="-1"><strong>踩坑二：</strong> vite.config.ts增加配置 <a class="header-anchor" href="#踩坑二-vite-config-ts增加配置" aria-label="Permalink to &quot;**踩坑二：** vite.config.ts增加配置&quot;">​</a></h3><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码import tailwindcss from &#39;tailwindcss&#39;</span></span>
<span class="line"><span>import autoprefixer from &#39;autoprefixer&#39;</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>export default defineConfig({</span></span>
<span class="line"><span>    css: {</span></span>
<span class="line"><span>      postcss: {</span></span>
<span class="line"><span>        plugins: [tailwindcss, autoprefixer],</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>})</span></span></code></pre></div><h2 id="_3、登录页面的搭建" tabindex="-1">3、登录页面的搭建 <a class="header-anchor" href="#_3、登录页面的搭建" aria-label="Permalink to &quot;3、登录页面的搭建&quot;">​</a></h2><p>接下来我们简单搭建一下vite+vue3这部分的登录页面并实现功能</p><p>在我们的文件夹下面简单的搭建一下我们的路由<code>NexusVue\\src\\router</code></p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码import { createRouter, createWebHistory, RouteRecordRaw ,createWebHashHistory} from &quot;vue-router&quot;; // 导入路由</span></span>
<span class="line"><span>// 1. 配置路由  lintaibai--进来时候的初始页面</span></span>
<span class="line"><span>const routes = [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        path: &quot;/&quot;, // 默认路由 home页面</span></span>
<span class="line"><span>        name: &#39;/&#39;,</span></span>
<span class="line"><span>        component: () =&gt; import(&#39;@/views/lintaibai.vue&#39;),</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        path: &quot;/login&quot;, // 默认路由 home页面</span></span>
<span class="line"><span>        name: &#39;login&#39;,</span></span>
<span class="line"><span>        component: () =&gt; import(&#39;@/views/admin/login.vue&#39;),</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>];</span></span>
<span class="line"><span>// 2.返回一个 router 实列，为函数，配置 history 模式</span></span>
<span class="line"><span>const router = createRouter({</span></span>
<span class="line"><span>    history: createWebHistory(), //createWebHashHistory</span></span>
<span class="line"><span>    routes,</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 3.导出路由   去 main.ts 注册 router.ts</span></span>
<span class="line"><span>export default router</span></span></code></pre></div><p>搭建一下我们的登录页面</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1726124050294-50279d7a-f32c-45da-a35b-611c9f4de9e9.webp" alt=""></p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码// 处理表单提交的函数</span></span>
<span class="line"><span>    const handleSubmit = async (event) =&gt; {</span></span>
<span class="line"><span>        event.preventDefault();</span></span>
<span class="line"><span>        // 在实际应用中，这里可以发送注册请求到服务器进行用户注册</span></span>
<span class="line"><span>        // 这里简单地假设密码和确认密码相同才能注册成功</span></span>
<span class="line"><span>        if (form.value.username === &#39;&#39; || form.value.password === &#39;&#39;) {</span></span>
<span class="line"><span>            return;</span></span>
<span class="line"><span>        }else{</span></span>
<span class="line"><span>            console.log(form.value, &#39;form.value&#39;);</span></span>
<span class="line"><span>            try {</span></span>
<span class="line"><span>                const res:any = await login(form.value);</span></span>
<span class="line"><span>              </span></span>
<span class="line"><span>                console.log(res,&#39;res&#39;);</span></span>
<span class="line"><span>                </span></span>
<span class="line"><span>                if(res.code==200){</span></span>
<span class="line"><span>                }else{</span></span>
<span class="line"><span>                    // message.error(res.message);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            } catch (error) {</span></span>
<span class="line"><span>                console.log(&#39;获取数据详情失败，请重试！&#39;,error);</span></span>
<span class="line"><span>            } finally {</span></span>
<span class="line"><span>                console.log(&#39;完！&#39;);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    };</span></span></code></pre></div><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1726124050335-f74cf935-a2b3-43ba-81b8-f9b41fa6f5c4.webp" alt=""></p><p>这里我们检查一下，登录页面已经完成了！</p><h2 id="_4、使用js-cookie" tabindex="-1">4、使用js-cookie <a class="header-anchor" href="#_4、使用js-cookie" aria-label="Permalink to &quot;4、使用js-cookie&quot;">​</a></h2><p>使用本地的cookie来存储我们的token信息，一般我们会使用js-cookie</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码yarn add js-cookie</span></span></code></pre></div><p>手写NexusVue\\src\\utils</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码import Cookies from &#39;js-cookie&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const TokenKey = &#39;Admin-Token&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export function getToken() {</span></span>
<span class="line"><span>  return Cookies.get(TokenKey)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export function setToken(token) {</span></span>
<span class="line"><span>  return Cookies.set(TokenKey, token)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export function removeToken() {</span></span>
<span class="line"><span>  return Cookies.remove(TokenKey)</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_5、pinia的安装和使用" tabindex="-1">5、Pinia的安装和使用 <a class="header-anchor" href="#_5、pinia的安装和使用" aria-label="Permalink to &quot;5、Pinia的安装和使用&quot;">​</a></h2><h3 id="_5-1-pinia是什么-这部分后面会进行额外细致讲解" tabindex="-1">5-1 Pinia是什么（这部分后面会进行额外细致讲解） <a class="header-anchor" href="#_5-1-pinia是什么-这部分后面会进行额外细致讲解" aria-label="Permalink to &quot;5-1 Pinia是什么（这部分后面会进行额外细致讲解）&quot;">​</a></h3><p>Pinia 是一个为 Vue 3 设计的状态管理库，vue3建议使用pinia代替vuex进行状态管理。</p><p>理念上我觉得是对组合式API的扩展和衍生：</p><p>组合式API（Composable API）是一种设计和构建API的方式，思想就是让不同的API端的点和功能可以像积木一样组合，实现更复杂和定制化的功能。主要强调的其实是模块化、复用性、灵活性。</p><p>组合式API核心思想：</p><ol><li><strong>模块化设计</strong>：API被设计成独立的、可复用的模块，每个模块提供特定的功能或资源。低耦合度。</li><li><strong>高内聚低耦合</strong>：每个API模块分管不同单一性功能，高度内聚。</li><li><strong>灵活组合</strong>：开发者可以根据需求组合这些模块，从而构建出新的功能。这种组合可以是静态的（编写代码时确定）或者动态的（运行时确定）。</li><li><strong>标准接口</strong>：定义一些标准化的接口和协议确保模块顺利组合。这些标准化接口使模块之间不需要了解对方的内部实现细节。</li><li><strong>扩展性和可维护性</strong>：由于组合式API的模块化设计，添加新功能或修改现有功能风险更小。提高了系统的可扩展性和可维护性。</li></ol><h3 id="_5-2安装" tabindex="-1">5-2安装 <a class="header-anchor" href="#_5-2安装" aria-label="Permalink to &quot;5-2安装&quot;">​</a></h3><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码yarn add pinia</span></span></code></pre></div><h3 id="_5-3-使用" tabindex="-1">5-3 使用 <a class="header-anchor" href="#_5-3-使用" aria-label="Permalink to &quot;5-3 使用&quot;">​</a></h3><p>创建一个 store，例如 <code>counterStore</code></p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码// src/stores/counterStore.js</span></span>
<span class="line"><span>import { defineStore } from &#39;pinia&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const useCounterStore = defineStore(&#39;counter&#39;, {</span></span>
<span class="line"><span>  state: () =&gt; ({</span></span>
<span class="line"><span>    count: 0,</span></span>
<span class="line"><span>  }),</span></span>
<span class="line"><span>  actions: {</span></span>
<span class="line"><span>    increment() {</span></span>
<span class="line"><span>      this.count++;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    decrement() {</span></span>
<span class="line"><span>      this.count--;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>});</span></span></code></pre></div><p>在需要使用 store 的组件中导入并使用它</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;p&gt;Count: {{ counterStore.count }}&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;button @click=&quot;counterStore.increment()&quot;&gt;Increment&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;button @click=&quot;counterStore.decrement()&quot;&gt;Decrement&lt;/button&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import { useCounterStore } from &#39;@/stores/counterStore&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  setup() {</span></span>
<span class="line"><span>    const counterStore = useCounterStore();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return { counterStore };</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><p>作者：林太白<br> 链接：<a href="https://juejin.cn/post/7379059228106309684" target="_blank" rel="noreferrer">https://juejin.cn/post/7379059228106309684</a><br> 来源：稀土掘金<br> 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。</p>`,43),i=[l];function t(c,o,r,d,u,h){return a(),n("div",null,i)}const m=s(e,[["render",t]]);export{b as __pageData,m as default};
