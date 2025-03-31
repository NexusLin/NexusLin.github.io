import{_ as i,a,b as e}from"./chunks/uniapp-uview-ui11.x7bel4kK.js";import{_ as p,c as n,ag as t,o as l}from"./chunks/framework.wRLzwZz-.js";const E=JSON.parse('{"title":"uniapp组件库uview-plus的使用（vue3）","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"src/uniapp/uniapp-组件库uview-plus.md","filePath":"src/uniapp/uniapp-组件库uview-plus.md"}'),h={name:"src/uniapp/uniapp-组件库uview-plus.md"};function u(k,s,r,d,c,o){return l(),n("div",null,s[0]||(s[0]=[t(`<h1 id="uniapp组件库uview-plus的使用-vue3" tabindex="-1">uniapp组件库uview-plus的使用（vue3） <a class="header-anchor" href="#uniapp组件库uview-plus的使用-vue3" aria-label="Permalink to &quot;uniapp组件库uview-plus的使用（vue3）&quot;">​</a></h1><h2 id="认识uview-plus" tabindex="-1">认识uview-plus <a class="header-anchor" href="#认识uview-plus" aria-label="Permalink to &quot;认识uview-plus&quot;">​</a></h2><p>🍌 官方介绍</p><div class="language-JS vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JS</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uview</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">plus，是全面兼容nvue的uni</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app生态框架</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">全面的组件和便捷的工具会让您信手拈来</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">如鱼得水，基于uView2.0初步修改</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">后续会陆续修复vue3兼容性</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">以及组合式API改造等。</span></span></code></pre></div><h3 id="🎈-uview-plus官网" tabindex="-1">🎈 uview-plus官网 <a class="header-anchor" href="#🎈-uview-plus官网" aria-label="Permalink to &quot;🎈 uview-plus官网&quot;">​</a></h3><p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fuiadmin.net%2Fuview-plus%2Fcomponents%2Finstall.html" target="_blank" rel="noreferrer">uiadmin.net/uview-plus/…</a></p><h2 id="配置uview-plus" tabindex="-1">配置<code>uview-plus</code> <a class="header-anchor" href="#配置uview-plus" aria-label="Permalink to &quot;配置\`uview-plus\`&quot;">​</a></h2><p>如果我们有旧的项目使用uview-ui，官方建议还是更换vue2的版本</p><p>因为vue3使用的是<code>uview-plus</code>[uiadmin.net/uview-plus] (<a href="https://uiadmin.net/uview-plus/" target="_blank" rel="noreferrer">https://uiadmin.net/uview-plus/</a>)</p><h3 id="_1-卸载uview-ui" tabindex="-1">（1）卸载uview-ui <a class="header-anchor" href="#_1-卸载uview-ui" aria-label="Permalink to &quot;（1）卸载uview-ui&quot;">​</a></h3><p>先把上面我们配置的部分删除了，然后把uview-ui给卸载了</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">yarn remove uview</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ui</span></span></code></pre></div><h3 id="_2-安装uview-plus" tabindex="-1">（2）安装<code>uview-plus</code> <a class="header-anchor" href="#_2-安装uview-plus" aria-label="Permalink to &quot;（2）安装\`uview-plus\`&quot;">​</a></h3><p>安装我们的<code>uview-plus</code></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">yarn add uview</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">plus</span></span></code></pre></div><p>切换了以后还是之前使用方式差不多</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// main.js，注意要在use方法之后执行</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> uviewPlus, { setConfig } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;uview-plus&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(uviewPlus)</span></span></code></pre></div><p>这里我们先运行看看，这边可以看到我们的报错已经解决了 <img src="`+i+'" alt="image.png"></p><p>这边我们可以看到，没有任何的问题出现，接下来我们尝试使用一下，先随意丢个骨架屏进去看看效果 <img src="'+a+`" alt="image.png"></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">up-skeleton</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	    rows</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;3&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	    title</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">		loading</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&gt;&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">up-skeleton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>没有效果，这里我们再配置一下相关需要的东西</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">yarn add dayjs</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">yarn add clipboard</span></span></code></pre></div><h3 id="_3-在引入uview-plus的全局scss主题文件" tabindex="-1">（3）在引入uview-plus的全局SCSS主题文件 <a class="header-anchor" href="#_3-在引入uview-plus的全局scss主题文件" aria-label="Permalink to &quot;（3）在引入uview-plus的全局SCSS主题文件&quot;">​</a></h3><p>也就是说：我们应该在项目根目录的<code>uni.scss</code>中引入此文件。</p><p>在项目根目录的uni.scss中引入此文件</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* uni.scss */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@import </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;uview-plus/theme.scss&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//注意路径是否正确</span></span></code></pre></div><p>项目没生效的话，清理缓存，关闭项目，重新下载依赖，再次启动，ok!</p><p>再次跑一下我们项目！OK,愉快的开发吧！</p><p><img src="`+e+'" alt="image.png"></p>',29)]))}const y=p(h,[["render",u]]);export{E as __pageData,y as default};
