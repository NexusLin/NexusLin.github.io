import{d as A,p as r,v as x,o as a,c as n,j as s,F as g,C as o,t as l,e as b,_ as D,ag as f,G as m,a as _}from"./chunks/framework.Bft4-MjQ.js";const T={class:"page-tgapi"},P={key:0,class:"leftMenu"},I={class:"card",style:{"margin-top":"20px"}},N=["onClick"],q=["href"],L={class:"circle"},j=["id"],S=["id"],G={class:"cardh4"},M=["id"],J=A({__name:"TGapi",props:{dataMsg:{type:Object,required:!0},name:{type:String,required:!0}},setup(y){const c=y;r(),r("");const t=r({}),h=r(""),p=k=>{k.forEach(i=>{i.isIntersecting&&(h.value=i.target.id,console.log(h.value,"currentId"))})};x(()=>{t.value=c.dataMsg;const k=new IntersectionObserver(p,{root:null,rootMargin:"0px",threshold:.5});document.querySelectorAll(".section").forEach(i=>{k.observe(i)})});const B=k=>{const i=document.getElementById(k);i&&i.scrollIntoView({behavior:"smooth"})};return(k,i)=>(a(),n("div",null,[s("div",T,[h.value==t.value.moduleId?(a(),n("div",P,[s("div",I,[(a(!0),n(g,null,o(t.value.moduleList,(e,F)=>(a(),n("div",{key:F,onClick:d=>B(e.id)},[s("div",{class:"cardh2",href:"#"+e.id},l(e.name),9,q)],8,N))),128))]),s("div",L,l(y.name),1),i[0]||(i[0]=s("div",{class:"rect"},null,-1))])):b("",!0),s("div",{class:"rightMain section",id:t.value.moduleId},[(a(!0),n(g,null,o(t.value.moduleList,(e,F)=>(a(),n("div",{class:"rMainli",key:F,id:e.id},[s("div",G,l(e.name),1),s("table",null,[s("tbody",null,[s("tr",null,[i[1]||(i[1]=s("td",null,"接口地址",-1)),s("td",null,l(e.url),1)]),s("tr",null,[i[2]||(i[2]=s("td",null,"请求方式",-1)),s("td",null,l(e.method),1)])])]),(a(!0),n(g,null,o(e.paramsList,(d,v)=>(a(),n("div",{key:v},[s("div",{class:"cardh5",id:d.id},l(d.name),9,M),s("table",null,[s("thead",null,[s("tr",null,[(a(!0),n(g,null,o(d.headlist,(E,u)=>(a(),n("th",{key:u},l(E),1))),128))])]),s("tbody",null,[(a(!0),n(g,null,o(d.params,(E,u)=>(a(),n("tr",{key:u},[s("td",null,l(E.name),1),s("td",null,l(E.value),1),s("td",null,l(E.data),1),s("td",null,l(E.remark),1)]))),128))])])]))),128)),s("div",null,[s("pre",null,l(e.demoJson),1)])],8,S))),128))],8,j)])]))}}),C=D(J,[["__scopeId","data-v-93a8f5ef"]]),O=JSON.parse('{"title":"API Reference","description":"","frontmatter":{"outline":"deep","title":"API Reference","sidebar":false,"page":true,"footer":false},"headers":[],"relativePath":"src/tg/TGapiBei.md","filePath":"src/tg/TGapiBei.md"}'),V={name:"src/tg/TGapiBei.md"},w=Object.assign(V,{setup(y){const c=r({moduleId:"moduleLogin",moduleNmae:"登录注册",moduleList:[{id:"registerPost",parentName:"注册",name:"注册",url:"/api/register",method:"get",paramsList:[{name:"注册参数",params:[{name:"账号",value:"username",data:"tiangong",remark:"账号必传"},{name:"密码",value:"password",data:"xxxxxx",remark:"密码必传"}],headlist:["参数名","参数值","参数案例","描述"]}],demoJson:`
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
            })`}]}),t=r({moduleId:"moduleUser",moduleNmae:"用户模块",moduleList:[{id:"userGet",parentName:"用户",name:"查询用户",url:"/api/user",method:"get",paramsList:[{name:"请求参数",params:[{name:"页数",value:"pageNum",data:"1",remark:""},{name:"条数",value:"pageSize",data:"10",remark:""},{name:"姓名",value:"name",data:"",remark:""},{name:"年龄",value:"age",data:"",remark:""},{name:"性别",value:"sex",data:"",remark:"1男 2女"}],headlist:["参数名","参数值","参数案例","描述"]}],demoJson:`
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
            })`}]});return(h,p)=>(a(),n("div",null,[p[0]||(p[0]=f("",11)),m(C,{dataMsg:c.value,name:h.登录},null,8,["dataMsg","name"]),p[1]||(p[1]=s("h2",{id:"用户模块",tabindex:"-1"},[_("用户模块 "),s("a",{class:"header-anchor",href:"#用户模块","aria-label":'Permalink to "用户模块"'},"​")],-1)),m(C,{dataMsg:t.value,name:h.用户},null,8,["dataMsg","name"])]))}});export{O as __pageData,w as default};
