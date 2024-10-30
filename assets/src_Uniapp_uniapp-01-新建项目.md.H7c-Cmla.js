import{_ as s,c as n,a as t,a4 as a,o as p}from"./chunks/framework.DvHWMJgD.js";const e="/images/uniapp1-1.png",g=JSON.parse('{"title":"uni-app1+踩坑+从零新建项目+小改造","description":"","frontmatter":{},"headers":[],"relativePath":"src/Uniapp/uniapp-01-新建项目.md","filePath":"src/Uniapp/uniapp-01-新建项目.md"}'),i={name:"src/Uniapp/uniapp-01-新建项目.md"},l=a('<h1 id="uni-app1-踩坑-从零新建项目-小改造" tabindex="-1">uni-app1+踩坑+从零新建项目+小改造 <a class="header-anchor" href="#uni-app1-踩坑-从零新建项目-小改造" aria-label="Permalink to &quot;uni-app1+踩坑+从零新建项目+小改造&quot;">​</a></h1><h2 id="_1、开发需要的工具" tabindex="-1">1、开发需要的工具 <a class="header-anchor" href="#_1、开发需要的工具" aria-label="Permalink to &quot;1、开发需要的工具&quot;">​</a></h2><p>这里假设你已经了解开发uniapp的两个工具</p><ul><li>HbuildX 开发者工具</li><li>微信开发者工具（拿来跑项目）</li></ul><p>整个过程：拿HbuildX写代码开发，然后把程序运行到微信开发者工具</p><h2 id="_2、新建项目" tabindex="-1">2、新建项目 <a class="header-anchor" href="#_2、新建项目" aria-label="Permalink to &quot;2、新建项目&quot;">​</a></h2><p>接下来我们就开发属于我们的第一个uniapp</p><p>打开Hbuildx，在其中选择文件，点击新建,然后搭建我们的第一个项目 <img src="'+e+'" alt="image.png"></p>',8),o=a(`<p>选择就可以搭建属于我们的vue2或者vue3项目，这里我们以vue3版本为例，选择最简单的模板</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1729580533374-2e44cef0-cfc8-474c-89c9-4bdb4fe203a7.webp" alt=""></p><p>这里我以vue3为主我搭建了一个项目</p><p>名字就简单拿了一下与我相关联的！</p><p>等项目完成以后，我们uniapp的项目环境已经搭建好了！</p><h2 id="_3、项目目录" tabindex="-1">3、项目目录 <a class="header-anchor" href="#_3、项目目录" aria-label="Permalink to &quot;3、项目目录&quot;">​</a></h2><h3 id="_1-新建立的项目目录" tabindex="-1">(1) 新建立的项目目录 <a class="header-anchor" href="#_1-新建立的项目目录" aria-label="Permalink to &quot;(1) 新建立的项目目录&quot;">​</a></h3><p>新建立的项目目录如下</p><p>这里我们选择最简单的模板</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1729580533299-cf08ef00-c1d7-4744-89cb-f3ce6675a257.webp" alt=""></p><h3 id="_2-新建components-公共组件目录" tabindex="-1">(2) 新建components 公共组件目录 <a class="header-anchor" href="#_2-新建components-公共组件目录" aria-label="Permalink to &quot;(2) 新建components 公共组件目录&quot;">​</a></h3><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1729580533433-0bae9dd9-3ef6-42d7-84f2-8e5edec9ac42.webp" alt=""></p><h3 id="_3-pages-页面" tabindex="-1">(3) pages 页面 <a class="header-anchor" href="#_3-pages-页面" aria-label="Permalink to &quot;(3) pages 页面&quot;">​</a></h3><ul><li>新建API</li><li>新建 tabBar</li><li>新建首页</li></ul><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1729580533499-7a6f20ae-e4f9-482f-a0de-88d560ec3abc.webp" alt=""></p><p>添加组件列表页面</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1729580534918-2ab8db65-ca1f-4006-a6d9-448553ce35e0.webp" alt=""></p><p>这里我们简单解释一下这个目录</p><h3 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-label="Permalink to &quot;目录结构&quot;">​</a></h3><p>这里面包含了我们存放各种静态资源、小程序配置、项目配置、项目页面配置、项目应用配置、以及各种出入口等！</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1729580534893-00953323-5e4a-47af-b045-bcef16660f1f.webp" alt=""></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pages </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 主组件目录</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">static </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 静态资源目录</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">App.vue </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 页面入口文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">main.js </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 入口文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">manifest.json </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 应用配置文件，用于指定应用的名称、图标、权限等</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pages.json </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 全局配置文件，包括页面文件的路径、窗口样式、原生的导航栏、底部的原生tabbar 等</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uni.scss </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 全局样式文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">components </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 公共组件目录</span></span></code></pre></div><h2 id="_4、配置微信开发者工具地址" tabindex="-1">4、配置微信开发者工具地址 <a class="header-anchor" href="#_4、配置微信开发者工具地址" aria-label="Permalink to &quot;4、配置微信开发者工具地址&quot;">​</a></h2><p>接下来我们就运行一下我们的项目</p><p>依次点击“工具”菜单，选择“设置”，然后点击“运行配置”，最后设置微信开发者工具的路径</p><p>在这里先把我们微信开发者工具的运行地址给填写上，如果不熟悉的话，可以查看一下自己微信开发者工具运行的地方</p><p><img src="" alt=""></p><p>点击运行，运行我们的第一个项目</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1729580533935-b7e149c8-116e-4da5-a5fc-eb92b8c033ee.webp" alt=""></p><p>在这个过程之中需要依次构建我们的项目需要的环境以及依赖等，需要稍微等待一段时间</p><p>安装成功以后会提示我们：编辑工具下载成功，请重新运行！</p><p>这个时候再次点击运行，重新运行项目</p><h2 id="_5、打开微信开发者工具端口" tabindex="-1">5、打开微信开发者工具端口 <a class="header-anchor" href="#_5、打开微信开发者工具端口" aria-label="Permalink to &quot;5、打开微信开发者工具端口&quot;">​</a></h2><p>怎么都没有反应，没办法，我只能自己手动打开了一下微信开发者工具</p><p>原来微信开发者工具要扫码登陆：</p><p>再次重新点击运行，提示如下</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1729580534326-ebdd9a34-1000-4c5c-ae56-a57537bc9798.webp" alt=""></p><p>意思就是需要我们去打开微信开发者工具的端口</p><p>好，走起！</p><p>我们打开服务端口！</p><p>点击“设置”，选择“安全”，然后开启“服务端口”。接着到 Huildx 重新启动项目。</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1729580535488-405328a8-63d8-4284-ac17-de5f64e11d2f.webp" alt=""></p><p>然后在微信小程序开发者信任工具之中信任项目并且运行</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1729580535456-97f5a0e5-c90a-433e-9746-220449d3b5e7.webp" alt=""></p><p>项目启动成功，看看我们的预览的界面！</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1729580535872-7ff79d29-fbbc-4520-b66a-a4941daa513d.webp" alt=""></p><h2 id="_6、使用官方推荐的方式搭建页面" tabindex="-1">6、使用官方推荐的方式搭建页面 <a class="header-anchor" href="#_6、使用官方推荐的方式搭建页面" aria-label="Permalink to &quot;6、使用官方推荐的方式搭建页面&quot;">​</a></h2><p>先放图片，开发属于底部界面tab栏目</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1729580535845-f5cc2f5f-7fc6-4ac7-81f4-b019bf11e16e.webp" alt=""></p><p>接下来为项目配置启动页面和四个底部tab切换栏目</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1729580537254-803b5c31-01b1-4794-9ee7-b3af96b26a89.webp" alt=""></p><p>配置好我们的底部tab栏切换时所对应的界面</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1729580536337-e73fa817-2453-46e4-ab96-c372371cf417.webp" alt=""></p><p>这里我们需要了解几个对应的部分，</p><h2 id="_7、完善预览项目" tabindex="-1">7、完善预览项目 <a class="header-anchor" href="#_7、完善预览项目" aria-label="Permalink to &quot;7、完善预览项目&quot;">​</a></h2><p>接下来完善一下我们的项目，依次在page/tabBar下面依次搭建我们的项目，然后完善一下我们的配置，这个时候相信你已经启动看到自己的项目啦！</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>&quot;pages&quot;: [ //pages数组中第一项表示应用启动页，参考：https://uniapp.dcloud.io/collocation/pages</span></span>
<span class="line"><span>		{</span></span>
<span class="line"><span>			&quot;path&quot;: &quot;pages/index/index&quot;,</span></span>
<span class="line"><span>			&quot;style&quot;: {</span></span>
<span class="line"><span>				&quot;navigationBarTitleText&quot;: &quot;启动页面&quot;</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		},</span></span>
<span class="line"><span>		{</span></span>
<span class="line"><span>			&quot;path&quot;: &quot;pages/tabBar/component&quot;,</span></span>
<span class="line"><span>			&quot;style&quot;: {</span></span>
<span class="line"><span>				&quot;navigationBarTitleText&quot;: &quot;内置组件&quot;,</span></span>
<span class="line"><span>				&quot;backgroundColor&quot;: &quot;#F8F8F8&quot;</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}, {</span></span>
<span class="line"><span>			&quot;path&quot;: &quot;pages/tabBar/API&quot;,</span></span>
<span class="line"><span>			&quot;style&quot;: {</span></span>
<span class="line"><span>				&quot;navigationBarTitleText&quot;: &quot;接口&quot;,</span></span>
<span class="line"><span>				&quot;backgroundColor&quot;: &quot;#F8F8F8&quot;</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}, {</span></span>
<span class="line"><span>			&quot;path&quot;: &quot;pages/tabBar/CSS&quot;,</span></span>
<span class="line"><span>			&quot;style&quot;: {</span></span>
<span class="line"><span>				&quot;navigationBarTitleText&quot;: &quot;CSS&quot;,</span></span>
<span class="line"><span>				&quot;backgroundColor&quot;: &quot;#F8F8F8&quot;</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		},</span></span>
<span class="line"><span>		{</span></span>
<span class="line"><span>		  &quot;path&quot;: &quot;pages/tabBar/template&quot;,</span></span>
<span class="line"><span>		  &quot;style&quot;: {</span></span>
<span class="line"><span>		    &quot;navigationBarTitleText&quot;: &quot;模板&quot;</span></span>
<span class="line"><span>		  }</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	],</span></span>
<span class="line"><span>	&quot;globalStyle&quot;: {</span></span>
<span class="line"><span>		&quot;navigationBarTextStyle&quot;: &quot;black&quot;,</span></span>
<span class="line"><span>		&quot;navigationBarTitleText&quot;: &quot;uni-app&quot;,</span></span>
<span class="line"><span>		&quot;navigationBarBackgroundColor&quot;: &quot;#F8F8F8&quot;,</span></span>
<span class="line"><span>		&quot;backgroundColor&quot;: &quot;#F8F8F8&quot;</span></span>
<span class="line"><span>	},</span></span>
<span class="line"><span>	&quot;tabBar&quot;: {</span></span>
<span class="line"><span>		&quot;color&quot;: &quot;#7A7E83&quot;,</span></span>
<span class="line"><span>		&quot;selectedColor&quot;: &quot;#007AFF&quot;,</span></span>
<span class="line"><span>		&quot;borderStyle&quot;: &quot;black&quot;,</span></span>
<span class="line"><span>		&quot;backgroundColor&quot;: &quot;#F8F8F8&quot;,</span></span>
<span class="line"><span>		&quot;list&quot;: [{</span></span>
<span class="line"><span>				&quot;pagePath&quot;: &quot;pages/tabBar/component&quot;,</span></span>
<span class="line"><span>				&quot;iconPath&quot;: &quot;static/component.png&quot;,</span></span>
<span class="line"><span>				&quot;selectedIconPath&quot;: &quot;static/componentHL.png&quot;,</span></span>
<span class="line"><span>				&quot;text&quot;: &quot;内置组件&quot;</span></span>
<span class="line"><span>			},</span></span>
<span class="line"><span>			{</span></span>
<span class="line"><span>				&quot;pagePath&quot;: &quot;pages/tabBar/API&quot;,</span></span>
<span class="line"><span>				&quot;iconPath&quot;: &quot;static/api.png&quot;,</span></span>
<span class="line"><span>				&quot;selectedIconPath&quot;: &quot;static/apiHL.png&quot;,</span></span>
<span class="line"><span>				&quot;text&quot;: &quot;接口&quot;</span></span>
<span class="line"><span>			},</span></span>
<span class="line"><span>			{</span></span>
<span class="line"><span>				&quot;pagePath&quot;: &quot;pages/tabBar/CSS&quot;,</span></span>
<span class="line"><span>				&quot;iconPath&quot;: &quot;static/css.png&quot;,</span></span>
<span class="line"><span>				&quot;selectedIconPath&quot;: &quot;static/cssHL.png&quot;,</span></span>
<span class="line"><span>				&quot;text&quot;: &quot;CSS&quot;</span></span>
<span class="line"><span>			},</span></span>
<span class="line"><span>			{</span></span>
<span class="line"><span>				&quot;pagePath&quot;: &quot;pages/tabBar/template&quot;,</span></span>
<span class="line"><span>				&quot;iconPath&quot;: &quot;static/template.png&quot;,</span></span>
<span class="line"><span>				&quot;selectedIconPath&quot;: &quot;static/templateHL.png&quot;,</span></span>
<span class="line"><span>				&quot;text&quot;: &quot;模板&quot;</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		]</span></span>
<span class="line"><span>	},</span></span>
<span class="line"><span>	&quot;uniIdRouter&quot;: {}</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>到这里我们项目已经开始跑起来啦！</p><p>作者：王小妞耶<br> 链接：<a href="https://juejin.cn/post/7383609946833436687" target="_blank" rel="noreferrer">https://juejin.cn/post/7383609946833436687</a><br> 来源：稀土掘金<br> 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。</p>`,59);function c(u,q,r,h,d,b){return p(),n("div",null,[l,t(" --> "),o])}const m=s(i,[["render",c]]);export{g as __pageData,m as default};
