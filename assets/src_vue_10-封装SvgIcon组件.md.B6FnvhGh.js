import{_ as s,c as n,o as a,a4 as p}from"./chunks/framework.DvHWMJgD.js";const v=JSON.parse('{"title":"Vue3中封装SvgIcon组件（Vue3系统篇十一 ）","description":"","frontmatter":{},"headers":[],"relativePath":"src/vue/10-封装SvgIcon组件.md","filePath":"src/vue/10-封装SvgIcon组件.md"}'),e={name:"src/vue/10-封装SvgIcon组件.md"},l=p(`<h1 id="vue3中封装svgicon组件-vue3系统篇十一" tabindex="-1">Vue3中封装SvgIcon组件（Vue3系统篇十一 ） <a class="header-anchor" href="#vue3中封装svgicon组件-vue3系统篇十一" aria-label="Permalink to &quot;Vue3中封装SvgIcon组件（Vue3系统篇十一 ）&quot;">​</a></h1><h2 id="_1、认识svgicon组件作用" tabindex="-1">1、认识SvgIcon组件作用 <a class="header-anchor" href="#_1、认识svgicon组件作用" aria-label="Permalink to &quot;1、认识SvgIcon组件作用&quot;">​</a></h2><p>首先我们应该认识一下svg并且知道Svg格式图片的好处，这里可以去看一下我这篇svg部分的文章。</p><p>地址<a href="https://juejin.cn/spost/7394784501933277211" target="_blank" rel="noreferrer">juejin.cn/spost/73947…</a></p><ul><li>为什么要将svg其封装成一个单独的组件</li></ul><p>SvgIcon组件在Vue中用于专门展示SVG图标，可以充分利用SVG的优点，使得图标的显示和交互都能得到更好的支持。</p><ol><li>可缩放性：SvgIcon组件可以利用SVG的特性，使得图标可以在不失真的情况下进行缩放。这对于需要根据用户需求动态调整大小或者需要在不同分辨率下都能清晰显示的图标来说非常有用。</li><li>可编辑性：由于SVG图标是由XML代码定义的，因此可以方便地进行修改和编辑。这在需要定制图标或者图标需要经常变动的情况下非常方便。</li><li>支持复杂交互：SVG图标可以支持鼠标事件（如点击、悬停等），这使得可以在图标上实现一些复杂的交互功能。</li></ol><h2 id="_2、借助vite-plugin-svg-icons-d-封装过程-项目采用" tabindex="-1">2、借助<code>vite-plugin-svg-icons -D</code> 封装过程（项目采用） <a class="header-anchor" href="#_2、借助vite-plugin-svg-icons-d-封装过程-项目采用" aria-label="Permalink to &quot;2、借助\`vite-plugin-svg-icons -D\` 封装过程（项目采用）&quot;">​</a></h2><p>这里我的项目采用的是这个方式</p><p>我们借助插件实现SvgIcon组件的封装，具体步骤如下：</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1727259481263-4607c613-7c83-4e01-a974-f73ebd2678a8.webp" alt="">.</p><h3 id="_1-安装插件-yarn-add-d-vite-plugin-svg-icons" tabindex="-1">（1）安装插件：<code>yarn add -D vite-plugin-svg-icons</code> <a class="header-anchor" href="#_1-安装插件-yarn-add-d-vite-plugin-svg-icons" aria-label="Permalink to &quot;（1）安装插件：\`yarn add -D vite-plugin-svg-icons\`&quot;">​</a></h3><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码</span></span>
<span class="line"><span>yarn add -D vite-plugin-svg-icons</span></span></code></pre></div><p>安装成功以后可以看到我们的依赖项</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1727259481263-1cf622bc-ad02-44f5-80a5-25ca1124339d.webp" alt=""></p><h3 id="_2-配置vite-config-js-vite-config-ts-配置文件-导入-并将其插件配置到plugins数组当中" tabindex="-1">（2）配置vite.config.js（vite.config.ts）配置文件，导入，并将其插件配置到plugins数组当中 <a class="header-anchor" href="#_2-配置vite-config-js-vite-config-ts-配置文件-导入-并将其插件配置到plugins数组当中" aria-label="Permalink to &quot;（2）配置vite.config.js（vite.config.ts）配置文件，导入，并将其插件配置到plugins数组当中&quot;">​</a></h3><p>这里代表我们将svg的所有组件全部封装进入<code>src/assets/svg</code> 这个下面</p><p><strong>在</strong><code>**vite.config.ts**</code><strong>中配置插件</strong></p><p>注意这里的iconDirs 背后的地址就是你svg文件夹的那个地址：</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码</span></span>
<span class="line"><span>import { createSvgIconsPlugin } from &#39;vite-plugin-svg-icons&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineConfig({</span></span>
<span class="line"><span>    base: &#39;/&#39;,</span></span>
<span class="line"><span>    plugins: [</span></span>
<span class="line"><span>        createSvgIconsPlugin({</span></span>
<span class="line"><span>            iconDirs: [path.resolve(process.cwd(), &#39;src/assets/icons&#39;)],</span></span>
<span class="line"><span>            symbolId: &#39;icon-[dir]-[name]&#39;,</span></span>
<span class="line"><span>        }),</span></span>
<span class="line"><span>        vue(),</span></span>
<span class="line"><span>        // svgBuilder(&#39;./src/assets/svg/&#39;),// 这里已经将src/assets/svg/下的svg全部导入，无需再单独导入</span></span>
<span class="line"><span>        //视图分析工具</span></span>
<span class="line"><span>        visualizer({</span></span>
<span class="line"><span>            open: true, //在默认用户代理中打开生成的文件</span></span>
<span class="line"><span>            gzipSize: true, // 收集 gzip 大小并将其显示</span></span>
<span class="line"><span>            brotliSize: true, // 收集 brotli 大小并将其显示</span></span>
<span class="line"><span>            filename: &quot;repotrs.html&quot;, // 分析图生成的文件名</span></span>
<span class="line"><span>        }),</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    resolve: {</span></span>
<span class="line"><span>        // 解决公共路径问题</span></span>
<span class="line"><span>        alias: {</span></span>
<span class="line"><span>            &#39;@&#39;: path.resolve(__dirname, &#39;src&#39;)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>})</span></span></code></pre></div><h3 id="_3-main-ts入口文件导入-大坑" tabindex="-1">（3）<strong>main.ts入口文件导入</strong> （大坑） <a class="header-anchor" href="#_3-main-ts入口文件导入-大坑" aria-label="Permalink to &quot;（3）**main.ts入口文件导入** （大坑）&quot;">​</a></h3><p>配置main.js(main.ts)，在其中注册svg图标</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码import &#39;virtual:svg-icons-register&#39;</span></span></code></pre></div><p>报错： <img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1727259481299-4e3589b8-eb23-43ed-8551-be0c2becd56f.webp" alt=""></p><p>安装<code>fast-glob</code>依赖</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码yarn add fast-glob -D</span></span></code></pre></div><p>src下面新建立一个components文件夹，下面建立一个 SvgIcon</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码&lt;template&gt;</span></span>
<span class="line"><span>  &lt;!--svg外层容器，需要配置子元素use使用--&gt;</span></span>
<span class="line"><span>  &lt;svg :style=&quot;{width, height}&quot;&gt;</span></span>
<span class="line"><span>    &lt;!--xlink:href引用的svg图标，#icon-图标名--&gt;</span></span>
<span class="line"><span>    &lt;use :xlink:href=&quot;symbolId&quot; :fill=&quot;fill&quot; /&gt;</span></span>
<span class="line"><span>  &lt;/svg&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import {computed,defineProps} from &quot;vue&quot;</span></span>
<span class="line"><span>const props = defineProps({</span></span>
<span class="line"><span>  prefix: {</span></span>
<span class="line"><span>    type: String,</span></span>
<span class="line"><span>    default: &#39;icon&#39;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  name: {</span></span>
<span class="line"><span>    type: String,</span></span>
<span class="line"><span>    required: true</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  width: {</span></span>
<span class="line"><span>    type: String,</span></span>
<span class="line"><span>    default: &quot;16px&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  height: {</span></span>
<span class="line"><span>    type: String,</span></span>
<span class="line"><span>    default: &quot;16px&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  fill: {</span></span>
<span class="line"><span>    type: String,</span></span>
<span class="line"><span>    default: &#39;#333&#39;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>// svg icon引入的格式</span></span>
<span class="line"><span>const symbolId = computed(() =&gt; {</span></span>
<span class="line"><span>  return \`#\${props.prefix}-\${props.name}\`</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h3 id="_4-项目之中使用" tabindex="-1">（4）项目之中使用 <a class="header-anchor" href="#_4-项目之中使用" aria-label="Permalink to &quot;（4）项目之中使用&quot;">​</a></h3><p>这里我们直接就已经可以使用了</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码&lt;svg-icon icon-class=&quot;collapsetrue&quot;/&gt;</span></span>
<span class="line"><span>&lt;svg-icon icon-class=&quot;collapsefalse&quot;/&gt;</span></span></code></pre></div><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1727259481329-7312bb71-1699-45c9-bb58-86f5aa014e12.webp" alt=""></p><p>完成！</p><h2 id="_3、-借助-svg-sprite-loader-封装" tabindex="-1">3、 借助 svg-sprite-loader 封装 <a class="header-anchor" href="#_3、-借助-svg-sprite-loader-封装" aria-label="Permalink to &quot;3、 借助 svg-sprite-loader 封装&quot;">​</a></h2><h3 id="_1-安装" tabindex="-1">（1）安装 <a class="header-anchor" href="#_1-安装" aria-label="Permalink to &quot;（1）安装&quot;">​</a></h3><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码yarn add svg-sprite-loader -D</span></span></code></pre></div><h3 id="_2-svgicon-vue内容如下" tabindex="-1">（2）SvgIcon.vue内容如下 <a class="header-anchor" href="#_2-svgicon-vue内容如下" aria-label="Permalink to &quot;（2）SvgIcon.vue内容如下&quot;">​</a></h3><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span>import { computed } from &#39;vue-demi&#39;</span></span>
<span class="line"><span>const props = defineProps([&#39;name&#39;])</span></span>
<span class="line"><span>const iconName = computed(() =&gt; \`#icon-\${props.name}\`)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;svg class=&quot;svg-icon&quot; aria-hidden=&quot;true&quot;&gt;</span></span>
<span class="line"><span>    &lt;use :xlink:href=&#39;iconName&#39;&gt;&lt;/use&gt;</span></span>
<span class="line"><span>  &lt;/svg&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;scss&quot; scoped&gt;</span></span>
<span class="line"><span>.svg-icon {</span></span>
<span class="line"><span>  vertical-align: middle;</span></span>
<span class="line"><span>  fill: currentColor;</span></span>
<span class="line"><span>  overflow: hidden;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div><h3 id="_3-src下面新建文件夹plugins" tabindex="-1">（3）src下面新建文件夹plugins <a class="header-anchor" href="#_3-src下面新建文件夹plugins" aria-label="Permalink to &quot;（3）src下面新建文件夹plugins&quot;">​</a></h3><p>在plugins文件夹创建svgBuilder.js插件</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码import { readFileSync, readdirSync } from &#39;fs&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let idPerfix = &#39;&#39;</span></span>
<span class="line"><span>const svgTitle = /&lt;svg([^&gt;+].*?)&gt;/</span></span>
<span class="line"><span>const clearHeightWidth = /(width|height)=&quot;([^&gt;+].*?)&quot;/g</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const hasViewBox = /(viewBox=&quot;[^&gt;+].*?&quot;)/g</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const clearReturn = /(\\r)|(\\n)/g</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function findSvgFile(dir) {</span></span>
<span class="line"><span>  const svgRes = []</span></span>
<span class="line"><span>  const dirents = readdirSync(dir, {</span></span>
<span class="line"><span>    withFileTypes: true,</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  for (const dirent of dirents) {</span></span>
<span class="line"><span>    if (dirent.isDirectory()) {</span></span>
<span class="line"><span>      svgRes.push(...findSvgFile(dir + dirent.name + &#39;/&#39;))</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      const svg = readFileSync(dir + dirent.name)</span></span>
<span class="line"><span>        .toString()</span></span>
<span class="line"><span>        .replace(clearReturn, &#39;&#39;)</span></span>
<span class="line"><span>        .replace(svgTitle, ($1, $2) =&gt; {</span></span>
<span class="line"><span>          // console.log(++i)</span></span>
<span class="line"><span>          // console.log(dirent.name)</span></span>
<span class="line"><span>          let width = 0</span></span>
<span class="line"><span>          let height = 0</span></span>
<span class="line"><span>          let content = $2.replace(clearHeightWidth, (s1, s2, s3) =&gt; {</span></span>
<span class="line"><span>            if (s2 === &#39;width&#39;) {</span></span>
<span class="line"><span>              width = s3</span></span>
<span class="line"><span>            } else if (s2 === &#39;height&#39;) {</span></span>
<span class="line"><span>              height = s3</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            return &#39;&#39;</span></span>
<span class="line"><span>          })</span></span>
<span class="line"><span>          if (!hasViewBox.test($2)) {</span></span>
<span class="line"><span>            content += \`viewBox=&quot;0 0 \${width} \${height}&quot;\`</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>          return \`&lt;symbol id=&quot;\${idPerfix}-\${dirent.name.replace(</span></span>
<span class="line"><span>            &#39;.svg&#39;,</span></span>
<span class="line"><span>            &#39;&#39;</span></span>
<span class="line"><span>          )}&quot; \${content}&gt;\`</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>        .replace(&#39;&lt;/svg&gt;&#39;, &#39;&lt;/symbol&gt;&#39;)</span></span>
<span class="line"><span>      svgRes.push(svg)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return svgRes</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const svgBuilder = (path, perfix = &#39;icon&#39;) =&gt; {</span></span>
<span class="line"><span>  if (path === &#39;&#39;) return</span></span>
<span class="line"><span>  idPerfix = perfix</span></span>
<span class="line"><span>  const res = findSvgFile(path)</span></span>
<span class="line"><span>  // console.log(res.length)</span></span>
<span class="line"><span>  // const res = []</span></span>
<span class="line"><span>  return {</span></span>
<span class="line"><span>    name: &#39;svg-transform&#39;,</span></span>
<span class="line"><span>    transformIndexHtml(html) {</span></span>
<span class="line"><span>      return html.replace(</span></span>
<span class="line"><span>        &#39;&lt;body&gt;&#39;,</span></span>
<span class="line"><span>        \`</span></span>
<span class="line"><span>          &lt;body&gt;</span></span>
<span class="line"><span>            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; xmlns:xlink=&quot;http://www.w3.org/1999/xlink&quot; style=&quot;position: absolute; width: 0; height: 0&quot;&gt;</span></span>
<span class="line"><span>              \${res.join(&#39;&#39;)}</span></span>
<span class="line"><span>            &lt;/svg&gt;</span></span>
<span class="line"><span>        \`</span></span>
<span class="line"><span>      )</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_4-更改vite-config-js配置" tabindex="-1">（4）更改vite.config.js配置 <a class="header-anchor" href="#_4-更改vite-config-js配置" aria-label="Permalink to &quot;（4）更改vite.config.js配置&quot;">​</a></h3><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码import { defineConfig } from &#39;vite&#39;</span></span>
<span class="line"><span>import vue from &#39;@vitejs/plugin-vue&#39;</span></span>
<span class="line"><span>import path from &#39;path&#39;</span></span>
<span class="line"><span>import { visualizer } from &#39;rollup-plugin-visualizer&#39;; //视图分析工具</span></span>
<span class="line"><span>import { svgBuilder } from &#39;@/src/plugins/svgBuilder&#39;; </span></span>
<span class="line"><span>export default defineConfig({</span></span>
<span class="line"><span>    base: &#39;/&#39;,</span></span>
<span class="line"><span>    plugins: [</span></span>
<span class="line"><span>        vue(),</span></span>
<span class="line"><span>        svgBuilder(&#39;./src/assets/svg/&#39;),// 这里已经将src/assets/svg/下的svg全部导入，无需再单独导入</span></span>
<span class="line"><span>        //视图分析工具</span></span>
<span class="line"><span>        visualizer({</span></span>
<span class="line"><span>            open: true, //在默认用户代理中打开生成的文件</span></span>
<span class="line"><span>            gzipSize: true, // 收集 gzip 大小并将其显示</span></span>
<span class="line"><span>            brotliSize: true, // 收集 brotli 大小并将其显示</span></span>
<span class="line"><span>            filename: &quot;repotrs.html&quot;, // 分析图生成的文件名</span></span>
<span class="line"><span>        }),</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    resolve: {</span></span>
<span class="line"><span>        // 解决公共路径问题</span></span>
<span class="line"><span>        alias: {</span></span>
<span class="line"><span>            &#39;@&#39;: path.resolve(__dirname, &#39;src&#39;)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>})</span></span></code></pre></div><h3 id="_5-使用" tabindex="-1">（5）使用 <a class="header-anchor" href="#_5-使用" aria-label="Permalink to &quot;（5）使用&quot;">​</a></h3><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码</span></span>
<span class="line"><span>yarn add @element-plus/icons-vue</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 注册所有图标</span></span>
<span class="line"><span>从 \`@element-plus/icons-vue\` 中导入所有图标并进行全局注册</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// main.ts</span></span>
<span class="line"><span>// 如果您正在使用CDN引入，请删除下面一行。</span></span>
<span class="line"><span>import * as ElementPlusIconsVue from &#39;@element-plus/icons-vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const app = createApp(App)</span></span>
<span class="line"><span>for (const [key, component] of Object.entries(ElementPlusIconsVue)) {</span></span>
<span class="line"><span>  app.component(key, component)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>作者：林太白<br> 链接：<a href="https://juejin.cn/post/7403283321794035746" target="_blank" rel="noreferrer">https://juejin.cn/post/7403283321794035746</a><br> 来源：稀土掘金<br> 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。</p>`,46),i=[l];function t(c,o,r,g,d,u){return a(),n("div",null,i)}const m=s(e,[["render",t]]);export{v as __pageData,m as default};
