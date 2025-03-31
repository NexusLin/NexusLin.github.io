import{_ as n,c as a,ag as p,o as e}from"./chunks/framework.wRLzwZz-.js";const m=JSON.parse('{"title":"❤在Vue3+vite之中使用element-plus自定义个主题配置你还不会？（Vue3系统篇六）","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"src/vue/vue3-ElementPlus自定义主题.md","filePath":"src/vue/vue3-ElementPlus自定义主题.md"}'),l={name:"src/vue/vue3-ElementPlus自定义主题.md"};function i(t,s,c,o,u,d){return e(),a("div",null,s[0]||(s[0]=[p(`<h1 id="❤在vue3-vite之中使用element-plus自定义个主题配置你还不会-vue3系统篇六" tabindex="-1">❤在Vue3+vite之中使用element-plus自定义个主题配置你还不会？（Vue3系统篇六） <a class="header-anchor" href="#❤在vue3-vite之中使用element-plus自定义个主题配置你还不会-vue3系统篇六" aria-label="Permalink to &quot;❤在Vue3+vite之中使用element-plus自定义个主题配置你还不会？（Vue3系统篇六）&quot;">​</a></h1><h2 id="_1、安装" tabindex="-1">1、安装 <a class="header-anchor" href="#_1、安装" aria-label="Permalink to &quot;1、安装&quot;">​</a></h2><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码yarn add element-plus</span></span></code></pre></div><h2 id="_2、引入和使用" tabindex="-1">2、引入和使用 <a class="header-anchor" href="#_2、引入和使用" aria-label="Permalink to &quot;2、引入和使用&quot;">​</a></h2><ul><li>完整引入</li></ul><p>这里我们直接整个引入就可以了，后期项目比较庞大的时候可以按需优化</p><p>在main.ts文件之中进行引入：</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码完整引入</span></span>
<span class="line"><span>// 引入ElementPlus组件 st</span></span>
<span class="line"><span>import ElementPlus from &#39;element-plus&#39;</span></span>
<span class="line"><span>import &#39;element-plus/dist/index.css&#39;</span></span>
<span class="line"><span>import * as ElementPlusIconsVue from &#39;@element-plus/icons-vue&#39; //element-plus icons</span></span>
<span class="line"><span>// 引入ElementPlus组件 end</span></span></code></pre></div><p>简单写个按钮看看效果</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码&lt;el-button type=&quot;primary&quot;&gt;Primary&lt;/el-button&gt;</span></span></code></pre></div><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1727059031406-5099c0cd-0c62-46a6-8a27-df474de86c4d.webp" alt=""></p><p>ok！ 引入和使用就已经完成了</p><h2 id="_3、主题使用" tabindex="-1">3、主题使用 <a class="header-anchor" href="#_3、主题使用" aria-label="Permalink to &quot;3、主题使用&quot;">​</a></h2><p>接下来我们尝试自定义一套主题，主题方面我们主要使用的element-plus的主题配置</p><p>先来看看官方对于主题色方面的介绍 ：</p><p>Element Plus 默认提供一套主题，CSS 命名采用 BEM 的风格，方便使用者覆盖样式。 但是如果需要大规模替换样式，例如： 将主题颜色从蓝色改为橙色或绿色，也许一个个将其覆盖起来不是一个好主意。</p><p>官方还给我们提供了四种方法来改变样式变量，这里因为我们是全局样式颜色都要进行改变 ！</p><h2 id="_4、完整导入element-plus样式的更改" tabindex="-1">4、完整导入element-plus样式的更改 <a class="header-anchor" href="#_4、完整导入element-plus样式的更改" aria-label="Permalink to &quot;4、完整导入element-plus样式的更改&quot;">​</a></h2><h3 id="方式一-样式覆盖" tabindex="-1">方式一 样式覆盖 <a class="header-anchor" href="#方式一-样式覆盖" aria-label="Permalink to &quot;方式一 样式覆盖&quot;">​</a></h3><p>这里我们先尝试采用以下官方推荐给我们的样式覆盖的方式进行更换我们的主题颜色:(其实本质就是下面的样式替代上上面的样式)</p><p>👉在我们的根目录文件 =&gt; src下面=&gt; assets文件里面 =&gt; element.scss</p><p>👉在这里我们需要引入官方给我们推荐的部分</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码</span></span>
<span class="line"><span>@forward &#39;element-plus/theme-chalk/src/common/var.scss&#39; with (</span></span>
<span class="line"><span>  $colors: (</span></span>
<span class="line"><span>    &#39;primary&#39;: (</span></span>
<span class="line"><span>      &#39;base&#39;: green,</span></span>
<span class="line"><span>    ),</span></span>
<span class="line"><span>  ),</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 这句非常重要 </span></span>
<span class="line"><span>@use &quot;element-plus/theme-chalk/src/index.scss&quot; as *;</span></span></code></pre></div><p>这里重要的部分我们着重标记一下：</p><p><code>@use &quot;element-plus/theme-chalk/src/index.scss&quot; as *;</code></p><p>👉 安装scss用于解析scss文件</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码npm i sass -D</span></span>
<span class="line"><span>或者</span></span>
<span class="line"><span>yarn add sass -D</span></span></code></pre></div><p>然后去刚刚引入官方的地方把样式替换成我们自己的，这里我理解就是做了一层中间作用！</p><p>👉 然后在你的项目入口文件中，导入这个样式文件以替换 Element Plus 内置的 CSS</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码import &#39;element-plus/dist/index.css&#39;   // 官方样式路径 </span></span>
<span class="line"><span></span></span>
<span class="line"><span>上面的替换成下面这个</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &#39;./assets/styles/element.scss&#39;  // 这是我的样式路径</span></span></code></pre></div><p>👉再次启动</p><p>这个时候以后我们会发现，好像生效了，但是没生效，其实是需要把这句话放出来 <img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1727059031241-b74a8e58-df88-461e-a954-9dd3da66fa6a.webp" alt=""></p><p><code>这句非常的重要</code></p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码@use &quot;element-plus/theme-chalk/src/index.scss&quot; as *;</span></span></code></pre></div><p>再次把我们之前的部分给放出来进行查看，这里我们已经成功了！</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1727059031238-7132206a-aa42-4bea-8406-b1f1cb879b92.webp" alt=""></p><p>全部导入部分就成功了！</p><h2 id="_5、按需导入element-plus样式的更改" tabindex="-1">5、按需导入element-plus样式的更改 <a class="header-anchor" href="#_5、按需导入element-plus样式的更改" aria-label="Permalink to &quot;5、按需导入element-plus样式的更改&quot;">​</a></h2><p>局部导入按需加载部分和我们的全局加载部分略有不同，这里我们就以项目未vue3+vite配置的项目为主简单来看一下</p><p>局部引入也是需要我们先安装对应部分的插件</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码yarn add -D unplugin-vue-components unplugin-auto-import</span></span></code></pre></div><p>然后需要去我们的vite之中进行配置</p><p><code>注意我说的需要配置的地方</code></p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码vite.config.ts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// vite.config.ts</span></span>
<span class="line"><span>import { defineConfig } from &#39;vite&#39;</span></span>
<span class="line"><span>import AutoImport from &#39;unplugin-auto-import/vite&#39;</span></span>
<span class="line"><span>import Components from &#39;unplugin-vue-components/vite&#39;</span></span>
<span class="line"><span>import { ElementPlusResolver } from &#39;unplugin-vue-components/resolvers&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineConfig({</span></span>
<span class="line"><span>  // ...</span></span>
<span class="line"><span>  plugins: [</span></span>
<span class="line"><span>    // ...</span></span>
<span class="line"><span>    AutoImport({</span></span>
<span class="line"><span>      resolvers: [ElementPlusResolver()], </span></span>
<span class="line"><span>    }),</span></span>
<span class="line"><span>    Components({</span></span>
<span class="line"><span>      resolvers: [ElementPlusResolver()], //这里记得需要添加一个配置</span></span>
<span class="line"><span>    }),</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>看一下对比我的配置</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1727059031266-c5f92100-488e-47b4-89ed-d2594ca6d633.webp" alt=""></p><p>👉 然后接下来我们按需引入页面尝试一下导入和使用</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码&lt;template&gt;</span></span>
<span class="line"><span>  &lt;el-button&gt;我是 ElButton&lt;/el-button&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>  import { ElButton } from &#39;element-plus&#39;</span></span>
<span class="line"><span>  export default {</span></span>
<span class="line"><span>    components: { ElButton },</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><p>这里看看我们的效果</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1727059031282-252dabf5-2d2c-4211-91b7-9b8b329959be.webp" alt=""></p><p>然后更改我们的主题样式，这里我依然还是用的官方给我推荐的那一套代码</p><p>注意最后一行<code>只是在全局的时候才使用！！!!!</code></p><p>👉 这里可以直接求官方地址粘贴，然后我贴个图</p><p><a href="https://link.juejin.cn?target=https%3A%2F%2Felement-plus.org%2Fzh-CN%2Fguide%2Fquickstart.html" target="_blank" rel="noreferrer">element-plus.org/zh-CN/guide…</a></p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1727059031666-f1c150e3-6bc7-46ba-9c44-cc820e8ae923.webp" alt=""></p><p>👉 完善一下<code>vite.config.ts</code>文件配置</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码Components({</span></span>
<span class="line"><span>      resolvers: [ElementPlusResolver(),importStyle:&quot;sass&quot;],</span></span>
<span class="line"><span> }),</span></span></code></pre></div><p>👉 这是我配置的自己的vite.config.ts，注意这部分自己加上主题的配置和上面的<code>vite.config.ts</code>文件配置</p><p>注意自己其他的部分，这部分只是真对主题配置添加，添加进去就可以了！！！</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码</span></span>
<span class="line"><span>// Element局部按需引入配置 </span></span>
<span class="line"><span></span></span>
<span class="line"><span>import AutoImport from &#39;unplugin-auto-import/vite&#39;</span></span>
<span class="line"><span>import Components from &#39;unplugin-vue-components/vite&#39;</span></span>
<span class="line"><span>import { ElementPlusResolver } from &#39;unplugin-vue-components/resolvers&#39;</span></span>
<span class="line"><span>// 导入对应包</span></span>
<span class="line"><span>import ElementPlus from &#39;unplugin-element-plus/vite&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineConfig({</span></span>
<span class="line"><span>    base: &#39;/&#39;,</span></span>
<span class="line"><span>    plugins: [</span></span>
<span class="line"><span>        vue(),</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 按需引入配置</span></span>
<span class="line"><span>        AutoImport({</span></span>
<span class="line"><span>            resolvers: [ElementPlusResolver()],</span></span>
<span class="line"><span>        }),</span></span>
<span class="line"><span>        Components({</span></span>
<span class="line"><span>            resolvers: [ElementPlusResolver({ importStyle: &quot;sass&quot; })],</span></span>
<span class="line"><span>        }),</span></span>
<span class="line"><span>        // 按需定制主题配置</span></span>
<span class="line"><span>        ElementPlus({</span></span>
<span class="line"><span>          useSource: true,</span></span>
<span class="line"><span>        }),</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    resolve: {</span></span>
<span class="line"><span>        // 解决公共路径问题</span></span>
<span class="line"><span>        alias: {</span></span>
<span class="line"><span>            &#39;@&#39;: path.resolve(__dirname, &#39;src&#39;)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    css: {</span></span>
<span class="line"><span>        preprocessorOptions: {</span></span>
<span class="line"><span>            scss: {</span></span>
<span class="line"><span>                additionalData: \`@use &quot;@/assets/styles/element.scss&quot; as *; \`,</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>})</span></span></code></pre></div><h2 id="_6、处理和解决问题-按需加载未生效" tabindex="-1">6、处理和解决问题 （按需加载未生效！！！） <a class="header-anchor" href="#_6、处理和解决问题-按需加载未生效" aria-label="Permalink to &quot;6、处理和解决问题 （按需加载未生效！！！）&quot;">​</a></h2><p>这里我们尝试了一下，竟然没生效（其实这里有个小小的坑 ！！！）</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1727059031687-90ae3ed9-823d-4d24-ab85-59c0d9982a8e.webp" alt=""></p><p><code>高能预警！！！！！！！！</code></p><p>上面官方介绍开头说需要导入一个插件</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1727059031663-518889fa-c4d9-43af-ba88-b63a27a0c0fb.webp" alt=""></p><p>👉 很多人就是一直没导入这个插件</p><ul><li>安装</li></ul><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码yarn add unplugin-element-plus --dev</span></span></code></pre></div><ul><li>然后在<code>vite.config.ts</code>文件配置</li></ul><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 代码解读</span></span>
<span class="line"><span>复制代码// 导入对应包</span></span>
<span class="line"><span>import ElementPlus from &#39;unplugin-element-plus/vite&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 按需定制主题配置</span></span>
<span class="line"><span>ElementPlus({</span></span>
<span class="line"><span>  useSource: true,</span></span>
<span class="line"><span>}),</span></span></code></pre></div><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1727059031693-396c7339-bc55-4b51-adbf-a4f0bbc52783.webp" alt=""></p><p>启动查看，完美，这里已经成功了！</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1727059031739-c3695405-a2b1-424f-8183-4e29da5263d9.webp" alt=""></p><p>附上我自己的配置主题部分！</p><p><img src="https://cdn.nlark.com/yuque/0/2024/webp/22435914/1727059032031-3b1b685e-c6c6-4083-9b4f-3b5a3612f37b.webp" alt=""></p><p>👉 重新启动记得 ！</p>`,77)]))}const h=n(l,[["render",i]]);export{m as __pageData,h as default};
