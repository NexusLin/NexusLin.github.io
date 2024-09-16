import{_ as s,c as n,o as a,a4 as p}from"./chunks/framework.p1nTaqAP.js";const e="/NexusLin/images/node4-1.png",l="/NexusLin/images/node4-2.png",i="/NexusLin/images/node4-3.png",t="/NexusLin/images/node4-4.png",o="/NexusLin/images/node4-5.png",r="/NexusLin/images/node4-6.png",c="/NexusLin/images/node4-7.png",d="/NexusLin/images/node5-1.png",u="/NexusLin/images/node5-2.png",g="/NexusLin/images/node5-3.png",h="/NexusLin/images/node5-4.png",q="/NexusLin/images/node5-5.png",m="/NexusLin/images/node5-6.png",b="/NexusLin/images/node5-7.png",P=JSON.parse('{"title":"❤Node04 Node +Express操作本地数据库增删改查","description":"","frontmatter":{},"headers":[],"relativePath":"src/Node/Node04-操作本地数据库增改查.md","filePath":"src/Node/Node04-操作本地数据库增改查.md"}'),v={name:"src/Node/Node04-操作本地数据库增改查.md"},_=p(`<h1 id="❤node04-node-express操作本地数据库增删改查" tabindex="-1">❤Node04 Node +Express操作本地数据库增删改查 <a class="header-anchor" href="#❤node04-node-express操作本地数据库增删改查" aria-label="Permalink to &quot;❤Node04 Node +Express操作本地数据库增删改查&quot;">​</a></h1><h2 id="_1、认识接口-node-js-restful-api" tabindex="-1">1、认识接口(Node.js RESTful API) <a class="header-anchor" href="#_1、认识接口-node-js-restful-api" aria-label="Permalink to &quot;1、认识接口(Node.js RESTful API)&quot;">​</a></h2><p>接下来我们先认识一些前置知识,看看Node.js里面的RESTful API是什么，如何帮助我们实现接口的</p><p>以下为 REST 基本架构的四个方法：</p><ul><li><strong>GET</strong> - 用于获取数据</li><li><strong>PUT</strong> - 用于更新或添加数据</li><li><strong>DELETE</strong> - 用于删除数据</li><li><strong>POST</strong> - 用于添加数据</li></ul><p><code>注：get和delete是在路径中传递数据，而post和put可以在request body中传递数据</code></p><h2 id="_2、查询用户列表-api-user-get查询" tabindex="-1">2、查询用户列表 （/api/user--get查询 ） <a class="header-anchor" href="#_2、查询用户列表-api-user-get查询" aria-label="Permalink to &quot;2、查询用户列表 （/api/user--get查询 ）&quot;">​</a></h2><p>之前我们采用Node连接数据库并查询数据，现在我们使用本地的axios进行请求数据 本地进行调用</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js// 获取用户</span></span>
<span class="line"><span>function getUserList(row) { </span></span>
<span class="line"><span>    axios.get(&#39;http://localhost:8888/api/user&#39;).then(res =&gt; {</span></span>
<span class="line"><span>         console.log(res, &#39;/user/list&#39;);</span></span>
<span class="line"><span>        if (res.status == 200) {</span></span>
<span class="line"><span>             console.log(res,&#39;res&#39;);</span></span>
<span class="line"><span>             tableData.value = res.data.data;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>突然发现报错了：</p><p><img src="`+e+`" alt="image.png"></p><p>分析报错我们发现是由于跨域访问引起的，前端设置允许跨域 在app.js之中添加这段代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>jsapp.all(&#39;*&#39;, function (req, res, next) {</span></span>
<span class="line"><span>    res.header(&quot;Access-Control-Allow-Origin&quot;, &quot;*&quot;);</span></span>
<span class="line"><span>    res.header(&quot;Access-Control-Allow-Headers&quot;, &quot;X-Requested-With&quot;);</span></span>
<span class="line"><span>    res.header(&quot;Access-Control-Allow-Methods&quot;, &quot;PUT,POST,GET,DELETE,OPTIONS&quot;);</span></span>
<span class="line"><span>    res.header(&quot;X-Powered-By&quot;, &#39; 3.2.1&#39;)</span></span>
<span class="line"><span>    res.header(&quot;Content-Type&quot;, &quot;application/json;charset=utf-8&quot;);</span></span>
<span class="line"><span>    next();</span></span>
<span class="line"><span>});</span></span></code></pre></div><p>app.js完整过程如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>jsconst connection = mysql.createPool({</span></span>
<span class="line"><span>  host: &#39;localhost&#39;, // 数据库主机地址，如果是本地数据库则使用localhost</span></span>
<span class="line"><span>  user: &#39;root&#39;, // 数据库用户名</span></span>
<span class="line"><span>  password: &#39;&#39;, // 数据库密码</span></span>
<span class="line"><span>  database: &#39;nexus&#39; // 要连接的数据库名</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const app = express();</span></span>
<span class="line"><span>//设置跨域访问</span></span>
<span class="line"><span>app.all(&#39;*&#39;, function (req, res, next) {</span></span>
<span class="line"><span>    res.header(&quot;Access-Control-Allow-Origin&quot;, &quot;*&quot;);</span></span>
<span class="line"><span>    res.header(&quot;Access-Control-Allow-Headers&quot;, &quot;X-Requested-With&quot;);</span></span>
<span class="line"><span>    res.header(&quot;Access-Control-Allow-Methods&quot;, &quot;PUT,POST,GET,DELETE,OPTIONS&quot;);</span></span>
<span class="line"><span>    res.header(&quot;X-Powered-By&quot;, &#39; 3.2.1&#39;)</span></span>
<span class="line"><span>    res.header(&quot;Content-Type&quot;, &quot;application/json;charset=utf-8&quot;);</span></span>
<span class="line"><span>    next();</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.get(&#39;/&#39;, (req, res) =&gt; {</span></span>
<span class="line"><span>  res.send(&#39;林太白数据库!&#39;);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
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
<span class="line"><span>    // res.json(results);</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>});</span></span></code></pre></div><p>重启服务器：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>node app.js</span></span></code></pre></div><p><img src="`+l+'" alt="image.png"></p><p>查询成功！</p><p><img src="'+i+'" alt="image.png"></p><h2 id="_3、增加用户-api-user-post新增" tabindex="-1">3、增加用户 （/api/user--post新增 ） <a class="header-anchor" href="#_3、增加用户-api-user-post新增" aria-label="Permalink to &quot;3、增加用户 （/api/user--post新增 ）&quot;">​</a></h2><p>Mysql增加用户操作命令为</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>jsINSERT INTO user (name,sex) VALUES (&#39;张三&#39;,1)</span></span></code></pre></div><p>执行命令我们已经将数据添加进入数据库之中。 <img src="'+t+`" alt="image.png"></p><p>接下来我们在我们的Node里面进行一下添加</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>jsSql的插入语句为：</span></span>
<span class="line"><span>\`INSERT INTO user (name, age) VALUES (?, ?)\`</span></span></code></pre></div><p>那我们手写的POST增加用户请求处理就是</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js// 新增用户 POST 请求处理程序 </span></span>
<span class="line"><span>app.post(&#39;/api/user&#39;, (req, res) =&gt; {</span></span>
<span class="line"><span>  console.log(req.body);</span></span>
<span class="line"><span>  const { name, age } = req.body; // 从请求体中获取数据</span></span>
<span class="line"><span>  const values = [name, age];</span></span>
<span class="line"><span>  // 准备 SQL 插入语句</span></span>
<span class="line"><span>  const insertSql = \`INSERT INTO user (name, age) VALUES (?, ?)\`;</span></span>
<span class="line"><span>  connection.query(insertSql, values, (err, results) =&gt; {</span></span>
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
<span class="line"><span>});</span></span></code></pre></div><p><img src="`+o+'" alt="image.png"></p><p>增加用户成功！</p><h2 id="_4、修改用户信息以后提交修改-api-user-put修改" tabindex="-1">4、修改用户信息以后提交修改（/api/user--put修改 ） <a class="header-anchor" href="#_4、修改用户信息以后提交修改-api-user-put修改" aria-label="Permalink to &quot;4、修改用户信息以后提交修改（/api/user--put修改 ）&quot;">​</a></h2><p>Mysql更改用户操作命令为</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>jsUPDATE user SET name = &#39;可爱&#39;, age = 18 WHERE id = 12</span></span></code></pre></div><p>查看我们的sql数据库，数据库已经更改成功！</p><p><img src="'+r+`" alt="image.png"></p><p>使用axios之中的put方法提交更改的数据，用户有ID的时候根据id进行更改 更新用户数据 PUT请求处理程序</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span>// 更新用户数据 PUT请求处理程序 </span></span>
<span class="line"><span>app.put(&#39;/api/user&#39;, (req, res) =&gt; {</span></span>
<span class="line"><span>  console.log(req.body);</span></span>
<span class="line"><span>  const { name, age ,id} = req.body; // 从请求体中获取数据</span></span>
<span class="line"><span>  const values = [name, age, id];</span></span>
<span class="line"><span>  // 准备 SQL 插入语句</span></span>
<span class="line"><span>  const sql = &quot;UPDATE user SET name = ?, age = ? WHERE id = ?&quot;;</span></span>
<span class="line"><span>  connection.query(sql, values, (err, results) =&gt; {</span></span>
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
<span class="line"><span>});</span></span></code></pre></div><p>数据已经更改成功！</p><p><img src="`+c+'" alt="image.png"></p><p>到这里我们已经实现了增改查，接下来下一节就是针对我们的删除进行处理。</p><h2 id="_05-操作本地数据库实现删除" tabindex="-1">05-操作本地数据库实现删除 <a class="header-anchor" href="#_05-操作本地数据库实现删除" aria-label="Permalink to &quot;05-操作本地数据库实现删除&quot;">​</a></h2><h3 id="前置知识" tabindex="-1">前置知识 <a class="header-anchor" href="#前置知识" aria-label="Permalink to &quot;前置知识&quot;">​</a></h3><p><code>注：get和delete是在路径中传递数据，而post和put可以在request body中传递数据</code></p><blockquote><p>删除用户信息,我们也是使用这个接口来进行删除（/api/user--delete 删除）</p></blockquote><h3 id="_1-数据库语句" tabindex="-1">（1）数据库语句 <a class="header-anchor" href="#_1-数据库语句" aria-label="Permalink to &quot;（1）数据库语句&quot;">​</a></h3><p>先试试数据库的删除语句，删除id为8的数据</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>jsDELETE FROM user WHERE id = 8</span></span></code></pre></div><p><img src="'+d+'" alt="image.png"></p><p>id为8的数据我们已经删除成功！</p><p><img src="'+u+`" alt="image.png"></p><h3 id="_2-手写删除方法" tabindex="-1">（2）手写删除方法 <a class="header-anchor" href="#_2-手写删除方法" aria-label="Permalink to &quot;（2）手写删除方法&quot;">​</a></h3><p>接下来我们手写我们的删除 先在node之中手写我们的删除delete方法</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js// 删除用户数据 DELETE请求处理程序  </span></span>
<span class="line"><span>app.delete(&#39;/api/user&#39;, (req, res) =&gt; {</span></span>
<span class="line"><span>  const {id} = req.body; // 从请求体中获取数据</span></span>
<span class="line"><span>  const values = [ id];</span></span>
<span class="line"><span>  const sql = &quot;DELETE FROM user WHERE id = ?&quot;;</span></span>
<span class="line"><span>  connection.query(sql, values, (err, results) =&gt; {</span></span>
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
<span class="line"><span>});</span></span></code></pre></div><h3 id="_3-axio请求删除数据" tabindex="-1">（3）axio请求删除数据 <a class="header-anchor" href="#_3-axio请求删除数据" aria-label="Permalink to &quot;（3）axio请求删除数据&quot;">​</a></h3><p>接下来拿axio请求删除数据</p><p><img src="`+g+`" alt="image.png"></p><p>根据id来删除用户is为5的数据</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js// 删除用户信息</span></span>
<span class="line"><span>function handleDelete(row) {</span></span>
<span class="line"><span>    console.log(row, &#39;删除&#39;);</span></span>
<span class="line"><span>    let id=row.id;</span></span>
<span class="line"><span>    let api = &quot;http://localhost:8888/api/user&quot;;</span></span>
<span class="line"><span>    let data={id:row.id};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    console.log(row.id,&#39;row.id&#39;);</span></span>
<span class="line"><span>    axios.delete(api,data).then(res =&gt; {</span></span>
<span class="line"><span>        if (res.status == 200) {</span></span>
<span class="line"><span>            console.log(res, &#39;res&#39;);</span></span>
<span class="line"><span>            centerDialogVisible.value = false;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>   })</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>点击删除以后删除成功，然后我们刷新数据库数据。</p><p><img src="`+h+'" alt="image.png"></p><p>我们的删除成功了，但是数据却依然存在，这是什么原因呢？</p><p><img src="'+q+'" alt="image.png"></p><p>查看node控制台输出我们可以发现，原来我们压根没有拿到用户的id</p><p><img src="'+m+`" alt="image.png"></p><p>这就需要提到我们一开始上面警示语句: <code>注：get和delete是在路径中传递数据，而post和put可以在request body中传递数据</code></p><h3 id="_4-优化删除" tabindex="-1">（4）优化删除 <a class="header-anchor" href="#_4-优化删除" aria-label="Permalink to &quot;（4）优化删除&quot;">​</a></h3><p>那我们尝试将用户的id放到我们的地址上试试，node删除方法就跟改为:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js// 删除用户数据 DELETE请求处理程序  </span></span>
<span class="line"><span>app.delete(&#39;/api/user/:id&#39;, (req, res) =&gt; {</span></span>
<span class="line"><span>  const {id} = req.body; // 从请求体中获取数据</span></span>
<span class="line"><span>  const values = [id];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const userId = req.params.id;</span></span>
<span class="line"><span>  console.log(userId,&#39;userId&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const sql = &quot;DELETE FROM user WHERE id = ?&quot;;</span></span>
<span class="line"><span>  connection.query(sql, values, (err, results) =&gt; {</span></span>
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
<span class="line"><span>});</span></span></code></pre></div><p>再来调用我们的删除</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js// 删除用户数据 DELETE请求处理程序  </span></span>
<span class="line"><span>app.delete(&#39;/api/user/:id&#39;, (req, res) =&gt; {</span></span>
<span class="line"><span>  const id = req.params.id;</span></span>
<span class="line"><span>  const values = [id];</span></span>
<span class="line"><span>  const sql = &quot;DELETE FROM user WHERE id = ?&quot;;</span></span>
<span class="line"><span>  connection.query(sql, values, (err, results) =&gt; {</span></span>
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
<span class="line"><span>});</span></span></code></pre></div><p>请求发现我们地址已经成为了 <code>http://localhost:8888/api/user/5</code> 刷新数据库，果然我们删除已经成功了！</p><p><img src="`+b+'" alt="image.png"></p><p>到这里我们已经实现了增删改查，接下来下一节就是插入一些额外针对我们的增删改查进行优化和处理。</p>',73),E=[_];function x(k,y,T,N,f,C){return a(),n("div",null,E)}const L=s(v,[["render",x]]);export{P as __pageData,L as default};
