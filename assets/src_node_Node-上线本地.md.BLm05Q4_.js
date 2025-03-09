import{_ as i,c as a,ag as n,o as t}from"./chunks/framework.wRLzwZz-.js";const g=JSON.parse('{"title":"Node部署上线","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"src/node/Node-上线本地.md","filePath":"src/node/Node-上线本地.md"}'),e={name:"src/node/Node-上线本地.md"};function h(l,s,p,k,r,d){return t(),a("div",null,s[0]||(s[0]=[n(`<h1 id="node部署上线" tabindex="-1">Node部署上线 <a class="header-anchor" href="#node部署上线" aria-label="Permalink to &quot;Node部署上线&quot;">​</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>Node上线挂载，指的是将Node.js应用程序部署到服务器上，使其能够通过互联网访问。</p><p>之前我们写的项目都是只能我们自己的本地访问的，接下来我们就把这个项目发布到我们的服务器上，让其他人也可以访问到。</p><h2 id="本地挂载-🚀-ngrok映射到外网" tabindex="-1">本地挂载(🚀 ngrok映射到外网) <a class="header-anchor" href="#本地挂载-🚀-ngrok映射到外网" aria-label="Permalink to &quot;本地挂载(🚀 ngrok映射到外网)&quot;">​</a></h2><p>首先第一种就是把我们自己电脑作为一个服务器，然后服务在我们本地运行，再经过路由器映射到公网，这样就可以让其他人访问了。</p><p>第一种方式就是我们通过ngrok映射到公网，然后通过公网访问。</p><h2 id="ngrok的使用" tabindex="-1">ngrok的使用 <a class="header-anchor" href="#ngrok的使用" aria-label="Permalink to &quot;ngrok的使用&quot;">​</a></h2><h3 id="_1、下载安装ngrok" tabindex="-1">1、下载安装ngrok <a class="header-anchor" href="#_1、下载安装ngrok" aria-label="Permalink to &quot;1、下载安装ngrok&quot;">​</a></h3><div class="language-JS vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JS</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># Mac用户</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">brew install ngrok</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># Windows用户</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># 直接去官网下载安装包：</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">https</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//ngrok.com/download</span></span></code></pre></div><h3 id="_2、创建账户并配置ngrok" tabindex="-1">2、创建账户并配置ngrok <a class="header-anchor" href="#_2、创建账户并配置ngrok" aria-label="Permalink to &quot;2、创建账户并配置ngrok&quot;">​</a></h3><p>配置token</p><div class="language-JS vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JS</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ngrok config add</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">authtoken your_token_here</span></span></code></pre></div><h3 id="_3-使用" tabindex="-1">3. 使用 <a class="header-anchor" href="#_3-使用" aria-label="Permalink to &quot;3. 使用&quot;">​</a></h3><p>☞ 暴露端口到公网</p><div class="language-JS vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JS</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ngrok http </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3000</span></span></code></pre></div><p>☞ TCP隧道：如果你需要暴露一个TCP服务（如数据库），可以使用 ngrok tcp 命令：</p><div class="language-JS vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JS</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ngrok tcp </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3306</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  # 用于暴露MySQL服务</span></span></code></pre></div><h3 id="🔥-进阶" tabindex="-1">🔥 进阶 <a class="header-anchor" href="#🔥-进阶" aria-label="Permalink to &quot;🔥 进阶&quot;">​</a></h3><p>☞ 自定义子域名 ngrok允许使用自定义的子域名（需要付费账户），如：</p><div class="language-JS vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JS</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ngrok http </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">subdomain</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">yourcustomname </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8080</span></span></code></pre></div><p>☞ 查看状态 ngrok还提供了一个 Web界面来查看连接状态，默认地址是：</p><div class="language-JS vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JS</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">http</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//localhost:4040</span></span></code></pre></div><h3 id="📕-ngrok报错以及处理" tabindex="-1">📕 ngrok报错以及处理 <a class="header-anchor" href="#📕-ngrok报错以及处理" aria-label="Permalink to &quot;📕 ngrok报错以及处理&quot;">​</a></h3><h4 id="☞-暴露数据库的时候报错" tabindex="-1">☞ 暴露数据库的时候报错 <a class="header-anchor" href="#☞-暴露数据库的时候报错" aria-label="Permalink to &quot;☞ 暴露数据库的时候报错&quot;">​</a></h4><div class="language-JS vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JS</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ERROR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:  failed to start </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tunnel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: You must add a credit or debit card before you can use </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">TCP</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> endpoints on a free account. We require a valid card </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> a</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> way</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> to</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> combat</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> abuse</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> and</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> keep</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> the</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> internet</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> a</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> safe</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> place</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">. </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">This</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> card</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> will</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> NOT</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  be</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> charged</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ERROR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:  Add a card to your account </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">here</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">https</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//dashboard.ngrok.com/settings#id-verification</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ERROR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ERROR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ERR_NGROK_8013</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ERROR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:  </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">https</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//ngrok.com/docs/errors/err_ngrok_8013</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ERROR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span></code></pre></div><p>原因</p><div class="language-JS vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JS</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ngrok 的免费账户无法使用 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">TCP</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 隧道功能，除非提供一个有效的信用卡或借记卡信息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ngrok 要求用户提供卡信息，以防止滥用和确保互联网的安全性，但实际上不会对你进行收费。</span></span></code></pre></div><h2 id="其他方法" tabindex="-1">其他方法： <a class="header-anchor" href="#其他方法" aria-label="Permalink to &quot;其他方法：&quot;">​</a></h2><p>花生壳内网映射</p><h2 id="上线服务器" tabindex="-1">上线服务器 <a class="header-anchor" href="#上线服务器" aria-label="Permalink to &quot;上线服务器&quot;">​</a></h2><p>首先我们来了解一下，Node.js是一个基于Chrome V8引擎的JavaScript运行环境，它允许开发者在服务器端运行JavaScript代码。Node.js应用程序通常使用Express框架来构建，并使用Nginx或Apache等Web服务器来托管。</p><p>Node.js应用程序的部署过程包括以下几个步骤：</p><ol><li>安装Node.js和npm（Node.js的包管理器）。</li><li>创建一个Node.js应用程序，并使用npm安装所需的依赖项。</li><li>在服务器上安装Nginx或Apache等Web服务器</li></ol>`,34)]))}const c=i(e,[["render",h]]);export{g as __pageData,c as default};
