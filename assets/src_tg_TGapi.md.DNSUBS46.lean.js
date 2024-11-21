import{d as x,s as E,y as A,o as i,c as a,j as s,F as d,E as g,e as b,t as n,p as D,l as f,_ as T,I as C,a4 as I,a as P}from"./chunks/framework.DvHWMJgD.js";const y=h=>(D("data-v-04ae935b"),h=h(),f(),h),N={class:"page-tgapi"},L={key:0,class:"leftMenu"},q={class:"card",style:{"margin-top":"20px"}},S=["onClick"],j=["href"],M=["id"],G=["id"],J={class:"cardh4"},V=y(()=>s("td",null,"接口地址",-1)),z=y(()=>s("td",null,"请求方式",-1)),w=["id"],O=y(()=>s("div",{class:"circle"},null,-1)),H=y(()=>s("div",{class:"rect"},null,-1)),$=x({__name:"TGapi",props:{dataMsg:{type:Object,required:!0}},setup(h){const c=h;E(),E("");const e=E({}),o=E(""),m=p=>{p.forEach(t=>{t.isIntersecting&&(o.value=t.target.id,console.log(o.value,"currentId"))})};A(()=>{e.value=c.dataMsg;const p=new IntersectionObserver(m,{root:null,rootMargin:"0px",threshold:.5});document.querySelectorAll(".section").forEach(t=>{p.observe(t)})});const v=p=>{const t=document.getElementById(p);t&&t.scrollIntoView({behavior:"smooth"})};return(p,t)=>(i(),a("div",null,[s("div",N,[o.value==e.value.moduleId?(i(),a("div",L,[s("div",q,[(i(!0),a(d,null,g(e.value.moduleList,(l,F)=>(i(),a("div",{key:F,onClick:r=>v(l.id)},[s("div",{class:"cardh2",href:"#"+l.id},n(l.name),9,j)],8,S))),128))])])):b("",!0),s("div",{class:"rightMain section",id:e.value.moduleId},[(i(!0),a(d,null,g(e.value.moduleList,(l,F)=>(i(),a("div",{class:"rMainli",key:F,id:l.id},[s("div",J,n(l.name),1),s("table",null,[s("tbody",null,[s("tr",null,[V,s("td",null,n(l.url),1)]),s("tr",null,[z,s("td",null,n(l.method),1)])])]),(i(!0),a(d,null,g(l.paramsList,(r,_)=>(i(),a("div",{key:_},[s("div",{class:"cardh5",id:r.id},n(r.name),9,w),s("table",null,[s("thead",null,[s("tr",null,[(i(!0),a(d,null,g(r.headlist,(k,u)=>(i(),a("th",{key:u},n(k),1))),128))])]),s("tbody",null,[(i(!0),a(d,null,g(r.params,(k,u)=>(i(),a("tr",{key:u},[s("td",null,n(k.name),1),s("td",null,n(k.value),1),s("td",null,n(k.data),1),s("td",null,n(k.remark),1)]))),128))])])]))),128)),s("div",null,[s("pre",null,n(l.demoJson),1)])],8,G))),128))],8,M),O,H])]))}}),B=T($,[["__scopeId","data-v-04ae935b"]]),R=I("",11),U=s("h2",{id:"用户模块",tabindex:"-1"},[P("用户模块 "),s("a",{class:"header-anchor",href:"#用户模块","aria-label":'Permalink to "用户模块"'},"​")],-1),W=JSON.parse('{"title":"API Reference","description":"","frontmatter":{"outline":"deep","title":"API Reference","sidebar":false,"page":true,"footer":false},"headers":[],"relativePath":"src/tg/TGapi.md","filePath":"src/tg/TGapi.md"}'),K={name:"src/tg/TGapi.md"},X=Object.assign(K,{setup(h){const c=E({moduleId:"moduleLogin",moduleNmae:"登录注册",moduleList:[{id:"registerPost",parentName:"注册",name:"注册",url:"/api/register",method:"get",paramsList:[{name:"注册参数",params:[{name:"账号",value:"username",data:"tiangong",remark:"账号必传"},{name:"密码",value:"password",data:"xxxxxx",remark:"密码必传"}],headlist:["参数名","参数值","参数案例","描述"]}],demoJson:`
            let api='http://localhost:8888/api/register';
            let params={
                username:'tiangong', //账号必填项
                password:'xxxxxx',// 密码必填项
                code,
                uuid,
            };
            axios.post(api,params).then(res => {
                if (res.status == 200) {
                    console.log(res,'res');
                }
            })`},{id:"loginPost",parentName:"登录",name:"登录",url:"/api/login",method:"post",paramsList:[{name:"提交参数",params:[{name:"姓名",value:"name",data:"",remark:"必填项"},{name:"年龄",value:"age",data:"",remark:""},{name:"性别",value:"sex",data:"",remark:"1男 2女 必填项"}],headlist:["参数名","参数值","参数案例","描述"]}],demoJson:`
            axios.post('http://localhost:8888/api/login',
            {
                username:'tiangong', //账号必填项
                password:'xxxxxx',// 密码必填项
            }).then(res => {
                if (res.status == 200) {
                console.log(res,'res');
                }
            })`}]}),e=E({moduleId:"moduleUser",moduleNmae:"用户模块",moduleList:[{id:"userGet",parentName:"用户",name:"查询用户",url:"/api/user",method:"get",paramsList:[{name:"请求参数",params:[{name:"页数",value:"pageNum",data:"1",remark:""},{name:"条数",value:"pageSize",data:"10",remark:""},{name:"姓名",value:"name",data:"",remark:""},{name:"年龄",value:"age",data:"",remark:""},{name:"性别",value:"sex",data:"",remark:"1男 2女"}],headlist:["参数名","参数值","参数案例","描述"]}],demoJson:`
            let api='http://localhost:8888/api/user';
            let params={
                pageNum, // 页数 
                pageSize,// 条数
                name, // 姓名 
                age, // 年龄
                sex, // 性别 
            };
            axios.get(api,params).then(res => {
                if (res.status == 200) {
                    console.log(res,'res');
                }
            })`},{id:"userPost",parentName:"增加用户",name:"增加用户",url:"/api/user",method:"post",paramsList:[{name:"提交参数",params:[{name:"姓名",value:"name",data:"",remark:"必填项"},{name:"年龄",value:"age",data:"",remark:""},{name:"性别",value:"sex",data:"",remark:"1男 2女 必填项"}],headlist:["参数名","参数值","参数案例","描述"]}],demoJson:`
            axios.post('http://localhost:8888/api/user',
            {
                name: '名字', // 必填项
                age: '年龄', // 必填项
                sex:1, // 下拉选择-必填项
            }).then(res => {
                if (res.status == 200) {
                console.log(res,'res');
                }
            })`},{id:"userPut",parentName:"修改用户",name:"修改用户",url:"/api/user",method:"put",paramsList:[{name:"提交参数",params:[{name:"ID",value:"id",data:"0",remark:"必填项"},{name:"姓名",value:"name",data:"",remark:"必填项"},{name:"年龄",value:"age",data:"",remark:""},{name:"性别",value:"sex",data:"",remark:"1男 2女 必填项"}],headlist:["参数名","参数值","参数案例","描述"]}],demoJson:`
            axios.put('http://localhost:8888/api/user',
            {
                id:'0', // id 必填项
                name: '名字', // 必填项
                age: '年龄', // 必填项
                sex:1, // 下拉选择-必填项
            }).then(res => {
                if (res.status == 200) {
                console.log(res,'res');
                }
            })`},{id:"userDelete",parentName:"删除用户",name:"删除用户",url:"/api/user",method:"delete",paramsList:[{name:"提交参数",params:[{name:"ID",value:"id",data:"0",remark:"必填项,删除的用户ID"},{name:"姓名",value:"name",data:"",remark:"必填项"},{name:"年龄",value:"age",data:"",remark:""},{name:"性别",value:"sex",data:"",remark:"1男 2女 必填项"}],headlist:["参数名","参数值","参数案例","描述"]}],demoJson:`
            axios.delete('http://localhost:8888/api/user/' + id).then(res => {
                if (res.status == 200) {
                console.log(res,'res');
                }
            })`}]});return(o,m)=>(i(),a("div",null,[R,C(B,{dataMsg:c.value},null,8,["dataMsg"]),U,C(B,{dataMsg:e.value},null,8,["dataMsg"])]))}});export{W as __pageData,X as default};
