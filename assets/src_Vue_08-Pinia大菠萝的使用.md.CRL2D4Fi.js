import{_ as s,c as n,o as a,a4 as p}from"./chunks/framework.DvHWMJgD.js";const m=JSON.parse('{"title":"❤ pinia的使用（Vue3系统篇八Pinia大菠萝）","description":"","frontmatter":{},"headers":[],"relativePath":"src/Vue/08-Pinia大菠萝的使用.md","filePath":"src/Vue/08-Pinia大菠萝的使用.md"}'),e={name:"src/Vue/08-Pinia大菠萝的使用.md"},l=p(`<h1 id="❤-pinia的使用-vue3系统篇八pinia大菠萝" tabindex="-1">❤ pinia的使用（Vue3系统篇八Pinia大菠萝） <a class="header-anchor" href="#❤-pinia的使用-vue3系统篇八pinia大菠萝" aria-label="Permalink to &quot;❤ pinia的使用（Vue3系统篇八Pinia大菠萝）&quot;">​</a></h1><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1727259224822-053d742b-7b8c-424b-a924-3d4bfcfb9a3b.webp" alt=""></p><h2 id="_1、pinia简介" tabindex="-1">1、Pinia简介 <a class="header-anchor" href="#_1、pinia简介" aria-label="Permalink to &quot;1、Pinia简介&quot;">​</a></h2><p><a href="https://link.juejin.cn?target=https%3A%2F%2Fpinia.vuejs.org%2Fzh%2F" target="_blank" rel="noreferrer">Pinia</a> 起始于 2019 年 11 月左右的一次实验，目的是设计一个拥有组合式 API 的 Vue 状态管理库。</p><h3 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h3><p>Pinia是什么</p><p>Pinia 是一个为 Vue 3 设计的状态管理库，vue3建议使用pinia代替vuex进行状态管理。</p><p>Pinia旨在提供简洁、强大且易于使用的 API，用于在 Vue 应用程序中管理状态。它提供了一种基于 Vue 3 的响应式系统的方式来管理全局和局部的状态，同时也与 TypeScript 很好地集成在一起。</p><p>vue2的都知道vuex状态管理，所谓状态管理，简单来说就是一个存储数据的地方，存放在Vuex中的数据在各个组件中都能访问到，它是Vue生态中重要的组成部分。</p><p>而pinia同理也是起到状态管理的作用，但是它又不完全同于vuex，相比有如下优点：</p><ul><li>Vue2和Vue3都支持，这让我们能很快上手</li><li>pinia中只有state、getter、action，抛弃了Vuex中的Mutation，Vuex中mutation一直都不太受待见，pinia直接抛弃。</li><li>pinia中action支持同步和异步</li><li>良好的Typescript支持，Vue3推荐使用TS来编写</li><li>无需再创建各个模块嵌套了，Vuex中如果数据过多，我们通常分模块来进行管理，而pinia中每个store都是独立的，互相不影响。</li><li>体积非常小，只有1KB左右。</li><li>pinia支持插件来扩展自身功能。</li><li>支持服务端渲染。</li></ul><h3 id="pinia-关键特点" tabindex="-1">Pinia 关键特点 <a class="header-anchor" href="#pinia-关键特点" aria-label="Permalink to &quot;Pinia 关键特点&quot;">​</a></h3><ul><li>基于 Vue 3 的响应式系统：Pinia 利用了 Vue 3 的响应式系统，使得在应用中管理状态变得非常直观和高效。</li><li>使用 Vue Composition API：Pinia 鼓励开发者使用 Vue 3 的 Composition API 来定义状态和逻辑，这使得代码更清晰和可维护。</li><li>零依赖：Pinia 是一个轻量级的库，不依赖于其他状态管理库或类似的工具，使得它具有很高的灵活性。</li><li>支持 TypeScript：Pinia 提供了对 TypeScript 的内置支持，包括类型推导、接口定义和类型安全等功能，这使得使用 TypeScript 进行开发变得更加顺畅。</li><li>插件系统：Pinia 提供了插件系统，使得开发者可以根据项目的需要进行功能扩展和定制，例如增加中间件、开发工具等。</li></ul><h2 id="_2、安装使用pinia" tabindex="-1">2、安装使用pinia <a class="header-anchor" href="#_2、安装使用pinia" aria-label="Permalink to &quot;2、安装使用pinia&quot;">​</a></h2><h3 id="_1-安装和使用示范" tabindex="-1">（1）安装和使用示范 <a class="header-anchor" href="#_1-安装和使用示范" aria-label="Permalink to &quot;（1）安装和使用示范&quot;">​</a></h3><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码yarn add pinia</span></span></code></pre></div><h2 id="_3、基于vue3如何使用pinia" tabindex="-1">3、基于Vue3如何使用pinia <a class="header-anchor" href="#_3、基于vue3如何使用pinia" aria-label="Permalink to &quot;3、基于Vue3如何使用pinia&quot;">​</a></h2><h3 id="_1-创建store" tabindex="-1">（1）创建store <a class="header-anchor" href="#_1-创建store" aria-label="Permalink to &quot;（1）创建store&quot;">​</a></h3><p>创建一个 store，例如 <code>counterStore</code></p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
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
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h3 id="_2-我的开源项目中详细使用" tabindex="-1">（2）我的开源项目中详细使用 <a class="header-anchor" href="#_2-我的开源项目中详细使用" aria-label="Permalink to &quot;（2）我的开源项目中详细使用&quot;">​</a></h3><p>接下来我们就在开源项目Nexus之中把这部分的pinia使用尝试一下，并且利用pinia实现我们的登录部分</p><p>首先我们获取一下用户的权限，这部分我们需要用到一个东西，这个东西就是js-cookie,拿来存储我们的cookie信息</p><p>👉 在utils=&gt;auth.js ，然后我们使用这个部分把token都放入Cookies部分</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>👉 在store之中我们简单封装一下user的信息，用来存储关于用户的token信息</p><p>在store=&gt; modules=&gt; user.js 之中简单的封装一下我们的用户登录信息</p><p>这里我们主要是对于用户的账号密码进行传递，然后传递我们的token,默认带一张我们默认的头像部分</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码import { login, logout, getInfo } from &#39;@/api/login&#39;</span></span>
<span class="line"><span>import { getToken, setToken, removeToken } from &#39;@/utils/auth&#39;</span></span>
<span class="line"><span>import defAva from &#39;@/assets/images/defaulte_avatar.png&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const useUserStore = defineStore(</span></span>
<span class="line"><span>  &#39;user&#39;,</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    state: () =&gt; ({</span></span>
<span class="line"><span>      token: getToken(),</span></span>
<span class="line"><span>      name: &#39;&#39;,</span></span>
<span class="line"><span>      avatar: &#39;&#39;,</span></span>
<span class="line"><span>      roles: [],</span></span>
<span class="line"><span>      permissions: []</span></span>
<span class="line"><span>    }),</span></span>
<span class="line"><span>    actions: {</span></span>
<span class="line"><span>      // 登录</span></span>
<span class="line"><span>      login(userInfo) {</span></span>
<span class="line"><span>        const username = userInfo.username.trim()</span></span>
<span class="line"><span>        const password = userInfo.password</span></span>
<span class="line"><span>        const code = userInfo.code</span></span>
<span class="line"><span>        const uuid = userInfo.uuid</span></span>
<span class="line"><span>        return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>          login(username, password, code, uuid).then(res =&gt; {</span></span>
<span class="line"><span>            setToken(res.token)</span></span>
<span class="line"><span>            this.token = res.token</span></span>
<span class="line"><span>            resolve()</span></span>
<span class="line"><span>          }).catch(error =&gt; {</span></span>
<span class="line"><span>            reject(error)</span></span>
<span class="line"><span>          })</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      // 获取用户信息</span></span>
<span class="line"><span>      getInfo() {</span></span>
<span class="line"><span>        return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>          getInfo().then(res =&gt; {</span></span>
<span class="line"><span>            const user = res.user</span></span>
<span class="line"><span>            const avatar = (user.avatar == &quot;&quot; || user.avatar == null) ? defAva : import.meta.env.VITE_APP_BASE_API + user.avatar;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            if (res.roles &amp;&amp; res.roles.length &gt; 0) { // 验证返回的roles是否是一个非空数组</span></span>
<span class="line"><span>              this.roles = res.roles</span></span>
<span class="line"><span>              this.permissions = res.permissions</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>              this.roles = [&#39;ROLE_DEFAULT&#39;]</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            this.name = user.userName</span></span>
<span class="line"><span>            this.avatar = avatar;</span></span>
<span class="line"><span>            resolve(res)</span></span>
<span class="line"><span>          }).catch(error =&gt; {</span></span>
<span class="line"><span>            reject(error)</span></span>
<span class="line"><span>          })</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      // 退出系统</span></span>
<span class="line"><span>      logOut() {</span></span>
<span class="line"><span>        return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>          logout(this.token).then(() =&gt; {</span></span>
<span class="line"><span>            this.token = &#39;&#39;</span></span>
<span class="line"><span>            this.roles = []</span></span>
<span class="line"><span>            this.permissions = []</span></span>
<span class="line"><span>            removeToken()</span></span>
<span class="line"><span>            resolve()</span></span>
<span class="line"><span>          }).catch(error =&gt; {</span></span>
<span class="line"><span>            reject(error)</span></span>
<span class="line"><span>          })</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default useUserStore</span></span></code></pre></div><p>接下来完善我们的登录部分</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码import useUserStore from &#39;@/store/modules/user&#39;</span></span>
<span class="line"><span>const userStore = useUserStore()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 处理表单提交的函数</span></span>
<span class="line"><span>const handleSubmit = async (event) =&gt; {</span></span>
<span class="line"><span>        event.preventDefault();</span></span>
<span class="line"><span>        // 在实际应用中，这里可以发送注册请求到服务器进行用户注册</span></span>
<span class="line"><span>        // 这里简单地假设密码和确认密码相同才能注册成功</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if (form.value.username === &#39;&#39; || form.value.password === &#39;&#39;) {</span></span>
<span class="line"><span>            ElMessage.error(&#39;用户名和密码不能为空&#39;);</span></span>
<span class="line"><span>            return;</span></span>
<span class="line"><span>        }else{</span></span>
<span class="line"><span>            console.log(form.value, &#39;form.value&#39;);</span></span>
<span class="line"><span>            try {</span></span>
<span class="line"><span>                const res:any = await login(form.value);</span></span>
<span class="line"><span>                if(res.code==200){</span></span>
<span class="line"><span>                    ElMessage.success(res.message);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                     // 调用action的登录方法</span></span>
<span class="line"><span>                      userStore.login(loginForm.value).then(() =&gt; {</span></span>
<span class="line"><span>                        const query = route.query;</span></span>
<span class="line"><span>                        const otherQueryParams = Object.keys(query).reduce((acc, cur) =&gt; {</span></span>
<span class="line"><span>                          if (cur !== &quot;redirect&quot;) {</span></span>
<span class="line"><span>                            acc[cur] = query[cur];</span></span>
<span class="line"><span>                          }</span></span>
<span class="line"><span>                          return acc;</span></span>
<span class="line"><span>                        }, {});</span></span>
<span class="line"><span>                        router.push({ path: redirect.value || &quot;/&quot;, query: otherQueryParams });</span></span>
<span class="line"><span>                      }).catch(() =&gt; {</span></span>
<span class="line"><span>                        loading.value = false;</span></span>
<span class="line"><span>                      });</span></span>
<span class="line"><span>                }else{</span></span>
<span class="line"><span>                   ElMessage.error(res.message);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            } catch (error) {</span></span>
<span class="line"><span>                // console.log(&#39;获取数据详情失败，请重试！&#39;,error);</span></span>
<span class="line"><span>            } finally {</span></span>
<span class="line"><span>                // console.log(&#39;完！&#39;);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>};</span></span></code></pre></div><p>这里看看我们的登录接口部分</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码import request from &#39;@/utils/request.js&#39;</span></span>
<span class="line"><span>// 登录方法</span></span>
<span class="line"><span>export function login(username, password, code, uuid) {</span></span>
<span class="line"><span>  const data = {</span></span>
<span class="line"><span>    username,</span></span>
<span class="line"><span>    password,</span></span>
<span class="line"><span>    code,</span></span>
<span class="line"><span>    uuid</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return request({</span></span>
<span class="line"><span>    url: &#39;/api/login&#39;,</span></span>
<span class="line"><span>    headers: {</span></span>
<span class="line"><span>      isToken: false,</span></span>
<span class="line"><span>      repeatSubmit: false</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    method: &#39;post&#39;,</span></span>
<span class="line"><span>    data: data</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>尝试调用一下看看</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1727259224826-93119f65-f4f2-4e4e-8cc2-26b6fa384b3f.webp" alt=""></p><p>这里记得完善一下我们token部分</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码import { getToken } from &#39;@/utils/auth&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>权限部分记得更改一下</span></span>
<span class="line"><span>if (whiteList.indexOf(to.path) !== -1||getToken()) {</span></span>
<span class="line"><span>    console.log(&#39;白名单或者token账号进入1!&#39;);</span></span>
<span class="line"><span>    next();</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>点击登录ok！</p><p>作者：林太白<br> 链接：<a href="https://juejin.cn/post/7401824176229531682" target="_blank" rel="noreferrer">https://juejin.cn/post/7401824176229531682</a><br> 来源：稀土掘金<br> 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。</p>`,41),i=[l];function t(c,o,r,u,d,h){return a(),n("div",null,i)}const v=s(e,[["render",t]]);export{m as __pageData,v as default};
