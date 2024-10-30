import{_ as s,c as n,o as a,a4 as p}from"./chunks/framework.DvHWMJgD.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"src/vue/11-axios的使用和封装.md","filePath":"src/vue/11-axios的使用和封装.md"}'),e={name:"src/vue/11-axios的使用和封装.md"},l=p(`<h2 id="❤-axios的使用和封装-vue3系统篇九" tabindex="-1">❤ axios的使用和封装（Vue3系统篇九） <a class="header-anchor" href="#❤-axios的使用和封装-vue3系统篇九" aria-label="Permalink to &quot;❤ axios的使用和封装（Vue3系统篇九）&quot;">​</a></h2><p>之前我们已经介绍过关于axios的请求和使用，本篇主要是对于vue3之中axios的一些用法进行完善</p><p>axios的使用和封装可以直接参考这两篇文章：</p><p>❤React体系16-axios的封装使用（以用户请求为例） <a href="https://juejin.cn/post/7368375416929026100?searchId=20240611160656AD8B13888EF377D46986#heading-6" target="_blank" rel="noreferrer">juejin.cn/post/736837…</a></p><p>❤ axios的认识和使用 <a href="https://juejin.cn/post/7196227448286543909?searchId=20240611161116FD7B48AA77503AD4A88C" target="_blank" rel="noreferrer">juejin.cn/post/719622…</a></p><p>在整个操作上基本都是一模一样的，使用上我们这里直接实战使用</p><h3 id="_1、安装axios" tabindex="-1">1、安装axios <a class="header-anchor" href="#_1、安装axios" aria-label="Permalink to &quot;1、安装axios&quot;">​</a></h3><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码yarn add axios</span></span></code></pre></div><p>安装成功以后在我们的package.json文件夹下面可以看到我们的版本</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1727259324108-c837afcd-7469-4e11-bee0-5f1156c4187f.webp" alt=""></p><h3 id="_2、封装axios请求request-js文件" tabindex="-1">2、封装axios请求request.js文件 <a class="header-anchor" href="#_2、封装axios请求request-js文件" aria-label="Permalink to &quot;2、封装axios请求request.js文件&quot;">​</a></h3><p>在src下的utils工具类里面新建request.js文件准备封装axios请求</p><p>我本地的后台接口地址是：&#39;<a href="https://link.juejin.cn?target=http%3A%2F%2Flocalhost%3A8888" target="_blank" rel="noreferrer">http://localhost:8888</a>&#39;</p><p>接下来我们简单封装一下request.js文件</p><p>// request.js</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码</span></span>
<span class="line"><span>import axios from &#39;axios&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const service = axios.create({</span></span>
<span class="line"><span>  baseURL: &#39;http://localhost:8888&#39;, // 设置基础 URL，根据实际情况修改 &#39;/接口前缀&#39;, //import.meta.env.VITE_BASE_URL</span></span>
<span class="line"><span>  headers: { &#39;Content-Type&#39;: &#39;application/json;charset=utf-8&#39;, },</span></span>
<span class="line"><span>  timeout: 5000, // 设置请求超时时间</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 请求拦截器</span></span>
<span class="line"><span>service.interceptors.request.use(</span></span>
<span class="line"><span>  (config) =&gt; {</span></span>
<span class="line"><span>    // 在请求发送之前做一些处理，例如添加 token 等</span></span>
<span class="line"><span>    return config;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  (error) =&gt; {</span></span>
<span class="line"><span>    return Promise.reject(error);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 响应拦截器</span></span>
<span class="line"><span>service.interceptors.response.use(</span></span>
<span class="line"><span>  (response) =&gt; {</span></span>
<span class="line"><span>    // 在响应数据返回之前做一些处理</span></span>
<span class="line"><span>    return response.data;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  (error) =&gt; {</span></span>
<span class="line"><span>    return Promise.reject(error);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span>export default service;</span></span></code></pre></div><h3 id="_3、使用请求接口文件api部分" tabindex="-1">3、使用请求接口文件<code>api</code>部分 <a class="header-anchor" href="#_3、使用请求接口文件api部分" aria-label="Permalink to &quot;3、使用请求接口文件\`api\`部分&quot;">​</a></h3><p>在src下的api接口类里面新建common下common.js文件放接口请求，这个里面放一些公开的接口</p><h4 id="common-js-里面方法和请求" tabindex="-1">common.js 里面方法和请求 <a class="header-anchor" href="#common-js-里面方法和请求" aria-label="Permalink to &quot;common.js 里面方法和请求&quot;">​</a></h4><ul><li>get请求</li></ul><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码import request from &#39;@/utils/request.js&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 获取网站信息</span></span>
<span class="line"><span>export function getqueryWebInfo(params) {</span></span>
<span class="line"><span>    return request({</span></span>
<span class="line"><span>        url: &#39;/你的接口地址&#39;,</span></span>
<span class="line"><span>        method: &#39;get&#39;,</span></span>
<span class="line"><span>        params</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>post请求</li></ul><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码import request from &#39;@/utils/request.js&#39;</span></span>
<span class="line"><span>export function addUser (query) {</span></span>
<span class="line"><span>  return request({</span></span>
<span class="line"><span>    url: &#39;/user/updateUser&#39;,</span></span>
<span class="line"><span>    method: &#39;post&#39;,</span></span>
<span class="line"><span>    data: query,</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>put请求</li></ul><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码import request from &#39;@/utils/request.js&#39;</span></span>
<span class="line"><span>export function editUser(n) {</span></span>
<span class="line"><span>    return request({</span></span>
<span class="line"><span>            url: &#39;/api/user&#39;,</span></span>
<span class="line"><span>            method: &#39;put&#39;,</span></span>
<span class="line"><span>            data:n</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>DELETE请求</li></ul><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码export function removerUser (n) {</span></span>
<span class="line"><span>  return request({</span></span>
<span class="line"><span>    url: &#39;/system/user/&#39;+ n,</span></span>
<span class="line"><span>    method: &#39;DELETE&#39;,</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_4、项目之中使用api接口请求方法" tabindex="-1">4、项目之中使用api接口请求方法 <a class="header-anchor" href="#_4、项目之中使用api接口请求方法" aria-label="Permalink to &quot;4、项目之中使用api接口请求方法&quot;">​</a></h3><p>接下来我们简单请求一下我们的方法</p><p>引入接口,请求方法</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码import { getUser } from &#39;@/api/common/comon&#39;;</span></span>
<span class="line"><span>// 获取用户</span></span>
<span class="line"><span>const  getUserList = () =&gt;{</span></span>
<span class="line"><span>  let api = &quot;http://localhost:8888/api/user&quot;;</span></span>
<span class="line"><span>  getUser().then(res =&gt; {</span></span>
<span class="line"><span>    console.log(res, &#39;getUser&#39;);</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>可以看到我们已经成功添加并且对于接口进行了请求并正确返回结果！</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1727259324150-7a9f5ca0-982c-4cca-b823-cbc257a1b6ba.webp" alt=""></p><h4 id="传送多个参数" tabindex="-1">传送多个参数 <a class="header-anchor" href="#传送多个参数" aria-label="Permalink to &quot;传送多个参数&quot;">​</a></h4><p>如何传递多个参数呢，get方法，我们通过params的方法查询</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码import request from &#39;@/utils/request.js&#39;</span></span>
<span class="line"><span>// 获取网站信息</span></span>
<span class="line"><span>export function getUser(params) {</span></span>
<span class="line"><span>    return request({</span></span>
<span class="line"><span>        url: &#39;/你的接口地址&#39;,</span></span>
<span class="line"><span>        method: &#39;get&#39;,</span></span>
<span class="line"><span>        params, // params:params,的缩略写法</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>然后页面之中进行导入使用</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码import { getUser } from &#39;@/api/common/comon&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 获取用户</span></span>
<span class="line"><span>const  getUserList = () =&gt;{</span></span>
<span class="line"><span>  let api = &quot;http://localhost:8888/api/user&quot;;</span></span>
<span class="line"><span>  let params={id:1,name:&#39;wang&#39;};</span></span>
<span class="line"><span>  getUser(params).then(res =&gt; {</span></span>
<span class="line"><span>    console.log(res, &#39;getUser&#39;);</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_5、进一步封装和使用request-js文件" tabindex="-1">5、进一步封装和使用request.js文件 <a class="header-anchor" href="#_5、进一步封装和使用request-js文件" aria-label="Permalink to &quot;5、进一步封装和使用request.js文件&quot;">​</a></h3><p>上面的封装我们只是针对接口进行了一个简单的封装，接下来我们完善一下</p><h4 id="_1-针对接口权限校验做token" tabindex="-1">（1）针对接口权限校验做token <a class="header-anchor" href="#_1-针对接口权限校验做token" aria-label="Permalink to &quot;（1）针对接口权限校验做token&quot;">​</a></h4><p>在我们的项目之中一部分接口需要进行权限校验，那么校验的方式是什么呢？就是token，所以我们就需要针对这部分接口添加token，便于进行访问(这个时候我们就需要操作请求拦截器来对于需要token的接口进行拦截，然后进行判断):</p><p>引入我们的权限判断： 这个auth是授权文件，主要是对于cookie的操作，可以直接去这里复制</p><p><a href="https://juejin.cn/post/7401824176229531682" target="_blank" rel="noreferrer">juejin.cn/post/740182…</a></p><p><strong>验证token</strong></p><p>👉现在我们现在的请求部分request.js文件，依然是一个非常简单的封装,接下来这里我们主要是对于token赋值头部的操作：</p><ul><li>先看看我们对于请求拦截器的操作</li></ul><p>思考:在有token的时候就添加token，不需要的时候不添加</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码import { getToken } from &#39;@/utils/auth&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 请求拦截器</span></span>
<span class="line"><span>service.interceptors.request.use(</span></span>
<span class="line"><span>  (config) =&gt; {</span></span>
<span class="line"><span>    const token = getToken();</span></span>
<span class="line"><span>    if(getToken()&amp;&amp; 需要token ){</span></span>
<span class="line"><span>      config.headers.Authorization = \`Bearer \${token}\`;</span></span>
<span class="line"><span>    }else{</span></span>
<span class="line"><span>      console.log(&#39;不授权token&#39;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 在请求发送之前做一些处理，例如添加 token 等</span></span>
<span class="line"><span>    return config;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  (error) =&gt; {</span></span>
<span class="line"><span>    return Promise.reject(error);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>);</span></span></code></pre></div><h4 id="_2-针对接口权限做接口白名单" tabindex="-1">（2）针对接口权限做接口白名单 <a class="header-anchor" href="#_2-针对接口权限做接口白名单" aria-label="Permalink to &quot;（2）针对接口权限做接口白名单&quot;">​</a></h4><p>什么情况下需要token呢？这个时候我们就需要一个接口白名单，在白名单之中的接口就不需要token，反之则需要token</p><p>然后我们的接口权限部分就可以更改为</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码// 白名单接口列表，即不需要进行验证的接口路径</span></span>
<span class="line"><span>const whiteapilist = [</span></span>
<span class="line"><span>  &#39;/api/login&#39;,</span></span>
<span class="line"><span>  &#39;/api/register&#39;,</span></span>
<span class="line"><span>];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 请求拦截器</span></span>
<span class="line"><span>service.interceptors.request.use(</span></span>
<span class="line"><span>  (config) =&gt; {</span></span>
<span class="line"><span>    const token = getToken(); //token</span></span>
<span class="line"><span>    const requestPath = config.url;  //请求地址</span></span>
<span class="line"><span>    const isToken = whiteapilist.includes(requestPath); //是否在接口白名单中</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if(getToken()){</span></span>
<span class="line"><span>      config.headers.Authorization = \`Bearer \${token}\`;</span></span>
<span class="line"><span>    }else if(isToken){</span></span>
<span class="line"><span>      console.log(&#39;不授权token&#39;);</span></span>
<span class="line"><span>    }else{</span></span>
<span class="line"><span>      console.log(&#39;其他操作&#39;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 在请求发送之前做一些处理，例如添加 token 等</span></span>
<span class="line"><span>    return config;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  (error) =&gt; {</span></span>
<span class="line"><span>    return Promise.reject(error);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>);</span></span></code></pre></div><p>作者：林太白<br> 链接：<a href="https://juejin.cn/post/7402248792286543906" target="_blank" rel="noreferrer">https://juejin.cn/post/7402248792286543906</a><br> 来源：稀土掘金<br> 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。</p>`,54),i=[l];function t(c,o,r,u,h,d){return a(),n("div",null,i)}const b=s(e,[["render",t]]);export{m as __pageData,b as default};
