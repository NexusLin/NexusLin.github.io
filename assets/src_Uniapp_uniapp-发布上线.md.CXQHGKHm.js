import{_ as a,c as e,o as i,a4 as p}from"./chunks/framework.DvHWMJgD.js";const k=JSON.parse('{"title":"uniapp-微信小程序打包和发布上线","description":"","frontmatter":{},"headers":[],"relativePath":"src/Uniapp/uniapp-发布上线.md","filePath":"src/Uniapp/uniapp-发布上线.md"}'),t={name:"src/Uniapp/uniapp-发布上线.md"},s=p('<h1 id="uniapp-微信小程序打包和发布上线" tabindex="-1">uniapp-微信小程序打包和发布上线 <a class="header-anchor" href="#uniapp-微信小程序打包和发布上线" aria-label="Permalink to &quot;uniapp-微信小程序打包和发布上线&quot;">​</a></h1><h2 id="_1、介绍" tabindex="-1">1、介绍 <a class="header-anchor" href="#_1、介绍" aria-label="Permalink to &quot;1、介绍&quot;">​</a></h2><p>这里我们还是简单介绍 什么是 uniapp？</p><p>uniapp 是一种基于 Vue.js 的多平台开发框架，它可以同时用于开发安卓、iOS、H5 等多个平台。因此，只需要写一次代码就可以在多个平台上运行，提高了开发效率。</p><p><strong>打包工具 ： HBuilder X</strong></p><p><strong>配置应用信息</strong></p><p>打开项目根目录下的 manifest.json 文件，该文件包含了应用程序的各种配置信息，如应用名称、版本号、应用图标等。根据需求来修改相关配置信息，最后保存修改。</p><h2 id="_2、uniapp打包运行安卓和ios端-2种" tabindex="-1">2、Uniapp打包运行安卓和IOS端（2种） <a class="header-anchor" href="#_2、uniapp打包运行安卓和ios端-2种" aria-label="Permalink to &quot;2、Uniapp打包运行安卓和IOS端（2种）&quot;">​</a></h2><p>目前有两种，云打包和本地打包</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1729588738848-b6e6738f-b1fc-4894-b629-2e0f31611f99.webp" alt=""></p><p>开始使用打包之前，HbuildX【 发行 】的工具栏，看一下云打包与本地打包的区别：</p><h3 id="原生app-云打包" tabindex="-1">原生APP-云打包 <a class="header-anchor" href="#原生app-云打包" aria-label="Permalink to &quot;原生APP-云打包&quot;">​</a></h3><p>云打包 ① 通过官方在【云服务器】已经提供好的打包环境进行打包，简单方便快捷，适合新手入门； ② 打包次数限制，1天只能打包【5次】，第六次需要收费(大概2￥一次) ③ 打包时间长度不受控，高峰期排队时长可能需要 【几个小时】以上</p><h3 id="原生app-本地打包" tabindex="-1">原生APP-本地打包 <a class="header-anchor" href="#原生app-本地打包" aria-label="Permalink to &quot;原生APP-本地打包&quot;">​</a></h3><p>本地打包</p><p>① 需要下载 Android Studio(Android 集成开发工具)配置环境，需要熟悉原生Android 开发，操作难度大，灵活性高； ② 本地离线打包，不限制打包次数，完全免费； ③ 打包时间受控，下载好离线SDK，配置好资源环境，无需排队；</p><h2 id="_3、原生app云打包" tabindex="-1">3、原生app云打包 <a class="header-anchor" href="#_3、原生app云打包" aria-label="Permalink to &quot;3、原生app云打包&quot;">​</a></h2><p>云打包</p><p>用HBuilderX打开要打包的项目 选中项目列表中的项目右击选择发行=&gt;原生App-云打包，弹出打包页面 到开发者中心生成证书 证书生成后下载下来，存到指定目录，然后在开发者中心选择需要打包项目=&gt;我的应用=&gt;证书管理=&gt;证书详情中可查看别名密码 打包页面输入别名密码，选择下载好的证书，可以选择不要开屏广告，然后选择打包 最后会生成apk包，下载安装即可使用</p><h2 id="_4、本地打包" tabindex="-1">4、本地打包 <a class="header-anchor" href="#_4、本地打包" aria-label="Permalink to &quot;4、本地打包&quot;">​</a></h2><h3 id="_1-安装下载" tabindex="-1">（1）安装下载 <a class="header-anchor" href="#_1-安装下载" aria-label="Permalink to &quot;（1）安装下载&quot;">​</a></h3><p>下载HBuilderX <a href="https://link.juejin.cn/?target=https%3A%2F%2Fwww.dcloud.io%2Fhbuilderx.html" target="_blank" rel="noreferrer">下载地址</a></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">https</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//www.dcloud.io/hbuilderx.html</span></span></code></pre></div><p>下载AndroidStudio -<a href="https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.android.google.cn%2Fstudio%3Fhl%3Dzh-cn" target="_blank" rel="noreferrer">下载地址</a></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">https</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//developer.android.google.cn/studio?hl=zh-cn</span></span></code></pre></div><p>SDK下载地址 <a href="https://link.juejin.cn/?target=https%3A%2F%2Fnativesupport.dcloud.net.cn%2FAppDocs%2Fdownload%2Fandroid.html%23" target="_blank" rel="noreferrer">App离线打包SDK 下载</a></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">https</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//nativesupport.dcloud.net.cn/AppDocs/download/android.html#</span></span></code></pre></div><p><strong>离线打包</strong></p><p><strong>安心打包</strong></p><p>一键打包即可</p><p>插件安装完成后需重新点击“打包”按钮提交打包 打包完成后自动保存到项目的**&quot;unpackage/release/apk/&quot;**目录 如果清空了这个目录，那么下次打包将执行首次打包逻辑。</p><h4 id="安装ios模拟器" tabindex="-1">安装IOS模拟器 <a class="header-anchor" href="#安装ios模拟器" aria-label="Permalink to &quot;安装IOS模拟器&quot;">​</a></h4><p>对Mac版本要求：</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1729588738753-3838a9b1-ffe3-47c7-83e3-98b74e5bdee3.webp" alt=""></p><p>MacOSX，安装ios模拟器，需要先安装xcode；或在App store中搜索xcode完成安装。 xcode安装打开，按下快捷键command+,，打开Preferences窗口，如下图：</p><h4 id="android模拟器" tabindex="-1">Android模拟器 <a class="header-anchor" href="#android模拟器" aria-label="Permalink to &quot;Android模拟器&quot;">​</a></h4><p>android studio模拟器（大小1个G左右）</p><h3 id="_2-打包" tabindex="-1">（2）打包 <a class="header-anchor" href="#_2-打包" aria-label="Permalink to &quot;（2）打包&quot;">​</a></h3><ol><li>生成本地打包资源 <img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1729588738765-abc757a1-bd00-4c99-86e1-48f94a5d4cbb.webp" alt=""></li><li>下载Android Studio和App离线SDK 下载路径：<a href="https://link.juejin.cn/?target=https%3A%2F%2Fnativesupport.dcloud.net.cn%2FAppDocs%2Fusesdk%2Fandroid" target="_blank" rel="noreferrer">nativesupport.dcloud.net.cn/AppDocs/use…</a></li><li>解压得到的目录如下 <img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1729588738745-07a786b9-a595-45b5-96da-bb5f9fedf990.webp" alt=""></li><li>使用Android Studio打开Android 离线SDK解压目录里面这个文件夹，这个是示例项目，我们只需要更改这个项目的一些配置，其他配置HBuilderX已经配置好了</li><li>切换到Project <img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1729588738739-726810e2-b9fa-41e0-8866-c169dec7ed8e.webp" alt=""></li><li>打开apps目录，把目录下的文件夹删除，我的是__UNI__B，然后打开HBuilderX本地打包的资源目录，最后拷贝到示例项目的apps目录下，也就是刚刚__UNI__B的位置 <img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1729588739104-a3a72bbd-2e13-4c7b-96de-994bd7d371a5.webp" alt=""></li></ol><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1729588739216-7bc03f65-2935-45d1-b6c2-9cf169133d19.webp" alt=""></p><p>把dcloud_control.xml文件里面的id属性值__UNI__B改成manifest.json里面的id值相同</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1729588739156-12bab11e-9eec-4399-b91a-074435c4d7d3.webp" alt=""></p><p><code>.... 进行不下去了 ，太麻烦了，建议直接app云打包吧 ...</code></p><h2 id="_5、常见问题" tabindex="-1">5、常见问题 <a class="header-anchor" href="#_5、常见问题" aria-label="Permalink to &quot;5、常见问题&quot;">​</a></h2><h3 id="提示-打包时未添加maps模块" tabindex="-1">提示：打包时未添加maps模块 <a class="header-anchor" href="#提示-打包时未添加maps模块" aria-label="Permalink to &quot;提示：打包时未添加maps模块&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">在app设置里添加对应的高德地图模块，去iclound 里面添加地图参数</span></span></code></pre></div><h3 id="uniapp打包app扫码提示未获取相机权限" tabindex="-1">uniapp打包app扫码提示未获取相机权限 <a class="header-anchor" href="#uniapp打包app扫码提示未获取相机权限" aria-label="Permalink to &quot;uniapp打包app扫码提示未获取相机权限&quot;">​</a></h3><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1729588739190-76ae45c9-fb31-4465-b577-c5bfc2b3d11c.webp" alt=""></p><p>解决此问题的方法是在HBuilder|HBuiulderX中添加缺失的模块，保存后提交App云端打包。 打开应用的manifest.json文件，切换到“模块权限配置”项（uni-app应用为“App模块权限配置”项），在右侧的“打包模块配置”中x勾选缺失的模块：</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1729588739619-13c5f028-8296-4abb-8fe9-f8ea675ab5ec.webp" alt=""></p><h3 id="uniapp-打包之后-uni-makephonecall-点击无效果" tabindex="-1">uniapp 打包之后 uni.makePhoneCall 点击无效果 <a class="header-anchor" href="#uniapp-打包之后-uni-makephonecall-点击无效果" aria-label="Permalink to &quot;uniapp 打包之后 uni.makePhoneCall 点击无效果&quot;">​</a></h3><p>在 manifest.json 文件中 添加如下权限</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">uses-permission</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> android</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">name</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">=\\&quot;android.permission.CALL_PHONE\\&quot;/&gt;</span></span></code></pre></div><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1729588739803-3f89c043-58a3-4d8e-bd8e-76f7b9b26a1e.webp" alt=""></p><h3 id="项目提示打包时未添加videoplayer模块" tabindex="-1">项目提示打包时未添加videoplayer模块 <a class="header-anchor" href="#项目提示打包时未添加videoplayer模块" aria-label="Permalink to &quot;项目提示打包时未添加videoplayer模块&quot;">​</a></h3><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1729588739760-413e967e-9dcb-4b6c-bf3e-65e5704269ed.webp" alt=""></p><p>云打包只需在manifest.json，模块权限配置中勾选即可 <img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1729588739775-30681009-8dc0-41a0-bc76-de83fde6a48c.webp" alt=""></p>',57),n=[s];function l(r,d,o,h,c,u){return i(),e("div",null,n)}const g=a(t,[["render",l]]);export{k as __pageData,g as default};
