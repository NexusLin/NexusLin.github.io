import{_ as s,c as a,o as n,a4 as p}from"./chunks/framework.DvHWMJgD.js";const e="/images/node11-1.png",i="/images/node11-2.png",l="/images/node11-3.png",t="/images/node11-4.png",c="/images/node11-5.png",h="/images/node11-6.png",o="/images/node11-7.png",r="/images/node11-8.png",d="/images/node11-9.png",x=JSON.parse('{"title":"❤11-登录人token信息接口","description":"","frontmatter":{},"headers":[],"relativePath":"src/Node/Node11-登录人token信息接口.md","filePath":"src/Node/Node11-登录人token信息接口.md"}'),k={name:"src/Node/Node11-登录人token信息接口.md"},g=p(`<h1 id="❤11-登录人token信息接口" tabindex="-1">❤11-登录人token信息接口 <a class="header-anchor" href="#❤11-登录人token信息接口" aria-label="Permalink to &quot;❤11-登录人token信息接口&quot;">​</a></h1><p>上一章我们已经从登录部分拿到了用户的登录jwt返回的token信息，接下来我们就通过token来换取用户信息 这里我们可以将其理解为一种加密以及解密的思想来思考这个jwt和token的关系，token就是一个加密的字符串，而jwt就是那把钥匙。</p><h2 id="_1、解析-jwt字符串-还原为json对象" tabindex="-1">1、解析 JWT字符串 还原为JSON对象 <a class="header-anchor" href="#_1、解析-jwt字符串-还原为json对象" aria-label="Permalink to &quot;1、解析 JWT字符串 还原为JSON对象&quot;">​</a></h2><p>客户端每次在访问那些有权限接口的时候，都需要主动通过请求头中的 <code>**Authorization**</code> 字段，将 Token 字符串发送到服务器进行身份认证。 此时，服务器可以通过 <strong>express-jwt</strong>这个中间件，自动将客户端发送过来的 Token 解析还原成 JSON 对象： token解析如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>app.use(</span></span>
<span class="line"><span>  expressJWT.expressjwt({ secret: secretKey, algorithms: [&quot;HS256&quot;] }).unless({</span></span>
<span class="line"><span>    // path: [/^\\/api\\//],</span></span>
<span class="line"><span>    path: [</span></span>
<span class="line"><span>            &#39;/&#39;,</span></span>
<span class="line"><span>            &#39;/api/login&#39;,</span></span>
<span class="line"><span>            &#39;/api/register&#39;,</span></span>
<span class="line"><span>            &#39;/api/resetPwd&#39;</span></span>
<span class="line"><span>     ]</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>);</span></span></code></pre></div><p><img src="`+e+`" alt="image.png"></p><p>这个时候我们请求的接口里面携带一下刚刚的token然后访问一下试试</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   axios({</span></span>
<span class="line"><span>        method: &#39;get&#39;,</span></span>
<span class="line"><span>        url: api,</span></span>
<span class="line"><span>        headers: {</span></span>
<span class="line"><span>            &#39;Authorization&#39;: &#39;Bearer &#39;+localStorage.getItem(&quot;login&quot;),</span></span>
<span class="line"><span>            &#39;Content-Type&#39;: &#39;application/json;charset=utf-8&#39;,</span></span>
<span class="line"><span>            &#39;Custom-Header&#39;: &#39;custom-value&#39;</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        params: params,</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>    .then(res =&gt; {</span></span>
<span class="line"><span>        console.log(res.data);</span></span>
<span class="line"><span>        if (res.status == 200) {</span></span>
<span class="line"><span>            // console.log(res, &#39;res&#39;);</span></span>
<span class="line"><span>            tableData.value = res.data.data;</span></span>
<span class="line"><span>            totalvalue.value = res.data.total;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>    .catch(error =&gt; {</span></span>
<span class="line"><span>        console.error(error);</span></span>
<span class="line"><span>    });</span></span></code></pre></div><p>可以看到，这个时候我们的接口请求参数已经完全没问题了！</p><p><img src="`+i+`" alt="image.png"></p><h2 id="_2、-获取用户信息-接口" tabindex="-1">2、 获取用户信息(接口) <a class="header-anchor" href="#_2、-获取用户信息-接口" aria-label="Permalink to &quot;2、 获取用户信息(接口)&quot;">​</a></h2><p>当 express-jwt 这个中间件配置成功之后，即可在那些有权限的接口中，使用 req.user 对象，来访问从 JWT 字符串中解析出来的用户信息了，示例代码如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 这是一个有权限的api接口</span></span>
<span class="line"><span>app.get(&#39;/api/getInfo&#39;, (req, res) =&gt; {</span></span>
<span class="line"><span>    console.log(req.user);</span></span>
<span class="line"><span>    res.send({</span></span>
<span class="line"><span>        status: 200,</span></span>
<span class="line"><span>        message: &#39;success&#39;,</span></span>
<span class="line"><span>        data: req.user,</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>从上面我们注册时候的接口可以看到，我们当时候注册了一个用户的<code>username</code><img src="`+l+'" alt="image.png"></p><p>返回的信息如下： <img src="'+t+`" alt="image.png"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  req.auth信息如下：</span></span>
<span class="line"><span>{ username: &#39;admin&#39;, iat: 1713773255, exp: 1713780455 }</span></span></code></pre></div><p>返回的信息内容如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  -   \`username: &#39;admin&#39;\`: 这是 JWT 中存储的用户名信息，指示该令牌是以管理员身份签发的或者与管理员相关联的。</span></span>
<span class="line"><span>-   \`iat: 1713773255\`: 这是 JWT 的 &quot;issued at&quot;（签发时间）字段，表示 JWT 的签发时间。它是一个 Unix 时间戳，表示从 1970 年 1 月 1 日 00:00:00 UTC 到签发 JWT 的时间经过的秒数。</span></span>
<span class="line"><span>-   \`exp: 1713780455\`: 这是 JWT 的 &quot;expiration time&quot;（过期时间）字段，表示 JWT 的过期时间。也是一个 Unix 时间戳，表示 JWT 过期的时间点。在这个时间点之后，JWT 将不再被认为是有效的，需要重新获取新的 JWT。</span></span></code></pre></div><p>从这个返回信息的签发时间，我们可以思考一下可以起到什么样的用途呢：</p><h2 id="_3、查询我们数据用户信息" tabindex="-1">3、查询我们数据用户信息 <a class="header-anchor" href="#_3、查询我们数据用户信息" aria-label="Permalink to &quot;3、查询我们数据用户信息&quot;">​</a></h2><p>通过我们的用户接口返回的username参数去查询我们数据用户信息</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  app.get(&#39;/api/getInfo&#39;, (req, res) =&gt; {</span></span>
<span class="line"><span>    // 查询用户详情接口 </span></span>
<span class="line"><span>    const values=[req.auth.username];</span></span>
<span class="line"><span>    let query = &#39;SELECT * FROM user WHERE username = ?&#39;;</span></span>
<span class="line"><span>    connectionpool.query(query, values, (err, results) =&gt; {</span></span>
<span class="line"><span>        if (err) {</span></span>
<span class="line"><span>            console.error(&#39;Error querying database:&#39;, err);</span></span>
<span class="line"><span>            res.status(500).json({ error: &#39;用户不存在！&#39; });</span></span>
<span class="line"><span>            return;</span></span>
<span class="line"><span>        }else{</span></span>
<span class="line"><span>          res.json({</span></span>
<span class="line"><span>              code: &#39;200&#39;,</span></span>
<span class="line"><span>              data: results,</span></span>
<span class="line"><span>          });</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>最后我们查到的数据库信息如下： 可以看到我们查出来的其实是一个数组，这个时候我们可以优化一下，当查询出来的数据是空数据的时候，默认给个赋值，当含有数据的时候，拿数组的第一项数据 优化结果</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  data: results?.length&gt;0? results[0] : {},</span></span></code></pre></div><p><img src="`+c+`" alt="image.png"></p><h2 id="_4、测试使用用户信息接口" tabindex="-1">4、测试使用用户信息接口 <a class="header-anchor" href="#_4、测试使用用户信息接口" aria-label="Permalink to &quot;4、测试使用用户信息接口&quot;">​</a></h2><p>接下来我们找个网页利用axios（自己把token给放进去哦记得！）尝试请求一下看是否可以获取对应的用户信息</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 获取用户信息</span></span>
<span class="line"><span>function getUserinfo() {</span></span>
<span class="line"><span>    let api = &quot;http://localhost:8888/api/getInfo&quot;;</span></span>
<span class="line"><span>    axios({</span></span>
<span class="line"><span>        method: &#39;get&#39;,</span></span>
<span class="line"><span>        url: api,</span></span>
<span class="line"><span>        headers: {</span></span>
<span class="line"><span>            &#39;Authorization&#39;: &#39;Bearer &#39;+localStorage.getItem(&quot;login&quot;),</span></span>
<span class="line"><span>            &#39;Content-Type&#39;: &#39;application/json;charset=utf-8&#39;,</span></span>
<span class="line"><span>            &#39;Custom-Header&#39;: &#39;custom-value&#39;</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>    .then(res =&gt; {</span></span>
<span class="line"><span>        console.log(res.data);</span></span>
<span class="line"><span>        if (res.status == 200) {</span></span>
<span class="line"><span>            console.log(res, &#39;res-获取用户信息&#39;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>    .catch(error =&gt; {</span></span>
<span class="line"><span>        console.error(error);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在我们自己封装的项目之中进行封装一下</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 获取用户信息</span></span>
<span class="line"><span>export function getInfo () {</span></span>
<span class="line"><span>  return request({</span></span>
<span class="line"><span>    url: &#39;/api/getInfo&#39;,</span></span>
<span class="line"><span>    method: &#39;get&#39;,</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>import React,{ useEffect } from &quot;react&quot;;</span></span>
<span class="line"><span>import { getInfo } from &#39;@/api/common/comon&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 获取用户信息</span></span>
<span class="line"><span>const getUserInfo = () =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;获取用户信息&#39;);</span></span>
<span class="line"><span>    getInfo().then(res =&gt; {</span></span>
<span class="line"><span>        console.log(res,&#39;获取用户信息&#39;);</span></span>
<span class="line"><span>        setUserinfo(res.data);</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span> useEffect(() =&gt; {</span></span>
<span class="line"><span>        console.log(&#39;useEffect-home&#39;);</span></span>
<span class="line"><span>        getUserInfo();</span></span>
<span class="line"><span>},[])</span></span></code></pre></div><p><img src="`+h+`" alt="image.png"></p><p>查询没问题，可以获取用户的信息！</p><h2 id="_5、优化用户信息接口" tabindex="-1">5、优化用户信息接口 <a class="header-anchor" href="#_5、优化用户信息接口" aria-label="Permalink to &quot;5、优化用户信息接口&quot;">​</a></h2><h3 id="👍-time-2024-8-10-优化提示信息" tabindex="-1">👍 <code>time(2024-8-10) </code>优化提示信息 <a class="header-anchor" href="#👍-time-2024-8-10-优化提示信息" aria-label="Permalink to &quot;👍 \`time(2024-8-10) \`优化提示信息&quot;">​</a></h3><p>之前我们简单实现了我们的用户信息接口，但是在使用token换取信息的过程之中，很多次都是直接500，但是找不到其中的原因 接下来我们完善优化一下我们的用户信息接口</p><ul><li>授权信息提示的完善</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if (!req.auth || !req.auth.username) {</span></span>
<span class="line"><span>    return res.status(401).send({</span></span>
<span class="line"><span>        code: 401,</span></span>
<span class="line"><span>        message: &#39;未认证用户或缺少用户名！&#39;,</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>优化一下信息提示部分</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if (err) {</span></span>
<span class="line"><span>    console.error(&#39;Error querying database:&#39;, err);</span></span>
<span class="line"><span>    return res.status(500).send({</span></span>
<span class="line"><span>        code: 500,</span></span>
<span class="line"><span>        message: &#39;数据库查询错误！&#39;,</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (results.length === 0) {</span></span>
<span class="line"><span>    return res.status(404).send({</span></span>
<span class="line"><span>        code: 404,</span></span>
<span class="line"><span>        message: &#39;用户不存在！&#39;,</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>res.send({</span></span>
<span class="line"><span>    code: 200,</span></span>
<span class="line"><span>    data: results[0],</span></span>
<span class="line"><span>    message: &#39;欢迎你的访问！&#39;,</span></span>
<span class="line"><span>});</span></span></code></pre></div><h3 id="👍-time-2024-8-14-处理问题" tabindex="-1">👍 <code>time(2024-8-14)</code>处理问题 <a class="header-anchor" href="#👍-time-2024-8-14-处理问题" aria-label="Permalink to &quot;👍 \`time(2024-8-14)\`处理问题&quot;">​</a></h3><p>今天访问接口，一直提示我这个问题</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  {code: 500, message: &quot;服务器错误！&quot;}</span></span></code></pre></div><p>然后我找了一遍可能是链接过程的问题，之前我们对于接口500的时候进行了一个拦截，我们打印出来看看</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 接口错误的封装---拦截部分</span></span>
<span class="line"><span>app.use((err, req, res, next) =&gt; {</span></span>
<span class="line"><span>  // 如果错误是由token解析失败导致的</span></span>
<span class="line"><span>  if (err.name === &#39;UnauthorizedError&#39;) {</span></span>
<span class="line"><span>    return res.send({</span></span>
<span class="line"><span>      code: 401,</span></span>
<span class="line"><span>      message: &#39;登录过期，请重新登录！&#39;</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  console.log(&#39;其他原因导致的错误!&#39;,err);</span></span>
<span class="line"><span>  // 如果是其他位置原因导致的错误</span></span>
<span class="line"><span>  res.send({</span></span>
<span class="line"><span>    code: 500,</span></span>
<span class="line"><span>    message: &#39;服务器错误！&#39;</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  next()</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>输出以后我们能看到消息，这里我的报错部分是这样子的：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">查询语句 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">SELECT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> user </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">WHERE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> username </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ?</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">其他原因导致的错误</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ReferenceError</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> connectionpool is not defined</span></span></code></pre></div><p>原来是我们项目大小写的原因，这里我们改一下，因为之前我们拆分模块的时候，把所有的 <code>connectionpool=&gt; connectionPool</code> ,更改为了小驼峰命名，所以，这里出现问题，建议大家还是细心啊！ <img src="`+o+'" alt="image.png"></p><p>再次查询，这里问题已经处理好了！</p><p><img src="'+r+`" alt="image.png"></p><h3 id="👍-优化返回信息接口user" tabindex="-1">👍 优化返回信息接口user <a class="header-anchor" href="#👍-优化返回信息接口user" aria-label="Permalink to &quot;👍 优化返回信息接口user&quot;">​</a></h3><p>之前我们直接返回的data信息，这里我们返回来的部分更改为user用户信息</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">res.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">send</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    code: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    data: results[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    message: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;欢迎你的访问！&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 更改为</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">res.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">send</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    code: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    user: results[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    message: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;欢迎你的访问！&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h2 id="报错" tabindex="-1">报错 <a class="header-anchor" href="#报错" aria-label="Permalink to &quot;报错&quot;">​</a></h2><h3 id="expressjwt-is-not-a-function-expressjwt版本语法" tabindex="-1">expressJWT is not a function（expressJWT版本语法） <a class="header-anchor" href="#expressjwt-is-not-a-function-expressjwt版本语法" aria-label="Permalink to &quot;expressJWT is not a function（expressJWT版本语法）&quot;">​</a></h3><p>导入和使用expressJWT时遇到问题</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">import expressJWT  from </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;express-jwt&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">expressJWT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ secret: secretKey }).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">unless</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ path: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/login&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] }))</span></span></code></pre></div><p><img src="`+d+`" alt="image.png"></p><p>原因 由于express-jwt 版本的更新，之前的语法不适用于现在的 新版本 ，可以看到现在 是 8 开头的版本 express-jwt8的版本如下图所示：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  expressJWT.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">expressjwt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ secret: secretKey, algorithms: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;HS256&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] }).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">unless</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // path: [/^\\/api\\//],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    path: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &#39;/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &#39;/api/login&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &#39;/api/register&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &#39;/api/resetPwd&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div>`,59),u=[g];function E(m,y,b,v,C,F){return n(),a("div",null,u)}const f=s(k,[["render",E]]);export{x as __pageData,f as default};
