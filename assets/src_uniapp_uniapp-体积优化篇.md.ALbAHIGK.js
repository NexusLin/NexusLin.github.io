import{_ as i,c as s,ag as t,o as e}from"./chunks/framework.wRLzwZz-.js";const p="/uniapp/uniapp-tjyh.png",n="/uniapp/uniapp-tjyh2.png",l="/uniapp/uniapp-tjyh3.png",_=JSON.parse('{"title":"小程序体积优化篇","description":"","frontmatter":{},"headers":[],"relativePath":"src/uniapp/uniapp-体积优化篇.md","filePath":"src/uniapp/uniapp-体积优化篇.md"}'),r={name:"src/uniapp/uniapp-体积优化篇.md"};function h(o,a,c,d,u,k){return e(),s("div",null,a[0]||(a[0]=[t('<h1 id="小程序体积优化篇" tabindex="-1">小程序体积优化篇 <a class="header-anchor" href="#小程序体积优化篇" aria-label="Permalink to &quot;小程序体积优化篇&quot;">​</a></h1><p>一文搞定小程序优化和减小体积（番外篇）</p><h2 id="_1、背景介绍" tabindex="-1">1、背景介绍 <a class="header-anchor" href="#_1、背景介绍" aria-label="Permalink to &quot;1、背景介绍&quot;">​</a></h2><p>随着小程序项目的不断升级，体积越来越大。</p><p>接触过小程序的人都知道小程序的的压缩包不能超过2MB，否则无法将之上传到微信小程序，在开发中很容易忽略这个压缩体积大小，这个时候我们必须得对自己的写的代码进行一个优化。</p><p>以下只是个人的简单优化的方式，如有更好的方式可以给出意见。</p><p>这里需要注意的一点就是微信的主包限制最多为2M，然而我们的项目引入了各种插件直接占了1M，所以我们必须采用一些手段去优化。下面介绍一下uniapp小程序优化和减小代码体积的方式以及一些优化思路和解决方案</p><h2 id="_2、直观问题" tabindex="-1">2、直观问题 <a class="header-anchor" href="#_2、直观问题" aria-label="Permalink to &quot;2、直观问题&quot;">​</a></h2><h3 id="微信开发者工具80051报错" tabindex="-1">微信开发者工具80051报错 <a class="header-anchor" href="#微信开发者工具80051报错" aria-label="Permalink to &quot;微信开发者工具80051报错&quot;">​</a></h3><p>先来看看我们分包过大的时候导致的最直观的问题：【就是直接预览或者真机查看都无法处理】</p><p>这里我们尝试真机预览以及手机预览尝试，但是这里给我们直接报错了 ,这是因为砸门的小程序体积太大了，在我们小程序的运行过程之中，我并没有对小程序大小做出任何的限制，无限制级别的进行尝试 <img src="'+p+'" alt="image.png"> 这里很大的原因就是因为我们的小程序体积过大，所以我们现在得给小程序缩小一些代码的体积以及大小</p><p>(这里如果我们只是单纯的想要尝试的话其实还有另外一种方法，就是云打包到我们的app之中然后进行尝试，这里我在之前的文章之中进行过对应的讲解！)</p><h2 id="_3、减少体积" tabindex="-1">3、减少体积 <a class="header-anchor" href="#_3、减少体积" aria-label="Permalink to &quot;3、减少体积&quot;">​</a></h2><p>一般我们为了小程序的体积大小的优化，会做一些对应的工作来进行，大致的种类包含以下几种方式</p><ul><li>优化代码，删除掉不用的代码</li><li>静态资源图片图标处理</li><li>静态资源音频视频</li></ul><h3 id="_1-优化代码" tabindex="-1">（1）优化代码 <a class="header-anchor" href="#_1-优化代码" aria-label="Permalink to &quot;（1）优化代码&quot;">​</a></h3><ul><li>这部分就是删除掉不用的代码，以及进行代码的复用等。没有什么可以讲述的部分</li><li>那么继续优化页面代码，将一些中文注释都给清掉，对页面重复冗余或者用不着的代码都清掉</li></ul><h3 id="_2-静态资源图片图标" tabindex="-1">（2）静态资源图片图标 <a class="header-anchor" href="#_2-静态资源图片图标" aria-label="Permalink to &quot;（2）静态资源图片图标&quot;">​</a></h3><p>这部分处理我检查一下静态资源，图片和各个图标将近1MB。为了解决体积大的问题，将静态资源的图片放在cdn服务器进行路径请求，压缩体积将近释放1MB。</p><p>图片压缩或者上传服务器</p><p>一般图片所占用的空间比较大，尽量不要放在小程序本地文件夹中，如果图片不多的话可以对图片进行压缩，图片压缩平台：&lt;<a href="https://link.juejin.cn/?target=https%3A%2F%2Ftinyjpg.com%2F%253E" target="_blank" rel="noreferrer">tinyjpg.com/&gt;</a></p><p>这里我们对于我们自己的图片进行一些处理，可以看到不处理图片之前我们小程序的大小打包这里有明确的爆红 <img src="'+n+'" alt="image.png"></p><p>我们把图片扔到自己的静态服务器上，可以明显看出来不行（一般我们都有线上服务器，这里建议放自己的线上服务器）</p><p>这里因为学习，没有其他的办法，所以我只能把图片干掉，后续图片都尽量直接拿css写，或者直接扔线上图 <img src="'+l+'" alt="image.png"> 通过拼接的方式试试</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;"> :src=&quot;`${baseURL}/uploads/static/uniapp/image/biao.png`&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  alt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;rppglitopimg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>这里我们拼接试试然后看看效果，好吧，事实证明也是不行 ，这里我只能去掉，去掉的方式也非常简单，我直接把所有图片都给丢掉</p><h3 id="_3-静态资源音频视频" tabindex="-1">（3）静态资源音频视频 <a class="header-anchor" href="#_3-静态资源音频视频" aria-label="Permalink to &quot;（3）静态资源音频视频&quot;">​</a></h3><p>将音频和视频放到服务器上</p><h3 id="_4-插件分类" tabindex="-1">（4）插件分类 <a class="header-anchor" href="#_4-插件分类" aria-label="Permalink to &quot;（4）插件分类&quot;">​</a></h3><p>将通过webpack下载的包和插件进行dev和生产插件的分类，原先是默认都是下载到dependencies，这就导致了压缩之后面积也很大。因此为了减少体积，将一部分只在本地调试使用的插件版本放到devDependencies里面，分类完成之后在打包压缩，发现体积小了一些。</p><h3 id="_5-subpackages-分包" tabindex="-1">（5）<code>subPackages</code> 分包 <a class="header-anchor" href="#_5-subpackages-分包" aria-label="Permalink to &quot;（5）`subPackages` 分包&quot;">​</a></h3><p>体积还是很大，接下来就得采用官方提供的分包加载机制了</p><p>采用subPackages分包分包加载机制（具体教程官方文档有）</p><p>这个分包预加载我是按照tabBar来划分页面和分包的， pages加载可以把首页涉及到的页面和资源加载，首页加载的公共资源的东西都可以在pages里面加载, 其他的根据tabBar的路径来加载对应的页面和资源（使用预加载）。</p><p>然后在manifest.json设置分包的优化</p><p>在manifest.json→源码试图→找到&quot;mp-weixin&quot;,添加&quot;optimization&quot; : {“subPackages” : true}即可完成任务。</p>',36)]))}const m=i(r,[["render",h]]);export{_ as __pageData,m as default};
