## Vanlement使用指南

为了适应公司新版UI规范，也为了技术层面的灵活性，所以前端内部基于`element-ui`版本**2.15.1**维护了一套至gitlab。

同时为了开发人员最小化改动，所以发包继续沿用`element-ui`包名，但版本号采用**10**系列

为了顺利从`element-ui`迁入使用内部`vanlement`，故书写此文档。
（注：此文档只适用于微前端项目）





### 修改main项目版本号

修改`main`项目中**package.json**文件中的`element-ui`版本号

此处用非正式版本号举例说明，请使用正式版本号上线。

``` json
 // 修改此行
// "element-ui": "^2.13.1",

// 采用固定版本号的方式
"element-ui": "10.0.1-alpha.10",
```



### 修改cdn地址

为了版本号统一管理，微前端采用了**main**项目统一使用cdn管理依赖库。



**vanlement**项目在发包时会同步发布至cdn上。

需要将**main**项目中的`external`文件修改为正确地址。



路径为根目录下的：`vue.externals.js`



修改前

```js
{
        package: 'element-ui',
        root: 'ELEMENT',
        version: '2.13.2',
        css: 'lib/theme-chalk/index.css',
        js: 'lib/index.js',
        jsMin: ''
},
```



修改后

```js
{
        package: '@vantop/vantop-ui',
        root: 'VantopUI',
        ossPkg: 'vantop-ui', // 新添此行
        version: '1.0.108-alpha.19',
        js: 'index.umd.min.js',
        css: 'index.css',
        domain: NEXTOP_CDN_DOMAIN // domain为已有变量
},
```



同时将`getCdn`方法中的**css**部分补全

```js
let css = externals
.filter(item => item.css)
.map(item =>
     getFileUrl(
      item.package,
      item.version,
      item.css,
      item.domain,
      item.ossPkg
));
return {
  js,
  css
};
```





到此，再同步一下子应用的`package.json`的**element-ui**的版本号便可



有问题可联系**Frank**



**vxe-table**同此步骤一致
