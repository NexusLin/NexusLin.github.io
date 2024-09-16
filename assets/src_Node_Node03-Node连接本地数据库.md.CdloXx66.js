import{_ as s,c as n,o as a,a4 as p}from"./chunks/framework.ZkTbufXI.js";const e="/images/node3-1.png",l="/images/node3-2.png",o="/images/node3-3.png",i="/images/node3-4.png",t="/images/node3-5.png",c="/images/node3-6.png",r="/images/node3-7.png",d="/images/node3-8.png",k=JSON.parse('{"title":"❤Node03 Node连接本地数据库","description":"","frontmatter":{},"headers":[],"relativePath":"src/Node/Node03-Node连接本地数据库.md","filePath":"src/Node/Node03-Node连接本地数据库.md"}'),m={name:"src/Node/Node03-Node连接本地数据库.md"},h=p('<h1 id="❤node03-node连接本地数据库" tabindex="-1">❤Node03 Node连接本地数据库 <a class="header-anchor" href="#❤node03-node连接本地数据库" aria-label="Permalink to &quot;❤Node03 Node连接本地数据库&quot;">​</a></h1><h2 id="_1、mysql官方网站下载安装-略过-想看的可以自己搜索我的文章查看" tabindex="-1">1、mysql官方网站下载安装（略过，想看的可以自己搜索我的文章查看） <a class="header-anchor" href="#_1、mysql官方网站下载安装-略过-想看的可以自己搜索我的文章查看" aria-label="Permalink to &quot;1、mysql官方网站下载安装（略过，想看的可以自己搜索我的文章查看）&quot;">​</a></h2><p>MySQL 官方网站（[http]</p><p>(<a href="https://so.csdn.net/so/search?q=http&amp;spm=1001.2101.3001.7020" target="_blank" rel="noreferrer">https://so.csdn.net/so/search?q=http&amp;spm=1001.2101.3001.7020</a>)😕/<a href="http://www.mysql.xn--com" target="_blank" rel="noreferrer">www.mysql.com），如下图所示</a>,-gi1hr84cfxetxxuq6c/)</p><p><img src="'+e+'" alt="image.png"></p><h2 id="_2、navicat-for-mysql安装-数据库管理软件-下载安装-略过-想看的可以自己搜索我的文章查看" tabindex="-1">2、Navicat for MySQL安装（数据库管理软件）下载安装（略过，想看的可以自己搜索我的文章查看） <a class="header-anchor" href="#_2、navicat-for-mysql安装-数据库管理软件-下载安装-略过-想看的可以自己搜索我的文章查看" aria-label="Permalink to &quot;2、Navicat for MySQL安装（数据库管理软件）下载安装（略过，想看的可以自己搜索我的文章查看）&quot;">​</a></h2><p>官网 <a href="https://www.navicat.com.cn/" target="_blank" rel="noreferrer">https://www.navicat.com.cn/</a></p><p>文章在这部分(链接)</p><p><a href="https://blog.csdn.net/weixin_43615570/article/details/124520999?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522172439477916800188531875%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fblog.%2522%257D&amp;request_id=172439477916800188531875&amp;biz_id=0&amp;utm_medium=distribute.pc_search_result.none-task-blog-2~blog~first_rank_ecpm_v1~rank_v31_ecpm-2-124520999-null-null.nonecase&amp;utm_term=mysql&amp;spm=1018.2226.3001.4450" target="_blank" rel="noreferrer">Mysql 最新版本8.0.28 windows系统安装教程_mysql最新版本-CSDN博客</a></p><p>直接安装使用 连接MySql数据库，点击测试连接 <img src="'+l+'" alt="image.png"></p><p>建一个数据库表格user，里面加俩数据字段id和name</p><p><img src="'+o+'" alt="image.png"></p><p>写个Sql查询查询一下我们的用户</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>jsSELECT * FROM user</span></span></code></pre></div><p>结果如下</p><p><img src="'+i+`" alt="image.png"></p><h2 id="_3、项目安装mysql数据库依赖" tabindex="-1">3、项目安装MySql数据库依赖 <a class="header-anchor" href="#_3、项目安装mysql数据库依赖" aria-label="Permalink to &quot;3、项目安装MySql数据库依赖&quot;">​</a></h2><p>我们搭建了自己本地的MySQL数据库之后，现在咱们尝试启动node连接本地搭建的数据库 进入我们项目的根目录下面 安装mysql依赖</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>jsyarn add mysql</span></span></code></pre></div><h2 id="_4、建立app-js" tabindex="-1">4、建立app.js <a class="header-anchor" href="#_4、建立app-js" aria-label="Permalink to &quot;4、建立app.js&quot;">​</a></h2><p>根目录下新建app.js文件，该文件下面包含以下这些信息</p><ul><li>createConnection用于创建一个数据库连接，正确添加数据库访问地址host，用户名user，密码password和所需要连接的数据库的名称</li><li>connect连接数据库</li><li>end关闭连接 如果不知道数据库的信息在哪里找可参考下图，数据库-数据库连接</li></ul><h2 id="_5、连接数据库" tabindex="-1">5、连接数据库 <a class="header-anchor" href="#_5、连接数据库" aria-label="Permalink to &quot;5、连接数据库&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>jsimport mysql from &#39;mysql&#39; // 导入 mysql</span></span>
<span class="line"><span>// const mysql = require(&#39;mysql&#39;);</span></span>
<span class="line"><span>// var mysql = require(&#39;mysql&#39;)</span></span>
<span class="line"><span>var connection = mysql.createConnection({</span></span>
<span class="line"><span>  host: &#39;localhost&#39;, // 数据库主机地址，如果是本地数据库则使用localhost</span></span>
<span class="line"><span>  user: &#39;root&#39;, // 数据库用户名</span></span>
<span class="line"><span>  password: &#39;xxxxxx&#39;, // 数据库密码</span></span>
<span class="line"><span>  database: &#39;nexus&#39; // 要连接的数据库名</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>connection.connect();</span></span>
<span class="line"><span>// 查询</span></span>
<span class="line"><span>connection.query(&#39;SELECT * FROM user&#39;, function (err, rows, fields) {</span></span>
<span class="line"><span>  console.log(&#39;user: &#39;, rows);</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>connection.end()</span></span></code></pre></div><p>这个时候我们去我们的根目录下进行运行 <code>node app.js</code>发现报错结果如下</p><p><img src="`+t+`" alt="image.png"></p><p>大致意思就是我们的import 方式不支持，日常我们导入方式会有以下两种</p><p><code>tips</code></p><ul><li>CommonJS 的写法</li><li>ES module 的写法</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span>// 使用 CommonJS 的写法</span></span>
<span class="line"><span>const fs = require(&#39;fs&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 使用 ES module 的写法</span></span>
<span class="line"><span>import fs from &#39;fs&#39;;</span></span></code></pre></div><p>查询更改为</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>jsimport mysql from &#39;mysql&#39; // 导入 mysql</span></span>
<span class="line"><span>// const mysql = require(&#39;mysql&#39;);</span></span>
<span class="line"><span>// var mysql = require(&#39;mysql&#39;)</span></span>
<span class="line"><span>var con = mysql.createConnection({</span></span>
<span class="line"><span>  host: &#39;localhost&#39;, // 数据库主机地址，如果是本地数据库则使用localhost</span></span>
<span class="line"><span>  user: &#39;root&#39;, // 数据库用户名</span></span>
<span class="line"><span>  password: &#39;123456&#39;, // 数据库密码</span></span>
<span class="line"><span>  database: &#39;nexus&#39; // 要连接的数据库名</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 连接到数据库</span></span>
<span class="line"><span>con.connect();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 查询</span></span>
<span class="line"><span>con.query(&#39;SELECT * FROM user&#39;, function (err, rows, fields) {</span></span>
<span class="line"><span>  console.log(&#39;连接数据库&#39;);</span></span>
<span class="line"><span>  console.log(&#39;user-err: &#39;, err);</span></span>
<span class="line"><span>  console.log(&#39;user-rows: &#39;, rows[0].solution);</span></span>
<span class="line"><span>  console.log(&#39;user-fields: &#39;, fields);</span></span>
<span class="line"><span>  if (err) throw err;</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>con.end();</span></span>
<span class="line"><span>console.log(&quot;MySQL断开!&quot;);</span></span></code></pre></div><p>最后获得查询记录：</p><p><img src="`+c+`" alt="image.png"></p><h2 id="_6、使用express定义连接数据库的接口" tabindex="-1">6、使用Express定义连接数据库的接口 <a class="header-anchor" href="#_6、使用express定义连接数据库的接口" aria-label="Permalink to &quot;6、使用Express定义连接数据库的接口&quot;">​</a></h2><p>Express作用 使用 Express，我们可以<strong>方便、快速的创建 Web 网站的服务器或 API 接口的服务器</strong> 简单概括一下就是：Express拿来写连接数据库的接口</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>jsimport mysql from &#39;mysql&#39; // 导入 mysql</span></span>
<span class="line"><span>import express from &#39;express&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建数据库连接</span></span>
<span class="line"><span>const connection = mysql.createConnection({</span></span>
<span class="line"><span>  host: &#39;localhost&#39;, // 数据库主机地址，如果是本地数据库则使用localhost</span></span>
<span class="line"><span>  user: &#39;root&#39;, // 数据库用户名</span></span>
<span class="line"><span>  password: &#39;123456&#39;, // 数据库密码</span></span>
<span class="line"><span>  database: &#39;nexus&#39; // 要连接的数据库名</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 连接数据库</span></span>
<span class="line"><span>connection.connect((err) =&gt; {</span></span>
<span class="line"><span>  if (err) {</span></span>
<span class="line"><span>    console.error(&#39;Error connecting to database:&#39;, err);</span></span>
<span class="line"><span>    return;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  console.log(&#39;Connected to database!&#39;);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>const app = express();</span></span>
<span class="line"><span>// 创建路由</span></span>
<span class="line"><span>app.get(&#39;/api/user/list&#39;, (req, res) =&gt; {</span></span>
<span class="line"><span>  // 查询数据库并返回数据</span></span>
<span class="line"><span>  connection.query(&#39;SELECT * FROM user&#39;, (err, results) =&gt; {</span></span>
<span class="line"><span>    console.log(err,&#39;err&#39;);</span></span>
<span class="line"><span>    console.log(results,&#39;results&#39;);</span></span>
<span class="line"><span>    if (err) {</span></span>
<span class="line"><span>      console.error(&#39;Error querying database:&#39;, err);</span></span>
<span class="line"><span>      res.status(500).json({ error: &#39;Internal server error&#39; });</span></span>
<span class="line"><span>      return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    res.json({</span></span>
<span class="line"><span>      code:&#39;200&#39;,</span></span>
<span class="line"><span>      data:results,</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 启动服务器</span></span>
<span class="line"><span>const PORT = 8888;</span></span>
<span class="line"><span>app.listen(PORT, () =&gt; {</span></span>
<span class="line"><span>  console.log(\`Server is running on http://localhost:\${PORT}\`);</span></span>
<span class="line"><span>});</span></span></code></pre></div><p>启动服务器 地址栏输入<code>http://localhost:8888/api/user/list </code>访问，我们发现，已经成功访问到了我们的数据库！ 数据库查询出来的：</p><p><img src="`+r+'" alt="image.png"></p><p>地址栏连接查询到的： <img src="'+d+'" alt="image.png"></p><p>到这里我们已经掌握了如何使用Node连接数据库并查询数据！</p>',41),g=[h];function u(_,q,b,y,f,v){return a(),n("div",null,g)}const C=s(m,[["render",u]]);export{k as __pageData,C as default};
