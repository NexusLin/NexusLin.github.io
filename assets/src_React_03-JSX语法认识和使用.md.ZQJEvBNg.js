import{_ as a,c as s,o as n,a4 as p}from"./chunks/framework.DvHWMJgD.js";const m=JSON.parse('{"title":"❤React体系03-JSX语法的使用","description":"","frontmatter":{},"headers":[],"relativePath":"src/React/03-JSX语法认识和使用.md","filePath":"src/React/03-JSX语法认识和使用.md"}'),e={name:"src/React/03-JSX语法认识和使用.md"},l=p(`<h1 id="❤react体系03-jsx语法的使用" tabindex="-1">❤React体系03-JSX语法的使用 <a class="header-anchor" href="#❤react体系03-jsx语法的使用" aria-label="Permalink to &quot;❤React体系03-JSX语法的使用&quot;">​</a></h1><h2 id="_1、jsx基本使用" tabindex="-1">1、JSX基本使用 <a class="header-anchor" href="#_1、jsx基本使用" aria-label="Permalink to &quot;1、JSX基本使用&quot;">​</a></h2><p>JSX是React的核心 JSX是ES的扩展 jsx语法 -&gt; 普通的JavaScript代码 -&gt; babel</p><p>React可以使用JSX的前提和原因：</p><ol><li><strong>React生态系统支持：</strong> 脚手架通常用于构建React应用程序，而JSX是React框架的核心语法之一。因此，脚手架默认支持JSX语法，以便更轻松地编写和管理React组件。</li><li><strong>提高开发效率：</strong> JSX语法使得在JavaScript代码中编写类似HTML的结构更加直观和便捷，提高了开发者的开发效率和代码可读性。</li><li><strong>组件化开发：</strong> JSX语法支持组件化开发，使得开发者可以将UI拆分为独立的组件，更好地组织和管理代码结构，提高了应用的可维护性和可扩展性。</li><li><strong>工具支持：</strong> 脚手架通常配置了相应的编译器或转换工具（如Babel）来将JSX转换为浏览器可执行的纯JavaScript代码，使得开发者可以在开发阶段使用JSX语法，而不必担心浏览器的兼容性问题。</li></ol><h3 id="react-jsx语法" tabindex="-1">React JSX语法 <a class="header-anchor" href="#react-jsx语法" aria-label="Permalink to &quot;React JSX语法&quot;">​</a></h3><p><strong>格外注意：</strong></p><p><strong>定义虚拟DOM，不要使用引号。</strong></p><p>HTML 语言直接写在 JavaScript 语言之中，不加任何引号，这就是 JSX 的语法，它允许 HTML 与 JavaScript 的混写，不仅方便了React应用程序的开发，还提高了开发效率和代码质量。</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>javascript</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码var names = [&#39;Alice&#39;, &#39;Emily&#39;, &#39;Kate&#39;];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>React.render(</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    names.map(function (name) {</span></span>
<span class="line"><span>      return &lt;div&gt;Hello, {name}!&lt;/div&gt;</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  &lt;/div&gt;,</span></span>
<span class="line"><span>  document.getElementById(&#39;example&#39;)</span></span>
<span class="line"><span>);</span></span></code></pre></div><p>JSX 的基本语法规则：遇到 HTML 标签（以 &lt; 开头），就用 HTML 规则解析； 遇到代码块（以 { 开头），就用 JavaScript 规则解析。</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>javascript</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码&lt;div id=&quot;example&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span> &lt;script type=&quot;text/babel&quot;&gt;</span></span>
<span class="line"><span>      var names = [&#39;Alice&#39;, &#39;Emily&#39;, &#39;Kate&#39;];</span></span>
<span class="line"><span>      ReactDOM.render(</span></span>
<span class="line"><span>      &lt;div&gt;</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>          names.map(function(name,index){</span></span>
<span class="line"><span>            return &lt;div className=&quot;zhan&quot; key={index}&gt;这是{index}:{name} &lt;/div&gt;</span></span>
<span class="line"><span>          })</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      &lt;/div&gt;,</span></span>
<span class="line"><span>        document.getElementById(&#39;example&#39;)</span></span>
<span class="line"><span>      );</span></span>
<span class="line"><span> &lt;/script&gt;</span></span></code></pre></div><p>注意：</p><p>document.getElementById(&#39;example&#39;) 背后不能添加<code>;</code> 这个符号</p><h3 id="react的命名" tabindex="-1">React的命名 <a class="header-anchor" href="#react的命名" aria-label="Permalink to &quot;React的命名&quot;">​</a></h3><h4 id="驼峰命名法" tabindex="-1">驼峰命名法 <a class="header-anchor" href="#驼峰命名法" aria-label="Permalink to &quot;驼峰命名法&quot;">​</a></h4><p>想要在返回的div中添加类名：使用className=&quot;zhan&quot;而不是class</p><p>使用calss会提示</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码Invalid DOM property \`class\`. Did you mean \`className\`?</span></span></code></pre></div><p>JSX允许直接在模板插入 JavaScript 变量。如果这个变量是一个数组，则会展开这个数组的所有成员。</p><h4 id="特殊属性名" tabindex="-1">特殊属性名 <a class="header-anchor" href="#特殊属性名" aria-label="Permalink to &quot;特殊属性名&quot;">​</a></h4><p>1、React的属性名使用驼峰命名法</p><p>2、特殊属性名：</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码class=&gt; className</span></span>
<span class="line"><span>for=&gt;  htmlFor</span></span>
<span class="line"><span>tabindex=&gt;tabIndex</span></span></code></pre></div><p>3、没有子节点的可以以/&gt;结尾</p><p>4、推荐：使用小括号包裹JSX，从而避免自动插入分号陷阱</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码使用小括号包裹jsx</span></span>
<span class="line"><span>const div=(&lt;div&gt; hello jsx &lt;/div&gt;)</span></span></code></pre></div><h3 id="对应的错误" tabindex="-1">对应的错误： <a class="header-anchor" href="#对应的错误" aria-label="Permalink to &quot;对应的错误：&quot;">​</a></h3><p>（1）未使用驼峰命名法 <img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1727338442338-33f0a295-e75e-4494-93ab-3c1d824c07b5.webp" alt=""></p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>javascript</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码</span></span>
<span class="line"><span>var arr = [</span></span>
<span class="line"><span>  &lt;h1&gt;Hello world!&lt;/h1&gt;,</span></span>
<span class="line"><span>  &lt;h2&gt;React is awesome&lt;/h2&gt;,</span></span>
<span class="line"><span>];</span></span>
<span class="line"><span>React.render(</span></span>
<span class="line"><span>  &lt;div&gt;{arr}&lt;/div&gt;,</span></span>
<span class="line"><span>  document.getElementById(&#39;example&#39;)</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>案例:</span></span>
<span class="line"><span> &lt;div id=&quot;example&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>&lt;script type=&quot;text/babel&quot;&gt;</span></span>
<span class="line"><span>      var names = [</span></span>
<span class="line"><span>      &lt;span className=&quot;zhan&quot; key=&quot;1&quot;&gt;Alice&lt;/span&gt;,</span></span>
<span class="line"><span>      &lt;span className=&quot;zhan&quot; key=&quot;2&quot;&gt;Emily&lt;/span&gt;</span></span>
<span class="line"><span>      ];</span></span>
<span class="line"><span>      ReactDOM.render(</span></span>
<span class="line"><span>      &lt;div&gt;{names}&lt;/div&gt;,</span></span>
<span class="line"><span>      document.getElementById(&#39;example&#39;)</span></span>
<span class="line"><span>      );</span></span>
<span class="line"><span>     </span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h2 id="_2、-jsx之中使用javascript表达式" tabindex="-1">2、 JSX之中使用JavaScript表达式 <a class="header-anchor" href="#_2、-jsx之中使用javascript表达式" aria-label="Permalink to &quot;2、 JSX之中使用JavaScript表达式&quot;">​</a></h2><h3 id="_1-jsx中嵌入javascript表达式" tabindex="-1">（1） JSX中嵌入javascript表达式 <a class="header-anchor" href="#_1-jsx中嵌入javascript表达式" aria-label="Permalink to &quot;（1） JSX中嵌入javascript表达式&quot;">​</a></h3><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1727338442305-b6946995-20af-41ac-944c-5eef37ea7a91.webp" alt=""></p><h3 id="_2-jsx的条件渲染" tabindex="-1">（2） JSX的条件渲染 <a class="header-anchor" href="#_2-jsx的条件渲染" aria-label="Permalink to &quot;（2） JSX的条件渲染&quot;">​</a></h3><h4 id="_1️⃣-条件渲染" tabindex="-1">1️⃣ 条件渲染 ： <a class="header-anchor" href="#_1️⃣-条件渲染" aria-label="Permalink to &quot;1️⃣ 条件渲染 ：&quot;">​</a></h4><p>if else 加载中以及加载完成效果</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1727338442345-53f2ff12-f817-4df0-8c2f-f7281ff36f64.webp" alt=""></p><h4 id="_2️⃣-三元表达式" tabindex="-1">2️⃣ 三元表达式 <a class="header-anchor" href="#_2️⃣-三元表达式" aria-label="Permalink to &quot;2️⃣ 三元表达式&quot;">​</a></h4><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1727338442340-878a2426-0333-4395-9d38-55ac17247a4c.webp" alt=""></p><h4 id="_3️⃣-逻辑与运算符" tabindex="-1">3️⃣ 逻辑与运算符 <a class="header-anchor" href="#_3️⃣-逻辑与运算符" aria-label="Permalink to &quot;3️⃣ 逻辑与运算符&quot;">​</a></h4><p>逻辑与运算符是一种中断操作 <img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1727338442327-045c066a-2acb-4102-a6a4-e8c14c4324d5.webp" alt=""> 当前面成立的时候才执行，否则不执行</p><h3 id="_3-jsx的列表渲染" tabindex="-1">（3） JSX的列表渲染 <a class="header-anchor" href="#_3-jsx的列表渲染" aria-label="Permalink to &quot;（3） JSX的列表渲染&quot;">​</a></h3><p>map方法 <img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1727338442634-ea314410-bb9e-4ff4-ba90-70f2e497b795.webp" alt=""></p><p>随后我们发现会报错： <img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1727338442967-e57068eb-1799-4aa4-a0c7-9546b2d1ac2d.webp" alt=""></p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1727338442705-6969bb5e-2b45-410f-8be7-9d5ba3e9ad0e.webp" alt=""></p><p>加上key 属性唯一值，正确 同时需要注意的是：尽量避免使用索引号作为key值</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1727338442732-2ea30751-7dd3-4f62-b751-c28d4ace2647.webp" alt=""></p><h3 id="_4-jsx的样式处理" tabindex="-1">（4） JSX的样式处理 <a class="header-anchor" href="#_4-jsx的样式处理" aria-label="Permalink to &quot;（4） JSX的样式处理&quot;">​</a></h3><h4 id="_1️⃣-行内样式" tabindex="-1">1️⃣ 行内样式 <a class="header-anchor" href="#_1️⃣-行内样式" aria-label="Permalink to &quot;1️⃣ 行内样式&quot;">​</a></h4><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1727338442739-b2b23462-7519-4890-bd60-9470861fac37.webp" alt=""></p><h4 id="_2️⃣-类名-classname-推荐的方法" tabindex="-1">2️⃣ 类名（className 推荐的方法） <a class="header-anchor" href="#_2️⃣-类名-classname-推荐的方法" aria-label="Permalink to &quot;2️⃣ 类名（className 推荐的方法）&quot;">​</a></h4><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1727338443038-4c3bf75d-04fc-4fff-90c1-3e0bd6005dcb.webp" alt=""></p><h2 id="_3、-javascript语句和表达式" tabindex="-1">3、 JavaScript语句和表达式 <a class="header-anchor" href="#_3、-javascript语句和表达式" aria-label="Permalink to &quot;3、 JavaScript语句和表达式&quot;">​</a></h2><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码注意区分:【js语句(代码)】与【js表达式】</span></span>
<span class="line"><span>1.表达式:一个表达式会产生一个值，可以放在任何一个需要值的地方下面这些都是表达式:</span></span>
<span class="line"><span>(1).a</span></span>
<span class="line"><span>(2).a+b</span></span>
<span class="line"><span>(3).demo(1)</span></span>
<span class="line"><span>(4). arr.map()</span></span>
<span class="line"><span>(5).function test(){}2.语句(代码):</span></span>
<span class="line"><span>下面这些都是语句(代码):</span></span>
<span class="line"><span>(1).if(){}</span></span>
<span class="line"><span>(2).for(){}</span></span>
<span class="line"><span>(3).switch(){case:xxxx}</span></span></code></pre></div><p>作者：林太白<br> 链接：<a href="https://juejin.cn/post/7362023585517256744" target="_blank" rel="noreferrer">https://juejin.cn/post/7362023585517256744</a><br> 来源：稀土掘金<br> 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。</p>`,55),t=[l];function i(c,r,o,d,h,u){return n(),s("div",null,t)}const g=a(e,[["render",i]]);export{m as __pageData,g as default};
