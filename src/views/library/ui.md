## UI库开发文档

1. 找到@肖名骠开通vantop项目git权限。

2. 拉取vantop代码。

   `git clone http://git.nextop.cc/FE-Lab/vantop-ui.git `。

3. 切换到develop开发分支。

   `git checkout develop`

4. 安装依赖包。

   `npm install`

5. 开始进行开发。

6. 组件编写好后请进入example文件夹写测试用例。

7. 执行`npm run serve`运行测试服务器。测试通过后编写组件文档。

8. 请先仔细查看[vuepress教程](https://vuepress.vuejs.org/zh/)，随后切换到vantop-docs项目编写文档（ui库对应componentss目录）。

9. `npm run serve`本地启动文档中心服务器。

10. `npm run build`文档构建测试。

11. 提交代码。

12. 发起pr审核，并通知维护者进行发布。
