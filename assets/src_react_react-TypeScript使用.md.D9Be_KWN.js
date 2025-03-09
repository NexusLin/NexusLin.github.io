import{_ as a,c as i,ag as n,o as p}from"./chunks/framework.wRLzwZz-.js";const o=JSON.parse('{"title":"❤ React-TypeScript认识和使用","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"src/react/react-TypeScript使用.md","filePath":"src/react/react-TypeScript使用.md"}'),l={name:"src/react/react-TypeScript使用.md"};function t(e,s,h,k,r,d){return p(),i("div",null,s[0]||(s[0]=[n(`<h1 id="❤-react-typescript认识和使用" tabindex="-1">❤ React-TypeScript认识和使用 <a class="header-anchor" href="#❤-react-typescript认识和使用" aria-label="Permalink to &quot;❤ React-TypeScript认识和使用&quot;">​</a></h1><p>更新部分包含以下内容...</p><ul><li>联合类型</li><li>类型别名</li><li>函数类型(1 单独指定参数和返回值的类型)</li><li>函数类型(2同时指定参数和返回值的类型)</li><li>void类型</li><li>函数可选参数</li><li>对象类型</li><li>对象可选属性</li><li>接口</li><li>接口和类型别名的对比</li><li>接口继承</li><li>元组</li><li>类型推论</li><li>类型断言</li></ul><h2 id="_1、认识typescript" tabindex="-1">1、认识TypeScript <a class="header-anchor" href="#_1、认识typescript" aria-label="Permalink to &quot;1、认识TypeScript&quot;">​</a></h2><h3 id="_1-typescript简介" tabindex="-1">（1）<strong>TypeScript简介</strong> <a class="header-anchor" href="#_1-typescript简介" aria-label="Permalink to &quot;（1）**TypeScript简介**&quot;">​</a></h3><p>————————————————</p><p>由微软开发的自由和开源的编程语言。是JavaScript的一个严格超集，并添加了可选的静态类型和使用看起来像基于类的面向对象编程语法操作Prototype</p><p>简单来说： TypeScript 是 JavaScript进化版，并添加了额外的语法来支持类型</p><p>————————————————</p><h3 id="_2-ts和js的关系" tabindex="-1">（2）<strong>Ts和JS的关系</strong> <a class="header-anchor" href="#_2-ts和js的关系" aria-label="Permalink to &quot;（2）**Ts和JS的关系**&quot;">​</a></h3><p><img src="https://cdn.nlark.com/yuque/0/2025/webp/22435914/1738336979455-748a5825-bdff-4184-ace2-a5242b3f873d.webp" alt=""></p><h3 id="_3-ts命名上" tabindex="-1">（3）<strong>TS命名上：</strong> <a class="header-anchor" href="#_3-ts命名上" aria-label="Permalink to &quot;（3）**TS命名上：**&quot;">​</a></h3><p>TypeScript 文件的扩展是 .ts ，而不是 JavaScript 文件的 .js 扩展名 TypeScript的优化 • 将可选类型引入 JavaScript。 • 在当前 JavaScript 的基础上实现未来 JavaScript 的计划功能，即 ECMAScript Next 或 ES Next。</p><h3 id="_4-ts增加的功能上" tabindex="-1">（4）<strong>TS增加的功能上</strong> <a class="header-anchor" href="#_4-ts增加的功能上" aria-label="Permalink to &quot;（4）**TS增加的功能上**&quot;">​</a></h3><ul><li>类型批注和编译时类型检查</li><li>类型推断</li><li>类型擦除</li><li>接口</li><li>枚举</li><li>Mixin</li><li>泛型编程</li><li>名字空间</li><li>元组</li><li>Await</li></ul><p>以下功能是从 ECMA 2015 反向移植而来：</p><ul><li>类</li><li>模块</li><li>lambda 函数的箭头语法</li><li>可选参数以及默认参数</li></ul><h3 id="_5-ts基本类型" tabindex="-1">（5）TS基本类型 <a class="header-anchor" href="#_5-ts基本类型" aria-label="Permalink to &quot;（5）TS基本类型&quot;">​</a></h3><p>（1）JavaScript 已有类型</p><p>原始类型： number/string/boolean/null/undefined/symbol</p><p>对象类型：object(数组、对象、函数等)</p><p>（2）TypeScript 新增类型 联合类型、自定义类型（类型别名）、接口、元祖、字面量类型、枚举、void、any 等</p><p>总结（TypeScript常用基础类型分类）</p><p>TypeScript的基础类型主要有布尔值、数字、字符串、数组、元组、枚举、Any、Void、Null 、Undefined、Never、Object等。</p><p>总结（TypeScript 原始类型 ）</p><p>原始数据类型包括：Boolean、Number、String、Null、Undefined、Symbol（ES6 新增）</p><h2 id="_2、typescript的优缺点" tabindex="-1">2、<strong>TypeScript的优缺点：</strong> <a class="header-anchor" href="#_2、typescript的优缺点" aria-label="Permalink to &quot;2、**TypeScript的优缺点：**&quot;">​</a></h2><p>你可以初步的理解为：</p><p><code>TypeScript为JavaScript添加了类型支持</code></p><h3 id="ts相比js的优势" tabindex="-1">TS相比JS的优势 <a class="header-anchor" href="#ts相比js的优势" aria-label="Permalink to &quot;TS相比JS的优势&quot;">​</a></h3><ol><li>（类型系统）JS有的TypeScript都有，是Type和JavaScipt的结合，在JS的基础上为 JS 添加了类型系统，强大的类型系统提升了代码的可维护性，使得重构代码更加容易。</li><li>从编程语言的动静来区分，TypeScript属于静态类型的编程语言，JS属于动态类型的编程语言。</li><li>静态类型是编译期做类型检查，动态类型是执行期做类型检查。代码编译和代码执行的顺序本身是1编译2执行.通过使用类型，我们可以在编译时捕获错误，而不是让它们在运行时发生。</li><li>支持最新的ECMAScript语法，优先体验最新的语法，时刻在前端技术的最前沿。</li><li>对于JS来说：需要等到代码真正去执行的时候才能发现错误(晚)。</li><li>对于TS来说：在代码编译的时候(代码执行前)就可以发现措误(早)。</li><li>TS类型推断机制，不需要在代码中的每个地方都显示标注类型，让你在享受优势的同时，尽量降低了成本。除此之外，Vue3源码使用TS重写、Angular默认支持TS、React与TS完美配合，TypeScript已成为大中型前端项目的首先编程语言。 10.配合VSCode等开发工具,在程序中任何位置的代码都有代码提示。更早(写代码的同时)发现错误，减少找Bug、改Bug时间，提升开发效率,开发体验更友好</li></ol><p><strong>TypeScript小案列：:</strong></p><p>JavaScript 相加函数使用：</p><p>如果我们从 HTML 输入元素中获取值并将它们传递给函数，我们可能会得到意想不到的结果</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>javascript</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码function add(x, y) {</span></span>
<span class="line"><span>   return x + y;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let result = add(input1.value, input2.value);</span></span>
<span class="line"><span>console.log(result); // result of concatenating strings</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>let result = add(&#39;10&#39;, 20);</span></span>
<span class="line"><span>console.log(result); // 1020用户输入 10 和 20，则 add()函数将返回 1020，而不是 30</span></span></code></pre></div><p><strong>原因:</strong></p><p>input1.value 和 input2.value 是字符串，而不是数字</p><p>TypeScript 相加函数使用</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>javascript</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码function add(x: number, y: number) {</span></span>
<span class="line"><span>	return x + y;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>指定函数的参数类型为数字类型时， 函数 add() 将只接受数字，而不接受任何其他值</p><h2 id="_3、安装和使用" tabindex="-1">3、安装和使用 <a class="header-anchor" href="#_3、安装和使用" aria-label="Permalink to &quot;3、安装和使用&quot;">​</a></h2><h3 id="安装编译ts的工具包" tabindex="-1">安装编译TS的工具包 <a class="header-anchor" href="#安装编译ts的工具包" aria-label="Permalink to &quot;安装编译TS的工具包&quot;">​</a></h3><p>打开Windows下的命令提示符，输入命令</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>javascript</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码npm install -g typescript //安装</span></span>
<span class="line"><span>tsc -v  //查看版本</span></span></code></pre></div><p><img src="https://cdn.nlark.com/yuque/0/2025/webp/22435914/1738336979421-d27abd4f-585a-440a-875d-483fafaf9ce8.webp" alt=""></p><h3 id="编译并运行ts代码" tabindex="-1">编译并运行TS代码 <a class="header-anchor" href="#编译并运行ts代码" aria-label="Permalink to &quot;编译并运行TS代码&quot;">​</a></h3><p>创建一个app.ts文件</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>javascript</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码const hello : string = &quot;Hello World!&quot;</span></span>
<span class="line"><span>console.log(hello)</span></span></code></pre></div><p>执行以下命令将 TypeScript 转换为 JavaScript 代码</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>javascript</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码tsc app.ts //将 TypeScript 转换为 JavaScript 代码</span></span>
<span class="line"><span>node app.js  //输出hello word</span></span></code></pre></div><h3 id="简化运行ts的步骤" tabindex="-1">简化运行TS的步骤 <a class="header-anchor" href="#简化运行ts的步骤" aria-label="Permalink to &quot;简化运行TS的步骤&quot;">​</a></h3><p>使用 ts-node包，直接在Node.js中执行TS代码</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>javascript</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码安装命令</span></span>
<span class="line"><span>npm i -g ts-node </span></span>
<span class="line"><span>使用方式：</span></span>
<span class="line"><span>ts-node ts文件名</span></span></code></pre></div><p><img src="https://cdn.nlark.com/yuque/0/2025/webp/22435914/1738336979477-b6ede780-a5d8-475b-9a76-93226279551c.webp" alt=""></p><h2 id="_4、基本语法" tabindex="-1">4、基本语法 <a class="header-anchor" href="#_4、基本语法" aria-label="Permalink to &quot;4、基本语法&quot;">​</a></h2><h3 id="类型注解" tabindex="-1">类型注解 <a class="header-anchor" href="#类型注解" aria-label="Permalink to &quot;类型注解&quot;">​</a></h3><p>类型注解是TypeScript区别于JavaScript最显著的特点</p><p>不同数据类型变量的类型注解</p><p>TypeScript 使用类型注释来显式指定标识符的类型，例如变量、函数、对象等</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>javascript</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码var age: number = 44;          // 数字变量</span></span>
<span class="line"><span>var name: string = &quot;Rahul&quot;;     // 字符串变量</span></span>
<span class="line"><span>var isUpdated: boolean = true; // 布尔变量</span></span></code></pre></div><p>这里面代码之中的<code> : number</code> 就是类型注解</p><h2 id="_6、ts在react之中的使用" tabindex="-1">6、Ts在React之中的使用 <a class="header-anchor" href="#_6、ts在react之中的使用" aria-label="Permalink to &quot;6、Ts在React之中的使用&quot;">​</a></h2><h3 id="_1-基本类型使用" tabindex="-1">（1）基本类型使用 <a class="header-anchor" href="#_1-基本类型使用" aria-label="Permalink to &quot;（1）基本类型使用&quot;">​</a></h3><p>常见的一些类型只需要在后面加一个类型注解就可以</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> age</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 18</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> myName</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;老师&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> isLoading</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span></span></code></pre></div><h3 id="_2-数组类型的两种写法" tabindex="-1">（2）数组类型的两种写法 <a class="header-anchor" href="#_2-数组类型的两种写法" aria-label="Permalink to &quot;（2）数组类型的两种写法&quot;">​</a></h3><p>这里我推荐第一种写法，因为非常清晰</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 写法一： let numbers: number[] = [1, 3, 5] </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 写法二： let strings: Array&lt;string&gt; = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;]</span></span></code></pre></div><h3 id="_3-联合类型写法" tabindex="-1">（3）联合类型写法 <a class="header-anchor" href="#_3-联合类型写法" aria-label="Permalink to &quot;（3）联合类型写法&quot;">​</a></h3><p>数组中既有 number 类型，又有 string 类型</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">正常我们的数组数据定义是这样子：</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> arr</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">加上我们想要约束的数字类型</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> arr</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">如果这个数组里面又有number 类型，又有 string 类型</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">这个时候我们就需要更改为联合类型：</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> arr</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">number</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)[]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;a&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;b&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span></code></pre></div><h3 id="_4-类型别名" tabindex="-1">（4）类型别名 <a class="header-anchor" href="#_4-类型别名" aria-label="Permalink to &quot;（4）类型别名&quot;">​</a></h3><p>当上述的代码类型我们多次使用的时候，难免会出现大量的堆积 这个时候我们可以使用类型别名来简化代码，复用</p><p><code>这块说白了，还是抽离和复用思想，简单的很</code></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> arrA</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">number</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)[]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;a&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;b&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> arrB</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">number</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)[]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;a&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;b&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">我们使用类型别名优化以后</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CustomArray</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">number</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)[]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> arrA</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CustomArray</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;a&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;b&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> arrB</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CustomArray</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;a&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;b&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span></code></pre></div>`,75)]))}const g=a(l,[["render",t]]);export{o as __pageData,g as default};
