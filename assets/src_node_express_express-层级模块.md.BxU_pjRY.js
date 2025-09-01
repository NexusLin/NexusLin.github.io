import{_ as a,c as n,o as e,ag as p}from"./chunks/framework.DnwzncJk.js";const h=JSON.parse('{"title":"express-层级模块","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"src/node/express/express-层级模块.md","filePath":"src/node/express/express-层级模块.md","lastUpdated":1756373406000}'),t={name:"src/node/express/express-层级模块.md"};function l(i,s,c,d,r,o){return e(),n("div",null,s[0]||(s[0]=[p(`<h1 id="express-层级模块" tabindex="-1">express-层级模块 <a class="header-anchor" href="#express-层级模块" aria-label="Permalink to &quot;express-层级模块&quot;">​</a></h1><h1 id="层级模块" tabindex="-1">层级模块 <a class="header-anchor" href="#层级模块" aria-label="Permalink to &quot;层级模块&quot;">​</a></h1><h2 id="_1、新建层级表" tabindex="-1">1、新建层级表 <a class="header-anchor" href="#_1、新建层级表" aria-label="Permalink to &quot;1、新建层级表&quot;">​</a></h2><p>☞ 这里注意将Node之中的蛇形命名法转为=&gt;驼峰命名法</p><p>☞ 搭建一个sql表格来存储公共信息</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>DROP TABLE IF EXISTS \`sys_dept\`;</span></span>
<span class="line"><span>CREATE TABLE \`sys_dept\` (</span></span>
<span class="line"><span>  \`dept_id\` bigint(0) NOT NULL AUTO_INCREMENT COMMENT &#39;部门id&#39;,</span></span>
<span class="line"><span>  \`parent_id\` bigint(0) NULL DEFAULT 0 COMMENT &#39;父部门id&#39;,</span></span>
<span class="line"><span>  \`ancestors\` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT &#39;&#39; COMMENT &#39;祖级列表&#39;,</span></span>
<span class="line"><span>  \`dept_name\` varchar(30) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT &#39;&#39; COMMENT &#39;部门名称&#39;,</span></span>
<span class="line"><span>  \`order_num\` int(0) NULL DEFAULT 0 COMMENT &#39;显示顺序&#39;,</span></span>
<span class="line"><span>  \`leader\` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT &#39;负责人&#39;,</span></span>
<span class="line"><span>  \`phone\` varchar(11) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT &#39;联系电话&#39;,</span></span>
<span class="line"><span>  \`email\` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT &#39;邮箱&#39;,</span></span>
<span class="line"><span>  \`status\` char(1) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT &#39;0&#39; COMMENT &#39;部门状态（0正常 1停用）&#39;,</span></span>
<span class="line"><span>  \`del_flag\` char(1) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT &#39;0&#39; COMMENT &#39;删除标志（0代表存在 2代表删除）&#39;,</span></span>
<span class="line"><span>  \`create_by\` varchar(64) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT &#39;&#39; COMMENT &#39;创建者&#39;,</span></span>
<span class="line"><span>  \`create_time\` datetime(0) NULL DEFAULT NULL COMMENT &#39;创建时间&#39;,</span></span>
<span class="line"><span>  \`update_by\` varchar(64) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT &#39;&#39; COMMENT &#39;更新者&#39;,</span></span>
<span class="line"><span>  \`update_time\` datetime(0) NULL DEFAULT NULL COMMENT &#39;更新时间&#39;,</span></span>
<span class="line"><span>  PRIMARY KEY (\`dept_id\`) USING BTREE</span></span>
<span class="line"><span>) ENGINE = InnoDB AUTO_INCREMENT = 109 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_bin COMMENT = &#39;部门表&#39; ROW_FORMAT = Dynamic;</span></span></code></pre></div><h2 id="_2、搭建引入文件" tabindex="-1">2、搭建引入文件 <a class="header-anchor" href="#_2、搭建引入文件" aria-label="Permalink to &quot;2、搭建引入文件&quot;">​</a></h2><p>☞ 新建 server =&gt; api =&gt; deptRoutes.js</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>console.log(&#39;noticeRoutes.js--公告模块&#39;);</span></span></code></pre></div><p>☞ app.js之中引入</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//引入层级路由</span></span>
<span class="line"><span>const deptRoutes = require(&#39;./server/api/deptRoutes&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 公告中心路由</span></span>
<span class="line"><span>app.use(&#39;/system/dept&#39;, deptRoutes);</span></span></code></pre></div><h2 id="_3、查询接口" tabindex="-1">3、查询接口 <a class="header-anchor" href="#_3、查询接口" aria-label="Permalink to &quot;3、查询接口&quot;">​</a></h2><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const express = require(&#39;express&#39;);</span></span>
<span class="line"><span>const router = express.Router();</span></span>
<span class="line"><span>const connectionPool = require(&#39;../db&#39;); // 引入数据库连接池模块</span></span>
<span class="line"><span>const {addCondition,addDateRangeCondition,addPagination,convertKeysToSnakeCase,convertToCamelCase} = require(&#39;../methods.js&#39;); // 引入封装方法</span></span>
<span class="line"><span>const {listApi,getApi,addApi,updateApi,delApi,changeStatusApi} = require(&#39;../apimethods.js&#39;); // 引入封装方法</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 数据库表</span></span>
<span class="line"><span>const tableName = &#39;sys_dept&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 查询列表</span></span>
<span class="line"><span>router.get(&#39;/&#39;,(req, res) =&gt; {</span></span>
<span class="line"><span>    let query = \`SELECT * FROM \${tableName}\`;</span></span>
<span class="line"><span>    let sqltotal = \`SELECT COUNT(*) AS total FROM sys_dept\`</span></span>
<span class="line"><span>    const { dept_name } = convertKeysToSnakeCase(req.query);</span></span>
<span class="line"><span>    listApi(query,sqltotal,req,res,{dept_name});</span></span>
<span class="line"><span>});</span></span></code></pre></div><p>测试一下 欧克</p><h2 id="_4、新增接口" tabindex="-1">4、新增接口 <a class="header-anchor" href="#_4、新增接口" aria-label="Permalink to &quot;4、新增接口&quot;">​</a></h2><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const express = require(&#39;express&#39;);</span></span>
<span class="line"><span>const router = express.Router();</span></span>
<span class="line"><span>const connectionPool = require(&#39;../db&#39;); // 引入数据库连接池模块</span></span>
<span class="line"><span>const {addCondition,addDateRangeCondition,addPagination,convertKeysToSnakeCase,convertToCamelCase} = require(&#39;../methods.js&#39;); // 引入封装方法</span></span>
<span class="line"><span>const {listApi,getApi,addApi,updateApi,delApi,changeStatusApi} = require(&#39;../apimethods.js&#39;); // 引入封装方法</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 数据库表</span></span>
<span class="line"><span>const tableName = &#39;sys_dept&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 新增 POST</span></span>
<span class="line"><span>router.post(&#39;/&#39;, (req, res) =&gt; {</span></span>
<span class="line"><span>    const insertSql = \`INSERT INTO \${tableName} SET ?\`;</span></span>
<span class="line"><span>    const { dept_name,email,order_num,leader,parent_id,phone,status} = convertKeysToSnakeCase(req.body);</span></span>
<span class="line"><span>    const postData = {dept_name,email,order_num,leader,parent_id,phone,status,update_time:new Date()};</span></span>
<span class="line"><span>    addApi(insertSql,res,postData);</span></span>
<span class="line"><span>});</span></span></code></pre></div><p>测试一下 欧克</p><h2 id="_5、详情接口" tabindex="-1">5、详情接口 <a class="header-anchor" href="#_5、详情接口" aria-label="Permalink to &quot;5、详情接口&quot;">​</a></h2><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 获取详情 </span></span>
<span class="line"><span>router.get(&#39;/:dept_id&#39;, (req, res) =&gt; {</span></span>
<span class="line"><span>    // console.log(req.query,&#39;req.query&#39;);</span></span>
<span class="line"><span>    const { dept_id } = req.params;</span></span>
<span class="line"><span>    const values = [dept_id];</span></span>
<span class="line"><span>    let querySql = &#39;SELECT * FROM sys_dept WHERE dept_id = ?&#39;;</span></span>
<span class="line"><span>    getApi(querySql,values,res);</span></span>
<span class="line"><span>});</span></span></code></pre></div><p>测试一下 欧克</p><h2 id="_6、更新接口" tabindex="-1">6、更新接口 <a class="header-anchor" href="#_6、更新接口" aria-label="Permalink to &quot;6、更新接口&quot;">​</a></h2><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 更新</span></span>
<span class="line"><span>router.put(&#39;/&#39;, (req, res) =&gt; {</span></span>
<span class="line"><span>    const {dept_name,email,order_num,leader,parent_id,phone,status,dept_id} = convertKeysToSnakeCase(req.body);</span></span>
<span class="line"><span>    const updatevalues = {dept_name,email,order_num,leader,parent_id,phone,status,dept_id,update_time:new Date()};</span></span>
<span class="line"><span>    let updateSql=\`UPDATE \${tableName} SET ? WHERE dept_id = ?\`;</span></span>
<span class="line"><span>    updateApi(updateSql,[updatevalues, dept_id],res);</span></span>
<span class="line"><span>});</span></span></code></pre></div><p>测试一下 欧克</p><h2 id="_7、删除接口" tabindex="-1">7、删除接口 <a class="header-anchor" href="#_7、删除接口" aria-label="Permalink to &quot;7、删除接口&quot;">​</a></h2><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 删除数据 DELETE请求处理程序  </span></span>
<span class="line"><span>router.delete(&#39;/:id&#39;, (req, res) =&gt; {</span></span>
<span class="line"><span>    // const {id} = req.body;</span><span> // 从请求体中获取数据</span></span>
<span class="line"><span>    const id = req.params.id;</span></span>
<span class="line"><span>    const delsql = \`DELETE FROM \${tableName} WHERE dept_id = ?\`;</span></span>
<span class="line"><span>    delApi(delsql,[id],res);</span></span>
<span class="line"><span>});</span></span></code></pre></div><p>测试一下，增删改查没问题，欧克！👌</p><p>到这里我们层级的正常功能就完成了，接下来就可以进行优化了</p>`,27)]))}const b=a(t,[["render",l]]);export{h as __pageData,b as default};
