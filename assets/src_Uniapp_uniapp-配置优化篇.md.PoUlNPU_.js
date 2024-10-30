import{_ as i,c as s,o as a,a4 as t}from"./chunks/framework.DvHWMJgD.js";const u=JSON.parse('{"title":"uniapp番外-配置优化篇","description":"","frontmatter":{},"headers":[],"relativePath":"src/Uniapp/uniapp-配置优化篇.md","filePath":"src/Uniapp/uniapp-配置优化篇.md"}'),n={name:"src/Uniapp/uniapp-配置优化篇.md"},e=t(`<h1 id="uniapp番外-配置优化篇" tabindex="-1">uniapp番外-配置优化篇 <a class="header-anchor" href="#uniapp番外-配置优化篇" aria-label="Permalink to &quot;uniapp番外-配置优化篇&quot;">​</a></h1><h1 id="uniapp番外-配置优化篇-1" tabindex="-1">uniapp番外-配置优化篇 <a class="header-anchor" href="#uniapp番外-配置优化篇-1" aria-label="Permalink to &quot;uniapp番外-配置优化篇&quot;">​</a></h1><p>写整个uniapp文章系列文章过程之中遇到的一些问题和优化以及处理方式</p><h2 id="_1、格式化代码" tabindex="-1">1、格式化代码 <a class="header-anchor" href="#_1、格式化代码" aria-label="Permalink to &quot;1、格式化代码&quot;">​</a></h2><p>使用uniapp时我想格式化代码时，提示我无法格式化代码</p><p>存在的问题：我们node的地址没有匹配完全</p><p>在这里先把我们本地的node的运行地址给填写上，如果不熟悉的话，可以cmd之中输入<code>where node</code>进行查询自己的地址，然后填写上就可以了。</p><h2 id="_2、配置公共全局接口路径" tabindex="-1">2、配置公共全局接口路径 <a class="header-anchor" href="#_2、配置公共全局接口路径" aria-label="Permalink to &quot;2、配置公共全局接口路径&quot;">​</a></h2><p>在我们请求接口的时候，我们目前采用的全部都是本地写死的路径，那么如果遇到需要写活的时候，这个应该如何写呢</p><p>接下来我们就配置一下我们小程序的公共的路径，方便我们全局对于接口路径进行操作</p><p>在我们的utils文件夹下面页面之中配置一个 <code>config.js</code>文件，这个文件夹里面将会放之后我们需要操作改动的所有的全局变量</p><p>添加一个全局的接口配置</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> baseURL</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;http://localhost:8888&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> baseURL;</span></span></code></pre></div><p>在我们之中进行使用</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> baseURL </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@/utils/config.js&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: baseURL</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/api/login&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span></code></pre></div><p>接下来我们对登录进行一下尝试</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1729588642772-b42c0568-ae6f-4e40-8780-28730a990c6a.webp" alt=""></p><p>可以看出我们的登录接口依然是正常的进行访问，毫无问题！</p><h2 id="_3、页面导航栏背景色更改" tabindex="-1">3、页面导航栏背景色更改 <a class="header-anchor" href="#_3、页面导航栏背景色更改" aria-label="Permalink to &quot;3、页面导航栏背景色更改&quot;">​</a></h2><p>砸门整个小程序的主题色是#00979c</p><p>接下来就将小程序的导航栏背景色也改成这样子的背景色</p><p>在pages.json 之中更改<code>navigationBarBackgroundColor</code></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;globalStyle&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;navigationBarTextStyle&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;white&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;navigationBarBackgroundColor&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#00979c&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span></code></pre></div><h2 id="_4、页面背景色更改" tabindex="-1">4、页面背景色更改 <a class="header-anchor" href="#_4、页面背景色更改" aria-label="Permalink to &quot;4、页面背景色更改&quot;">​</a></h2><p>在pages.json 之中更改<code>backgroundColor</code></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;globalStyle&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   &quot;backgroundColor&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#FFFFFF&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span></code></pre></div><h2 id="_5、页面全局顶部部分颜色更改" tabindex="-1">5、页面全局顶部部分颜色更改 <a class="header-anchor" href="#_5、页面全局顶部部分颜色更改" aria-label="Permalink to &quot;5、页面全局顶部部分颜色更改&quot;">​</a></h2><p>之前在我的页面我们实现了一个这种的布局，接下来我们详细拆分一下这一部分</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1729588642764-e2c5377d-30f1-4894-8472-38ee9f871157.webp" alt=""></p><h3 id="_1-绝对定位" tabindex="-1">（1）绝对定位 <a class="header-anchor" href="#_1-绝对定位" aria-label="Permalink to &quot;（1）绝对定位&quot;">​</a></h3><p>这里我们可以采用绝对定位的方式进行实现</p><p>直接上我们的样式，这里我们直接写个类名，然后扔进去即可</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.users {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    position</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: fixed;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    top</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 0px;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    left</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    z</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">index</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">999999</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 260rpx;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    background</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: #00979c;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="_6、页面顶部部分自动按照设备进行兼容" tabindex="-1">6、页面顶部部分自动按照设备进行兼容 <a class="header-anchor" href="#_6、页面顶部部分自动按照设备进行兼容" aria-label="Permalink to &quot;6、页面顶部部分自动按照设备进行兼容&quot;">​</a></h2><p>在我们的内容进行放置的时候会遇到一种情况，就是我们的内容始终顶在在顶部</p><p>另外一种情况就是在最顶部的时候不同设备他的高度不一样，这种我们如何进行适配呢</p><p>微信官方为我们单独提供了<code>getMenuButtonBoundingClientRect</code> 这个api来处理这个问题</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 在页面的最顶部直接添加 </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">view</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  :style=&quot;{marginTop:</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> menuButtonInfo.top</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> +</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> (menuButtonInfo.bottom</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> -</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> menuButtonInfo.top)/2+&#39;px&#39;}&quot;&gt;&lt;/view&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">let</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> menuButtonInfo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">menuButtonInfo</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> =</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> uni.getMenuButtonBoundingClientRect();</span></span></code></pre></div><h2 id="_7、官方回收接口" tabindex="-1">7、官方回收接口 <a class="header-anchor" href="#_7、官方回收接口" aria-label="Permalink to &quot;7、官方回收接口&quot;">​</a></h2><h3 id="wx-getuserinfo接口-回收" tabindex="-1">wx.getUserInfo接口--回收 <a class="header-anchor" href="#wx-getuserinfo接口-回收" aria-label="Permalink to &quot;wx.getUserInfo接口--回收&quot;">​</a></h3><p>这个接口已经在官方之中进行了通知。</p><p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fdevelopers.weixin.qq.com%2Fcommunity%2Fdevelop%2Fdoc%2F000cacfa20ce88df04cb468bc52801" target="_blank" rel="noreferrer">developers.weixin.qq.com/community/d…</a></p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1729588642783-94eb662f-0daa-4b16-9d29-8a9314b603f1.webp" alt=""></p><p>其他接口部分</p><p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fdevelopers.weixin.qq.com%2Fminiprogram%2Fdev%2Fframework%2Fuser-privacy%2Fminiprogram-intro.html" target="_blank" rel="noreferrer">developers.weixin.qq.com/miniprogram…</a></p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1729588642940-6213f9f9-57a3-4117-bb9d-ffb9d41cf203.webp" alt=""></p><h2 id="_8、行为和规范" tabindex="-1">8、行为和规范 <a class="header-anchor" href="#_8、行为和规范" aria-label="Permalink to &quot;8、行为和规范&quot;">​</a></h2><h3 id="关于小程序收集用户手机号行为的规范" tabindex="-1">关于小程序收集用户手机号行为的规范 <a class="header-anchor" href="#关于小程序收集用户手机号行为的规范" aria-label="Permalink to &quot;关于小程序收集用户手机号行为的规范&quot;">​</a></h3><p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fmp.weixin.qq.com%2Fs%2FWHacxsm0J7D6Jb_Y_stdVA" target="_blank" rel="noreferrer">mp.weixin.qq.com/s/WHacxsm0J…</a></p><h2 id="_9、报错处理" tabindex="-1">9、报错处理 <a class="header-anchor" href="#_9、报错处理" aria-label="Permalink to &quot;9、报错处理&quot;">​</a></h2><p>api scope is not declared in the privacy agreement</p><h3 id="必须先查看协议" tabindex="-1">必须先查看协议 <a class="header-anchor" href="#必须先查看协议" aria-label="Permalink to &quot;必须先查看协议&quot;">​</a></h3><p>调用wx.getUserProfile进行授权时，返回错误信息：{errMsg: “getUserProfile:fail api scope is not declared in the privacy agreement”, errno: 112} 是因为微信小程序登录，增加了用户是否查看隐私协议的验证，不跳转到隐私协议，就不让用户登录。</p>`,53),p=[e];function l(h,k,r,o,d,c){return a(),s("div",null,p)}const E=i(n,[["render",l]]);export{u as __pageData,E as default};
