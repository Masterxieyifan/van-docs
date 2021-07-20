## 工具库开发文档

1. 找到@肖名骠开通vantop项目git权限。

2. 拉取vantop代码。

   `git clone http://git.nextop.cc/FE-Lab/vantop-util.git `。

3. 切换到develop开发分支。

   `git checkout develop`

4. 安装依赖包。

   `npm install`

5. 开始进行开发。

6. 工具类开发好之后在test目录下编写单元测试。

7. 执行`npm run test`进行测试，测试后编写文档。

8. 请先仔细查看[vuepress教程](https://vuepress.vuejs.org/zh/)，随后切换到vantop-docs项目编写文档（工具库对应utils目录）。

9. `npm run serve`本地启动文档中心服务器。

10. `npm run build`文档构建测试。

11. 提交代码。

12. 发起pr审核，并通知维护者进行发布。
