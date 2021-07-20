### 前言
为了git工作流分支能够更加的清晰规范，减少项目代码风险！
在采用 Git Flow 工作流的项目中，代码的中央仓库会一直存在以下三个长期分支：develop，master，release分支

Go Vantop FE!

**名词解释**
- master: 线上环境稳定的发布分支代码目前上线时所用的分支，也就是面向用户的代码
注意事项：不可以推代码至此分支!!!

- develop: 开发阶段分支维护稳定代码，不允许在develop分支进行开发新特性，公共的内容且不属于新特性的应当在develop分支进行开发

- release: 会有多个以release命令的tag或分支存在
保留了线上环境一个完整的功能/迭代版本分支代码

- hotfix:  基于master分支创建一个hotfix分支，用于紧急修复线上出现的bug ；分支命名示例：`hotfix/20210521-fix-router-404`
- Tag: 项目上线流程中规定正式环境和预发环境需要使用Tag，且上线正式环境的Tag必须在预发布环境发布过；前端的Tag命名规范：`version—web-module Name-date-number`  以财务模块Tag为例：`v0.0.5-web-finance-20210521-01`
- 项目负责人： 每个项目会指派一名项目负责人，负责该项目的分支合并，进度掌控等
    - 各个项目 Maintainer用户（拥有master、develop分支的push以及merge操作权限 ）
        - [nextop-web-logistics](http://git.nextop.cc/nextop-web-micro/nextop-web-logistics)：远程
        - [nextop-web-wearhouse](http://git.nextop.cc/nextop-web-micro/nextop-web-warehouse)：建中
        - [nextop-web-finance](http://git.nextop.cc/nextop-web-micro/nextop-web-finance)：易鑫、令涌
        - [nextop-web-system](http://git.nextop.cc/nextop-web-micro/nextop-web-system)：李朝政
        - [nextop-web-customer](http://git.nextop.cc/nextop-web-micro/nextop-web-customer)：石鑫
        - [nextop-web-sales](http://git.nextop.cc/nextop-web-micro/nextop-web-sales)： 谢勇、石鑫
        - [nextop-web-goods](http://git.nextop.cc/nextop-web-micro/nextop-web-goods)：谭传军
        - [nextop-web-purchase](http://git.nextop.cc/nextop-web-micro/nextop-web-purchase)：谭传军
        - [nextop-web-demand](http://git.nextop.cc/nextop-web-micro/nextop-web-demand)：谭传军
        - [nextop-web-inreport](http://git.nextop.cc/nextop-web-micro/nextop-web-inreport)： 令涌
        - [nextop-web-main、nextop-web-login](http://git.nextop.cc/nextop-web-micro/nextop-web-main)： 红东 （cdn版本号修改统一由曾令涌负责）
        - [nextop包](http://git.nextop.cc/nextop-web-micro/nextop)： 红东
        - [UI、utils库](http://git.nextop.cc/FE-Lab/vantop-ui)： 远程
        - [nextop-static](http://git.nextop.cc/nextop-web-micro/nextop-static): 谭传军
        - [nextop-web-operation](http://git.nextop.cc/nextop-web/nextop-web-operation): 肖名骠
        - [nextop-web-development](http://git.nextop.cc/nextop-web/nextop-web-development)（开发者中心系统）： 李朝政
        - [nextop-web-modem（数据机项目）](http://git.nextop.cc/nextop-web/nextop-web-modem)： 曾令涌 
        - [vanlement （新版UI组件库）](http://git.nextop.cc/FE-Lab/vanlement)：吴云贺
        - [vantop-monitor (监控系统)](http://git.nextop.cc/FE-Lab/vantop-monitor): 谭传军

### 开发推送流程
 拿到需求后询问项目负责人是否可以从该项目的develop分支拉取代码成立feature分支
 拉取代码后创建`git flow feature start {your-branch-name}`属于自己的开发分支（以下简称开发分支）
 
 分支命名规范：feature/日期-Your Name-功能简写 `feature/20200728-frank-test`
完成新的功能开发后，只推送开发分支至远程，每次也只需要push开发分支即可
> 注意，push至远程时，需要merge一次develop分支至开发分支，如果觉得频率太过频繁，可以换成每日两次（上班后和下班前）

但在每次提测前时，必须先merge一次develop分支（这样保证了开发分支和develop分支是同步的）

已经提测的且准备上线预发布环境不允许再次merge develop分支(切记需要注意！！！！)

-   合并代码流程及时间
> 因项目是多人协同开发，为保证代码的完整性和线上的统一性，应当在上线完成的当天完成merge至master和develop分支操作。
合并步骤： feature --> master --> develop

**Q&A**
- 分支合并时出现了冲突怎么办？
按照提示解决，如果不是属于自己的文件，找到该文件编写的同学，然后寻求他的帮助去解决。
- 忘记合并develop就推送了怎么办?
补上啊，同学。

- 出现看不懂的问题怎么办？
先自己百度/谷歌答案，如果再解决不了，寻求项目负责人的帮助。

- SaaS系统需要在各个子应用项目中修复一些全局性bug需要怎么操作？
   - 找到各个子应用相对应的负责人从master分支拉出相对应的`hotfix`分支进行修复；
