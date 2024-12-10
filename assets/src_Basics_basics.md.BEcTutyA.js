import{_ as s,c as t,o,j as e}from"./chunks/framework.DvHWMJgD.js";const D=JSON.parse('{"title":"","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"src/Basics/basics.md","filePath":"src/Basics/basics.md"}'),n={name:"src/Basics/basics.md"},a=e("p",null,"this.loadFileData(); // 组件挂载后加载文件数据",-1),r=e("p",null,"async loadFileData() { console.log('读取文件并解析数据'); try { const response = await fetch('/rppgurl.txt'); // 请求 /public/rppgurl.txt 文件 if (!response.ok) { throw new Error('文件读取失败'); } console.log(response,'response'); const data = await response.text(); // 获取文件内容 const lines = data.split('\\n'); // 按行分割文件内容",-1),l=e("pre",null,[e("code",null,`    // 处理每一行数据
    const peopleData = lines.map(line => {
      const [key, value] = line.split(',').map(item => item.trim()); 
      return {
        key,
        value,
      };
    });
    console.log(peopleData,'peopleData');
    // this.people = peopleData; // 将解析后的数据存储到 people 中
  } catch (error) {
    console.error('读取文件出错:', error);
  }
},
`)],-1),c=[a,r,l];function p(i,d,_,u,m,h){return o(),t("div",null,c)}const g=s(n,[["render",p]]);export{D as __pageData,g as default};
