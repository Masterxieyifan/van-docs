## 开发流程规范

### 初始化步骤（第一次开发时的操作）

**1、安装git-flow ([安装教程](https://github.com/petervanderdoes/gitflow-avh/wiki#installing-git-flow))**

**2、执行git flow init 命令进行初始化操作**

```shell
$ git flow init
Initialized empty Git repository in /Users/tobi/acme-website/.git/
Branch name for production releases: [master]
Branch name for "next release" development: [develop]

How to name your supporting branch prefixes?
Feature branches? [feature/]
Release branches? [release/]
Hotfix branches? [hotfix/]
```

所有配置项都使用默认选项，直接回车即可。



### 开发步骤（每次开发新需求时的操作）

**1、切换到develop分支（所有需求都基于develop分支进行开发）**

**2、执行 git flow feature start ${date}-${yourName}-${businessUnit} 命令来创建 feature分支。**

``` shell
$ git flow feature start 20210222-cyc-develop-markdown
Switched to a new branch '20210222-cyc-develop-markdown'

Summary of actions:
- A new branch '20210222-cyc-develop-markdown' was created, based on 'develop'
- You are now on branch '20210222-cyc-develop-markdown'
```

分支命名规范：时间-开发者-功能名称（例：20210222-cyc-develop-markdown）

**3、进行需求的开发**

各项目具体开发流程见文档：[vantop-ui](http://vantop-fe.inner.nextop.cc/development/ui.html)、[vantop-util](http://vantop-fe.inner.nextop.cc/development/util.html)


**4、开发完成，使用cz提交代码，规范commit信息。文档项目(gandalf)无须使用cz，可直接使用 git commit 提交代码**

```shell
$ git add .
$ npm run commit
npm run git-cz
cz-cli@4.2.3, cz-customizable@6.3.0

All lines except first will be wrapped after 100 characters.
? 请选择提交类型(Select the type of change that you're committing): 
? 选择影响范围(Denote the SCOPE of this change.): 
? 请写下修改摘要(Write a SHORT, IMPERATIVE tense description of the change):
? 请写下修改详情，使用"|"进行换行(Provide a LONGER description of the change (optional). Use "|" to break new line):
? 写下所有不兼容修改(可选)(List any BREAKING CHANGES (optional):
? 修复的蝉道bug号(可选)(List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:)

###--------------------------------------------------------###
feat(vantop-ui): add test example
###--------------------------------------------------------###

? 确定提交？(Are you sure you want to proceed with the commit above?) Yes
husky > pre-commit (node v14.15.1)
⚠ Some of your tasks use `git add` command. Please remove it from the config since all modifications made by tasks will be automatically added to the git commit index.

✔ Preparing...
✔ Running tasks...
✔ Applying modifications...
✔ Cleaning up...
husky > commit-msg (node v14.15.1)
[develop 7909eb8] feat(vantop-ui): add test example
 1 file changed, 1 insertion(+)
✨  Done in 30.79s.

$ git push
```

执行npm run commit命令后务必选择正确的提交类型、影响范围，和填写修改摘要，以保证changelog的正确生成。

**5、发起 pull request 合并审批**

a) 打开GitLab 项目地址(例如：http://git.nextop.cc/FE-Lab/vantop-ui)

b) 点击左侧菜单栏Merge Requests 选项

c) 点击 New merge request 按钮，开始创建pr

d) 左侧 Source branch 选择你的开发分支，右侧 Target branch 选择 develop 分支，选择好后点击 Compare branches and continue 按钮进入下一步的分支比较页面。

e) 填写好 pr 的 Title 和 Description 内容，Assignee选项选择 @蔡远程 或者 @吴云贺，确认提交信息无误后点击 Submit merge request 按钮提交pr。

d) 复制创建好的 pr 网页地址发送到 Vantop FE Lab 钉钉群组，通知蔡远程、吴云贺、肖名骠、曾令涌和需求有关人进行代码审核，代码审核通过后，项目维护者进行合并 pr 操作。

**6、版本发布**

项目维护者进行版本发布工作