import{_ as s,c as i,o as a,a4 as t}from"./chunks/framework.DvHWMJgD.js";const g=JSON.parse('{"title":"uniapp7-uniapp项目配置你配置全了吗","description":"","frontmatter":{},"headers":[],"relativePath":"src/Uniapp/uniapp-07-uniapp项目配置.md","filePath":"src/Uniapp/uniapp-07-uniapp项目配置.md"}'),n={name:"src/Uniapp/uniapp-07-uniapp项目配置.md"},p=t(`<h1 id="uniapp7-uniapp项目配置你配置全了吗" tabindex="-1">uniapp7-uniapp项目配置你配置全了吗 <a class="header-anchor" href="#uniapp7-uniapp项目配置你配置全了吗" aria-label="Permalink to &quot;uniapp7-uniapp项目配置你配置全了吗&quot;">​</a></h1><h2 id="uniapp7-uniapp项目配置你配置全了吗-基础配置" tabindex="-1">uniapp7-uniapp项目配置你配置全了吗(基础配置) <a class="header-anchor" href="#uniapp7-uniapp项目配置你配置全了吗-基础配置" aria-label="Permalink to &quot;uniapp7-uniapp项目配置你配置全了吗(基础配置)&quot;">​</a></h2><h2 id="_1、-pages-json-基本配置" tabindex="-1">1、 pages.json 基本配置 <a class="header-anchor" href="#_1、-pages-json-基本配置" aria-label="Permalink to &quot;1、 pages.json 基本配置&quot;">​</a></h2><p>根目录下面这个文件夹是 Uni-app 中主要的配置文件，可以配置页面路径、窗口样式、导航栏样式、标签栏样式等信息。 其中，pages数组中第一项表示应用启动页。</p><p>简单看一下我们这个文件下面的信息和配置</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1729580835036-578ec21f-6c66-4075-93c6-fdb7793a8ae0.webp" alt=""></p><h3 id="tab栏导航切换" tabindex="-1">tab栏导航切换 <a class="header-anchor" href="#tab栏导航切换" aria-label="Permalink to &quot;tab栏导航切换&quot;">​</a></h3><p>对tabBar进行配置，这里可以显示我们切换时候的底部背景文字颜色之类的！</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1729580835061-b333a9b4-8e1e-4900-a61a-40289dd5fdf1.webp" alt=""></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;tabBar&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">		&quot;color&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#7A7E83&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//tab文字颜色</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">		&quot;selectedColor&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#007AFF&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//tab文字选中颜色</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">		&quot;borderStyle&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;black&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//边框颜色 </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">		&quot;backgroundColor&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#F8F8F8&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// tab背景色</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">		&quot;list&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">				&quot;pagePath&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pages/tabBar/index/index&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">				// &quot;iconPath&quot;: &quot;static/component.png&quot;,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">				// &quot;selectedIconPath&quot;: &quot;static/componentHL.png&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">				&quot;text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;首页&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		}]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="list里面-添加tab切换组件列表" tabindex="-1">List里面 添加Tab切换组件列表 <a class="header-anchor" href="#list里面-添加tab切换组件列表" aria-label="Permalink to &quot;List里面 添加Tab切换组件列表&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;pagePath&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pages/tabBar/component/component&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;组件页面&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="添加首页页面" tabindex="-1">添加首页页面 <a class="header-anchor" href="#添加首页页面" aria-label="Permalink to &quot;添加首页页面&quot;">​</a></h3><p>pages 下面写入对象，设置首页标题和首页下拉刷新</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;path&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pages/tabBar/index/index&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;style&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;navigationBarTitleText&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;首页&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;enablePullDownRefresh&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     // 开启下拉刷新</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="添加组件列表页面" tabindex="-1">添加组件列表页面 <a class="header-anchor" href="#添加组件列表页面" aria-label="Permalink to &quot;添加组件列表页面&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;path&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pages/tabBar/component/component&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;style&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;navigationBarTitleText&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;组件页面&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="static-静态文件" tabindex="-1">static 静态文件 <a class="header-anchor" href="#static-静态文件" aria-label="Permalink to &quot;static 静态文件&quot;">​</a></h3><p>添加image 图片目录 ，放入tab的icon图片</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1729580835122-24031671-c95d-446e-b313-c27233ca2aac.webp" alt=""></p><h2 id="_2、-pages-页面路径配置" tabindex="-1">2、 <code>pages </code> **页面路径配置 **： <a class="header-anchor" href="#_2、-pages-页面路径配置" aria-label="Permalink to &quot;2、   \`pages \`  **页面路径配置 **：&quot;">​</a></h2><p>用来配置各个页面的路径，也就是用来加载和跳转页面使用。</p><h2 id="_3、-globalstyle-全局样式配置" tabindex="-1">3、 <code>globalStyle </code> **全局样式配置 **： <a class="header-anchor" href="#_3、-globalstyle-全局样式配置" aria-label="Permalink to &quot;3、   \`globalStyle \`  **全局样式配置 **：&quot;">​</a></h2><p>用来设置全局的窗口样式，如窗口背景色、导航栏背景色,之后我们就能使用到</p><h2 id="_4、-pages下的-style-页面特定配置" tabindex="-1">4、 pages下的 <code>style </code>: **页面特定配置 **： <a class="header-anchor" href="#_4、-pages下的-style-页面特定配置" aria-label="Permalink to &quot;4、 pages下的 \`style \`: **页面特定配置 **：&quot;">​</a></h2><p>用来为每个页面单独配置窗口样式、导航栏样式等，使得每个页面可以有不同的外观表现。 简单写法如下：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pages&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [ </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//pages数组中第一项表示应用启动页，参考：https://uniapp.dcloud.io/collocation/pages</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;path&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pages/tabBar/index/index&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;style&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                        &quot;navigationBarTitleText&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;首页&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                        &quot;enablePullDownRefresh&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                        &quot;navigationStyle&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;custom&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   ]</span></span></code></pre></div><p>当然，我们也可以在每个页面的 <code>.vue </code> 文件中单独配置。</p><h2 id="_5、-subpackages-分包配置" tabindex="-1">5、 <code>subPackages </code>**分包配置 **： <a class="header-anchor" href="#_5、-subpackages-分包配置" aria-label="Permalink to &quot;5、   \`subPackages \`**分包配置 **：&quot;">​</a></h2><p>用来在 <code>subPackages </code> 字段中配置分包的路径和规则，以便进行分包加载和管理，简单写法如下：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;subPackages&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [ </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;root&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;package1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pages&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sub1/index&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sub1/detail&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ] },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;root&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;package2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pages&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sub2/index&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sub2/detail&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ] } </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span></code></pre></div><h2 id="_6、-condition-多端适配" tabindex="-1">6、 <code>condition </code> **多端适配 **： <a class="header-anchor" href="#_6、-condition-多端适配" aria-label="Permalink to &quot;6、   \`condition \`  **多端适配 **：&quot;">​</a></h2><p>用来设置条件编译，实现多端（如H5、小程序等）的适配,简单写法如下：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;condition&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;mp-weixin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;navigationBarTextStyle&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;white&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } }</span></span></code></pre></div><h2 id="_7、-tabbar-自带菜单栏" tabindex="-1">7、 <code>tabBar </code> **自带菜单栏 **： <a class="header-anchor" href="#_7、-tabbar-自带菜单栏" aria-label="Permalink to &quot;7、   \`tabBar \`  **自带菜单栏 **：&quot;">​</a></h2><p>这是官方给我们自带的菜单栏，可以在这个里写一些我们没有复杂设计时候的菜单</p><h2 id="_8、-uniidrouter-指定页面的唯一标识符" tabindex="-1">8、 <code>uniIdRouter </code> **指定页面的唯一标识符 **： <a class="header-anchor" href="#_8、-uniidrouter-指定页面的唯一标识符" aria-label="Permalink to &quot;8、   \`uniIdRouter \`  **指定页面的唯一标识符 **：&quot;">​</a></h2><p>用于页面之间的路由跳转和传参</p><p>意思就是当我们在 <code>pages.json </code> 文件中设置了 <code>uniIdRouter: true </code>，则表示该页面使用唯一标识符进行路由跳转。</p><p>可以避免直接使用页面路径进行路由跳转，有没有在一瞬间觉得其实这就是vue-router之中的name，反正我感觉差不多就是一个意思。</p><p>大致写起来就是下面这样子：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;pages&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;path&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pages/index/index&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;aliasPath&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/index&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;uniIdRouter&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;path&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pages/detail/detail&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;aliasPath&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/detail&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;uniIdRouter&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>使用的时候</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 使用唯一标识符进行路由跳转</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uni.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">navigateTo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    url: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;uni-id://index&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h2 id="_9、报错和处理" tabindex="-1">9、报错和处理 <a class="header-anchor" href="#_9、报错和处理" aria-label="Permalink to &quot;9、报错和处理&quot;">​</a></h2><h3 id="_1-unhandled-promise-rejection" tabindex="-1">（1）Unhandled promise rejection <a class="header-anchor" href="#_1-unhandled-promise-rejection" aria-label="Permalink to &quot;（1）Unhandled promise rejection&quot;">​</a></h3><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1729580835101-c2cbb227-e885-4121-a869-0bf9257d7772.webp" alt=""></p><h4 id="原因-没写catch" tabindex="-1">原因：没写catch() <a class="header-anchor" href="#原因-没写catch" aria-label="Permalink to &quot;原因：没写catch()&quot;">​</a></h4><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1729580835133-9c096cc0-82cb-4cda-bfcf-a6a886067045.webp" alt=""></p><h4 id="解决方法" tabindex="-1">解决方法： <a class="header-anchor" href="#解决方法" aria-label="Permalink to &quot;解决方法：&quot;">​</a></h4><p>这种情况下会在控制台中看到 &quot;Unhandled promise rejection&quot; 错误, 可以用以下来捕获错误</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> promise </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">reject</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  reject</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Uncaught Error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">promise.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">result</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(error.message);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h3 id="_2-unhandled-promise-rejection-ty" tabindex="-1">（2） **unhandled promise rejection ty ** <a class="header-anchor" href="#_2-unhandled-promise-rejection-ty" aria-label="Permalink to &quot;（2） **unhandled promise rejection ty **&quot;">​</a></h3><p>这里这句 <code>unhandled promise rejection ty </code> 的意思是未处理的 Promise 拒绝。这通常是因为 Promise 对象被拒绝了，但没有被 catch 或者处理。在 JavaScript 中，Promise 对象可以表示异步操作的结果，如果 Promise 对象被拒绝了，就需要通过 catch 或者处理函数来处理这个错误。如果没有处理，就会出现 unhandled promise rejection ty 的错误提示。</p>`,54),h=[p];function l(e,k,E,r,d,o){return a(),i("div",null,h)}const u=s(n,[["render",l]]);export{g as __pageData,u as default};
