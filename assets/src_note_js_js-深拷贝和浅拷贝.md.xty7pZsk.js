import{_ as s,c as n,o as p,ag as e}from"./chunks/framework.CqxIsSM8.js";const b=JSON.parse('{"title":"手写深拷贝和浅拷贝","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"src/note/js/js-深拷贝和浅拷贝.md","filePath":"src/note/js/js-深拷贝和浅拷贝.md","lastUpdated":1751364440000}'),l={name:"src/note/js/js-深拷贝和浅拷贝.md"};function i(o,a,t,c,r,h){return p(),n("div",null,a[0]||(a[0]=[e(`<h1 id="手写深拷贝和浅拷贝" tabindex="-1">手写深拷贝和浅拷贝 <a class="header-anchor" href="#手写深拷贝和浅拷贝" aria-label="Permalink to &quot;手写深拷贝和浅拷贝&quot;">​</a></h1><blockquote><p>深拷贝和浅拷贝针对的其实都是我们的引用类型，对于基本类型其实只有赋值操作。</p></blockquote><blockquote><p>浅拷贝适用：适用于单层</p><p>深拷贝适用：多层</p></blockquote><h2 id="_1、实现方式" tabindex="-1">1、实现方式 <a class="header-anchor" href="#_1、实现方式" aria-label="Permalink to &quot;1、实现方式&quot;">​</a></h2><h3 id="浅拷贝的实现方式" tabindex="-1">浅拷贝的实现方式： <a class="header-anchor" href="#浅拷贝的实现方式" aria-label="Permalink to &quot;浅拷贝的实现方式：&quot;">​</a></h3><blockquote><ol><li>Object.assign</li><li>扩展运算符</li><li>Array.prototype.slice()</li><li>Array.prototype.concat()</li><li>Array.from()</li></ol></blockquote><h3 id="深拷贝的实现方式" tabindex="-1">深拷贝的实现方式： <a class="header-anchor" href="#深拷贝的实现方式" aria-label="Permalink to &quot;深拷贝的实现方式：&quot;">​</a></h3><blockquote><ol><li>JSON.parse(JSON.stringify(obj))</li><li>递归</li><li>lodash的cloneDeep方法</li></ol></blockquote><h2 id="_2、浅拷贝" tabindex="-1">2、浅拷贝 <a class="header-anchor" href="#_2、浅拷贝" aria-label="Permalink to &quot;2、浅拷贝&quot;">​</a></h2><h3 id="浅拷贝的实现方式-1" tabindex="-1">浅拷贝的实现方式： <a class="header-anchor" href="#浅拷贝的实现方式-1" aria-label="Permalink to &quot;浅拷贝的实现方式：&quot;">​</a></h3><blockquote><ol><li>Object.assign</li><li>扩展运算符</li><li>Array.prototype.slice()</li><li>Array.prototype.concat()</li><li>Array.from()</li></ol></blockquote><p><code>浅拷贝方法都只会复制对象和数组的第一层属性，对于嵌套对象或数组的修改会影响到原对象</code></p><ul><li>浅拷贝是创建一个新对象，这个对象有着原始对象属性值的一份精确拷贝。如果属性是基本类型，拷贝的就是基本类型的值，如果属性是引用类型，拷贝的就是内存地址 ，所以如果其中一个对象改变了这个地址，这时候就会影响到另一个对象。</li><li>简单举个例子： 我们现在想通过复制objA对象来创建一个objB对象，并且修改objB中的info属性，看看是否会影响objA对象。</li></ul><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> const objA = {</span></span>
<span class="line"><span>      name: &#39;zhangsan&#39;,</span></span>
<span class="line"><span>      age: 18,</span></span>
<span class="line"><span>      info: {</span></span>
<span class="line"><span>        gender: &#39;male&#39;,</span></span>
<span class="line"><span>        height: 180</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    console.log(objA, &#39;objA--更改以前&#39;);</span></span>
<span class="line"><span>    const objB = objA;</span></span>
<span class="line"><span>    objB.age = 20;</span></span>
<span class="line"><span>    objB.info.gender = &#39;female&#39;;</span></span>
<span class="line"><span>    console.log(objB, &#39;objB&#39;);</span></span>
<span class="line"><span>    console.log(objA, &#39;objA--更改以后&#39;);</span></span></code></pre></div><p>查看输出结果：</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;name&quot;: &quot;zhangsan&quot;,</span></span>
<span class="line"><span>    &quot;age&quot;: 20,</span></span>
<span class="line"><span>    &quot;info&quot;: {</span></span>
<span class="line"><span>        &quot;gender&quot;: &quot;female&quot;,</span></span>
<span class="line"><span>        &quot;height&quot;: 180</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>},&#39;objA--更改以前&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>{ </span></span>
<span class="line"><span>  name: &#39;zhangsan&#39;, </span></span>
<span class="line"><span>  age: 20, </span></span>
<span class="line"><span>  info: { gender: &#39;female&#39;, height: 180 } </span></span>
<span class="line"><span>} &#39;objB&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{ </span></span>
<span class="line"><span>  name: &#39;zhangsan&#39;, </span></span>
<span class="line"><span>  age: 20, </span></span>
<span class="line"><span>  info: { gender: &#39;female&#39;, height: 180 } </span></span>
<span class="line"><span>} &#39;objA--更改以后&#39;</span></span></code></pre></div><p>查看输出我们可以发现，objB中的info属性被修改了，但是objA中的info属性也被修改了，这就是浅拷贝带来的问题。</p><blockquote><p>基础类型中的age,浅拷贝成功了，但是引用类型中的info属性，浅拷贝并没有成功，因为浅拷贝只是拷贝了引用类型的地址，并没有拷贝地址指向的内容，所以修改objB中的info属性，objA中的info属性也被修改了。</p></blockquote><h3 id="_1-object-assign-拷贝对象" tabindex="-1">1. Object.assign() 拷贝对象 <a class="header-anchor" href="#_1-object-assign-拷贝对象" aria-label="Permalink to &quot;1. Object.assign() 拷贝对象&quot;">​</a></h3><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const objA = {</span></span>
<span class="line"><span>    name: &#39;zhangsan&#39;,</span></span>
<span class="line"><span>    age: 18,</span></span>
<span class="line"><span>    info: {</span></span>
<span class="line"><span>      gender: &#39;male&#39;,</span></span>
<span class="line"><span>      height: 180</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  const objB = Object.assign({}, objA);// 浅拷贝</span></span>
<span class="line"><span>  objB.info.gender = &#39;female&#39;;</span></span>
<span class="line"><span>  console.log(objB, &#39;objB&#39;);</span></span>
<span class="line"><span>  console.log(objA, &#39;objA--更改以后&#39;);</span></span></code></pre></div><h3 id="_2-展开运算符" tabindex="-1">2. 展开运算符（...） <a class="header-anchor" href="#_2-展开运算符" aria-label="Permalink to &quot;2. 展开运算符（...）&quot;">​</a></h3><blockquote><p>对象的浅拷贝可以使用展开运算符（...）来实现，例如：</p></blockquote><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const original = { a: 1, b: { c: 2 } };</span></span>
<span class="line"><span>const shallowCopy = { ...original };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(shallowCopy); // 输出: { a: 1, b: { c: 2 } }</span></span>
<span class="line"><span>shallowCopy.b.c = 3;</span></span>
<span class="line"><span>console.log(original.b.c); // 输出: 3 (原对象也受到影响)</span></span></code></pre></div><h4 id="浅拷贝数组" tabindex="-1">浅拷贝数组 <a class="header-anchor" href="#浅拷贝数组" aria-label="Permalink to &quot;浅拷贝数组&quot;">​</a></h4><blockquote><p>数组的浅拷贝可以使用展开运算符（...）来实现，例如：</p></blockquote><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const originalArray = [1, 2, [3, 4]];</span></span>
<span class="line"><span>const shallowCopyArray = [...originalArray];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(shallowCopyArray); // 输出: [1, 2, [3, 4]]</span></span>
<span class="line"><span>shallowCopyArray[2][0] = &#39;changed&#39;;</span></span>
<span class="line"><span>console.log(originalArray); // 输出: [1, 2, [&#39;changed&#39;, 4]]</span></span></code></pre></div><h3 id="_3-array-prototype-slice" tabindex="-1">3. <code>Array.prototype.slice()</code> <a class="header-anchor" href="#_3-array-prototype-slice" aria-label="Permalink to &quot;3. \`Array.prototype.slice()\`&quot;">​</a></h3><p>对于数组，可以使用 slice() 方法进行浅拷贝</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const originalArray = [1, 2, [3, 4]];</span></span>
<span class="line"><span>const shallowCopyArray = originalArray.slice();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(shallowCopyArray); // 输出: [1, 2, [3, 4]]</span></span>
<span class="line"><span>shallowCopyArray[2][0] = &#39;changed&#39;;</span></span>
<span class="line"><span>console.log(originalArray); // 输出: [1, 2, [&#39;changed&#39;, 4]]</span></span></code></pre></div><h3 id="_4-使用-array-from" tabindex="-1">4. 使用 <code>Array.from()</code> <a class="header-anchor" href="#_4-使用-array-from" aria-label="Permalink to &quot;4. 使用 \`Array.from()\`&quot;">​</a></h3><p>Array.from() 方法也可以用于创建数组的浅拷贝</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const originalArray = [1, 2, [3, 4]];</span></span>
<span class="line"><span>const shallowCopyArray = Array.from(originalArray);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(shallowCopyArray); // 输出: [1, 2, [3, 4]]</span></span>
<span class="line"><span>shallowCopyArray[2][0] = &#39;changed&#39;;</span></span>
<span class="line"><span>console.log(originalArray); // 输出: [1, 2, [&#39;changed&#39;, 4]]</span></span></code></pre></div><h3 id="_5-array-prototype-concat-拷贝数组" tabindex="-1">5. <code>Array.prototype.concat()</code> 拷贝数组 <a class="header-anchor" href="#_5-array-prototype-concat-拷贝数组" aria-label="Permalink to &quot;5. \`Array.prototype.concat()\` 拷贝数组&quot;">​</a></h3><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const arrA = [1, 2, 3, 4, 5];</span></span>
<span class="line"><span>const arrB = arrA.concat();// 浅拷贝</span></span></code></pre></div><h2 id="_3、深拷贝" tabindex="-1">3、深拷贝 <a class="header-anchor" href="#_3、深拷贝" aria-label="Permalink to &quot;3、深拷贝&quot;">​</a></h2><p>深拷贝是将一个对象从内存中完整的拷贝一份出来,从堆内存中开辟一个新的区域存放新对象,且修改新对象不会影响原对象。</p><ul><li>深拷贝的实现方式：</li></ul><blockquote><ol><li>JSON.parse(JSON.stringify(obj))</li><li>递归</li><li>lodash的cloneDeep方法</li></ol></blockquote><h3 id="_1、json-parse-json-stringify-obj" tabindex="-1">1、<code>JSON.parse(JSON.stringify(obj))</code> <a class="header-anchor" href="#_1、json-parse-json-stringify-obj" aria-label="Permalink to &quot;1、\`JSON.parse(JSON.stringify(obj))\`&quot;">​</a></h3><blockquote><p>JSON.parse(JSON.stringify(obj))是深拷贝最简单的一种方式，但是它有以下几个问题：</p></blockquote><ul><li>会忽略undefined、symbol和函数</li><li>不能序列化函数</li><li>不能解决循环引用的对象</li><li>不能正确处理new Date()和RegExp类型</li><li>不能处理原型链上的属性</li></ul><h4 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h4><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const objA = {</span></span>
<span class="line"><span>  name: &#39;zhangsan&#39;,</span></span>
<span class="line"><span>  age: 18,</span></span>
<span class="line"><span>  info: {</span></span>
<span class="line"><span>    gender: &#39;male&#39;,</span></span>
<span class="line"><span>    height: 180</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  hobbyL:[&#39;篮球&#39;,&#39;足球&#39;]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const objB = JSON.parse(JSON.stringify(objA));</span></span></code></pre></div><h3 id="_2、-递归" tabindex="-1">2、 递归 <a class="header-anchor" href="#_2、-递归" aria-label="Permalink to &quot;2、 递归&quot;">​</a></h3><blockquote><p>递归是深拷贝最常用的方法，但是需要注意循环引用的问题。</p></blockquote><h4 id="使用-1" tabindex="-1">使用 <a class="header-anchor" href="#使用-1" aria-label="Permalink to &quot;使用&quot;">​</a></h4><ul><li>深拷贝的递归方式实现思路如下：</li></ul><p><code>简单手写一个深拷贝函数,然后判断一下类型，如果是对象或者数组，则递归调用深拷贝函数，否则直接返回该值，这里注意的就是先判断数组类型，因为数组也是对象，但是我们需要先判断数组，否则会报错。</code></p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> // 深拷贝 </span></span>
<span class="line"><span>  const objA = {</span></span>
<span class="line"><span>    name: &#39;zhangsan&#39;,</span></span>
<span class="line"><span>    age: 18,</span></span>
<span class="line"><span>    info: {</span></span>
<span class="line"><span>      gender: &#39;male&#39;,</span></span>
<span class="line"><span>      height: 180</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    hobbyL:[&#39;篮球&#39;,&#39;足球&#39;]</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const o=new Object();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  console.log(objA, &#39;objA--更改以前&#39;);</span></span>
<span class="line"><span>  function deepClone(newObj, oldObj) {  </span></span>
<span class="line"><span>    for (let k in oldObj) {</span></span>
<span class="line"><span>      let item = oldObj[k]; // 获取属性值</span></span>
<span class="line"><span>      if (item instanceof Array) {</span></span>
<span class="line"><span>        newObj[k] = []</span></span>
<span class="line"><span>        deepClone(newObj[k], item)</span></span>
<span class="line"><span>      } else if (item instanceof Object) {</span></span>
<span class="line"><span>        newObj[k] = {}</span></span>
<span class="line"><span>        deepClone(newObj[k], item)</span></span>
<span class="line"><span>      } else {</span></span>
<span class="line"><span>        newObj[k] = item</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span></code></pre></div><h3 id="_3、lodash的clonedeep方法" tabindex="-1">3、lodash的cloneDeep方法 <a class="header-anchor" href="#_3、lodash的clonedeep方法" aria-label="Permalink to &quot;3、lodash的cloneDeep方法&quot;">​</a></h3><blockquote><p>lodash是一个js工具库，封装了很多常用的方法，其中就包括深拷贝方法，我们可以直接使用。</p></blockquote><p>官方的在线地址： <a href="https://www.lodashjs.com/" target="_blank" rel="noreferrer">https://www.lodashjs.com/</a></p><h4 id="安装" tabindex="-1">安装： <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装：&quot;">​</a></h4><p>浏览器环境：</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;script src=&quot;lodash.js&quot;&gt;&lt;/script&gt;</span></span></code></pre></div><p>通过 npm：</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ npm i -g npm</span></span>
<span class="line"><span>$ npm i --save lodash</span></span></code></pre></div><h4 id="使用-2" tabindex="-1">使用 <a class="header-anchor" href="#使用-2" aria-label="Permalink to &quot;使用&quot;">​</a></h4><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const _ = require(&#39;lodash&#39;);</span></span>
<span class="line"><span>const objA = {</span></span>
<span class="line"><span>  name: &#39;zhangsan&#39;,</span></span>
<span class="line"><span>  age: 18,</span></span>
<span class="line"><span>  info: {</span></span>
<span class="line"><span>    gender: &#39;male&#39;,</span></span>
<span class="line"><span>    height: 180</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  hobbyL:[&#39;篮球&#39;,&#39;足球&#39;]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const objB = _.cloneDeep(objA);</span></span></code></pre></div>`,59)]))}const g=s(l,[["render",i]]);export{b as __pageData,g as default};
