import{_ as s,c as n,o as a,a4 as p}from"./chunks/framework.DvHWMJgD.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"src/Uniapp/uniapp-04-uniapp中使用Pinia.md","filePath":"src/Uniapp/uniapp-04-uniapp中使用Pinia.md"}'),e={name:"src/Uniapp/uniapp-04-uniapp中使用Pinia.md"},i=p(`<p>uniapp4-uniapp uniapp使用Pinia</p><h2 id="_1、uniapp使用pinia介绍" tabindex="-1">1、uniapp使用Pinia介绍 <a class="header-anchor" href="#_1、uniapp使用pinia介绍" aria-label="Permalink to &quot;1、uniapp使用Pinia介绍&quot;">​</a></h2><ul><li>首先我们必须知道的一点就是，在HBuilder X 搭建的uniapp3的项目之中，已经自己携带了pinia,自带的,也就是说热度特别高！</li><li>官方提供的 uni-app3内置了 Pinia 。<strong>但是 uniapp Vue 2 项目暂不支持</strong> uniapp2 还是建议使用vuex 状态管理库，也蛮好用的</li></ul><h3 id="版本要求" tabindex="-1">版本要求 <a class="header-anchor" href="#版本要求" aria-label="Permalink to &quot;版本要求&quot;">​</a></h3><p>需要注意的是： 搭建方式不同，Pinia的使用方式不同！</p><h3 id="uniapp搭建方式" tabindex="-1">uniapp搭建方式 <a class="header-anchor" href="#uniapp搭建方式" aria-label="Permalink to &quot;uniapp搭建方式&quot;">​</a></h3><h4 id="_1-hbuilder-x-搭建使用pinia" tabindex="-1">（1） HBuilder X 搭建使用Pinia <a class="header-anchor" href="#_1-hbuilder-x-搭建使用pinia" aria-label="Permalink to &quot;（1） HBuilder X 搭建使用Pinia&quot;">​</a></h4><p><strong>uni-app已经内置了vuex和pinia两个状态管理，不需要安装即可使用</strong></p><p>不需要手动安装，直接使用即可</p><p>这里不得不称赞一下HbuildX开发者工具虽然难用一些，但是确实也在努力做！</p><h4 id="_2-使用-cli搭建使用pinia" tabindex="-1">（2）使用 CLI搭建使用Pinia <a class="header-anchor" href="#_2-使用-cli搭建使用pinia" aria-label="Permalink to &quot;（2）使用 CLI搭建使用Pinia&quot;">​</a></h4><p>使用 CLI搭建的项目则是需要自己去手动安装</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>执行命令行安装</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`yarn add pinia@2.0.33\` </span></span>
<span class="line"><span></span></span>
<span class="line"><span>或 \`npm install pinia@2.0.33\`</span></span></code></pre></div><h4 id="_3-安装pinia-上面没成功" tabindex="-1">（3）安装pinia(上面没成功！！) <a class="header-anchor" href="#_3-安装pinia-上面没成功" aria-label="Permalink to &quot;（3）安装pinia(上面没成功！！)&quot;">​</a></h4><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span></span></span>
<span class="line"><span>yarn add pinia</span></span></code></pre></div><h2 id="_2、uniapp中使用pinia" tabindex="-1">2、uniapp中使用Pinia <a class="header-anchor" href="#_2、uniapp中使用pinia" aria-label="Permalink to &quot;2、uniapp中使用Pinia&quot;">​</a></h2><h3 id="根目录下面去修改我们的main-js" tabindex="-1">根目录下面去修改我们的main.js <a class="header-anchor" href="#根目录下面去修改我们的main-js" aria-label="Permalink to &quot;根目录下面去修改我们的main.js&quot;">​</a></h3><p><strong>mian.js</strong> 引用并使用pinia</p><p>先看看如何引入挂载然后使用 pinia</p><p>写到我们的<code>main.js</code> 文件夹之中</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//导入pinia</span></span>
<span class="line"><span>import * as Pinia from  &#39;pinia&#39;</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>// 创建Pinia实例  // 将pinia实例挂载到vue实例上 </span></span>
<span class="line"><span>app.use(Pinia.createPinia());</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>return {</span></span>
<span class="line"><span>    app,</span></span>
<span class="line"><span>    Pinia, // 此处必须将 Pinia 返回</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="处理报错" tabindex="-1">处理报错 <a class="header-anchor" href="#处理报错" aria-label="Permalink to &quot;处理报错&quot;">​</a></h3><p>这里我们尝试运行，一直报错<code>Pinia is not defined</code></p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1729580686946-5ab765f5-af01-4708-8524-aec5dfd225bd.webp" alt=""></p><p>之前我们写的返回里面是有个返回的pinia，这里我们更正一下试试</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { createPinia } from &#39;pinia&#39;;</span></span>
<span class="line"><span>export function createApp() {</span></span>
<span class="line"><span>  const app = createSSRApp(App)</span></span>
<span class="line"><span>   const pinia = createPinia();</span></span>
<span class="line"><span>  app.use(pinia); // 创建Pinia实例  // 将pinia实例挂载到vue实例上 </span></span>
<span class="line"><span>  return {</span></span>
<span class="line"><span>    app,</span></span>
<span class="line"><span>    pinia, // 此处必须将 Pinia 返回</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>把上面最后那个pinia给去掉，然后尝试一下</p><h3 id="配置-store里面的-user-js" tabindex="-1">配置 store里面的 <code>user.js</code> <a class="header-anchor" href="#配置-store里面的-user-js" aria-label="Permalink to &quot;配置 store里面的 \`user.js\`&quot;">​</a></h3><p>在根目录下面新建store文件夹，然后文件夹下面新建<code>user.js</code> 文件</p><p>看一下我们的目录结构</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1729580686978-9a9418e0-398e-4524-9fd5-98d9e30ddac1.webp" alt=""></p><p>这里我们可以先简单的尝试一下</p><p><code>user.js</code> 文件里面我们先简单的写一些登录的状态</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { defineStore } from &#39;pinia&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const useUserStore = defineStore(&#39;user&#39;, {</span></span>
<span class="line"><span>  state: () =&gt; ({</span></span>
<span class="line"><span>    username: &#39;&#39;,</span></span>
<span class="line"><span>    isLoggedIn: false,</span></span>
<span class="line"><span>  }),</span></span>
<span class="line"><span>  actions: {</span></span>
<span class="line"><span>    login(name) {</span></span>
<span class="line"><span>      this.username = name;</span></span>
<span class="line"><span>      this.isLoggedIn = true;</span></span>
<span class="line"><span>	  console.log(&#39;login登录&#39;,this.isLoggedIn);</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    logout() {</span></span>
<span class="line"><span>      this.username = &#39;&#39;;</span></span>
<span class="line"><span>      this.isLoggedIn = false;</span></span>
<span class="line"><span>	  onsole.log(&#39;退出登录&#39;,this.isLoggedIn);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  getters: {</span></span>
<span class="line"><span>    userStatus: (state) =&gt; {</span></span>
<span class="line"><span>      return state.isLoggedIn ? \`Welcome, \${state.username}\` : &#39;Please log in&#39;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>});</span></span></code></pre></div><h2 id="_3、登录界面使用pinia" tabindex="-1">3、登录界面使用pinia <a class="header-anchor" href="#_3、登录界面使用pinia" aria-label="Permalink to &quot;3、登录界面使用pinia&quot;">​</a></h2><h3 id="_1-页面编写" tabindex="-1">（1）页面编写 <a class="header-anchor" href="#_1-页面编写" aria-label="Permalink to &quot;（1）页面编写&quot;">​</a></h3><p>接下来我们简单写个登录界面尝试一下我们的pinia的使用</p><p>page文件夹下面的component里面写一个login文件下，下面新建一个index.vue文件用来登录</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;view class=&quot;container&quot;&gt;</span></span>
<span class="line"><span>    &lt;input v-model=&quot;username&quot; type=&quot;text&quot; placeholder=&quot;请输入用户名&quot; /&gt;</span></span>
<span class="line"><span>    &lt;input v-model=&quot;password&quot; type=&quot;password&quot; placeholder=&quot;请输入密码&quot; /&gt;</span></span>
<span class="line"><span>    &lt;button @click=&quot;login&quot;&gt;登录&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;text class=&quot;error-message&quot;&gt;{{ errorMessage }}&lt;/text&gt;</span></span>
<span class="line"><span>  &lt;/view&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const username = ref(&#39;&#39;);</span></span>
<span class="line"><span>const password = ref(&#39;&#39;);</span></span>
<span class="line"><span>const errorMessage = ref(&#39;&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const login = () =&gt; {</span></span>
<span class="line"><span>  // 这里可以编写登录逻辑，例如向服务器发送请求验证用户名和密码</span></span>
<span class="line"><span>  if (username.value === &#39;admin&#39; &amp;&amp; password.value === &#39;password&#39;) {</span></span>
<span class="line"><span>    // 登录成功的处理</span></span>
<span class="line"><span>    errorMessage.value = &#39;&#39;;</span></span>
<span class="line"><span>    uni.showToast({</span></span>
<span class="line"><span>      title: &#39;登录成功&#39;,</span></span>
<span class="line"><span>      icon: &#39;success&#39;</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>    // 可以进行页面跳转或其他操作</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    // 登录失败的处理</span></span>
<span class="line"><span>    errorMessage.value = &#39;用户名或密码错误&#39;;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>.container {</span></span>
<span class="line"><span>  padding: 40rpx;</span></span>
<span class="line"><span>  box-sizing: border-box;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>input {</span></span>
<span class="line"><span>  width: 100%;</span></span>
<span class="line"><span>  padding: 0 20rpx;</span></span>
<span class="line"><span>  margin-bottom: 40rpx;</span></span>
<span class="line"><span>  border: 2rpx solid #ccc;</span></span>
<span class="line"><span>  border-radius: 8rpx;</span></span>
<span class="line"><span>  box-sizing: border-box;</span></span>
<span class="line"><span>  line-height: 80rpx;</span></span>
<span class="line"><span>  height: 80rpx;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>button {</span></span>
<span class="line"><span>  width: 100%;</span></span>
<span class="line"><span>  padding: 0 20rpx;</span></span>
<span class="line"><span>  background-color: #007bff;</span></span>
<span class="line"><span>  color: #fff;</span></span>
<span class="line"><span>  border: none;</span></span>
<span class="line"><span>  border-radius: 8rpx;</span></span>
<span class="line"><span>  cursor: pointer;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>button:hover {</span></span>
<span class="line"><span>  background-color: #0056b3;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.error-message {</span></span>
<span class="line"><span>  color: red;</span></span>
<span class="line"><span>  margin-top: 10px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div><p>简单看一下我们的界面</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1729580686982-44974343-cb6e-4003-8d79-ba36aceef8e7.webp" alt=""></p><p>接下来我们就在页面之中简单的使用一下这个pinia搭建的store仓库，然后输入看看其中有哪些信息。</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span> // 导入我们搭建的仓库</span></span>
<span class="line"><span> import { useUserStore } from &#39;@/store/user&#39;;</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> // 使用一下我们的仓库 </span></span>
<span class="line"><span> const userStore = useUserStore();</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 打印看一下我们的状态仓库之中有些什么信息</span></span>
<span class="line"><span>console.log(userStore,&#39;userStore&#39;);</span></span></code></pre></div><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1729580686962-238810d2-d812-4d69-9528-f0dfea7872f8.webp" alt=""></p><p>点击一下我们的登录，然后我们查看一下其中有哪些信息，查看我们是否可以正常的调用这个状态库</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>const login = () =&gt; {</span></span>
<span class="line"><span>    userStore.login(username.value);</span></span>
<span class="line"><span>};</span></span></code></pre></div><p>点击一下我们的登录模块</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1729580686975-c8bc125c-62a2-4d84-9ef6-c82cb9b4bca1.webp" alt=""></p><p>这里我们可以看到我们已经可以正常拿到我们的登录状态</p><h3 id="_2-切换登录授权" tabindex="-1">（2）切换登录授权 <a class="header-anchor" href="#_2-切换登录授权" aria-label="Permalink to &quot;（2）切换登录授权&quot;">​</a></h3><p>接下来我们对于我的界面，或者在点击事件之中做一个判断，如果我们处于登录状态，那么可以访问我的界面</p><p>处于为登录界面，则访问我的界面的时候，必须去进行登录</p><p>先去完善一下我们的登录</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const login = () =&gt; {</span></span>
<span class="line"><span>	console.log(&#39;登录&#39;);</span></span>
<span class="line"><span>	userStore.login(username.value);</span></span>
<span class="line"><span>	uni.switchTab({</span></span>
<span class="line"><span>		url:&#39;/pages/tabBar/index/index&#39;</span></span>
<span class="line"><span>	})</span></span>
<span class="line"><span>};</span></span></code></pre></div><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { useUserStore } from &#39;@/store/user&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span> // 使用一下我们的仓库 </span></span>
<span class="line"><span> const userStore = useUserStore();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 打印看一下看看我们的状态仓库之中登录信息是否已经登录</span></span>
<span class="line"><span>console.log(userStore,&#39;userStore---点击查看登录信息&#39;);</span></span></code></pre></div><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1729580687308-4a854411-1df7-4be3-bb9d-bef6ff4b82d3.webp" alt=""></p><p>我们可以看到，这边点击登录以后，我们再次进行切换的时候，用户已经登录。</p><p>这里我们完善一下用户是否登陆的逻辑。</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if(userStore.isLoggedIn){</span></span>
<span class="line"><span>    console.log(&#39;用户已经登陆！&#39;);</span></span>
<span class="line"><span>    uni.switchTab({</span></span>
<span class="line"><span>        url: &#39;/pages/tabBar/user/user&#39;</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>}else{</span></span>
<span class="line"><span>    console.log(&#39;用户未登陆！&#39;);</span></span>
<span class="line"><span>    uni.navigateTo({</span></span>
<span class="line"><span>        url:&#39;/pages/component/login/login&#39;</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>完善的是点击按钮切换页面时候的逻辑，然后我们看一下效果！</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1729580687381-10571478-e368-4c73-b8f6-7a1c9b92cd78.webp" alt=""></p><p>点击我的 ，用户未登录，去登录页面！</p><p>用户已经登录，直接去我的界面！</p><p>从表面上来看，我们的逻辑应该不存在任何问题，接下来我们尝试一下</p><h3 id="_3-解决状态问题" tabindex="-1">（3）解决状态问题 <a class="header-anchor" href="#_3-解决状态问题" aria-label="Permalink to &quot;（3）解决状态问题&quot;">​</a></h3><p>上面正确的判断应该是将if(userStore.isLoggedIn) 换成 if(userStore.isLoggedIn) ，ok，我们尝试一下啊</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1729580687354-ca356a06-b2d5-4e84-aece-3e15d19b74b4.webp" alt=""></p><p>正确无误，功能ok！</p><p>作者：王小妞耶<br> 链接：<a href="https://juejin.cn/post/7384253307638939648" target="_blank" rel="noreferrer">https://juejin.cn/post/7384253307638939648</a><br> 来源：稀土掘金<br> 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。</p>`,69),l=[i];function t(c,o,r,d,u,h){return a(),n("div",null,l)}const m=s(e,[["render",t]]);export{b as __pageData,m as default};
